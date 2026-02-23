import { Heart } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 px-4 border-t border-border">
      <div className="container-narrow">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            <span>© {currentYear} Lucas Pastorizzi. Todos os direitos reservados.</span>
          </div>
          
          <div className="flex items-center gap-2 text-muted-foreground text-sm">
            
           
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
