import { useTranslation } from "@/contexts/LanguageContext";

const Companies = () => {
  const translation = useTranslation();
  const { companies } = translation;

  return (
    <section id="companies" className="section-spacing bg-companies-bg">
      <div className="container-spacing container mx-auto">
        <div className="scroll-reveal-fade text-spacing mx-auto max-w-5xl text-center">
          <p className="heading-spacing heading-vietnamese scroll-reveal-right stagger-2 text-3xl font-bold text-foreground md:text-5xl lg:text-6xl">
            {companies.heading}
          </p>
          <p className="vietnamese-text mt-4 text-base font-semibold text-red-500 scroll-reveal-left stagger-3 md:text-lg lg:text-xl">
            {companies.subheading}
          </p>
        </div>

        <div className="card-grid-spacing mx-auto grid max-w-7xl grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {companies.companies.map((company, index) => (
            <div
              key={company.name}
              className={`card-spacing glassmorphism group flex flex-col items-start rounded-2xl hover-card scroll-reveal stagger-${(index % 3) + 1}`}
            >
              <div
                className={`${company.bgColor} heading-spacing flex h-14 w-14 items-center justify-center rounded-full text-xl font-bold text-white transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:rotate-12 group-hover:shadow-xl lg:h-16 lg:w-16 lg:text-2xl`}
              >
                {company.logo ? (
                  <img
                    src={company.logo}
                    alt={company.name}
                    className="h-12 w-12 rounded-full object-cover lg:h-14 lg:w-14"
                  />
                ) : null}
              </div>
              <h3 className="heading-spacing heading-vietnamese text-xl font-bold text-foreground transition-colors duration-300 group-hover:text-primary lg:text-2xl">
                {company.name}
              </h3>
              <p className="body-vietnamese flex-grow leading-relaxed text-muted-foreground transition-colors duration-300 group-hover:text-foreground">
                {company.description}
              </p>
              <div className="mt-6 h-1 w-full rounded-full bg-gradient-to-r from-primary to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;
