import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [cartCount, setCartCount] = useState(0);

  const crocodileProducts = [
    {
      id: 1,
      name: "Американский аллигатор",
      price: "450 000 ₽",
      originalPrice: "520 000 ₽",
      discount: "-13%",
      rating: 4.8,
      reviews: 124,
      image: "/img/2fb18260-053e-4f8a-a627-93d765d45aae.jpg",
      isPopular: true,
      characteristics: ["Длина: 2.5м", "Возраст: 5 лет", "Пол: мужской"]
    },
    {
      id: 2,
      name: "Нильский крокодил",
      price: "680 000 ₽",
      originalPrice: "750 000 ₽",
      discount: "-9%",
      rating: 4.9,
      reviews: 87,
      image: "/img/ee2f3d85-7ef1-4aad-89ae-88198a8ff9e7.jpg",
      isPopular: true,
      characteristics: ["Длина: 3.2м", "Возраст: 8 лет", "Пол: женский"]
    },
    {
      id: 3,
      name: "Карликовый кайман",
      price: "125 000 ₽",
      originalPrice: "140 000 ₽",
      discount: "-11%",
      rating: 4.7,
      reviews: 203,
      image: "/img/39abe000-e412-475f-96b6-8ce3273a576d.jpg",
      isPopular: false,
      characteristics: ["Длина: 1.2м", "Возраст: 3 года", "Пол: мужской"]
    },
    {
      id: 4,
      name: "Австралийский крокодил",
      price: "890 000 ₽",
      originalPrice: "990 000 ₽", 
      discount: "-10%",
      rating: 5.0,
      reviews: 45,
      image: "/img/2fb18260-053e-4f8a-a627-93d765d45aae.jpg",
      isPopular: true,
      characteristics: ["Длина: 4.1м", "Возраст: 12 лет", "Пол: мужской"]
    }
  ];

  const addToCart = (productName: string) => {
    setCartCount(cartCount + 1);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold">
                🐊
              </div>
              <h1 className="text-2xl font-bold text-gray-900">CrokoMarket</h1>
            </div>

            {/* Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Главная
              </a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Каталог
              </a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Доставка
              </a>
              <a href="#" className="text-gray-700 hover:text-primary font-medium transition-colors">
                Профиль
              </a>
            </nav>

            {/* Cart and Profile */}
            <div className="flex items-center space-x-4">
              <Button variant="ghost" className="relative">
                <Icon name="ShoppingCart" size={20} />
                {cartCount > 0 && (
                  <Badge className="absolute -top-2 -right-2 h-5 w-5 p-0 text-xs bg-secondary">
                    {cartCount}
                  </Badge>
                )}
              </Button>
              <Button variant="ghost">
                <Icon name="User" size={20} />
              </Button>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-gradient-to-r from-primary to-primary/80 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold mb-6">
            Крокодилы всех видов
          </h1>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Крупнейший маркетплейс рептилий в России. Качественные крокодилы с доставкой по всей стране.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Смотреть каталог
            <Icon name="ArrowRight" size={20} className="ml-2" />
          </Button>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Truck" size={28} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Быстрая доставка</h3>
              <p className="text-gray-600 text-sm">По всей России от 1 дня</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Shield" size={28} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Гарантия качества</h3>
              <p className="text-gray-600 text-sm">Все рептилии здоровы</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="CreditCard" size={28} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Безопасная оплата</h3>
              <p className="text-gray-600 text-sm">Все способы оплаты</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Headphones" size={28} className="text-secondary" />
              </div>
              <h3 className="font-semibold mb-2">Поддержка 24/7</h3>
              <p className="text-gray-600 text-sm">Всегда поможем</p>
            </div>
          </div>
        </div>
      </section>

      {/* Popular Products */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-10">
            <h2 className="text-3xl font-bold text-gray-900">Популярные крокодилы</h2>
            <Button variant="outline">
              Весь каталог
              <Icon name="ArrowRight" size={16} className="ml-2" />
            </Button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {crocodileProducts.map((product) => (
              <Card key={product.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 cursor-pointer">
                <CardContent className="p-4">
                  {/* Image */}
                  <div className="relative mb-4 overflow-hidden rounded-lg">
                    <img 
                      src={product.image} 
                      alt={product.name}
                      className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-300"
                    />
                    {product.isPopular && (
                      <Badge className="absolute top-2 left-2 bg-secondary">
                        Хит продаж
                      </Badge>
                    )}
                    <Badge className="absolute top-2 right-2 bg-red-500">
                      {product.discount}
                    </Badge>
                  </div>

                  {/* Product Info */}
                  <div className="space-y-2">
                    <h3 className="font-semibold text-lg line-clamp-2">{product.name}</h3>
                    
                    {/* Rating */}
                    <div className="flex items-center space-x-1 text-sm">
                      <div className="flex items-center">
                        <Icon name="Star" size={14} className="fill-yellow-400 text-yellow-400" />
                        <span className="ml-1 font-medium">{product.rating}</span>
                      </div>
                      <span className="text-gray-500">({product.reviews})</span>
                    </div>

                    {/* Characteristics */}
                    <div className="text-xs text-gray-600 space-y-1">
                      {product.characteristics.slice(0, 2).map((char, index) => (
                        <div key={index}>{char}</div>
                      ))}
                    </div>

                    {/* Price */}
                    <div className="flex items-center space-x-2">
                      <span className="text-xl font-bold text-primary">{product.price}</span>
                      <span className="text-sm text-gray-500 line-through">{product.originalPrice}</span>
                    </div>

                    {/* Add to Cart */}
                    <Button 
                      onClick={() => addToCart(product.name)}
                      className="w-full mt-4"
                      size="sm"
                    >
                      <Icon name="ShoppingCart" size={16} className="mr-2" />
                      В корзину
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-10">Категории крокодилов</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Аллигаторы", count: "24 товара", icon: "🐊" },
              { name: "Крокодилы", count: "18 товаров", icon: "🐲" },
              { name: "Кайманы", count: "12 товаров", icon: "🦎" },
              { name: "Редкие виды", count: "8 товаров", icon: "✨" }
            ].map((category, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow cursor-pointer group">
                <CardContent className="p-6 text-center">
                  <div className="text-4xl mb-3 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </div>
                  <h3 className="font-semibold text-lg mb-1">{category.name}</h3>
                  <p className="text-gray-600 text-sm">{category.count}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-3 mb-6">
                <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center text-white text-xl font-bold">
                  🐊
                </div>
                <h3 className="text-xl font-bold">CrokoMarket</h3>
              </div>
              <p className="text-gray-400">
                Крупнейший маркетплейс рептилий в России
              </p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Компания</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">О нас</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Вакансии</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Новости</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Покупателям</h4>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-white transition-colors">Доставка</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Оплата</a></li>
                <li><a href="#" className="hover:text-white transition-colors">Возврат</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Контакты</h4>
              <div className="space-y-2 text-gray-400">
                <p>8 (800) 555-35-35</p>
                <p>info@crokomarket.ru</p>
                <div className="flex space-x-4 mt-4">
                  <Icon name="Instagram" size={20} className="hover:text-white cursor-pointer transition-colors" />
                  <Icon name="Facebook" size={20} className="hover:text-white cursor-pointer transition-colors" />
                  <Icon name="Twitter" size={20} className="hover:text-white cursor-pointer transition-colors" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;