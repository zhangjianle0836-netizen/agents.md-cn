"use client";

import React, { useState, useEffect } from "react";
import { getServerLocale } from "@/utils/i18n";

export default function LanguageSwitcher() {
  // 首次渲染使用服务端默认值，避免水合错误
  const serverLocale = getServerLocale();
  const [locale, setLocale] = useState<"zh-CN" | "en">(serverLocale);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // 读取 localStorage 中的语言设置
    const savedLocale = localStorage.getItem("locale") as "zh-CN" | "en" | null;
    if (savedLocale) {
      setLocale(savedLocale);
    } else {
      // 保存服务端默认值
      localStorage.setItem("locale", serverLocale);
    }
  }, [serverLocale]);

  const switchLanguage = () => {
    const newLocale = locale === "zh-CN" ? "en" : "zh-CN";
    setLocale(newLocale);
    localStorage.setItem("locale", newLocale);
    // 刷新页面以应用新语言
    window.location.reload();
  };

  // 避免服务端渲染不匹配
  if (!mounted) {
    return (
      <div className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg text-sm font-medium text-gray-700 dark:text-gray-200">
        <svg
          className="w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
          />
        </svg>
        <span>{serverLocale === "zh-CN" ? "English" : "中文"}</span>
      </div>
    );
  }

  return (
    <button
      onClick={switchLanguage}
      className="fixed top-6 right-6 z-50 flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl transition-all duration-200 text-sm font-medium text-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-700"
      aria-label="切换语言"
    >
      <svg
        className="w-4 h-4"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M3 5h12M9 3v2m1.048 9.5A18.022 18.022 0 016.412 9m6.088 9h7M11 21l5-10 5 10M12.751 5C11.783 10.77 8.07 15.61 3 18.129"
        />
      </svg>
      <span>{locale === "zh-CN" ? "English" : "中文"}</span>
    </button>
  );
}
