import Section from "@/components/Section";
import { useTranslation } from "@/utils/i18n";

const AboutSection = () => {
  const { t } = useTranslation();
  
  return (
    <Section title={t.about.title} className="pb-0" center maxWidthClass="max-w-3xl">
      <p className="max-w-3xl">
        {t.about.emergence.split(', including')[0]}
        {', including '}  
        <a href="https://openai.com/codex/" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">OpenAI Codex</a>,{" "}
        <a href="https://ampcode.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Amp</a>,{" "}
        <a href="https://jules.google" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Jules from Google</a>,{" "}
        <a href="https://cursor.com" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Cursor</a>, and{" "}
        <a href="https://factory.ai" className="underline hover:no-underline" target="_blank" rel="noopener noreferrer">Factory</a>.
      </p>

      <p className="max-w-3xl mt-4">
        {t.about.commitment}
      </p>

      <p className="max-w-3xl mt-4">
        {t.about.stewardship.split(' under')[0]}{' '}
        <a href="https://aaif.io" className="underline hover:no-underline">
          Agentic AI Foundation
        </a>{' '}
        under the Linux Foundation.{" "}
        <a
          href="https://openai.com/index/agentic-ai-foundation/"
          className="underline hover:no-underline"
        >
          {t.about.learnMore}
        </a>
      </p>

    </Section>
  );
};

export default AboutSection;
