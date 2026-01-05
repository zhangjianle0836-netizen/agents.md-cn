import Section from "@/components/Section";
import React from "react";
import ClipboardIcon from "@/components/icons/ClipboardIcon";
import UserIcon from "@/components/icons/UserIcon";
import LinkIcon from "@/components/icons/LinkIcon";
import { useTranslation } from "@/utils/i18n";

export default function WhySection() {
  const { t } = useTranslation();
  
  return (
    <Section
      id="why"
      title={t.why.title}
      className="pt-24 pb-12"
      center
      maxWidthClass="max-w-3xl"
    >
      <div className="space-y-4">
        <p className="mb-4">
          {t.why.readmeForHumans}
        </p>
        <p className="mb-4">
          {t.why.agentsComplement}
        </p>
        <p className="mb-4">{t.why.intentionalSeparation}</p>
        <div className="flex flex-col gap-4">
          <div className="flex items-center gap-3">
            <ClipboardIcon />
            <p>
              <span className="font-semibold block">
                {t.why.clearPlace}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <UserIcon />
            <p>
              <span className="font-semibold block">
                {t.why.keepReadmeConcise}
              </span>
            </p>
          </div>

          <div className="flex items-center gap-3">
            <LinkIcon />
            <p>
              <span className="font-semibold block">
                {t.why.preciseGuidance}
              </span>
            </p>
          </div>
        </div>
        <p>
          {t.why.openFormat}
        </p>
      </div>
    </Section>
  );
}
