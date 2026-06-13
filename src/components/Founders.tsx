import { useTranslation } from "@/contexts/LanguageContext";

const Founders = () => {
  const translation = useTranslation();
  const { founders } = translation;

  return (
    <section id="founders" className="section-spacing bg-founder-bg">
      <div className="container-spacing container mx-auto">
        <div className="scroll-reveal-fade mx-auto max-w-5xl text-center">
          <p className="heading-spacing heading-vietnamese scroll-reveal-right stagger-2 text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {founders.heading}
          </p>
          <p className="vietnamese-text mb-8 text-base font-semibold text-red-500 scroll-reveal-left stagger-3 md:text-lg lg:text-xl">
            {founders.quote}
          </p>
        </div>

        <div className="mx-auto flex max-w-6xl flex-col items-center justify-center gap-12 lg:flex-row lg:gap-16">
          <div className="hover-image group stagger-3 flex-shrink-0 scroll-reveal-scale">
            <div className="relative h-72 w-72 overflow-hidden rounded-full border-4 border-border shadow-lg transition-all duration-500 group-hover:shadow-2xl group-hover:shadow-primary/20 lg:h-80 lg:w-80">
              <img
                src="/NhiLe.jpg"
                alt="Nhi Le - Founder of NhiLe Holding"
                className="h-full w-full rounded-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>

          <div className="stagger-4 scroll-reveal-left text-center lg:w-2/3 lg:text-left">
            <div className="content-spacing">
              <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
                {founders.body}
              </p>
              <blockquote className="body-vietnamese hover-lift scroll-reveal-scale stagger-6 rounded-r-lg border-l-4 border-primary p-6 pl-6 text-lg italic text-muted-foreground transition-all duration-300 hover:bg-accent/10 hover:text-foreground hover:border-primary/80 lg:text-xl">
                {founders.blockquote}
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;
