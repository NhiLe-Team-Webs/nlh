const Companies = () => {
  const companies = [
    {
      name: "Share&Work",
      description: "Không gian làm việc chung sáng tạo và linh hoạt.",
      initial: "S",
      bgColor: "bg-green-500"
    },
    {
      name: "This Is Home",
      description: "Giải pháp nhà ở và không gian sống hiện đại.",
      initial: "TI",
      bgColor: "bg-blue-500"
    },
    {
      name: "NhiLe Marketing",
      description: "Dịch vụ marketing và xây dựng thương hiệu toàn diện.",
      initial: "NM",
      bgColor: "bg-red-500"
    },
    {
      name: "N-Education",
      description: "Nền tảng giáo dục và phát triển kỹ năng tương lai.",
      initial: "N",
      bgColor: "bg-orange-500"
    },
    {
      name: "NSA Kids",
      description: "Môi trường phát triển toàn diện cho trẻ em.",
      initial: "NK",
      bgColor: "bg-pink-500"
    },
    {
      name: "Bloom Retreat",
      description: "Trải nghiệm nghỉ dưỡng và phục hồi năng lượng.",
      initial: "BR",
      bgColor: "bg-lime-500"
    },
    {
      name: "Hush Garden Coffee",
      description: "Không gian cà phê yên tĩnh và đầy cảm hứng.",
      initial: "HG",
      bgColor: "bg-yellow-700"
    },
    {
      name: "TRE Gym",
      description: "Trung tâm thể hình và chăm sóc sức khỏe chủ động.",
      initial: "TG",
      bgColor: "bg-teal-500"
    },
    {
      name: "Ava Studio",
      description: "Dịch vụ nhiếp ảnh và sản xuất hình ảnh chuyên nghiệp.",
      initial: "AS",
      bgColor: "bg-purple-500"
    }
  ];

  return (
    <section id="companies" className="section-spacing bg-companies-bg">
      <div className="container mx-auto container-spacing">
        <div className="max-w-5xl mx-auto text-center scroll-reveal-fade text-spacing">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary heading-spacing scroll-reveal-left stagger-1 vietnamese-text">Danh mục đầu tư</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground scroll-reveal-right stagger-2 heading-vietnamese">Các doanh nghiệp trong hệ sinh thái.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 card-grid-spacing max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className={`card-spacing glassmorphism rounded-2xl flex flex-col items-start scroll-reveal hover-card group cursor-pointer stagger-${(index % 3) + 1}`}>
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full ${company.bgColor} flex items-center justify-center text-xl lg:text-2xl font-bold text-white heading-spacing group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl`}>
                {company.initial}
              </div>
              <h3 className="text-xl lg:text-2xl font-bold text-foreground heading-spacing group-hover:text-primary transition-colors duration-300 heading-vietnamese">{company.name}</h3>
              <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed flex-grow body-vietnamese">{company.description}</p>
              <div className="mt-6 w-full h-1 bg-gradient-to-r from-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;