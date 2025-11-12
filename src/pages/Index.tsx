import { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setActiveSection(id);
      setIsMobileMenuOpen(false);
    }
  };

  const portfolioItems = [
    {
      id: 1,
      image: 'https://cdn.poehali.dev/projects/8bd1f897-aaa5-42ef-a482-5190bc28147b/files/7d96b0aa-c200-40d3-99b8-f708274f5790.jpg',
      title: 'Портретная съёмка',
      category: 'Портрет'
    },
    {
      id: 2,
      image: 'https://cdn.poehali.dev/projects/8bd1f897-aaa5-42ef-a482-5190bc28147b/files/176b6b21-62e4-4879-9c68-0e634d3b32c5.jpg',
      title: 'Модная съёмка',
      category: 'Мода'
    },
    {
      id: 3,
      image: 'https://cdn.poehali.dev/projects/8bd1f897-aaa5-42ef-a482-5190bc28147b/files/18ae8d3f-7717-4740-82aa-3576906ffa29.jpg',
      title: 'Студийная работа',
      category: 'Студия'
    }
  ];

  const services = [
    {
      icon: 'Camera',
      title: 'Портретная съёмка',
      description: 'Профессиональные портреты для бизнеса и личного использования'
    },
    {
      icon: 'Users',
      title: 'Семейная съёмка',
      description: 'Создание тёплых семейных воспоминаний в естественной обстановке'
    },
    {
      icon: 'Sparkles',
      title: 'Событийная фотография',
      description: 'Документирование важных моментов вашей жизни'
    },
    {
      icon: 'ShoppingBag',
      title: 'Коммерческая съёмка',
      description: 'Фотосъёмка для бизнеса, товаров и рекламных материалов'
    }
  ];

  const pricing = [
    {
      title: 'Портрет',
      duration: '1 час',
      photos: '20 фото',
      price: '5 000 ₽',
      features: ['Студия или локация', 'Обработка фото', 'Онлайн-галерея']
    },
    {
      title: 'Семейная',
      duration: '2 часа',
      photos: '40 фото',
      price: '8 000 ₽',
      features: ['Выбор локации', 'Полная обработка', 'Печать в подарок']
    },
    {
      title: 'Событие',
      duration: '4 часа',
      photos: '100+ фото',
      price: '15 000 ₽',
      features: ['Репортажная съёмка', 'Быстрая обработка', 'Онлайн-альбом']
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          isScrolled ? 'bg-white/95 backdrop-blur-sm shadow-sm' : 'bg-transparent'
        }`}
      >
        <div className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold tracking-tight">ФОТОГРАФ</h1>
            <div className="hidden md:flex gap-8">
              {['home', 'portfolio', 'services', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-sm uppercase tracking-wider transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'pricing' && 'Прайс'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
            <Button 
              variant="ghost" 
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <Icon name={isMobileMenuOpen ? "X" : "Menu"} size={24} />
            </Button>
          </div>
        </div>
        {isMobileMenuOpen && (
          <div className="md:hidden bg-white border-t shadow-lg">
            <div className="container mx-auto px-6 py-4 flex flex-col gap-4">
              {['home', 'portfolio', 'services', 'pricing', 'contact'].map((section) => (
                <button
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`text-left text-sm uppercase tracking-wider py-2 transition-colors hover:text-accent ${
                    activeSection === section ? 'text-accent font-semibold' : 'text-foreground'
                  }`}
                >
                  {section === 'home' && 'Главная'}
                  {section === 'portfolio' && 'Портфолио'}
                  {section === 'services' && 'Услуги'}
                  {section === 'pricing' && 'Прайс'}
                  {section === 'contact' && 'Контакты'}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      <section
        id="home"
        className="min-h-screen flex items-center justify-center relative overflow-hidden"
      >
        <div className="absolute inset-0 z-0">
          <img
            src="https://cdn.poehali.dev/files/4704cc06-d49a-4ab1-b9e4-c16f44047464.png"
            alt="Hero"
            className="w-full h-full object-cover opacity-20"
          />
        </div>
        <div className="container mx-auto px-6 z-10 text-center animate-fade-in">
          <h2 className="text-6xl md:text-8xl font-light mb-6 tracking-tight">
            Создаю<br />истории
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 max-w-2xl mx-auto">
            Профессиональная фотография, которая сохраняет ваши важные моменты
          </p>
          <Button
            size="lg"
            onClick={() => scrollToSection('contact')}
            className="bg-accent hover:bg-accent/90 text-accent-foreground text-lg px-8 py-6"
          >
            Связаться со мной
          </Button>
        </div>
      </section>

      <section id="portfolio" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light text-center mb-16 animate-fade-in">Портфолио</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {portfolioItems.map((item, index) => (
              <Card
                key={item.id}
                className="group overflow-hidden border-0 shadow-lg hover:shadow-2xl transition-all duration-500 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-[3/4] overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                    <div className="p-6 text-white translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                      <p className="text-sm uppercase tracking-wider mb-2">{item.category}</p>
                      <h3 className="text-xl font-semibold">{item.title}</h3>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="services" className="py-24">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light text-center mb-16">Услуги</h2>
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {services.map((service, index) => (
              <div
                key={index}
                className="flex gap-6 p-8 rounded-lg hover:bg-secondary/50 transition-all duration-300 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center">
                    <Icon name={service.icon} size={32} className="text-accent" />
                  </div>
                </div>
                <div>
                  <h3 className="text-2xl font-semibold mb-3">{service.title}</h3>
                  <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="pricing" className="py-24 bg-secondary/30">
        <div className="container mx-auto px-6">
          <h2 className="text-5xl font-light text-center mb-16">Прайс</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricing.map((plan, index) => (
              <Card
                key={index}
                className="p-8 hover:shadow-xl transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <h3 className="text-3xl font-semibold mb-2">{plan.title}</h3>
                <p className="text-muted-foreground mb-6">{plan.duration}</p>
                <div className="mb-8">
                  <span className="text-5xl font-bold">{plan.price}</span>
                </div>
                <div className="space-y-4 mb-8">
                  <div className="flex items-center gap-3">
                    <Icon name="Check" size={20} className="text-accent" />
                    <span>{plan.photos}</span>
                  </div>
                  {plan.features.map((feature, idx) => (
                    <div key={idx} className="flex items-center gap-3">
                      <Icon name="Check" size={20} className="text-accent" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
                <Button className="w-full" onClick={() => scrollToSection('contact')}>
                  Забронировать
                </Button>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="contact" className="py-24">
        <div className="container mx-auto px-6 max-w-2xl">
          <h2 className="text-5xl font-light text-center mb-16">Связаться</h2>
          <Card className="p-8 shadow-xl">
            <form className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">Имя</label>
                <Input placeholder="Ваше имя" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Email</label>
                <Input type="email" placeholder="your@email.com" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Телефон</label>
                <Input type="tel" placeholder="+7 (___) ___-__-__" className="w-full" />
              </div>
              <div>
                <label className="block text-sm font-medium mb-2">Сообщение</label>
                <Textarea
                  placeholder="Расскажите о своём проекте..."
                  className="w-full min-h-32"
                />
              </div>
              <Button className="w-full bg-accent hover:bg-accent/90 text-accent-foreground" size="lg">
                Отправить заявку
              </Button>
            </form>
          </Card>
          <div className="mt-12 text-center space-y-4">
            <div className="flex justify-center gap-6">
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Instagram" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Mail" size={24} />
              </a>
              <a href="#" className="text-muted-foreground hover:text-accent transition-colors">
                <Icon name="Phone" size={24} />
              </a>
            </div>
            <p className="text-muted-foreground">
              <Icon name="Mail" size={16} className="inline mr-2" />
              photo@example.com
            </p>
            <p className="text-muted-foreground">
              <Icon name="Phone" size={16} className="inline mr-2" />
              +7 (999) 123-45-67
            </p>
          </div>
        </div>
      </section>

      <footer className="py-8 border-t">
        <div className="container mx-auto px-6 text-center text-muted-foreground">
          <p>© 2024 Все права защищены</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;