import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, MapPin, Clock, Phone, Navigation, Search, ExternalLink } from 'lucide-react';

import storeImg from '@/assets/store-interior.jpg';

interface Store {
  id: string;
  name: string;
  address: string;
  city: string;
  phone: string;
  hours: string;
  distance?: string;
  open: boolean;
  clickCollect: boolean;
}

const StoresPage = () => {
  const { t } = useLanguage();

  const stores: Store[] = [
    { id: '1', name: 'SoLow Amsterdam Centrum', address: 'Kalverstraat 123', city: 'Amsterdam', phone: '+31 20 123 4567', hours: '09:00 - 21:00', distance: '0.5 km', open: true, clickCollect: true },
    { id: '2', name: 'SoLow Amsterdam Zuid', address: 'Beethovenstraat 45', city: 'Amsterdam', phone: '+31 20 234 5678', hours: '10:00 - 20:00', distance: '2.3 km', open: true, clickCollect: true },
    { id: '3', name: 'SoLow Rotterdam Centrum', address: 'Lijnbaan 89', city: 'Rotterdam', phone: '+31 10 345 6789', hours: '09:00 - 21:00', distance: '45 km', open: true, clickCollect: true },
    { id: '4', name: 'SoLow Den Haag', address: 'Spuistraat 12', city: 'Den Haag', phone: '+31 70 456 7890', hours: '09:00 - 20:00', open: true, clickCollect: true },
    { id: '5', name: 'SoLow Utrecht', address: 'Oudegracht 156', city: 'Utrecht', phone: '+31 30 567 8901', hours: '10:00 - 18:00', open: false, clickCollect: true },
    { id: '6', name: 'SoLow Groningen', address: 'Grote Markt 34', city: 'Groningen', phone: '+31 50 678 9012', hours: '09:00 - 21:00', open: true, clickCollect: true },
    { id: '7', name: 'SoLow Eindhoven', address: 'Rechtestraat 78', city: 'Eindhoven', phone: '+31 40 789 0123', hours: '09:00 - 20:00', open: true, clickCollect: true },
    { id: '8', name: 'SoLow Maastricht', address: 'Vrijthof 23', city: 'Maastricht', phone: '+31 43 890 1234', hours: '10:00 - 18:00', open: true, clickCollect: false },
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
          <span className="text-foreground font-medium">{t('nav.stores')}</span>
        </div>

        {/* Hero */}
        <div className="relative rounded-3xl overflow-hidden mb-12">
          <img
            src={storeImg}
            alt="SoLow store interior"
            className="w-full h-64 lg:h-80 object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-foreground/80 to-foreground/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="container">
              <h1 className="font-display text-3xl lg:text-5xl font-bold text-background mb-4">
                {t('stores.title')}
              </h1>
              <p className="text-lg text-background/80 max-w-lg">
                {t('stores.description')}
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="flex flex-col sm:flex-row gap-4 mb-8">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <Input
              placeholder="Enter postcode or city..."
              className="pl-10 h-12"
            />
          </div>
          <Button variant="default" size="lg">
            <MapPin className="h-5 w-5 mr-2" />
            {t('stores.findStore')}
          </Button>
          <Button variant="outline" size="lg">
            Use My Location
          </Button>
        </div>

        {/* Store Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stores.map((store, index) => (
            <Card
              key={store.id}
              variant="elevated"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <CardContent className="p-6">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h3 className="font-display text-lg font-semibold text-foreground">{store.name}</h3>
                    <p className="text-sm text-muted-foreground">{store.address}</p>
                    <p className="text-sm text-muted-foreground">{store.city}</p>
                  </div>
                  <span className={`px-2 py-1 rounded text-xs font-medium ${store.open ? 'bg-success/10 text-success' : 'bg-destructive/10 text-destructive'}`}>
                    {store.open ? 'Open' : 'Closed'}
                  </span>
                </div>

                <div className="space-y-2 mb-4">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Clock className="h-4 w-4" />
                    {store.hours}
                  </div>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Phone className="h-4 w-4" />
                    {store.phone}
                  </div>
                  {store.distance && (
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Navigation className="h-4 w-4" />
                      {store.distance}
                    </div>
                  )}
                </div>

                {store.clickCollect && (
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2 py-1 rounded bg-accent/10 text-accent text-xs font-medium">
                      ✓ {t('stores.clickCollect')}
                    </span>
                  </div>
                )}

                <div className="flex gap-2">
                  <Button variant="default" size="sm" className="flex-1">
                    <Navigation className="h-4 w-4 mr-2" />
                    Directions
                  </Button>
                  <Button variant="outline" size="sm">
                    <Phone className="h-4 w-4" />
                  </Button>
                  <Button variant="outline" size="sm">
                    <ExternalLink className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default StoresPage;
