import React from "react";
import Section from "@/components/Section";
import CodeExample from "@/components/CodeExample";
import ExampleListSection from "@/components/ExampleListSection";
import { useTranslation } from "@/utils/i18n";

interface ExamplesSectionProps {
  contributorsByRepo: Record<string, { avatars: string[]; total: number }>;
}

export default function ExamplesSection({ contributorsByRepo }: ExamplesSectionProps) {
  const { t } = useTranslation();
  
  return (
    <Section id="examples" title={t.examples.title} className="py-12" center>
      {/* Wide code example */}
      <div className="mb-4">
        <CodeExample compact />
      </div>

      {/* Repo cards */}
      <ExampleListSection contributorsByRepo={contributorsByRepo} standalone />
    </Section>
  );
}
