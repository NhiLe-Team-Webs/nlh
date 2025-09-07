const About = () => {
  const values = [
    {
      title: "TÂM",
      description: "Mọi hành động đều xuất phát từ sự chân thành và tình yêu thương, là nền tảng cho một cộng đồng đoàn kết.",
      delay: "0ms"
    },
    {
      title: "TẦM",
      description: "Nhìn xa hơn thành công cá nhân, hướng đến sự phát triển của cả cộng đồng và xã hội.",
      delay: "200ms"
    },
    {
      title: "ĐỨC",
      description: "Sự chính trực và tử tế là nền tảng của mọi quyết định, đặt lợi ích cộng đồng lên trên hết.",
      delay: "400ms"
    }
  ];

  return (
    <section id="about" className="section-spacing bg-about-bg">
      <div className="container mx-auto container-spacing">
        <div className="max-w-5xl mx-auto text-center scroll-reveal-fade">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary heading-spacing scroll-reveal-left stagger-1 vietnamese-text">Hành Trình Của Chúng Tôi</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-spacing scroll-reveal-right stagger-2 heading-vietnamese">Từ một giấc mơ, đến một di sản.</p>
        </div>

        <div className="max-w-5xl mx-auto text-muted-foreground content-spacing text-lg lg:text-xl leading-relaxed scroll-reveal-scale stagger-3 body-vietnamese">
          <p>
            Chúng tôi tin trong trái tim mỗi người Việt Nam luôn chứa đựng niềm tin vào sức mạnh của lòng nhân ái và tri thức. 
            Từ một ý tưởng nhỏ, <span className="text-foreground font-semibold accent-vietnamese">Nhi Le</span> đã biến ước mơ thành hiện thực qua việc thành lập{' '}
            <span className="text-foreground font-semibold accent-vietnamese">NhiLe Team</span> – tiền thân của{' '}
            <span className="text-foreground font-semibold accent-vietnamese">NhiLe Foundation</span> ngày nay.
          </p>
          <p>
            Từ 3 người tiên phong, cộng đồng đã lớn mạnh với hơn 300 thành viên cốt cán và 5000 thành viên tích cực, 
            cùng nhau chia sẻ kiến thức và tạo ra giá trị bền vững cho xã hội.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 card-grid-spacing max-w-6xl mx-auto mt-16 lg:mt-20 text-center">
          {values.map((value, index) => (
            <div 
              key={index}
              className={`card-spacing glassmorphism rounded-2xl scroll-reveal hover-card group cursor-pointer stagger-${index + 1}`}
              style={{ transitionDelay: value.delay }}
            >
              <div className="hover-bounce">
                <h3 className="text-2xl lg:text-3xl font-bold text-primary heading-spacing group-hover:text-primary/80 transition-colors duration-300 heading-vietnamese">{value.title}</h3>
              </div>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed body-vietnamese">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;