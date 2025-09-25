import { Button } from "@/components/ui/button";
import { ShoppingCart, Star, Package, Pill, Heart } from "lucide-react";
import productsImage from "@/assets/vet-products.jpg";

const Products = () => {
  const productCategories = [
    {
      icon: Pill,
      title: "Medicamentos",
      description: "Antibióticos, anti-inflamatórios, vermífugos e muito mais",
      features: ["Prescrição veterinária", "Controle de qualidade", "Entrega rápida"],
      highlight: "Receita obrigatória"
    },
    {
      icon: Package,
      title: "Rações e Suplementos",
      description: "Alimentação completa para cães, gatos e animais rurais",
      features: ["Marcas premium", "Todos os portes", "Suporte nutricional"],
      highlight: "Frete grátis*"
    },
    {
      icon: Heart,
      title: "Acessórios Pet",
      description: "Coleiras, brinquedos, camas e produtos de higiene",
      features: ["Variedade completa", "Qualidade garantida", "Preços especiais"],
      highlight: "Novidades semanais"
    }
  ];

  const featuredProducts = [
    {
      name: "Ração Premium Adulto",
      price: "R$ 89,90",
      originalPrice: "R$ 109,90", 
      rating: 5,
      category: "Alimentação",
      discount: "18% OFF"
    },
    {
      name: "Vermífugo Broad Spectrum",
      price: "R$ 24,90",
      rating: 5,
      category: "Medicamentos",
      prescription: true
    },
    {
      name: "Kit Higiene Completo",
      price: "R$ 65,90",
      originalPrice: "R$ 85,90",
      rating: 4,
      category: "Acessórios",
      discount: "23% OFF"
    }
  ];

  return (
    <section id="products" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16 animate-fade-in-up">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Produtos Veterinários</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos uma linha completa de produtos veterinários, rações premium e acessórios 
            para garantir a saúde e felicidade dos seus animais.
          </p>
        </div>

        {/* Product Categories */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
          {productCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <div 
                key={category.title}
                className={`group relative p-8 card-gradient rounded-2xl shadow-medium hover:shadow-strong transition-all duration-300 hover:-translate-y-2 animate-scale-in animate-delay-${(index + 1) * 100}`}
              >
                <div className="absolute top-6 right-6 px-3 py-1 accent-gradient rounded-full text-sm font-medium">
                  {category.highlight}
                </div>
                
                <div className="w-16 h-16 hero-gradient rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <Icon className="w-8 h-8 text-primary-foreground" />
                </div>
                
                <h3 className="text-2xl font-bold mb-3">{category.title}</h3>
                <p className="text-muted-foreground mb-6">{category.description}</p>
                
                <ul className="space-y-2 mb-8">
                  {category.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm">
                      <div className="w-2 h-2 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button variant="outline" className="w-full group-hover:bg-primary group-hover:text-primary-foreground">
                  Ver Produtos
                </Button>
              </div>
            );
          })}
        </div>

        {/* Featured Products */}
        <div className="bg-background rounded-3xl shadow-strong p-8 md:p-12 animate-slide-right">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            <div className="lg:w-1/2">
              <h3 className="text-3xl md:text-4xl font-bold mb-6">
                Produtos em <span className="gradient-text">Destaque</span>
              </h3>
              <p className="text-muted-foreground text-lg mb-8">
                Selecionamos os melhores produtos com ofertas especiais para você economizar 
                no cuidado do seu pet.
              </p>
              
              <div className="space-y-6">
                {featuredProducts.map((product, index) => (
                  <div key={product.name} className="flex items-center gap-4 p-4 border rounded-xl hover:shadow-medium transition-all duration-300">
                    <div className="w-16 h-16 bg-muted rounded-xl flex items-center justify-center">
                      <Package className="w-8 h-8 text-primary" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-center gap-2 mb-1">
                        <h4 className="font-semibold">{product.name}</h4>
                        {product.prescription && (
                          <span className="text-xs bg-destructive text-destructive-foreground px-2 py-1 rounded">
                            Receita
                          </span>
                        )}
                        {product.discount && (
                          <span className="text-xs accent-gradient px-2 py-1 rounded font-medium">
                            {product.discount}
                          </span>
                        )}
                      </div>
                      
                      <div className="flex items-center gap-2 mb-2">
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-3 h-3 ${i < product.rating ? 'fill-accent text-accent' : 'text-muted-foreground'}`} 
                            />
                          ))}
                        </div>
                        <span className="text-xs text-muted-foreground">{product.category}</span>
                      </div>
                      
                      <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-primary">{product.price}</span>
                        {product.originalPrice && (
                          <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                        )}
                      </div>
                    </div>
                    
                    <Button size="sm" variant="ghost">
                      <ShoppingCart className="w-4 h-4" />
                    </Button>
                  </div>
                ))}
              </div>
              
              <Button variant="hero" size="lg" className="mt-8">
                Ver Todos os Produtos
              </Button>
            </div>
            
            <div className="lg:w-1/2">
              <img
                src={productsImage}
                alt="Produtos veterinários em destaque"
                className="w-full rounded-2xl shadow-medium"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Products;