import founderImage from '@/assets/nhi-le-founder.jpg';

const Founders = () => {
  return (
    <section id="founders" className="section-spacing bg-founder-bg">
      <div className="container mx-auto container-spacing">
        <div className="max-w-5xl mx-auto text-center scroll-reveal-fade">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary heading-spacing scroll-reveal-left stagger-1 vietnamese-text">Người Thuyền Trưởng</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-spacing scroll-reveal-right stagger-2 heading-vietnamese">Nhi Le - Hành Trình Của Đam Mê Và Tầm Nhìn</p>
        </div>
        
        <div className="flex flex-col lg:flex-row items-center justify-center gap-12 lg:gap-16 max-w-6xl mx-auto">
          <div className="w-72 h-72 lg:w-80 lg:h-80 scroll-reveal-scale stagger-3 flex-shrink-0 hover-image group">
            <div className="relative overflow-hidden rounded-full border-4 border-border shadow-lg group-hover:shadow-2xl group-hover:shadow-primary/20 transition-all duration-500">
              <img 
                src={founderImage} 
                alt="Nhi Le - Founder of NhiLe Holding" 
                className="rounded-full object-cover w-full h-full transition-transform duration-500 group-hover:scale-110"
              />
            </div>
          </div>
          
          <div className="lg:w-2/3 text-center lg:text-left scroll-reveal-left stagger-4">
            <div className="content-spacing">
              <p className="text-lg lg:text-xl leading-relaxed text-muted-foreground scroll-reveal-fade stagger-5 body-vietnamese">
                Từ những ngày đầu tiên, Nhi Le đã quyết tâm chia sẻ kiến thức và kỹ năng tới với giới trẻ Việt Nam, 
                đặc biệt là những em nhỏ có hoàn cảnh khó khăn. Với tâm huyết không ngừng, Nhi Le đã kêu gọi 
                những người cùng chí hướng tham gia để xây dựng một cộng đồng vững mạnh, tạo ra những giá trị bền vững cho tương lai.
              </p>
              <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground hover:text-foreground hover:border-primary/80 transition-all duration-300 hover:bg-accent/10 p-6 rounded-r-lg hover-lift scroll-reveal-scale stagger-6 text-lg lg:text-xl body-vietnamese">
                "Chúng tôi không chỉ xây dựng doanh nghiệp. Chúng tôi kiến tạo một di sản về niềm tin, lòng trắc ẩn và sức mạnh của sự đoàn kết."
              </blockquote>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;