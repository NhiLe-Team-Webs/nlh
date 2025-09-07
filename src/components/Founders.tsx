import founderImage from '@/assets/nhi-le-founder.jpg';

const Founders = () => {
  return (
    <section id="founders" className="section-spacing bg-founder-bg">
      <div className="container mx-auto container-spacing">
        <div className="max-w-5xl mx-auto text-center scroll-reveal-fade">
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-spacing scroll-reveal-right stagger-2 heading-vietnamese">
            Nhi Le - Hành Trình Của Đam Mê Và Tầm Nhìn
          </p>
          <p className="text-base md:text-lg lg:text-xl font-semibold text-red-500 scroll-reveal-left stagger-3 vietnamese-text mb-8">
            " Tôi không tin vào con đường thành công ngắn hạn. Tôi tin vào hành trình dài hạn – nơi văn hóa, tri thức và con người mới là di sản thật sự. "
          </p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="w-72 h-72 lg:w-80 lg:h-80 scroll-reveal-scale stagger-3 flex-shrink-0 hover-image group">
            <div className="relative overflow-hidden rounded-full border-4 border-border shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
              <img 
                src= "/public/NhiLe.jpg"
                alt="Nhi Le - Founder of NhiLe Holding" 
                className="rounded-full object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left scroll-reveal-left stagger-4">
            <div className="content-spacing">
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                Nhi Lê là một doanh nhân, nhà giáo dục, và người sáng lập nhiều dự án văn hóa, giáo dục tại Việt Nam, hiện đang định cư tại Singapore. Cô là người mẹ đơn thân và đã từng trải qua những khó khăn trong cuộc sống, nhưng chọn cách học hỏi, chia sẻ, và phát triển từ chính những khó khăn đó. Cô đã xây dựng cộng đồng học tập hàng chục nghìn người thông qua kênh YouTube của mình và sáng lập NhiLe Foundation – một quỹ ESG hoạt động minh bạch, hỗ trợ trẻ em Việt Nam thông qua đóng góp từ cộng đồng học tập và lợi nhuận doanh nghiệp.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground hover:text-foreground hover:border-primary/80 transition-all duration-300 hover:bg-accent/10 p-6 rounded-r-lg hover-lift scroll-reveal-scale stagger-6 text-lg lg:text-xl body-vietnamese">
                “ Chúng tôi không chỉ xây dựng doanh nghiệp, mà tạo ra nền tảng vững chắc, lôi kéo niềm tin và sức mạnh của cộng đồng để tạo ra cơ hội cho trẻ em và xây dựng thế hệ tương lai.   ”
              </blockquote>
            </div>
          </div>
        </div>  
      </div>
    </section>
  );
};

export default Founders;