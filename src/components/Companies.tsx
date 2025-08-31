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
    <section id="companies" className="py-20 md:py-32 bg-companies-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal mb-16">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Danh mục đầu tư</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground">Các doanh nghiệp trong hệ sinh thái.</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {companies.map((company, index) => (
            <div key={index} className="glassmorphism rounded-2xl p-8 flex flex-col items-start scroll-reveal">
              <div className={`w-12 h-12 rounded-full ${company.bgColor} flex items-center justify-center text-xl font-bold text-white mb-4`}>
                {company.initial}
              </div>
              <h3 className="text-xl font-bold text-foreground mb-2">{company.name}</h3>
              <p className="text-muted-foreground">{company.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Companies;