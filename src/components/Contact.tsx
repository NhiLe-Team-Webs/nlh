import ContactModal from "./ContactModal"

const Contact = () => {
  return (
    <section id="contact" className="section-spacing bg-contact-bg">
      <div className="container mx-auto container-spacing text-center">
        <div className="max-w-4xl mx-auto scroll-reveal-fade">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground heading-spacing hover:text-primary transition-colors duration-300 cursor-default scroll-reveal-scale stagger-1 heading-vietnamese">Trở thành một phần của di sản.</h2>
          <p className="text-lg lg:text-xl text-muted-foreground text-spacing hover:text-foreground transition-colors duration-300 scroll-reveal-left stagger-2 leading-relaxed body-vietnamese">
            Chúng tôi luôn tìm kiếm những đối tác, nhà đầu tư và nhân tài có cùng tầm nhìn và giá trị. 
            Hãy kết nối để cùng nhau tạo ra những thay đổi bền vững.
          </p>
          <div className="scroll-reveal-rotate stagger-3">
            <ContactModal
              trigger={
                <button
                  className="bg-primary text-primary-foreground font-semibold px-10 py-4 lg:px-12 lg:py-5 rounded-full hover:opacity-90 hover:scale-105 hover:shadow-lg hover:shadow-primary/25 transition-all duration-300 active:scale-95 hover-shimmer relative overflow-hidden group inline-block text-lg vietnamese-text"
                >
                  <span className="relative z-10">Kết Nối Với Chúng Tôi</span>
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