import { motion } from "motion/react";
import { Building2, HeartHandshake, UserCircle } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import LanguageToggle from "./components/LanguageToggle";
import AnimatedSection from "./components/AnimatedSection";
import PortalSection from "./components/PortalSection";

const LINKS = {
  privateOffice: "https://www.orchestraprivateoffice.nl",
  charityOffice: "https://www.orchestracharityoffice.nl",
  myOrchestra: "https://mijn.orchestrabeheer.nl",
};

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col bg-white relative overflow-hidden">
      {/* Background gradient accents */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-200 h-150 bg-gold-200/30 rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-100 h-100 bg-navy-100/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-0 w-100 h-100 bg-navy-100/20 rounded-full blur-3xl" />
      </div>

      {/* Decorative background SVGs — z-20 so they render over header/footer */}
      <div className="absolute inset-0 z-20 pointer-events-none overflow-hidden" aria-hidden="true">
        {/* Top-left arc */}
        <svg className="absolute -top-20 -left-20 w-80 h-80 text-warm-gray-400/15" viewBox="0 0 320 320" fill="none">
          <circle cx="160" cy="160" r="120" stroke="currentColor" strokeWidth="1" />
          <circle cx="160" cy="160" r="155" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" />
        </svg>

        {/* Bottom-right arc */}
        <svg className="absolute -bottom-24 -right-24 w-96 h-96 text-warm-gray-400/15" viewBox="0 0 384 384" fill="none">
          <circle cx="192" cy="192" r="140" stroke="currentColor" strokeWidth="1" />
          <circle cx="192" cy="192" r="185" stroke="currentColor" strokeWidth="0.75" strokeDasharray="4 6" />
        </svg>

        {/* Center-right small circles */}
        <svg className="absolute top-1/3 -right-8 w-48 h-48 text-warm-gray-300/25" viewBox="0 0 192 192" fill="none">
          <circle cx="96" cy="96" r="60" stroke="currentColor" strokeWidth="1" />
          <circle cx="96" cy="96" r="88" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        {/* Top-right horizontal lines */}
        <svg className="absolute top-12 right-1/4 w-40 h-40 text-warm-gray-400/12" viewBox="0 0 160 160" fill="none">
          <line x1="0" y1="40" x2="160" y2="40" stroke="currentColor" strokeWidth="0.75" />
          <line x1="0" y1="80" x2="160" y2="80" stroke="currentColor" strokeWidth="0.75" />
          <line x1="0" y1="120" x2="160" y2="120" stroke="currentColor" strokeWidth="0.75" />
        </svg>

        {/* Bottom-left diamond */}
        <svg className="absolute bottom-1/4 left-12 w-24 h-24 text-warm-gray-300/20" viewBox="0 0 96 96" fill="none">
          <rect x="24" y="24" width="48" height="48" rx="2" stroke="currentColor" strokeWidth="1" transform="rotate(45 48 48)" />
        </svg>

        {/* Dot grid - top center */}
        <svg className="absolute top-16 left-1/3 w-32 h-20 text-warm-gray-400/20" viewBox="0 0 128 80" fill="currentColor">
          {[0, 1, 2, 3, 4].map((col) =>
            [0, 1, 2].map((row) => (
              <circle key={`${col}-${row}`} cx={12 + col * 26} cy={12 + row * 26} r="1.5" />
            ))
          )}
        </svg>

        {/* Dot grid - bottom center */}
        <svg className="absolute bottom-20 left-1/2 -translate-x-1/2 w-32 h-20 text-warm-gray-400/15" viewBox="0 0 128 80" fill="currentColor">
          {[0, 1, 2, 3, 4].map((col) =>
            [0, 1, 2].map((row) => (
              <circle key={`${col}-${row}`} cx={12 + col * 26} cy={12 + row * 26} r="1.5" />
            ))
          )}
        </svg>
      </div>

      {/* Header */}
      <header className="relative z-10 bg-white/80 backdrop-blur-sm border-b border-navy-900/8">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-0.5 bg-gold-600" />
            <span className="text-navy-900 text-base font-heading tracking-wider uppercase">
              {t("title")}
            </span>
          </motion.div>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 grow flex flex-col justify-center px-6 sm:px-10 py-12 sm:py-16">
        <div className="max-w-7xl mx-auto w-full">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5 lg:gap-6">
            <AnimatedSection direction="up" delay={0}>
              <PortalSection
                title={t("privateOffice")}
                description={t("privateOfficeDesc")}
                href={LINKS.privateOffice}
                icon={<Building2 size={24} strokeWidth={1.5} />}
                cta={t("visitSite")}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <PortalSection
                title={t("charityOffice")}
                description={t("charityOfficeDesc")}
                href={LINKS.charityOffice}
                icon={<HeartHandshake size={24} strokeWidth={1.5} />}
                cta={t("visitSite")}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <PortalSection
                title={t("myOrchestra")}
                description={t("myOrchestraDesc")}
                href={LINKS.myOrchestra}
                icon={<UserCircle size={24} strokeWidth={1.5} />}
                cta={t("openPortal")}
              />
            </AnimatedSection>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-white/80 backdrop-blur-sm border-t border-navy-900/8 py-6">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center text-xs text-warm-gray-400 tracking-wide">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
