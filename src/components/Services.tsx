import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Scissors, 
  Shield, 
  Home, 
  Clock, 
  Calendar,
  CheckCircle,
  Users
} from "lucide-react";
import servicesImage from "@/assets/vet-services.jpg";

const Services = () => {
  const services = [
    {
      icon: Stethoscope,
      title: "Consultas Veterinárias",
      description: "Atendimento completo por veterinários especializados",
      price: "A partir de R$ 80",
      features: ["Exame clínico completo", "Diagnóstico preciso", "Prescrição de medicamentos"],
      available: true
    },
    {
      icon: Shield,
      title: "Vacinação",
      description: "Protocolo completo de vacinação para pets e animais rurais",
      price: "A partir de R$ 45",
      features: ["Vacinas importadas", "Cartão de vacinação", "Agendamento flexível"],
      available: true
    },
    {
      icon: Scissors,
      title: "Cirurgias",
      description: "Cirurgias eletivas e de emergência com equipamentos modernos",
      price: "Sob consulta",
      features: ["Centro cirúrgico equipado", "Anestesia segura", "Pós-operatório completo"],
      available: true
    },
    {
      icon: Home,
      title: "Atendimento Domiciliar",
      description: "Levamos o cuidado veterinário até sua casa",
      price: "A partir de R$ 120",
      features: ["Comodidade para o pet", "Atendimento personalizado", "Raio de 20km"],
      available: true
    }
  ];

  const stats = [
    { number: "5.000+", label: "Animais Atendidos", icon: Users },
    { number: "10+", label: "Anos de Experiência", icon: Calendar },
    { number: "24h", label: "Emergências", icon: Clock },
    { number: "100%", label: "Satisfação", icon: CheckCircle }
  ];

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-bounce-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Serviços Veterinários</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma gama completa de serviços veterinários com profissionais qualificados 
            e equipamentos de última geração para cuidar da saúde dos seus animais.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-20">
          {services.map((service, index) => {
            const Icon = service.icon;
            return (
              <div 
                key={service.title}
                className={`group relative p-6 card-gradient rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-fade-in-up animate-delay-${(index + 1) * 100}`}
              >
                <div className="w-14 h-14 hero-gradient rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                
                <h3 className="text-xl font-bold mb-3">{service.title}</h3>
                <p className="text-muted-foreground mb-4 text-sm leading-relaxed">{service.description}</p>
                
                <div className="text-lg font-bold text-primary mb-4">{service.price}</div>
                
                <ul className="space-y-2 mb-6">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <CheckCircle className="w-4 h-4 text-primary" />
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" size="sm" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Agendar
                </Button>
              </div>
            );
          })}
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-20">
          <div className="animate-slide-left">
            <img
              src={servicesImage}
              alt="Veterinário examinando cachorro"
              className="w-full rounded-2xl shadow-medium"
            />
          </div>
          
          <div className="animate-slide-right">
            <h3 className="text-3xl md:text-4xl font-bold mb-6">
              Cuidado <span className="gradient-text">Profissional</span> e Humanizado
            </h3>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
              Nossa equipe de veterinários experientes está preparada para oferecer o melhor 
              atendimento para seus pets. Utilizamos protocolos internacionais e equipamentos 
              modernos para garantir diagnósticos precisos e tratamentos eficazes.
            </p>
            
            <div className="space-y-6 mb-8">
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <Stethoscope className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Diagnóstico Avançado</h4>
                  <p className="text-muted-foreground text-sm">
                    Exames laboratoriais, radiografias e ultrassonografia para diagnósticos precisos.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <Shield className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Medicina Preventiva</h4>
                  <p className="text-muted-foreground text-sm">
                    Programas de vacinação, vermifugação e check-ups regulares.
                  </p>
                </div>
              </div>
              
              <div className="flex items-start gap-4">
                <div className="w-8 h-8 bg-primary/20 rounded-lg flex items-center justify-center mt-1">
                  <Home className="w-4 h-4 text-primary" />
                </div>
                <div>
                  <h4 className="font-semibold mb-2">Atendimento Domiciliar</h4>
                  <p className="text-muted-foreground text-sm">
                    Consultas e procedimentos no conforto da sua casa.
                  </p>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button variant="hero" size="lg">
                Agendar Consulta
              </Button>
              <Button variant="outline" size="lg">
                Emergência 24h
              </Button>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={stat.label} className={`text-center p-6 card-gradient rounded-xl shadow-soft animate-bounce-in animate-delay-${(index + 1) * 100}`}>
                <div className="w-12 h-12 hero-gradient rounded-xl flex items-center justify-center mx-auto mb-4">
                  <Icon className="w-6 h-6 text-primary-foreground" />
                </div>
                <div className="text-3xl font-bold gradient-text mb-2">{stat.number}</div>
                <div className="text-muted-foreground font-medium">{stat.label}</div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;