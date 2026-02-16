import { useLanguage } from "../context/LanguageContext";

export default function LanguageToggle() {
  const { language, setLanguage } = useLanguage();

  return (
    <div className="flex items-center rounded-md overflow-hidden border border-navy-900/15 text-sm">
      <button
        onClick={() => setLanguage("nl")}
        className={`px-2.5 py-1 font-semibold tracking-wide transition-colors duration-200 ${
          language === "nl"
            ? "bg-navy-900 text-white"
            : "text-navy-400 hover:text-navy-700"
        }`}
      >
        NL
      </button>
      <button
        onClick={() => setLanguage("en")}
        className={`px-2.5 py-1 font-semibold tracking-wide transition-colors duration-200 ${
          language === "en"
            ? "bg-navy-900 text-white"
            : "text-navy-400 hover:text-navy-700"
        }`}
      >
        EN
      </button>
    </div>
  );
}
