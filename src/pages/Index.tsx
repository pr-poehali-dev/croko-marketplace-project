import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const products = [
    // Клоунские носики
    {
      id: 1,
      name: "Красный клоунский носик Premium",
      category: "Клоунские носики",
      price: "2 500 ₽",
      originalPrice: "3 200 ₽",
      discount: "-22%",
      rating: 4.9,
      reviews: 1247,
      image: "/img/a59b9f6f-14fb-4463-9176-1daa5067f64f.jpg",
      isPopular: true,
      characteristics: ["Материал: пластик", "Размер: универсальный", "Крепление: резинка"]
    },
    {
      id: 2,
      name: "Синий носик «Печальный клоун»",
      category: "Клоунские носики",
      price: "1 800 ₽",
      originalPrice: "2 100 ₽",
      discount: "-14%",
      rating: 4.7,
      reviews: 892,
      image: "/img/99adcefd-b9e0-4227-bad7-d3d7be0968f7.jpg",
      isPopular: false,
      characteristics: ["Материал: поролон", "Цвет: насыщенный синий", "Эффект: матовый"]
    },
    // Оружие Hunt: Showdown
    {
      id: 3,
      name: "Nitro Express «Охотник душ»",
      category: "Оружие",
      price: "127 000 ₽",
      originalPrice: "145 000 ₽",
      discount: "-12%",
      rating: 5.0,
      reviews: 156,
      image: "/img/ede8beb7-e29c-414a-b273-9b91bd42989a.jpg",
      isPopular: true,
      characteristics: ["Калибр: .600 Nitro", "Урон: критический", "Точность: высокая"]
    },
    {
      id: 4,
      name: "Набор гримировки «Кровавый клоун»",
      category: "Грим",
      price: "4 500 ₽",
      originalPrice: "6 200 ₽",
      discount: "-27%",
      rating: 4.8,
      reviews: 634,
      image: "/img/a59b9f6f-14fb-4463-9176-1daa5067f64f.jpg",
      isPopular: true,
      characteristics: ["Краски: 12 цветов", "Кисти: 5 шт", "Спонжи: в комплекте"]
    }
  ];

  const addToCart = (productName: string) => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Header */}
      <header className="bg-card border-b border-border">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xl font-bold">
                🎪
              </div>
              <h1 className="text-2xl font-bold text-foreground">CrytikMarket</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                Главная
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                Каталог
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                Оружие
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary font-medium transition-colors">
                Грим
              </a>
            </nav>

            {/* Cart and Profile */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="relative text-muted-foreground hover:text-foreground">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-primary text-primary-foreground">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary/90 via-primary to-destructive text-primary-foreground py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            CrytikMarket 🎭
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-3xl mx-auto">
            Тёмный маркетплейс для истинных ценителей. Клоунские носики, оружие из Hunt: Showdown 
            и профессиональный грим для создания незабываемого образа.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Войти в каталог ужасов
            <Icon name="Skull" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Warning Banner */}
      <section className="bg-destructive/20 border-y border-destructive/50 py-4">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-center text-center">
            <Icon name="AlertTriangle" size={20} className="text-destructive mr-3" />
            <span className="text-destructive font-semibold">
              Внимание! Товары предназначены только для совершеннолетних. Соблюдайте меры предосторожности.
            </span>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-card">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Zap" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Мгновенная доставка</h3>
              <p className="text-muted-foreground text-sm">Дискретно и быстро</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">100% анонимность</h3>
              <p className="text-muted-foreground text-sm">Никто не узнает</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Star" size={28} className="text-primary" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Премиум качество</h3>
              <p className="text-muted-foreground text-sm">Только лучшее</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-destructive/20 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Moon" size={28} className="text-destructive" />
              </div>
              <h3 className="font-semibold mb-2 text-foreground">Работаем ночью</h3>
              <p className="text-muted-foreground text-sm">24/7 в тени</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-foreground">Хиты подполья</h2>
            <Button variant="outline" className="border-primary text-primary hover:bg-primary hover:text-primary-foreground">
              Весь каталог
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {products.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:-translate-y-1 cursor-pointer bg-card border-border">
                <CardContent className="p-4">
                  {/* Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg bg-muted">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.isPopular && (
                      <Badge className="absolute top-2 left-2 bg-secondary text-secondary-foreground">
                        🔥 Хит
                      </Badge>
                    )}
                    <Badge className="absolute top-2 right-2 bg-destructive text-destructive-foreground">
                      {product.discount}
                    </Badge>
                    <div className="absolute bottom-2 left-2">
                      <Badge variant="outline" className="text-xs bg-card/80 backdrop-blur-sm">
                        {product.category}
                      </Badge>
                    </div>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg line-clamp-2 text-foreground">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 text-sm">
                      <div className="flex items-center">
                        <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-medium text-foreground">{product.rating}</span>
                      </div>
                      <span className="text-muted-foreground">({product.reviews})</span>
                    </div>

                    {/* Characteristics */}
                    <div className="text-xs text-muted-foreground space-y-1">
                      {product.characteristics.slice(0, 2).map((char, index) => (
                        <div key={index}>{char}</div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-muted-foreground line-through">{product.originalPrice}</span>
                    </div>

                    {/* Add to Cart */}
                    <Button 
                      onClick={() => addToCart(product.name)}
                      className="w-full mt-4 bg-primary hover:bg-primary/90 text-primary-foreground"
                      size="sm"
                    >
                      <Icon name="ShoppingBag" size={16} className="mr-2" />
                      Добавить в тайник
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-card">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10 text-foreground">Категории товаров</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Клоунские носики", count: "47 товаров", icon: "🔴", description: "Все цвета радуги" },
              { name: "Оружие Hunt", count: "23 предмета", icon: "🔫", description: "Легендарное оружие" },
              { name: "Грим и макияж", count: "156 наборов", icon: "🎨", description: "Превращения" },
              { name: "Аксессуары", count: "89 штук", icon: "🎭", description: "Дополни образ" }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg hover:shadow-primary/20 transition-all duration-300 cursor-pointer group bg-card border-border">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-1 text-foreground">{category.name}</h3>
                  <p className="text-muted-foreground text-sm mb-1">{category.count}</p>
                  <p className="text-xs text-muted-foreground/80">{category.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="py-16 bg-gradient-to-r from-primary/20 to-destructive/20">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Секретные предложения</h2>
          <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
            Подпишись на рассылку и узнавай первым о новых поставках редких товаров и эксклюзивных скидках
          </p>
          <div className="flex max-w-md mx-auto">
            <input 
              type="email" 
              placeholder="Твой секретный e-mail"
              className="flex-1 px-4 py-2 bg-input border border-border rounded-l-lg text-foreground placeholder:text-muted-foreground"
            />
            <Button className="rounded-l-none bg-primary hover:bg-primary/90 text-primary-foreground">
              Войти в тень
            </Button>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-primary-foreground text-xl font-bold">
                  🎪
                </div>
                <h3 className="text-xl font-bold text-foreground">CrytikMarket</h3>
              </div>
              <p className="text-muted-foreground">
                Тёмный маркетплейс для истинных ценителей необычного
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Подполье</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Правила</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Безопасность</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Покупателям</h4>
              <ul className="space-y-2 text-muted-foreground">
                <li><a href="#" className="hover:text-primary transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-primary transition-colors">Гарантии</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Связь</h4>
              <div className="space-y-2 text-muted-foreground">
                <p>Только через Tor</p>
                <p>crytiksupport@onion.com</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="MessageCircle" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                  <Icon name="Mail" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                  <Icon name="Phone" size={20} className="hover:text-primary cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
          <div className="border-t border-border mt-8 pt-8 text-center text-muted-foreground text-sm">
            <p>© 2024 CrytikMarket. Все права защищены. Только для лиц старше 18 лет.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;