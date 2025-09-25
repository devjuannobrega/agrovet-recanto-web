import { Button } from "@/components/ui/button";
import { Shield, Heart, Stethoscope, Star } from "lucide-react";
import heroImage from "@/assets/hero-veterinary.jpg";

const Hero = () => {
  return (
    <section id="home" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img
          src={heroImage}
          alt="Veterinário cuidando de cães e gatos"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-background/95 via-background/60 to-background/20"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl animate-fade-in">
          <div className="flex items-center gap-3 mb-6">
            <div className="flex gap-1">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 fill-accent text-accent" />
              ))}
            </div>
            <span className="text-muted-foreground font-medium">Mais de 10 anos cuidando dos seus pets</span>
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-6">
            <span className="gradient-text">Cuidado Veterinário</span>
            <br />
            <span className="text-foreground">de Excelência</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed">
            Na Agroshop Vet Recanto, oferecemos produtos veterinários de qualidade e serviços especializados 
            para garantir a saúde e bem-estar dos seus animais.
          </p>

          {/* Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
            <div className="flex items-center gap-3 p-4 card-gradient rounded-lg shadow-soft">
              <Shield className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Produtos Certificados</h3>
                <p className="text-sm text-muted-foreground">Qualidade garantida</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 card-gradient rounded-lg shadow-soft">
              <Heart className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Cuidado Especializado</h3>
                <p className="text-sm text-muted-foreground">Veterinários experientes</p>
              </div>
            </div>
            <div className="flex items-center gap-3 p-4 card-gradient rounded-lg shadow-soft">
              <Stethoscope className="w-8 h-8 text-primary" />
              <div>
                <h3 className="font-semibold">Atendimento Completo</h3>
                <p className="text-sm text-muted-foreground">Todos os serviços veterinários</p>
              </div>
            </div>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4">
            <Button variant="hero" size="xl" className="animate-float">
              Ver Produtos
            </Button>
            <Button variant="outline" size="xl">
              Nossos Serviços
            </Button>
          </div>
        </div>
      </div>

      {/* Floating Elements */}
      <div className="absolute top-20 right-20 w-20 h-20 bg-primary/10 rounded-full animate-float hidden lg:block"></div>
      <div className="absolute bottom-40 right-40 w-12 h-12 bg-accent/20 rounded-full animate-float [animation-delay:2s] hidden lg:block"></div>
      <div className="absolute top-1/2 right-10 w-8 h-8 bg-primary/20 rounded-full animate-float [animation-delay:4s] hidden lg:block"></div>
    </section>
  );
};

export default Hero;