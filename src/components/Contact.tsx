import ContactModal from "./ContactModal";
import { useTranslation } from "@/contexts/LanguageContext";

const Contact = () => {
  const translation = useTranslation();
  const { contact } = translation;

  return (
    <section id="contact" className="section-spacing bg-contact-bg">
      <div className="container-spacing container mx-auto text-center">
        <div className="scroll-reveal-fade mx-auto max-w-4xl">
          <h2 className="heading-spacing heading-vietnamese cursor-default text-3xl font-bold text-foreground transition-colors duration-300 hover:text-primary scroll-reveal-scale stagger-1 md:text-5xl lg:text-6xl">
            {contact.heading}
          </h2>
          <p className="body-vietnamese text-spacing scroll-reveal-left stagger-2 mx-auto text-lg leading-relaxed text-muted-foreground transition-colors duration-300 hover:text-foreground lg:text-xl">
            {contact.description}
          </p>
          <div className="scroll-reveal-rotate stagger-3">
            <ContactModal
              trigger={
                <button className="vietnamese-text group relative inline-block overflow-hidden rounded-full bg-primary px-10 py-4 text-lg font-semibold text-primary-foreground transition-all duration-300 hover:scale-105 hover:opacity-90 hover:shadow-lg hover:shadow-primary/25 hover-shimmer active:scale-95 lg:px-12 lg:py-5">
                  <span className="relative z-10">{contact.cta}</span>
                </button>
              }
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
