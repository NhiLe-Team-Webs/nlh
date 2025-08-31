import founderImage from '@/assets/nhi-le-founder.jpg';

const Founders = () => {
  return (
    <section id="founders" className="py-20 md:py-32 bg-founder-bg">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center scroll-reveal">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Người Thuyền Trưởng</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground mb-16">Nhi Le - Hành Trình Của Đam Mê Và Tầm Nhìn</p>
        </div>
        
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          <div className="w-64 h-64 scroll-reveal flex-shrink-0">
            <img 
              src={founderImage} 
              alt="Nhi Le - Founder of NhiLe Holding" 
              className="rounded-full object-cover w-full h-full border-4 border-border shadow-lg"
            />
          </div>
          
          <div className="md:w-2/3 text-center md:text-left scroll-reveal" style={{ transitionDelay: '200ms' }}>
            <p className="text-lg leading-relaxed text-muted-foreground mb-6">
              Từ những ngày đầu tiên, Nhi Le đã quyết tâm chia sẻ kiến thức và kỹ năng tới với giới trẻ Việt Nam, 
              đặc biệt là những em nhỏ có hoàn cảnh khó khăn. Với tâm huyết không ngừng, Nhi Le đã kêu gọi 
              những người cùng chí hướng tham gia để xây dựng một cộng đồng vững mạnh, tạo ra những giá trị bền vững cho tương lai.
            </p>
            <blockquote className="border-l-4 border-primary pl-6 italic text-muted-foreground">
              "Chúng tôi không chỉ xây dựng doanh nghiệp. Chúng tôi kiến tạo một di sản về niềm tin, lòng trắc ẩn và sức mạnh của sự đoàn kết."
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Founders;