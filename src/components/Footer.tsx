import { useTranslation } from "@/contexts/LanguageContext";

const Footer = () => {
  const translation = useTranslation();
  const { footer } = translation;

  return (
    <footer className="bg-footer-bg py-12 transition-colors duration-500 hover:bg-footer-bg/95 lg:py-16">
      <div className="container-spacing container mx-auto text-center text-muted-foreground">
        <div className="content-spacing mx-auto max-w-4xl">
          <p className="vietnamese-text cursor-default text-sm transition-colors duration-300 hover:text-foreground lg:text-base">
            {footer.copyright}
          </p>
          <p className="vietnamese-text cursor-default text-sm transition-colors duration-300 hover:text-primary lg:text-base">
            {footer.tagline}
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
