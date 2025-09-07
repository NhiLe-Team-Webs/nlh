import ContactModal from "./ContactModal";
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
          <span className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 vietnamese-text">NhiLe Holding</span>
        </div>
        
        <div className="hidden md:flex items-center space-x-6 lg:space-x-8 text-sm font-medium">
          <button onClick={() => scrollToSection('about')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50 vietnamese-text">
            Về chúng tôi
          </button>
          <button onClick={() => scrollToSection('founders')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50 vietnamese-text">
            Đội ngũ sáng lập
          </button>
          <button onClick={() => scrollToSection('ecosystem')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50 vietnamese-text">
            Hệ sinh thái
          </button>
          <button onClick={() => scrollToSection('companies')} className="text-muted-foreground hover:text-foreground hover-underline transition-all duration-300 py-2 px-3 rounded-md hover:bg-accent/50 vietnamese-text">
            Các công ty
          </button>
          <ContactModal trigger={<button onClick={() => scrollToSection('contact')} className="bg-foreground text-background px-6 py-2 rounded-full hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-foreground/25 transition-all duration-300 active:scale-95 vietnamese-text">
            Liên hệ
          </button>} />
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
          <button onClick={() => scrollToSection('about')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2 vietnamese-text">
            Về chúng tôi
          </button>
          <button onClick={() => scrollToSection('founders')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2 vietnamese-text">
            Đội ngũ sáng lập
          </button>
          <button onClick={() => scrollToSection('ecosystem')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2 vietnamese-text">
            Hệ sinh thái
          </button>
          <button onClick={() => scrollToSection('companies')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2 vietnamese-text">
            Các công ty
          </button>
          <button onClick={() => scrollToSection('contact')} className="block py-3 px-6 text-muted-foreground hover:text-foreground hover:bg-accent/50 w-full text-left transition-all duration-300 hover:translate-x-2 vietnamese-text">
            Liên hệ
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;