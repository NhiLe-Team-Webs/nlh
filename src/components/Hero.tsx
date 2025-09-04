import { useEffect } from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerHeight = 80; // Account for fixed header
      const elementPosition = element.offsetTop - headerHeight;
      
      window.scrollTo({
        top: elementPosition,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const targets = document.querySelectorAll(
      '.scroll-reveal, .scroll-reveal-left, .scroll-reveal-right, .scroll-reveal-scale, .scroll-reveal-rotate, .scroll-reveal-fade'
    );

    if (!('IntersectionObserver' in window)) {
      // Fallback: reveal immediately
      targets.forEach((el) => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
          } else {
            // Remove when out of view so it can animate again next time
            entry.target.classList.remove('is-visible');
          }
        });
      },
      {
        root: null,
        rootMargin: '0px 0px -10% 0px',
        threshold: 0.15,
      }
    );

    targets.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-hero-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-bg opacity-50 z-10"></div>
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-100 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-foreground/10 rounded-full mix-blend-screen filter blur-3xl opacity-100 animate-blob animation-delay-2000"></div>
      </div>
      <div className="z-20 container-spacing">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground leading-tight heading-spacing scroll-reveal-fade heading-vietnamese">
            <span className="inline-block scroll-reveal-left stagger-1">Kiến Tạo Di Sản.</span><br />
            <span className="gradient-text inline-block scroll-reveal-right stagger-2">Vững Xây Tương Lai.</span>
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl max-w-4xl mx-auto text-muted-foreground text-spacing scroll-reveal-scale stagger-3 leading-relaxed body-vietnamese">
            NhiLe Holding đầu tư vào các doanh nghiệp mang giá trị cốt lõi Tâm - Tầm - Đức, dùng lợi nhuận để phục vụ sứ mệnh phát triển con người và cộng đồng.
          </p>
          <div className="scroll-reveal-rotate stagger-4">
            <button 
              onClick={() => scrollToSection('ecosystem')}
              className="bg-primary text-primary-foreground font-semibold px-8 py-4 lg:px-10 lg:py-5 rounded-full hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-95 hover-shimmer relative overflow-hidden group text-lg vietnamese-text"
            >
              <span className="relative z-10">Khám Phá Hệ Sinh Thái</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;