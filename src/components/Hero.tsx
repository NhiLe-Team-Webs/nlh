import { useEffect } from "react";
import { useLanguage, useTranslation } from "@/contexts/LanguageContext";

const Hero = () => {
  const translation = useTranslation();
  const { hero } = translation;
  const { language } = useLanguage();

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
  };

  useEffect(() => {
    const targets = document.querySelectorAll(
      ".scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate, .scroll-reveal-fade",
    );

    if (!("IntersectionObserver" in window)) {
      targets.forEach((el) => el.classList.add("is-visible"));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
          } else {
            entry.target.classList.remove("is-visible");
          }
        });
      },
      {
        root: null,
        rootMargin: "0px 0px -10% 0px",
        threshold: 0.15,
      },
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, [language]);

  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-hero-bg text-center">
      <div className="absolute inset-0 z-10 bg-hero-bg opacity-50" />
      <div className="absolute inset-0 -z-0">
        <div className="animate-blob absolute left-1/4 top-1/4 h-96 w-96 rounded-full bg-primary/20 opacity-100 mix-blend-screen blur-3xl" />
        <div className="animate-blob animation-delay-2000 absolute right-1/4 top-1/4 h-96 w-96 rounded-full bg-foreground/10 opacity-100 mix-blend-screen blur-3xl" />
      </div>
      <div className="container-spacing z-20">
        <div className="mx-auto max-w-6xl text-center">
          <h1 className="heading-spacing heading-vietnamese text-4xl font-extrabold leading-tight text-foreground scroll-reveal-fade md:text-6xl lg:text-7xl">
            <span className="inline-block scroll-reveal-left stagger-1">
              {hero.titleLine}
            </span>
            <br />
            <span className="gradient-text inline-block scroll-reveal-right stagger-2">
              {` ${hero.titleHighlight}`}
            </span>
          </h1>
          <p className="body-vietnamese mx-auto max-w-4xl text-lg leading-relaxed text-muted-foreground scroll-reveal-scale stagger-3 md:text-xl lg:text-2xl">
            {hero.description}
          </p>
          <div className="scroll-reveal-rotate stagger-4">
            <button
              onClick={() => scrollToSection("ecosystem")}
              className="vietnamese-text relative overflow-hidden rounded-full bg-primary px-8 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 hover-shimmer active:scale-95 lg:px-10 lg:py-5"
            >
              <span className="relative z-10">{hero.cta}</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
