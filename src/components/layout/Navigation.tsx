import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav className="fixed top-0 left-0 right-0 bg-[#F3F4F5]/90 backdrop-blur-sm z-50 border-b border-[#282D15]/10">
      <div className="container mx-auto px-8 py-6 flex items-center justify-between">
        <Link to="/" className="flex items-center">
          <img src="https://drive.google.com/file/d/1RoUdPOvQIDZSObVuRWduU-lfnWuoGvxm/view?usp=drive_link" alt="Nestra" className="h-6" />
        </Link>
        
        <div className="hidden md:flex items-center space-x-12">
          <button 
            onClick={() => scrollToSection("como_funciona")}
            className="text-sm text-[#282D15]/70 hover:text-[#282D15] transition-colors"
          >
            ¿Cómo funciona?
          </button>
          <Link 
            to="/sobre-nosotros"
            className="text-sm text-[#282D15]/70 hover:text-[#282D15] transition-colors"
          >
            Sobre nosotros
          </Link>
          <Link 
            to="/proyectos"
            className="text-sm text-[#282D15]/70 hover:text-[#282D15] transition-colors"
          >
            Proyectos
          </Link>
          <button 
            onClick={() => scrollToSection("contacto")}
            className="text-sm text-[#282D15]/70 hover:text-[#282D15] transition-colors"
          >
            Contacto
          </button>
          <Button 
            variant="default" 
            className="bg-[#282D15] hover:bg-[#282D15]/90 text-[#F3F4F5] rounded-none text-sm px-6"
          >
            Construir vivienda
          </Button>
          <Button 
            variant="outline"
            className="border-[#282D15]/20 hover:bg-[#282D15]/5 rounded-none text-sm px-6"
          >
            Iniciar sesión
          </Button>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;