import { Heart, Phone, Mail, MapPin, Clock, Instagram, Facebook } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center shadow-medium">
                <span className="text-primary-foreground font-bold text-xl">AV</span>
              </div>
              <div>
                <h3 className="text-xl font-bold">Agroshop Vet</h3>
                <p className="text-secondary-foreground/80">Recanto dos Animais</p>
              </div>
            </div>
            
            <p className="text-secondary-foreground/80 mb-6 leading-relaxed">
              Há mais de 10 anos cuidando da saúde e bem-estar dos animais com dedicação, 
              profissionalismo e muito amor. Oferecemos produtos veterinários de qualidade 
              e serviços especializados.
            </p>
            
            <div className="flex gap-4">
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a 
                href="#" 
                className="w-10 h-10 bg-secondary-foreground/10 rounded-lg flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-all duration-300"
              >
                <Facebook className="w-5 h-5" />
              </a>
            </div>
          </div>
          
          {/* Contact Info */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Contato</h4>
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">(11) 9 9999-9999</p>
                  <p className="text-sm text-secondary-foreground/70">WhatsApp disponível</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary" />
                <div>
                  <p className="font-medium">contato@agroshopvet.com.br</p>
                  <p className="text-sm text-secondary-foreground/70">Resposta em até 2h</p>
                </div>
              </div>
              
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-1" />
                <div>
                  <p className="font-medium">Rua dos Animais, 123</p>
                  <p className="text-sm text-secondary-foreground/70">
                    Recanto dos Bichos<br />
                    Sua Cidade - SP, 12345-678
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          {/* Services */}
          <div>
            <h4 className="font-semibold text-lg mb-6">Nossos Serviços</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">
                  Consultas Veterinárias
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">
                  Vacinação
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">
                  Cirurgias
                </a>
              </li>
              <li>
                <a href="#services" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">
                  Atendimento Domiciliar
                </a>
              </li>
              <li>
                <a href="#products" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">
                  Medicamentos
                </a>
              </li>
              <li>
                <a href="#products" className="text-secondary-foreground/80 hover:text-secondary-foreground hover:underline transition-colors">
                  Rações e Suplementos
                </a>
              </li>
            </ul>
          </div>
        </div>
        
        {/* Horarios */}
        <div className="mt-12 p-6 bg-secondary-foreground/5 rounded-xl">
          <div className="flex items-center gap-3 mb-4">
            <Clock className="w-6 h-6 text-primary" />
            <h4 className="font-semibold text-lg">Horários de Funcionamento</h4>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div>
              <p className="font-medium">Segunda a Sexta</p>
              <p className="text-secondary-foreground/80">8h às 18h</p>
            </div>
            <div>
              <p className="font-medium">Sábado</p>
              <p className="text-secondary-foreground/80">8h às 12h</p>
            </div>
            <div>
              <p className="font-medium text-primary">Emergências</p>
              <p className="text-primary font-medium">24 horas</p>
            </div>
          </div>
        </div>
      </div>
      
      {/* Copyright */}
      <div className="border-t border-secondary-foreground/20">
        <div className="container mx-auto px-4 py-6">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-secondary-foreground/70 text-sm">
              © 2024 Agroshop Vet Recanto dos Animais. Todos os direitos reservados.
            </p>
            <p className="flex items-center gap-2 text-secondary-foreground/70 text-sm">
              Feito com <Heart className="w-4 h-4 text-primary fill-current" /> para os animais
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;