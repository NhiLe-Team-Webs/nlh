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
    <section id="about" className="py-20 md:py-32 bg-about-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Hành Trình Của Chúng Tôi</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground mb-12">Từ một giấc mơ, đến một di sản.</p>
        </div>

        <div className="max-w-4xl mx-auto text-muted-foreground space-y-6 text-lg leading-relaxed scroll-reveal">
          <p>
            Chúng tôi tin trong trái tim mỗi người Việt Nam luôn chứa đựng niềm tin vào sức mạnh của lòng nhân ái và tri thức. 
            Từ một ý tưởng nhỏ, <span className="text-foreground font-semibold">Nhi Le</span> đã biến ước mơ thành hiện thực qua việc thành lập{' '}
            <span className="text-foreground font-semibold">NhiLe Team</span> – tiền thân của{' '}
            <span className="text-foreground font-semibold">NhiLe Foundation</span> ngày nay.
          </p>
          <p>
            Từ 3 người tiên phong, cộng đồng đã lớn mạnh với hơn 300 thành viên cốt cán và 5000 thành viên tích cực, 
            cùng nhau chia sẻ kiến thức và tạo ra giá trị bền vững cho xã hội.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto mt-20 text-center">
          {values.map((value, index) => (
            <div 
              key={index}
              className="p-8 glassmorphism rounded-2xl scroll-reveal"
              style={{ transitionDelay: value.delay }}
            >
              <h3 className="text-2xl font-bold text-primary mb-2">{value.title}</h3>
              <p className="text-muted-foreground">{value.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;