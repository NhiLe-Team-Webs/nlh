export type Language = "en" | "vi";

type NavItem = {
  id: string;
  label: string;
};

type AboutValue = {
  title: string;
  description: string;
  delay: string;
};

type Company = {
  name: string;
  description: string;
  bgColor: string;
  logo: string;
};

type TranslationContent = {
  languageSwitcher: {
    label: string;
    options: Record<Language, string>;
  };
  header: {
    brand: string;
    navItems: NavItem[];
    contactCta: string;
  };
  hero: {
    titleLine: string;
    titleHighlight: string;
    description: string;
    cta: string;
  };
  about: {
    badge: string;
    heading: string;
    paragraphs: string[];
    values: AboutValue[];
  };
  founders: {
    heading: string;
    quote: string;
    body: string;
    blockquote: string;
  };
  ecosystem: {
    badge: string;
    heading: string;
    core: {
      title: string;
      description: string;
    };
    engine: {
      title: string;
      description: string;
    };
    cycle: {
      left: {
        title: string;
        description: string;
      };
      right: {
        title: string;
        description: string;
      };
    };
  };
  companies: {
    heading: string;
    subheading: string;
    companies: Company[];
  };
  contact: {
    heading: string;
    description: string;
    cta: string;
  };
  contactModal: {
    title: string;
    successTitle: string;
    successMessage: string;
    errorTitle: string;
    errorMessage: string;
    close: string;
  };
  contactForm: {
    fields: {
      name: {
        label: string;
        placeholder: string;
        required: string;
      };
      company: {
        label: string;
        placeholder: string;
      };
      purpose: {
        label: string;
        placeholder: string;
        required: string;
      };
      email: {
        label: string;
        placeholder: string;
        required: string;
        pattern: string;
      };
      telegram: {
        label: string;
        placeholder: string;
      };
    };
    submit: string;
  };
  footer: {
    copyright: string;
    tagline: string;
  };
  notFound: {
    title: string;
    message: string;
    cta: string;
  };
};

