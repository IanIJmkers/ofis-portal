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

/* Abstract fluid art for each card — navy & gold palette */
function ArtPrivate() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="gp1" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#5A80A5" />
          <stop offset="50%" stopColor="#7897B5" />
          <stop offset="100%" stopColor="#9FB5CB" />
        </linearGradient>
        <radialGradient id="gp2" cx="30%" cy="60%" r="50%">
          <stop offset="0%" stopColor="#D6BA59" stopOpacity="0.4" />
          <stop offset="100%" stopColor="#D6BA59" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gp3" cx="80%" cy="30%" r="40%">
          <stop offset="0%" stopColor="#9FB5CB" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#9FB5CB" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="220" fill="url(#gp1)" />
      <ellipse cx="120" cy="140" rx="140" ry="100" fill="url(#gp2)" />
      <ellipse cx="320" cy="60" rx="120" ry="90" fill="url(#gp3)" />
      <circle cx="80" cy="80" r="60" fill="#C09E35" fillOpacity="0.08" />
      <path d="M0 180 Q100 120, 200 160 T400 130 L400 220 L0 220Z" fill="white" fillOpacity="0.06" />
      <path d="M0 200 Q150 150, 300 190 T400 170 L400 220 L0 220Z" fill="white" fillOpacity="0.04" />
    </svg>
  );
}

function ArtCharity() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="gc1" x1="100%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#7897B5" />
          <stop offset="50%" stopColor="#5A80A5" />
          <stop offset="100%" stopColor="#9FB5CB" />
        </linearGradient>
        <radialGradient id="gc2" cx="70%" cy="50%" r="45%">
          <stop offset="0%" stopColor="#DEC777" stopOpacity="0.35" />
          <stop offset="100%" stopColor="#DEC777" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gc3" cx="20%" cy="40%" r="45%">
          <stop offset="0%" stopColor="#7897B5" stopOpacity="0.25" />
          <stop offset="100%" stopColor="#7897B5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="220" fill="url(#gc1)" />
      <ellipse cx="280" cy="110" rx="130" ry="95" fill="url(#gc2)" />
      <ellipse cx="80" cy="90" rx="110" ry="80" fill="url(#gc3)" />
      <circle cx="320" cy="60" r="50" fill="#AA8C2B" fillOpacity="0.1" />
      <circle cx="200" cy="180" r="70" fill="#C5D3E0" fillOpacity="0.08" />
      <path d="M400 160 Q300 100, 200 150 T0 120 L0 220 L400 220Z" fill="white" fillOpacity="0.06" />
      <path d="M400 190 Q250 140, 100 180 T0 160 L0 220 L400 220Z" fill="white" fillOpacity="0.04" />
    </svg>
  );
}

function ArtPortal() {
  return (
    <svg className="absolute inset-0 w-full h-full" viewBox="0 0 400 220" preserveAspectRatio="xMidYMid slice" fill="none">
      <defs>
        <linearGradient id="gm1" x1="50%" y1="0%" x2="50%" y2="100%">
          <stop offset="0%" stopColor="#9FB5CB" />
          <stop offset="50%" stopColor="#5A80A5" />
          <stop offset="100%" stopColor="#7897B5" />
        </linearGradient>
        <radialGradient id="gm2" cx="50%" cy="40%" r="50%">
          <stop offset="0%" stopColor="#CFAD3B" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#CFAD3B" stopOpacity="0" />
        </radialGradient>
        <radialGradient id="gm3" cx="80%" cy="70%" r="40%">
          <stop offset="0%" stopColor="#5A80A5" stopOpacity="0.3" />
          <stop offset="100%" stopColor="#5A80A5" stopOpacity="0" />
        </radialGradient>
      </defs>
      <rect width="400" height="220" fill="url(#gm1)" />
      <ellipse cx="200" cy="90" rx="150" ry="100" fill="url(#gm2)" />
      <ellipse cx="320" cy="160" rx="100" ry="80" fill="url(#gm3)" />
      <circle cx="100" cy="160" r="55" fill="#E8D89E" fillOpacity="0.08" />
      <circle cx="340" cy="50" r="40" fill="#C5D3E0" fillOpacity="0.1" />
      <path d="M0 150 Q200 90, 400 140 L400 220 L0 220Z" fill="white" fillOpacity="0.06" />
      <path d="M0 180 Q200 130, 400 175 L400 220 L0 220Z" fill="white" fillOpacity="0.04" />
    </svg>
  );
}

export default function App() {
  const { t } = useLanguage();

  return (
    <div className="min-h-screen flex flex-col relative overflow-hidden" style={{ backgroundColor: "#f8f9fb" }}>
      {/* Dot grid pattern */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: "radial-gradient(circle, #c8ccd0 1px, transparent 1px)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Radial vignette */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 70% 60% at 50% 50%, transparent 30%, #f8f9fb 80%)",
        }}
      />

      {/* Soft color washes */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 right-0 w-150 h-100 bg-navy-100/25 rounded-full blur-3xl -translate-y-1/3 translate-x-1/4" />
        <div className="absolute bottom-0 left-0 w-125 h-100 bg-gold-200/20 rounded-full blur-3xl translate-y-1/4 -translate-x-1/4" />
      </div>

      {/* Header */}
      <header className="relative z-10 backdrop-blur-sm border-b border-navy-900/6" style={{ backgroundColor: "rgba(248, 249, 251, 0.85)" }}>
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
                icon={<Building2 size={20} strokeWidth={1.5} />}
                cta={t("visitSite")}
                art={<ArtPrivate />}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.1}>
              <PortalSection
                title={t("charityOffice")}
                description={t("charityOfficeDesc")}
                href={LINKS.charityOffice}
                icon={<HeartHandshake size={20} strokeWidth={1.5} />}
                cta={t("visitSite")}
                art={<ArtCharity />}
              />
            </AnimatedSection>

            <AnimatedSection direction="up" delay={0.2}>
              <PortalSection
                title={t("myOrchestra")}
                description={t("myOrchestraDesc")}
                href={LINKS.myOrchestra}
                icon={<UserCircle size={20} strokeWidth={1.5} />}
                cta={t("openPortal")}
                art={<ArtPortal />}
              />
            </AnimatedSection>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="relative z-10 backdrop-blur-sm border-t border-navy-900/6 py-6" style={{ backgroundColor: "rgba(248, 249, 251, 0.85)" }}>
        <div className="max-w-7xl mx-auto px-6 sm:px-10 text-center text-xs text-warm-gray-400 tracking-wide">
          <p>{t("copyright")}</p>
        </div>
      </footer>
    </div>
  );
}
