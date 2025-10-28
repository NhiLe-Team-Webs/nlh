import { useTranslation } from "@/contexts/LanguageContext";

const About = () => {
  const translation = useTranslation();
  const { about } = translation;

  return (
    <section id="about" className="section-spacing bg-about-bg">
      <div className="container-spacing container mx-auto">
        <div className="scroll-reveal-fade mx-auto max-w-5xl text-center">
          <h2 className="heading-spacing scroll-reveal-left stagger-1 vietnamese-text text-sm font-bold uppercase tracking-widest text-primary">
            {about.badge}
          </h2>
          <p className="heading-spacing heading-vietnamese scroll-reveal-right stagger-2 text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {about.heading}
          </p>
        </div>

        <div className="body-vietnamese scroll-reveal-scale stagger-3 content-spacing mx-auto max-w-5xl text-lg leading-relaxed text-muted-foreground lg:text-xl">
          {about.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="card-grid-spacing mx-auto mt-16 grid max-w-6xl grid-cols-1 text-center md:grid-cols-3 lg:mt-20">
          {about.values.map((value, index) => (
            <div
              key={value.title}
              className={`card-spacing glassmorphism group cursor-pointer rounded-2xl hover-card scroll-reveal stagger-${index + 1}`}
              style={{ transitionDelay: value.delay }}
            >
              <div className="hover-bounce">
                <h3 className="heading-spacing heading-vietnamese text-2xl font-bold text-primary transition-colors duration-300 group-hover:text-primary/80 lg:text-3xl">
                  {value.title}
                </h3>
              </div>
              <p className="body-vietnamese text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;
