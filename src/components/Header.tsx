import { Button } from "@/components/ui/button";
import { Phone, MapPin, Clock, Menu } from "lucide-react";
import { useState } from "react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Top Bar */}
      <div className="bg-secondary text-secondary-foreground py-2 px-4">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-center text-sm">
          <div className="flex flex-col md:flex-row gap-4 mb-2 md:mb-0">
            <div className="flex items-center gap-2">
              <Phone className="w-4 h-4" />
              <span>(11) 9 9999-9999</span>
            </div>
            <div className="flex items-center gap-2">
              <Clock className="w-4 h-4" />
              <span>Seg-Sex: 8h-18h | Sáb: 8h-12h</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>Recanto dos Animais - Sua cidade, SP</span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className="bg-background shadow-medium sticky top-0 z-50">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center shadow-medium">
                <span className="text-primary-foreground font-bold text-xl">AV</span>
              </div>
              <div>
                <h1 className="text-xl font-bold gradient-text">Agroshop Vet</h1>
                <p className="text-muted-foreground text-sm">Recanto dos Animais</p>
              </div>
            </div>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center gap-8">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium">
                Início
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium">
                Produtos
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium">
                Serviços
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium">
                Sobre
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium">
                Contato
              </a>
            </nav>

            {/* CTA Button */}
            <div className="hidden md:block">
              <Button variant="hero" size="lg">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden p-2"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <Menu className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-background border-t shadow-medium">
            <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
              <a href="#home" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Início
              </a>
              <a href="#products" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Produtos
              </a>
              <a href="#services" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Serviços
              </a>
              <a href="#about" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Sobre
              </a>
              <a href="#contact" className="text-foreground hover:text-primary transition-colors font-medium py-2">
                Contato
              </a>
              <Button variant="hero" size="lg" className="mt-4">
                <Phone className="w-4 h-4" />
                Fale Conosco
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
};

export default Header;