import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageCircle,
  Send,
  Instagram,
  Facebook
} from "lucide-react";

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Entre em Contato</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Estamos sempre prontos para ajudar você e seu pet. Entre em contato conosco 
            e agende uma consulta ou tire suas dúvidas.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Informações de Contato</h3>
              
              <div className="space-y-6">
                <div className="flex items-start gap-4 p-4 card-gradient rounded-xl shadow-soft">
                  <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                    <Phone className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Telefone</h4>
                    <p className="text-muted-foreground">(11) 9 9999-9999</p>
                    <p className="text-sm text-muted-foreground">WhatsApp disponível</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 card-gradient rounded-xl shadow-soft">
                  <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                    <Mail className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">E-mail</h4>
                    <p className="text-muted-foreground">contato@agroshopvet.com.br</p>
                    <p className="text-sm text-muted-foreground">Respondemos em até 2h</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 card-gradient rounded-xl shadow-soft">
                  <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                    <MapPin className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Endereço</h4>
                    <p className="text-muted-foreground">
                      Rua dos Animais, 123<br />
                      Recanto dos Bichos<br />
                      Sua Cidade - SP, 12345-678
                    </p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 p-4 card-gradient rounded-xl shadow-soft">
                  <div className="w-10 h-10 hero-gradient rounded-lg flex items-center justify-center">
                    <Clock className="w-5 h-5 text-primary-foreground" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1">Horários</h4>
                    <p className="text-muted-foreground">
                      Seg-Sex: 8h às 18h<br />
                      Sábado: 8h às 12h<br />
                      <span className="text-primary font-medium">Emergências: 24h</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Social Media */}
            <div>
              <h4 className="font-semibold mb-4">Redes Sociais</h4>
              <div className="flex gap-4">
                <Button variant="outline" size="icon">
                  <Instagram className="w-5 h-5" />
                </Button>
                <Button variant="outline" size="icon">
                  <Facebook className="w-5 h-5" />
                </Button>
                <Button variant="hero" size="icon">
                  <MessageCircle className="w-5 h-5" />
                </Button>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <div className="p-8 card-gradient rounded-2xl shadow-strong">
              <h3 className="text-2xl font-bold mb-6">Envie uma Mensagem</h3>
              
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Nome Completo</label>
                    <Input placeholder="Seu nome" className="transition-all duration-200 focus:scale-105" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Telefone</label>
                    <Input placeholder="(11) 9 9999-9999" className="transition-all duration-200 focus:scale-105" />
                  </div>
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">E-mail</label>
                  <Input type="email" placeholder="seu@email.com" className="transition-all duration-200 focus:scale-105" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Tipo de Animal</label>
                  <Input placeholder="Ex: Cão, Gato, Bovino, etc." className="transition-all duration-200 focus:scale-105" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Assunto</label>
                  <Input placeholder="Consulta, Produto, Emergência..." className="transition-all duration-200 focus:scale-105" />
                </div>
                
                <div>
                  <label className="block text-sm font-medium mb-2">Mensagem</label>
                  <Textarea 
                    placeholder="Descreva como podemos ajudar você e seu pet..."
                    rows={6}
                    className="transition-all duration-200 focus:scale-105"
                  />
                </div>
                
                <Button variant="hero" size="lg" className="w-full md:w-auto">
                  <Send className="w-4 h-4 mr-2" />
                  Enviar Mensagem
                </Button>
              </form>
            </div>
          </div>
        </div>

        {/* Emergency Contact */}
        <div className="mt-16 p-8 trust-gradient text-secondary-foreground rounded-2xl shadow-strong text-center">
          <h3 className="text-2xl font-bold mb-4">Emergências 24 Horas</h3>
          <p className="mb-6">
            Para situações de emergência, nossa equipe está disponível 24 horas por dia, 7 dias por semana.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button variant="outline" size="lg" className="border-secondary-foreground text-secondary-foreground hover:bg-secondary-foreground hover:text-secondary">
              <Phone className="w-4 h-4 mr-2" />
              Ligar Agora: (11) 9 9999-9999
            </Button>
            <Button variant="accent" size="lg">
              <MessageCircle className="w-4 h-4 mr-2" />
              WhatsApp Emergência
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;