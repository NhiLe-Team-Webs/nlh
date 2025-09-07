import Header from '@/components/Header';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Founders from '@/components/Founders';
import Ecosystem from '@/components/Ecosystem';
import Companies from '@/components/Companies';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Founders />
        <Ecosystem />
        <Companies />
        <Contact />
      </main>
      <Footer />
    </>
  );
};

export default Index;
