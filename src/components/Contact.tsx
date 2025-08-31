const Contact = () => {
  return (
    <section id="contact" className="py-20 md:py-32 bg-contact-bg">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-3xl mx-auto scroll-reveal">
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">Trở thành một phần của di sản.</h2>
          <p className="text-lg text-muted-foreground mb-8">
            Chúng tôi luôn tìm kiếm những đối tác, nhà đầu tư và nhân tài có cùng tầm nhìn và giá trị. 
            Hãy kết nối để cùng nhau tạo ra những thay đổi bền vững.
          </p>
          <a 
            href="mailto:contact@nhileholding.com" 
            className="bg-primary text-primary-foreground font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-opacity transform hover:scale-105 inline-block"
          >
            Kết Nối Với Chúng Tôi
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;