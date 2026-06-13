import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import ContactModal from "./ContactModal";
import LanguageToggle from "./LanguageToggle";
import { useTranslation } from "@/contexts/LanguageContext";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const translation = useTranslation();
  const { header } = translation;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80;
      const elementPosition = element.offsetTop - headerHeight;

      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      });
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? "glassmorphism" : ""}`}
    >
      <nav className="container-spacing container mx-auto flex items-center justify-between py-4">
        <div
          className="group flex cursor-pointer items-center space-x-2"
          onClick={() => scrollToSection("about")}
        >
          <span className="vietnamese-text text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary">
            {header.brand}
          </span>
        </div>

        <div className="hidden items-center space-x-6 text-sm font-medium md:flex lg:space-x-8">
          {header.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="vietnamese-text rounded-md px-3 py-2 text-muted-foreground transition-all duration-300 hover:bg-accent/50 hover:text-foreground hover-underline"
            >
              {item.label}
            </button>
          ))}
          <ContactModal
            trigger={
              <button
                onClick={() => scrollToSection("contact")}
                className="vietnamese-text rounded-full bg-foreground px-6 py-2 text-background transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-lg hover:shadow-foreground/25 active:scale-95"
              >
                {header.contactCta}
              </button>
            }
          />
          <LanguageToggle />
        </div>

        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="rounded-md p-2 text-foreground transition-all duration-300 hover:scale-110 hover:bg-accent/50 hover:text-primary md:hidden"
          aria-label="Toggle navigation"
        >
          {isMobileMenuOpen ? (
            <X size={24} className="hover-rotate" />
          ) : (
            <Menu size={24} className="hover-rotate" />
          )}
        </button>
      </nav>

      {isMobileMenuOpen && (
        <div className="glassmorphism animate-in slide-in-from-top-2 duration-300 md:hidden">
          {header.navItems.map((item) => (
            <button
              key={item.id}
              onClick={() => scrollToSection(item.id)}
              className="vietnamese-text block w-full py-3 px-6 text-left text-muted-foreground transition-all duration-300 hover:translate-x-2 hover:bg-accent/50 hover:text-foreground"
            >
              {item.label}
            </button>
          ))}
          <button
            onClick={() => scrollToSection("contact")}
            className="vietnamese-text block w-full py-3 px-6 text-left text-muted-foreground transition-all duration-300 hover:translate-x-2 hover:bg-accent/50 hover:text-foreground"
          >
            {header.contactCta}
          </button>
          <div className="border-t border-border px-6 py-4">
            <LanguageToggle />
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
