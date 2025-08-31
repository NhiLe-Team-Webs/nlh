import { useEffect } from 'react';

const Hero = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  useEffect(() => {
    const scrollElements = document.querySelectorAll('.scroll-reveal');
    
    const elementInView = (el: Element, dividend = 1) => {
      const elementTop = el.getBoundingClientRect().top;
      return elementTop <= (window.innerHeight || document.documentElement.clientHeight) / dividend;
    };

    const displayScrollElement = (element: Element) => {
      element.classList.add('is-visible');
    };

    const handleScrollAnimation = () => {
      scrollElements.forEach((el) => {
        if (elementInView(el, 1.25)) {
          displayScrollElement(el);
        }
      });
    };

    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation();

    return () => window.removeEventListener('scroll', handleScrollAnimation);
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center text-center bg-hero-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-hero-bg opacity-50 z-10"></div>
      <div className="absolute inset-0 -z-0">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full mix-blend-screen filter blur-3xl opacity-100 animate-blob"></div>
        <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-foreground/10 rounded-full mix-blend-screen filter blur-3xl opacity-100 animate-blob animation-delay-2000"></div>
      </div>
      <div className="z-20 p-6">
        <h1 className="text-4xl md:text-7xl font-extrabold text-foreground leading-tight mb-4 scroll-reveal">
          Kiến Tạo Di Sản.<br />
          <span className="gradient-text">Vững Xây Tương Lai.</span>
        </h1>
        <p className="text-lg md:text-xl max-w-3xl mx-auto text-muted-foreground mb-8 scroll-reveal" style={{ transitionDelay: '200ms' }}>
          NhiLe Holding đầu tư vào các doanh nghiệp mang giá trị cốt lõi Tâm - Tầm - Đức, dùng lợi nhuận để phục vụ sứ mệnh phát triển con người và cộng đồng.
        </p>
        <div className="scroll-reveal" style={{ transitionDelay: '400ms' }}>
          <button 
            onClick={() => scrollToSection('ecosystem')}
            className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity transform hover:scale-105"
          >
            Khám Phá Hệ Sinh Thái
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;