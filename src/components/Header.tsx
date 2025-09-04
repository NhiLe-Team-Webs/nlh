import { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    setIsMobileMenuOpen(false);
  };

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'glassmorphism' : ''}`}>
      <nav className="container mx-auto container-spacing py-4 flex justify-between items-center">
        <div className="flex items-center space-x-2 group cursor-pointer" onClick={() => scrollToSection('about')}>
          <div className="hover-scale transition-transform duration-300">
            <svg width="40" height="40" viewBox="0 0 108 108" fill="none" xmlns="http://www.w3.org/2000/svg" className="group-hover:drop-shadow-lg transition-all duration-300">
              <path d="M24.8148 99V9H52.1265C62.0392 9 70.3333 11.25 77.0088 15.75C83.6843 20.25 87.0221 26.4375 87.0221 34.3125C87.0221 40.5 84.819 45.6562 80.4129 49.7812C76.0068 53.9062 69.879 56.5312 62.0293 57.6562L89.6953 99H64.8828L42.2168 61.125H38.584V99H24.8148ZM38.584 49.5H49.8105C55.0391 49.5 59.1016 48.0938 61.998 45.2812C64.8945 42.4688 66.3428 38.8125 66.3428 34.3125C66.3428 29.8125 64.8945 26.25 61.998 23.625C59.1016 21 55.0391 19.5 49.8105 19.5H38.584V49.5Z" fill="white" className="group-hover:fill-primary transition-colors duration-300"/>
            </svg>
          </div>
          <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">NhiLe Holding</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
          <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50">
            Về chúng tôi
          </button>
          <button onClick={() => scrollToSection('founders')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50">
            Đội ngũ sáng lập
          </button>
          <button onClick={() => scrollToSection('ecosystem')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50">
            Hệ sinh thái
          </button>
          <button onClick={() => scrollToSection('companies')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50">
            Các công ty
          </button>
          <button onClick={() => scrollToSection('contact')} className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-foreground/25 transition-all duration-300 active:scale-95">
            Liên hệ
          </button>
        </div>
        
        <button 
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="md:hidden text-foreground hover:text-primary hover:scale-110 transition-all duration-300 p-2 rounded-md hover:bg-accent/50"
        >
          {isMobileMenuOpen ? <X size={24} className="hover-rotate" /> : <Menu size={24} className="hover-rotate" />}
        </button>
      </nav>
      
      {isMobileMenuOpen && (
        <div className="md:hidden glassmorphism animate-in slide-in-from-top-2 duration-300">
          <button onClick={() => scrollToSection('about')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2">
            Về chúng tôi
          </button>
          <button onClick={() => scrollToSection('founders')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2">
            Đội ngũ sáng lập
          </button>
          <button onClick={() => scrollToSection('ecosystem')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2">
            Hệ sinh thái
          </button>
          <button onClick={() => scrollToSection('companies')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2">
            Các công ty
          </button>
          <button onClick={() => scrollToSection('contact')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2">
            Liên hệ
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;