const en: TranslationContent = {
  languageSwitcher: {
    label: "Language",
    options: {
      en: "English",
      vi: "Tiếng Việt",
    },
  },
  header: {
    brand: "NhiLe Holding",
    navItems: [
      { id: "about", label: "About Us" },
      { id: "founders", label: "Founding Team" },
      { id: "ecosystem", label: "Ecosystem" },
      { id: "companies", label: "Portfolio Companies" },
      { id: "contact", label: "Contact" },
    ],
    contactCta: "Contact",
  },
  hero: {
    titleLine: "Nhi Le Holding:",
    titleHighlight: "We build to give back",
    description:
      "Founded with the mission to cultivate a multi-sector ecosystem rooted in Heart – Vision – Integrity. Our goal is to create lasting value for our community and society.",
    cta: "Explore the ecosystem",
  },
  about: {
    badge: "Our Journey",
    heading: "From a dream to a lasting legacy.",
    paragraphs: [
      "We believe every Vietnamese heart carries faith in compassion and knowledge. From a single aspiration, Nhi Le transformed her vision into reality by founding NhiLe Team — the predecessor of today’s NhiLe Foundation.",
      "Starting with three pioneers, the community has grown into 300 core members and over 5,000 active contributors who share knowledge and create enduring value for society together.",
    ],
    values: [
      {
        title: "Heart",
        description:
          "Every initiative begins with sincerity and compassion, forming the foundation for genuine unity.",
        delay: "0ms",
      },
      {
        title: "Vision",
        description:
          "We look beyond individual success, investing in the growth of our people and the communities we serve.",
        delay: "200ms",
      },
      {
        title: "Integrity",
        description:
          "Integrity and responsibility guide every decision, always placing community benefit above all else.",
        delay: "400ms",
      },
    ],
  },
  founders: {
    heading: "Nhi Le – A journey fueled by passion and purpose",
    quote:
      "“I do not believe in shortcuts. I believe in the long journey where culture, knowledge, and people are the true legacy.”",
    body:
      "Nhi Lê is an entrepreneur, educator, and founder of multiple cultural and educational initiatives in Vietnam, currently based in Singapore. Having grown up with limited means, she experienced countless challenges, yet chose to dedicate herself to learning, sharing, and personal development. Through her YouTube channel she has supported thousands of learners and founded NhiLe Foundation — a transparent ESG-driven organization that empowers Vietnamese youth via community-funded education and business reinvestment.",
    blockquote:
      "We are not only building businesses — we are laying resilient foundations, restoring confidence, and creating opportunities for the next generation.",
  },
  ecosystem: {
    badge: "Operating Model",
    heading: "An ecosystem designed to create value.",
    core: {
      title: "NhiLe Team & Foundation",
      description: "Mission: free education programs and community support.",
    },
    engine: {
      title: "NhiLe Holding",
      description:
        "Accelerates growth, generates profit, and creates career opportunities across our portfolio companies.",
    },
    cycle: {
      left: {
        title: "Reinvest in Society",
        description:
          "Holding profits are reinvested into Foundation initiatives, funding scholarships and upskilling programs for under-resourced students.",
      },
      right: {
        title: "Create Shared Impact",
        description:
          "Foundation graduates gain opportunities to work across the Holding network, enabling a sustainable cycle of human development.",
      },
    },
  },
  companies: {
    heading: "Our multi-sector ecosystem: connected and growing",
    subheading:
      "NhiLe Holding operates across education, workspace, hospitality, and technology — committed to community impact through transparent reinvestment and lifelong learning.",
    companies: [
      {
        name: "N-Edu – Leadership and personal mastery academy",
        description:
          "N-Edu delivers deep-dive programs in leadership and personal growth, equipping learners with the mindset and skills to become future-ready leaders.",
        bgColor: "bg-yellow-500",
        logo: "/Nedu.jpg",
      },
      {
        name: "NhiLe Team – Community of pioneering mindsets",
        description:
          "NhiLe Team unites mission-driven individuals who share and uplift one another, cultivating a new generation of Vietnamese leaders.",
        bgColor: "bg-blue-500",
        logo: "/NhiLeTeam.jpg",
      },
      {
        name: "NhiLe Foundation – Non-profit social impact fund",
        description:
          "NhiLe Foundation builds learning hubs, spreads knowledge, and nurtures future generations — especially children from underprivileged backgrounds in Vietnam.",
        bgColor: "bg-red-500",
        logo: "/NhiLeFoundation.jpg",
      },
      {
        name: "Family Cloud – B2B technology enablement",
        description:
          "Family Cloud provides technology solutions and high-quality IT talent to businesses worldwide, helping teams operate efficiently and sustainably.",
        bgColor: "bg-orange-500",
        logo: "/FamilyCloud.jpg",
      },
      {
        name: "S&W Homes for More – Designing meaningful spaces",
        description:
          "S&W Homes for More focuses on crafting modern, comfortable, and sustainable living experiences tailored to evolving lifestyles.",
        bgColor: "bg-green-500",
        logo: "/S&W share and work.jpg",
      },
      {
        name: "Nhi's House – Connecting communities",
        description:
          "Nhi's House is a collaborative space for gathering, sharing, and personal growth — empowering people to learn and support one another.",
        bgColor: "bg-pink-500",
        logo: "/Nhi'sHOUSE.jpg",
      },
      {
        name: "This is Home – Cultural travel & MICE design",
        description:
          "This is Home handcrafts warm art-and-culture getaways in Da Nang and Hoi An—coffee brewing, wood carving, hometown flavors—and plans intimate MICE gatherings so every guest feels welcomed, inspired, and cared for from first hello to follow-up.",
        bgColor: "bg-yellow-700",
        logo: "/Thisishome.jpg",
      },
      {
        name: "Hush – Remote work habitats",
        description:
          "Hush delivers flexible living and working solutions for modern remote professionals, enabling creativity anywhere.",
        bgColor: "bg-teal-500",
        logo: "/hush doc.png",
      },
    ],
  },
  contact: {
    heading: "Become part of the legacy.",
    description:
      "We are always looking for partners, investors, and talents who share our values. Let’s create lasting change together.",
    cta: "Connect with us",
  },
  contactModal: {
    title: "Contact / Connect with us",
    successTitle: "Inquiry sent successfully!",
    successMessage:
      "Thank you for reaching out. Our team will get back to you shortly.",
    errorTitle: "Failed to send inquiry!",
    errorMessage: "Something went wrong. Please try again.",
    close: "Close",
  },
  contactForm: {
    fields: {
      name: {
        label: "Your name",
        placeholder: "Enter your name",
        required: "Please enter your name.",
      },
      company: {
        label: "Company (optional)",
        placeholder: "Enter your company",
      },
      purpose: {
        label: "Purpose of contact",
        placeholder: "Share how we can collaborate",
        required: "Please share the purpose of your message.",
      },
      email: {
        label: "Email",
        placeholder: "Enter your email",
        required: "Please enter an email address.",
        pattern: "Please enter a valid email address.",
      },
      telegram: {
        label: "Telegram (optional)",
        placeholder: "Enter your Telegram handle",
      },
    },
    submit: "Send",
  },
  footer: {
    copyright: "© 2019 NhiLe Holding. All Rights Reserved.",
    tagline: "Building a legacy with Heart, Vision, and Integrity.",
  },
  notFound: {
    title: "404",
    message: "Oops! Page not found.",
    cta: "Return to Home",
  },
};

