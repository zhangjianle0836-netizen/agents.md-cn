import Section from "@/components/Section";
import React from "react";
import { useTranslation } from "@/utils/i18n";

export default function HowToUseSection() {
  const { t } = useTranslation();
  const steps = t.howToUse.steps;

  return (
    <Section
      title={t.howToUse.title}
      className="py-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-6 text-left">
        {steps.map((s, idx) => (
          <div key={idx}>
            <h3 className="text-xl font-semibold text-gray-900 dark:text-white mb-2">
              {idx + 1}. {s.title}
            </h3>
            <div className="text-gray-700 dark:text-gray-300">
              {s.body}
              {s.list && (
                <ul className="list-disc list-inside ml-4 space-y-1 mt-2">
                  {s.list.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}
