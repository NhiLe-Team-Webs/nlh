import { Globe } from "lucide-react";
import { useLanguage, useTranslation } from "@/contexts/LanguageContext";
import type { Language } from "@/i18n/translations";

const LanguageToggle = () => {
  const { language, setLanguage } = useLanguage();
  const { languageSwitcher } = useTranslation();

  const entries = Object.entries(languageSwitcher.options) as Array<
    [Language, string]
  >;

  return (
    <div className="relative inline-flex items-center">
      <span className="sr-only">{languageSwitcher.label}</span>
      <div className="flex items-center gap-1 rounded-full border border-border/50 bg-muted/60 px-2 py-1 backdrop-blur-md shadow-sm transition-colors duration-200 hover:border-border">
        <Globe className="mr-1 hidden h-4 w-4 text-muted-foreground/80 sm:block" />
        {entries.map(([code, label]) => {
          const isActive = language === code;
          return (
            <button
              key={code}
              type="button"
              onClick={() => setLanguage(code)}
              aria-pressed={isActive}
              className={`rounded-full px-3 py-1 text-xs font-medium transition-all duration-200 sm:text-sm ${
                isActive
                  ? "bg-foreground text-background shadow-sm ring-1 ring-black/5"
                  : "text-muted-foreground hover:bg-foreground/10 hover:text-foreground"
              }`}
            >
              {label}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default LanguageToggle;
