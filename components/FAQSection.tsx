import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import { useTranslation } from "@/utils/i18n";

interface FAQItem {
  question: string;
  answer: React.ReactNode;
}

export default function FAQ() {
  const { t } = useTranslation();
  const faqItems = t.faq.items;

  return (
    <Section
      id="faq"
      title={t.faq.title}
      className="py-20"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-8 max-w-4xl mx-auto">
        {faqItems.map((item, index) => (
          <div key={index}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {item.question}
            </h3>
            <div className="text-gray-600 dark:text-gray-400 leading-relaxed">
              {item.answer}
              {item.code && (
                <div className="w-full flex justify-center mt-2">
                  <CodeExample
                    code={item.code}
                    compact
                    heightClass="min-h-[48px]"
                    centerVertically
                  />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
