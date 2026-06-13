import { ArrowDown, ArrowDownCircle } from "lucide-react";
import { useTranslation } from "@/contexts/LanguageContext";

const Ecosystem = () => {
  const translation = useTranslation();
  const { ecosystem } = translation;

  return (
    <section id="ecosystem" className="section-spacing bg-ecosystem-bg">
      <div className="container-spacing container mx-auto text-center">
        <div className="scroll-reveal-fade mx-auto max-w-5xl">
          <h2 className="heading-spacing scroll-reveal-left stagger-1 vietnamese-text text-sm font-bold uppercase tracking-widest text-primary">
            {ecosystem.badge}
          </h2>
          <p className="heading-spacing heading-vietnamese scroll-reveal-right stagger-2 text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {ecosystem.heading}
          </p>
        </div>

        <div className="content-spacing mx-auto flex max-w-6xl flex-col items-center scroll-reveal-scale stagger-3">
          <div className="card-spacing group w-full max-w-lg cursor-pointer rounded-2xl glassmorphism hover-card">
            <h3 className="heading-spacing text-2xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary lg:text-3xl">
              {ecosystem.core.title}
            </h3>
            <p className="text-lg text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {ecosystem.core.description}
            </p>
          </div>

          <div className="hover-bounce rotate-90 text-foreground md:rotate-0">
            <ArrowDown className="h-12 w-12 transition-colors duration-300 hover:text-primary" />
          </div>

          <div className="card-spacing group w-full max-w-2xl cursor-pointer rounded-2xl glassmorphism hover-card">
            <h3 className="heading-spacing text-3xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary lg:text-4xl">
              {ecosystem.engine.title}
            </h3>
            <p className="text-lg leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
              {ecosystem.engine.description}
            </p>
          </div>

          <div className="hover-bounce text-primary">
            <ArrowDownCircle className="h-14 w-14 transition-transform duration-300 hover:scale-110" />
          </div>

          <div className="card-spacing group w-full max-w-5xl cursor-pointer rounded-2xl border border-border bg-background hover-card">
            <div className="text-left lg:flex lg:items-center lg:justify-between">
              <div className="rounded-lg p-6 transition-colors duration-300 group-hover:bg-accent/5">
                <h4 className="heading-spacing text-xl font-bold text-primary transition-colors duration-300 group-hover:text-primary/80 lg:text-2xl">
                  {ecosystem.cycle.left.title}
                </h4>
                <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {ecosystem.cycle.left.description}
                </p>
              </div>
              <div className="mx-8 hidden h-24 border-l border-border transition-colors duration-300 group-hover:border-primary/50 lg:block" />
              <div className="rounded-lg border-border p-6 transition-colors duration-300 group-hover:bg-accent/5 lg:mt-0 lg:border-0 lg:border-t-0">
                <h4 className="heading-spacing text-xl font-bold text-green-500 transition-colors duration-300 group-hover:text-green-400 lg:text-2xl">
                  {ecosystem.cycle.right.title}
                </h4>
                <p className="leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                  {ecosystem.cycle.right.description}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;
