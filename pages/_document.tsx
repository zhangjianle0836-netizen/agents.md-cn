import { Html, Head, Main, NextScript } from "next/document";
import { getLocale } from "@/utils/i18n";

export default function Document() {
  const locale = getLocale();
  const htmlLang = locale === "zh-CN" ? "zh-CN" : "en";
  
  return (
    <Html lang={htmlLang}>
      <Head>
        <link
          rel="icon"
          href="/favicon-light.png"
          media="(prefers-color-scheme: light)"
        />
        <link
          rel="icon"
          href="/favicon-dark.png"
          media="(prefers-color-scheme: dark)"
        />
      </Head>
      <body className="antialiased">
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
