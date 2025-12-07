import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Users, Award, Store, Heart } from 'lucide-react';

import storeImg from '@/assets/store-interior.jpg';

const AboutPage = () => {
  const { t } = useLanguage();

  const stats = [
    { value: '70+', label: 'Stores', icon: Store },
    { value: '20k+', label: 'Products', icon: Award },
    { value: '1M+', label: 'Happy Customers', icon: Users },
    { value: '25+', label: 'Years Experience', icon: Heart },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{t('nav.about')}</span>
        </div>

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <img
            src={storeImg}
            alt="SoLow store"
            className="w-full h-64 lg:h-96 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <h1 className="font-display text-4xl lg:text-6xl font-bold text-background mb-4">
                About SoLow
              </h1>
              <p className="text-xl text-background/80 max-w-lg">
                Making celebrations affordable and fun since 1998
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((stat) => (
            <Card key={stat.label} variant="elevated" className="text-center">
              <CardContent className="pt-6">
                <stat.icon className="h-8 w-8 mx-auto mb-2 text-primary" />
                <p className="font-display text-3xl font-bold text-foreground">{stat.value}</p>
                <p className="text-muted-foreground">{stat.label}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Content */}
        <div className="max-w-3xl mx-auto">
          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Story</h2>
            <p className="text-muted-foreground mb-4">
              SoLow was founded in 1998 with a simple mission: to make party supplies and gifts accessible 
              to everyone. What started as a single store in Amsterdam has grown into a nationwide chain 
              with over 70 locations across the Netherlands.
            </p>
            <p className="text-muted-foreground">
              We believe that every celebration deserves to be special, regardless of budget. That's why 
              we work directly with manufacturers to offer the widest selection at the lowest prices.
            </p>
          </section>

          <section className="mb-12">
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Our Values</h2>
            <div className="grid gap-4">
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-display font-semibold text-foreground mb-2">Affordability</h3>
                <p className="text-sm text-muted-foreground">Quality products at prices everyone can afford</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-display font-semibold text-foreground mb-2">Sustainability</h3>
                <p className="text-sm text-muted-foreground">Committed to reducing waste through our Reuse & Share marketplace</p>
              </div>
              <div className="p-4 rounded-lg bg-secondary/50">
                <h3 className="font-display font-semibold text-foreground mb-2">Community</h3>
                <p className="text-sm text-muted-foreground">Supporting local celebrations and bringing people together</p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="font-display text-2xl font-bold text-foreground mb-4">Contact Us</h2>
            <p className="text-muted-foreground mb-4">
              Have questions? We'd love to hear from you!
            </p>
            <ul className="space-y-2 text-muted-foreground">
              <li>Email: info@solow.nl</li>
              <li>Phone: +31 (0)20 123 4567</li>
              <li>Hours: Mon-Fri 9:00 - 17:00</li>
            </ul>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default AboutPage;
