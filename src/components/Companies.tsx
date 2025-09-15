const Companies = () => {
  const companies = [
    {
      name: "N-Edu – Nền tảng giáo dục về lãnh đạo và phát triển cá nhân",
      description: "N-Edu cung cấp các chương trình đào tạo chuyên sâu về lãnh đạo và phát triển bản thân, nhằm trang bị cho học viên những kỹ năng cần thiết để trở thành những nhà lãnh đạo xuất sắc trong tương lai.",
      bgColor: "bg-yellow-500", 
      logo: "/Nedu.jpg"
    },
    {
      name: "NhiLe Team – Cộng đồng lan tỏa tư duy tiên phong và văn hóa lãnh đạo Việt",
      description: "NhiLe Team là cộng đồng kết nối những cá nhân có cùng chí hướng, cùng nhau chia sẻ và phát triển tư duy lãnh đạo, góp phần xây dựng một thế hệ lãnh đạo Việt Nam mạnh mẽ và sáng tạo.",
      initial: "NT",
      bgColor: "bg-blue-500",
      logo: "/NhiLeTeam.jpg"
    },
    {
      name: "NhiLe Foundation – Quỹ xã hội phi lợi nhuận",
      description: "NhiLe Foundation hoạt động với mục tiêu xây dựng trường học, trao tri thức và phát triển thế hệ kế thừa, đặc biệt là hỗ trợ các trẻ em có hoàn cảnh khó khăn tại Việt Nam.",
      initial: "NF",
      bgColor: "bg-red-500",
      logo: "/NhiLeFoundation.jpg"
    },
    {
      name: "Family Cloud – Giải pháp công nghệ B2B",
      description: "Family Cloud cung cấp các giải pháp công nghệ thông tin và kết nối nguồn nhân lực IT chất lượng cao với các doanh nghiệp trên toàn cầu, nhằm nâng cao hiệu quả công việc và phát triển bền vững.",
      initial: "N",
      bgColor: "bg-orange-500",
      logo: "/FamilyCloud.jpg"
    },
    {
      name: " S&W Homes for More – Kiến tạo không gian sống tiện nghi",
      description: "S&W Homes for More tập trung vào việc thiết kế và xây dựng không gian sống hiện đại, tiện nghi và bền vững, đáp ứng nhu cầu ngày càng cao của cộng đồng.",
      initial: "NK",
      bgColor: "bg-green-500",
      logo: "/S&W share and work.jpg"
    },
    {
      name: "Nhi's House – Nơi kết nối cộng đồng",
      description: "Nhi's House là không gian gặp gỡ, chia sẻ và phát triển bản thân, nơi mọi người có thể kết nối, học hỏi và hỗ trợ nhau trong sự nghiệp và cuộc sống.",
      bgColor: "bg-pink-500",
      logo: "/Nhi'sHOUSE.jpg"
    },
    {
      name: " This is Home – Thương hiệu về không gian sống",
      description: "This is Home chuyên cung cấp các giải pháp về không gian sống, giúp khách hàng tạo dựng tổ ấm lý tưởng, phù hợp với phong cách và nhu cầu cá nhân.",
      bgColor: "bg-yellow-700",
      logo: "/Thisishome.jpg"
    },
    {
      name: "Hush – Giải pháp không gian làm việc từ xa",
      description: "Hush cung cấp các giải pháp không gian làm việc và sinh sống cho cộng đồng làm việc từ xa, hỗ trợ tối đa cho những ai làm việc linh hoạt và sáng tạo.",
      initial: "TG",
      bgColor: "bg-teal-500",
      logo: "/hush doc.png"
    }
  ];

  return (
    <section id="companies" className="section-spacing bg-companies-bg">
      <div className="container mx-auto container-spacing">
        <div className="max-w-5xl mx-auto text-center scroll-reveal-fade text-spacing">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground scroll-reveal-right stagger-2 heading-vietnamese">
            🌱 Hệ sinh thái đa ngành: Kết nối và Phát triển
          </p>
          <p className="mt-4 text-base md:text-lg lg:text-xl font-semibold text-red-500 scroll-reveal-left stagger-3 vietnamese-text">
            NhiLe Holding là tập đoàn đa ngành, chuyên cung cấp dịch vụ giáo dục, không gian làm việc, du lịch và công nghệ thông tin, cam kết hỗ trợ cộng đồng qua các hoạt động xây dựng trường học, trao tri thức và phát triển thế hệ kế thừa. nlh.nhi.sg
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 card-grid-spacing max-w-7xl mx-auto">
          {companies.map((company, index) => (
            <div key={index} className={`card-spacing glassmorphism rounded-2xl flex flex-col items-start scroll-reveal hover-card group cursor-pointer stagger-${(index % 3) + 1}`}>
              <div className={`w-14 h-14 lg:w-16 lg:h-16 rounded-full flex items-center justify-center text-xl lg:text-2xl font-bold text-white heading-spacing group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 shadow-lg group-hover:shadow-xl ${company.bgColor}`}>
                {company.logo ? (
                  <img src={company.logo} alt={company.name} className="w-12 h-12 lg:w-14 lg:h-14 object-cover rounded-full" />
                ) : (
                  company.initial
                )}
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