import { motion } from "motion/react";
import { Building2, HeartHandshake, UserCircle } from "lucide-react";
import { useLanguage } from "./context/LanguageContext";
import LanguageToggle from "./components/LanguageToggle";
import AnimatedSection from "./components/AnimatedSection";
import PortalSection from "./components/PortalSection";

const LINKS = {
  privateOffice: "https://ofis-website-private.vercel.app/",
  charityOffice: "https://ofis-website.vercel.app/",
  myOrchestra: "https://ofis.orchestrabeheer.nl/Ofis/Client",
};

export default function App() {
  const { t } = useLanguage();

  return (
    <div
      className="min-h-screen flex flex-col relative overflow-hidden"
      style={{ backgroundColor: "#f8f9fb" }}
    >
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(circle, #c8ccd0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #f8f9fb 80%)",
        }}
      />

      {/* Header */}
      <header
        className="relative z-10 backdrop-blur-sm border-b border-navy-900/6"
        style={{ backgroundColor: "rgba(248, 249, 251, 0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 py-5 flex items-center justify-between">
          <motion.div
            className="flex items-center gap-3"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="w-8 h-0.5 bg-gold-600" />
            <img
              src="/images/Orchestra-Logo.png"
              alt="Orchestra"
              className="h-6"
            />
          </motion.div>
          <LanguageToggle />
        </div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 grow flex flex-col justify-center px-6 sm:px-10 py-12 sm:py-16">
        <div className="max-w-5xl mx-auto w-full">
          <AnimatedSection direction="up" delay={0}>
            <div className="text-center mb-10">
              <h1 className="text-3xl sm:text-4xl font-heading text-navy-900 mb-3">
                {t("portalHeading")}
              </h1>
              <p className="text-warm-gray-500 text-base">
                {t("portalSubheading")}
              </p>
            </div>
          </AnimatedSection>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
            <AnimatedSection direction="up" delay={0}>
              <PortalSection
                title={t("privateOffice")}
                description={t("privateOfficeDesc")}
                href={LINKS.privateOffice}
                icon={<Building2 size={20} strokeWidth={1.5} />}
                cta={t("visitSite")}
                features={t("privateOfficeFeatures")}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <PortalSection
                title={t("charityOffice")}
                description={t("charityOfficeDesc")}
                href={LINKS.charityOffice}
                icon={<HeartHandshake size={20} strokeWidth={1.5} />}
                cta={t("visitSite")}
                features={t("charityOfficeFeatures")}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <PortalSection
                title={t("myOrchestra")}
                description={t("myOrchestraDesc")}
                href={LINKS.myOrchestra}
                icon={<UserCircle size={20} strokeWidth={1.5} />}
                cta={t("openPortal")}
                features={t("myOrchestraFeatures")}
              />
            </AnimatedSection>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer
        className="relative z-10 backdrop-blur-sm border-t border-navy-900/6 py-6"
        style={{ backgroundColor: "rgba(248, 249, 251, 0.85)" }}
      >
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center text-xs text-warm-gray-400 tracking-wide">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
