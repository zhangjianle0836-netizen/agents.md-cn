import { en } from "@/locales/en";
import { zhCN, Translation } from "@/locales/zh-CN";
import { useState, useEffect } from "react";

export type Locale = "en" | "zh-CN";

const translations: Record<Locale, Translation> = {
  en,
  "zh-CN": zhCN,
};

// 获取服务端语言（仅环境变量）
export function getServerLocale(): Locale {
  const locale = process.env.NEXT_PUBLIC_LOCALE;
  return locale === "zh-CN" ? "zh-CN" : "en";
}

// 获取客户端语言（优先 localStorage）
export function getClientLocale(): Locale {
  if (typeof window === "undefined") {
    return getServerLocale();
  }
  
  const savedLocale = localStorage.getItem("locale") as Locale | null;
  if (savedLocale) {
    return savedLocale;
  }
  
  // 首次访问，使用服务端默认值（避免水合错误）
  const serverLocale = getServerLocale();
  localStorage.setItem("locale", serverLocale);
  return serverLocale;
}

export function getLocale(): Locale {
  // 服务端：使用环境变量
  if (typeof window === "undefined") {
    return getServerLocale();
  }
  
  // 客户端：使用 localStorage
  return getClientLocale();
}

// 修复水合错误：使用 React Hook 确保客户端一致性
export function useTranslation() {
  const serverLocale = getServerLocale();
  const [locale, setLocale] = useState<Locale>(serverLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 客户端挂载后再读取 localStorage
    const clientLocale = getClientLocale();
    if (clientLocale !== serverLocale) {
      setLocale(clientLocale);
    }
  }, [serverLocale]);

  // 服务端和客户端首次渲染使用相同的语言（服务端默认值）
  const effectiveLocale = mounted ? locale : serverLocale;
  const t = translations[effectiveLocale];
  
  return { t, locale: effectiveLocale };
}
