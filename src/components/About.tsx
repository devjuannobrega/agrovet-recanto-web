import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  MapPin, 
  Clock,
  Heart,
  Shield,
  CheckCircle
} from "lucide-react";

const About = () => {
  const values = [
    {
      icon: Heart,
      title: "Amor pelos Animais",
      description: "Tratamos cada animal com o carinho e respeito que merecem"
    },
    {
      icon: Shield,
      title: "Confiabilidade",
      description: "Produtos certificados e serviços com garantia de qualidade"
    },
    {
      icon: Users,
      title: "Atendimento Humanizado",
      description: "Equipe dedicada e sempre pronta para ajudar você e seu pet"
    }
  ];

  const achievements = [
    "Mais de 10 anos no mercado veterinário",
    "Equipe de veterinários especializados",
    "Produtos das melhores marcas nacionais e importadas",
    "Atendimento 24h para emergências",
    "Parcerias com laboratórios renomados",
    "Programa de fidelidade exclusivo"
  ];

  return (
    <section id="about" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Sobre a Agroshop Vet</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Há mais de uma década cuidando da saúde e bem-estar dos animais com 
            dedicação, profissionalismo e muito amor.
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div>
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Nossa <span className="gradient-text">História</span>
            </h3>
            <p className="text-muted-foreground text-lg mb-6 leading-relaxed">
              A Agroshop Vet Recanto dos Animais nasceu da paixão por cuidar dos animais e 
              da necessidade de oferecer produtos e serviços veterinários de qualidade superior 
              em nossa região.
            </p>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Começamos como uma pequena loja de produtos agropecuários e, com o tempo, 
              expandimos nossos serviços para incluir uma clínica veterinária completa, 
              sempre mantendo nosso compromisso com a excelência no atendimento.
            </p>
            
            {/* Achievements */}
            <div className="space-y-3 mb-8">
              {achievements.map((achievement, index) => (
                <div key={index} className="flex items-center gap-3">
                  <CheckCircle className="w-5 h-5 text-primary" />
                  <span className="text-foreground">{achievement}</span>
                </div>
              ))}
            </div>
            
            <Button variant="hero" size="lg">
              Conheça Nossa Equipe
            </Button>
          </div>
          
          <div className="space-y-8">
            {/* Mission Card */}
            <div className="p-8 card-gradient rounded-2xl shadow-medium">
              <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center mb-4">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Nossa Missão</h4>
              <p className="text-muted-foreground leading-relaxed">
                Proporcionar cuidados veterinários excepcionais e produtos de qualidade, 
                contribuindo para a saúde, bem-estar e longevidade dos animais, 
                fortalecendo o vínculo entre pets e suas famílias.
              </p>
            </div>
            
            {/* Vision Card */}
            <div className="p-8 card-gradient rounded-2xl shadow-medium">
              <div className="w-12 h-12 accent-gradient rounded-xl flex items-center justify-center mb-4">
                <MapPin className="w-6 h-6 text-accent-foreground" />
              </div>
              <h4 className="text-xl font-bold mb-3">Nossa Visão</h4>
              <p className="text-muted-foreground leading-relaxed">
                Ser reconhecida como a melhor agropecuária e clínica veterinária da região, 
                referência em qualidade, inovação e atendimento humanizado.
              </p>
            </div>
          </div>
        </div>

        {/* Values */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {values.map((value, index) => {
            const Icon = value.icon;
            return (
              <div 
                key={value.title}
                className="group text-center p-8 card-gradient rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2"
              >
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-bold mb-4">{value.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{value.description}</p>
              </div>
            );
          })}
        </div>

        {/* Info Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="p-8 trust-gradient text-secondary-foreground rounded-2xl shadow-strong">
            <Clock className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Horários de Funcionamento</h3>
            <div className="space-y-2">
              <div className="flex justify-between">
                <span>Segunda a Sexta:</span>
                <span className="font-medium">8h às 18h</span>
              </div>
              <div className="flex justify-between">
                <span>Sábado:</span>
                <span className="font-medium">8h às 12h</span>
              </div>
              <div className="flex justify-between">
                <span>Emergências:</span>
                <span className="font-medium">24h</span>
              </div>
            </div>
          </div>
          
          <div className="p-8 accent-gradient text-accent-foreground rounded-2xl shadow-strong">
            <MapPin className="w-12 h-12 mb-6" />
            <h3 className="text-2xl font-bold mb-4">Nossa Localização</h3>
            <p className="mb-4">
              Estamos estrategicamente localizados no Recanto dos Animais, 
              oferecendo fácil acesso para toda a região.
            </p>
            <Button variant="outline" className="border-accent-foreground text-accent-foreground hover:bg-accent-foreground hover:text-accent">
              Ver no Mapa
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;