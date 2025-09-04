import { ArrowDown, ArrowDownCircle } from 'lucide-react';

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="section-spacing bg-ecosystem-bg">
      <div className="container mx-auto container-spacing text-center">
        <div className="max-w-5xl mx-auto scroll-reveal-fade">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary heading-spacing scroll-reveal-left stagger-1 vietnamese-text">Mô Hình Hoạt Động</h2>
          <p className="text-3xl md:text-5xl lg:text-6xl font-bold text-foreground text-spacing scroll-reveal-right stagger-2 heading-vietnamese">Hệ sinh thái kiến tạo giá trị.</p>
        </div>

        <div className="flex flex-col items-center content-spacing max-w-6xl mx-auto scroll-reveal-scale stagger-3">
          {/* The Core */}
          <div className="w-full max-w-lg card-spacing glassmorphism rounded-2xl hover-card group cursor-pointer">
            <h3 className="text-2xl lg:text-3xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 heading-spacing">NhiLe Team & Foundation</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-lg">Sứ mệnh: Đào tạo nghề miễn phí & Hỗ trợ cộng đồng.</p>
          </div>

          <div className="text-foreground transform rotate-90 md:rotate-0 hover-bounce">
            <ArrowDown className="w-12 h-12 hover:text-primary transition-colors duration-300" />
          </div>

          {/* The Engine */}
          <div className="w-full max-w-2xl card-spacing glassmorphism rounded-2xl hover-card group cursor-pointer">
            <h3 className="text-3xl lg:text-4xl font-bold text-foreground group-hover:text-primary transition-colors duration-300 heading-spacing">NhiLe Holding</h3>
            <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 text-lg leading-relaxed">
              Động cơ tăng trưởng, tạo ra lợi nhuận và cơ hội việc làm từ các công ty thành viên.
            </p>
          </div>
          
          <div className="text-primary hover-bounce">
            <ArrowDownCircle className="w-14 h-14 hover:scale-110 transition-transform duration-300" />
          </div>

          {/* The Cycle */}
          <div className="w-full max-w-5xl card-spacing bg-background rounded-2xl border border-border hover-card group cursor-pointer">
            <div className="lg:flex justify-between items-center text-left">
              <div className="p-6 group-hover:bg-accent/5 rounded-lg transition-colors duration-300">
                <h4 className="text-xl lg:text-2xl font-bold text-primary group-hover:text-primary/80 transition-colors duration-300 heading-spacing">Tái Đầu Tư Cho Xã Hội</h4>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  Lợi nhuận từ Holding được quay vòng, tài trợ cho các hoạt động của Foundation, 
                  giúp đỡ trẻ em khó khăn và tiếp tục các khóa học kỹ năng.
                </p>
              </div>
              <div className="hidden lg:block border-l border-border h-24 mx-8 group-hover:border-primary/50 transition-colors duration-300"></div>
              <div className="p-6 mt-6 lg:mt-0 border-t lg:border-t-0 border-border group-hover:bg-accent/5 rounded-lg transition-colors duration-300">
                <h4 className="text-xl lg:text-2xl font-bold text-green-500 group-hover:text-green-400 transition-colors duration-300 heading-spacing">Tạo Tác Động Tích Cực</h4>
                <p className="text-muted-foreground group-hover:text-foreground transition-colors duration-300 leading-relaxed">
                  Học viên từ Foundation có cơ hội làm việc tại Holding, tạo ra một chu trình phát triển con người bền vững và chuyên nghiệp.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;