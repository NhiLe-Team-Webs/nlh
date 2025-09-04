const Footer = () => {
  return (
    <footer className="bg-footer-bg py-12 lg:py-16 hover:bg-footer-bg/95 transition-colors duration-500">
      <div className="container mx-auto container-spacing text-center text-muted-foreground">
        <div className="max-w-4xl mx-auto content-spacing">
          <p className="text-sm lg:text-base hover:text-foreground transition-colors duration-300 cursor-default">&copy; 2025 NhiLe Holding. All Rights Reserved.</p>
          <p className="text-sm lg:text-base hover:text-primary transition-colors duration-300 cursor-default">Kiến tạo di sản từ Tâm, Tầm, và Đức.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;