const vi: TranslationContent = {
  languageSwitcher: {
    label: "Ngôn ngữ",
    options: {
      en: "English",
      vi: "Tiếng Việt",
    },
  },
  header: {
    brand: "NhiLe Holding",
    navItems: [
      { id: "about", label: "Về chúng tôi" },
      { id: "founders", label: "Đội ngũ sáng lập" },
      { id: "ecosystem", label: "Hệ sinh thái" },
      { id: "companies", label: "Các công ty" },
      { id: "contact", label: "Liên hệ" },
    ],
    contactCta: "Liên hệ",
  },
  hero: {
    titleLine: "Nhi Le Holding:",
    titleHighlight: "Kiến tạo để phụng sự",
    description:
      "Được thành lập với tâm niệm kiến tạo hệ sinh thái đa ngành dựa trên Tâm – Tầm – Đức. Chúng tôi hướng tới việc tạo ra giá trị bền vững cho cộng đồng và xã hội.",
    cta: "Khám phá hệ sinh thái",
  },
  about: {
    badge: "Hành trình của chúng tôi",
    heading: "Từ một giấc mơ, đến một di sản.",
    paragraphs: [
      "Chúng tôi tin rằng trong mỗi trái tim người Việt luôn có niềm tin vào sức mạnh của lòng nhân ái và tri thức. Từ một ý tưởng nhỏ, Nhi Lê đã biến mơ ước thành hiện thực qua việc thành lập NhiLe Team — tiền thân của NhiLe Foundation ngày nay.",
      "Từ 3 người tiên phong, cộng đồng đã lớn mạnh với hơn 300 thành viên cốt cán và 5.000 tình nguyện viên, cùng nhau chia sẻ tri thức và kiến tạo giá trị bền vững cho xã hội.",
    ],
    values: [
      {
        title: "Tâm",
        description:
          "Mọi hành động đều xuất phát từ sự chân thành và tình yêu thương, là nền tảng của một cộng đồng gắn kết.",
        delay: "0ms",
      },
      {
        title: "Tầm",
        description:
          "Nhìn xa hơn thành công cá nhân, hướng đến sự phát triển của con người và xã hội.",
        delay: "200ms",
      },
      {
        title: "Đức",
        description:
          "Sự chính trực và trách nhiệm dẫn dắt mọi quyết định, đặt lợi ích cộng đồng lên trên hết.",
        delay: "400ms",
      },
    ],
  },
  founders: {
    heading: "Nhi Le – Hành trình của đam mê và tầm nhìn",
    quote:
      "“Tôi không tin vào con đường thành công ngắn hạn. Tôi tin vào hành trình dài nơi văn hóa, tri thức và con người mới là di sản thực sự.”",
    body:
      "Nhi Lê là doanh nhân, nhà giáo dục và người sáng lập nhiều dự án văn hóa, giáo dục tại Việt Nam, hiện sinh sống và làm việc tại Singapore. Lớn lên trong hoàn cảnh khiêm tốn, chị trải qua không ít khó khăn nhưng vẫn chọn cống hiến cho việc học hỏi, chia sẻ và phát triển bản thân. Thông qua kênh YouTube của mình, chị đã đồng hành cùng hàng nghìn học viên và sáng lập NhiLe Foundation — một quỹ ESG minh bạch, trao quyền cho thế hệ trẻ Việt Nam bằng tri thức và việc tái đầu tư lợi nhuận doanh nghiệp.",
    blockquote:
      "Chúng tôi không chỉ xây dựng doanh nghiệp, mà còn tạo nên nền tảng vững chắc, khơi dậy niềm tin và mở ra cơ hội cho thế hệ tiếp nối.",
  },
  ecosystem: {
    badge: "Mô hình hoạt động",
    heading: "Hệ sinh thái kiến tạo giá trị.",
    core: {
      title: "NhiLe Team & Foundation",
      description: "Sứ mệnh: Đào tạo miễn phí và hỗ trợ cộng đồng.",
    },
    engine: {
      title: "NhiLe Holding",
      description:
        "Thúc đẩy tăng trưởng, tạo lợi nhuận và cơ hội nghề nghiệp cho các công ty thành viên.",
    },
    cycle: {
      left: {
        title: "Tái đầu tư cho xã hội",
        description:
          "Lợi nhuận từ Holding được quay vòng để tài trợ cho các chương trình của Foundation, cấp học bổng và đào tạo kỹ năng cho học viên khó khăn.",
      },
      right: {
        title: "Tạo tác động cộng hưởng",
        description:
          "Học viên từ Foundation có cơ hội làm việc trong hệ sinh thái Holding, kiến tạo vòng tròn phát triển con người bền vững.",
      },
    },
  },
  companies: {
    heading: "Hệ sinh thái đa ngành: kết nối và phát triển",
    subheading:
      "NhiLe Holding hoạt động trong các lĩnh vực giáo dục, không gian làm việc, dịch vụ lưu trú và công nghệ — kiên định với sứ mệnh cộng đồng thông qua tái đầu tư minh bạch và học tập suốt đời.",
    companies: [
      {
        name: "N-Edu – Nền tảng giáo dục lãnh đạo và phát triển bản thân",
        description:
          "N-Edu cung cấp các chương trình đào tạo chuyên sâu về lãnh đạo và phát triển bản thân, trang bị tư duy và kỹ năng cho thế hệ lãnh đạo tương lai.",
        bgColor: "bg-yellow-500",
        logo: "/Nedu.jpg",
      },
      {
        name: "NhiLe Team – Cộng đồng tư duy tiên phong",
        description:
          "NhiLe Team kết nối những cá nhân cùng chí hướng, cùng nhau chia sẻ và nâng đỡ, nuôi dưỡng thế hệ lãnh đạo Việt Nam mới.",
        bgColor: "bg-blue-500",
        logo: "/NhiLeTeam.jpg",
      },
      {
        name: "NhiLe Foundation – Quỹ xã hội phi lợi nhuận",
        description:
          "NhiLe Foundation xây dựng trung tâm học tập, lan tỏa tri thức và phát triển thế hệ kế thừa — đặc biệt là các em nhỏ có hoàn cảnh khó khăn tại Việt Nam.",
        bgColor: "bg-red-500",
        logo: "/NhiLeFoundation.jpg",
      },
      {
        name: "Family Cloud – Giải pháp công nghệ B2B",
        description:
          "Family Cloud cung cấp giải pháp công nghệ và nhân lực IT chất lượng cao cho doanh nghiệp toàn cầu, giúp vận hành hiệu quả và bền vững.",
        bgColor: "bg-orange-500",
        logo: "/FamilyCloud.jpg",
      },
      {
        name: "S&W Homes for More – Kiến tạo không gian sống ý nghĩa",
        description:
          "S&W Homes for More tập trung thiết kế và xây dựng không gian sống hiện đại, tiện nghi và bền vững, đáp ứng nhu cầu ngày càng đa dạng.",
        bgColor: "bg-green-500",
        logo: "/S&W share and work.jpg",
      },
      {
        name: "Nhi's House – Nơi kết nối cộng đồng",
        description:
          "Nhi's House là không gian gặp gỡ, chia sẻ và phát triển bản thân, nơi mọi người được học hỏi và hỗ trợ lẫn nhau.",
        bgColor: "bg-pink-500",
        logo: "/Nhi'sHOUSE.jpg",
      },
      {
        name: "This is Home – Du lịch văn hóa & dịch vụ MICE",
        description:
          "This is Home tạo nên hành trình Art & Culture ấm áp tại Đà Nẵng – Hội An: workshop pha cà phê, điêu khắc gỗ, thưởng thức món quê và dựng MICE cho nhóm nhỏ để mỗi vị khách đều cảm thấy được chào đón, gắn kết và chăm sóc tận tâm.",
        bgColor: "bg-yellow-700",
        logo: "/Thisishome.jpg",
      },
      {
        name: "Hush – Không gian làm việc từ xa",
        description:
          "Hush phát triển giải pháp sống và làm việc linh hoạt cho cộng đồng làm việc từ xa, khơi nguồn sáng tạo mọi lúc mọi nơi.",
        bgColor: "bg-teal-500",
        logo: "/hush doc.png",
      },
    ],
  },
  contact: {
    heading: "Trở thành một phần của di sản.",
    description:
      "Chúng tôi luôn tìm kiếm đối tác, nhà đầu tư và nhân tài cùng chia sẻ giá trị. Hãy kết nối để kiến tạo thay đổi bền vững.",
    cta: "Kết nối với chúng tôi",
  },
  contactModal: {
    title: "Liên hệ / Kết nối với chúng tôi",
    successTitle: "Gửi thông tin thành công!",
    successMessage:
      "Cảm ơn bạn đã liên hệ. Chúng tôi sẽ phản hồi trong thời gian sớm nhất.",
    errorTitle: "Gửi thông tin thất bại!",
    errorMessage: "Đã xảy ra lỗi. Vui lòng thử lại.",
    close: "Đóng",
  },
  contactForm: {
    fields: {
      name: {
        label: "Tên của bạn",
        placeholder: "Nhập tên của bạn",
        required: "Vui lòng nhập tên của bạn.",
      },
      company: {
        label: "Tên công ty (nếu có)",
        placeholder: "Nhập tên công ty",
      },
      purpose: {
        label: "Mục đích liên hệ",
        placeholder: "Chia sẻ cách chúng ta có thể hợp tác",
        required: "Vui lòng cho biết mục đích liên hệ.",
      },
      email: {
        label: "Email",
        placeholder: "Nhập email",
        required: "Vui lòng nhập email.",
        pattern: "Email không hợp lệ.",
      },
      telegram: {
        label: "Telegram (nếu có)",
        placeholder: "Nhập tài khoản Telegram",
      },
    },
    submit: "Gửi",
  },
  footer: {
    copyright: "© 2019 NhiLe Holding. Đã đăng ký bản quyền.",
    tagline: "Kiến tạo di sản bằng Tâm, Tầm và Đức.",
  },
  notFound: {
    title: "404",
    message: "Rất tiếc! Trang không tồn tại.",
    cta: "Quay về Trang chủ",
  },
};

export const translations: Record<Language, TranslationContent> = {
  en,
  vi,
};

export type { TranslationContent };
