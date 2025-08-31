import { ArrowDown, ArrowLeftCircle } from 'lucide-react';

const Ecosystem = () => {
  return (
    <section id="ecosystem" className="py-20 md:py-32 bg-ecosystem-bg">
      <div className="container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto scroll-reveal">
          <h2 className="text-sm font-bold uppercase tracking-widest text-primary mb-2">Mô Hình Hoạt Động</h2>
          <p className="text-3xl md:text-5xl font-bold text-foreground mb-16">Hệ sinh thái kiến tạo giá trị.</p>
        </div>

        <div className="flex flex-col items-center space-y-8 scroll-reveal">
          {/* The Core */}
          <div className="w-full max-w-md p-6 glassmorphism rounded-2xl">
            <h3 className="text-2xl font-bold text-foreground">NhiLe Team & Foundation</h3>
            <p className="text-muted-foreground">Sứ mệnh: Đào tạo nghề miễn phí & Hỗ trợ cộng đồng.</p>
          </div>

          <div className="text-foreground transform rotate-90 md:rotate-0">
            <ArrowDown className="w-10 h-10" />
          </div>

          {/* The Engine */}
          <div className="w-full max-w-2xl p-8 glassmorphism rounded-2xl">
            <h3 className="text-3xl font-bold text-foreground">NhiLe Holding</h3>
            <p className="text-muted-foreground mt-2">
              Động cơ tăng trưởng, tạo ra lợi nhuận và cơ hội việc làm từ các công ty thành viên.
            </p>
          </div>
          
          <div className="text-primary transform -rotate-90">
            <ArrowLeftCircle className="w-12 h-12" />
          </div>

          {/* The Cycle */}
          <div className="w-full max-w-4xl p-6 bg-background rounded-2xl border border-border">
            <div className="md:flex justify-between items-center text-left">
              <div className="p-4">
                <h4 className="text-xl font-bold text-primary">Tái Đầu Tư Cho Xã Hội</h4>
                <p className="text-muted-foreground">
                  Lợi nhuận từ Holding được quay vòng, tài trợ cho các hoạt động của Foundation, 
                  giúp đỡ trẻ em khó khăn và tiếp tục các khóa học kỹ năng.
                </p>
              </div>
              <div className="hidden md:block border-l border-border h-20 mx-8"></div>
              <div className="p-4 mt-4 md:mt-0 border-t md:border-t-0 border-border">
                <h4 className="text-xl font-bold text-green-500">Tạo Tác Động Tích Cực</h4>
                <p className="text-muted-foreground">
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