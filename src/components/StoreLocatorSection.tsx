import { MapPin, Clock, Phone, Navigation } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { useLanguage } from '@/contexts/LanguageContext';

import storeImg from '@/assets/store-interior.jpg';

export default function StoreLocatorSection() {
  const { t } = useLanguage();

  const nearbyStores = [
    { name: 'SoLow Amsterdam Centrum', address: 'Kalverstraat 123', distance: '0.5 km', open: true },
    { name: 'SoLow Amsterdam Zuid', address: 'Beethovenstraat 45', distance: '2.3 km', open: true },
    { name: 'SoLow Amstelveen', address: 'Stadsplein 78', distance: '5.8 km', open: false },
  ];

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <div className="relative rounded-3xl overflow-hidden shadow-2xl">
            <img
              src={storeImg}
              alt="SoLow store interior"
              className="w-full aspect-[4/3] object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 to-transparent" />
            <div className="absolute bottom-6 left-6 right-6">
              <h3 className="font-display text-2xl font-bold text-background mb-2">
                70+ Stores Nationwide
              </h3>
              <p className="text-background/80">
                Visit us in person for the full SoLow experience
              </p>
            </div>
          </div>

          {/* Content */}
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('stores.title')}
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              {t('stores.description')}
            </p>

            {/* Search */}
            <div className="flex gap-2 mb-8">
              <div className="relative flex-1">
                <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  placeholder="Enter postcode or city..."
                  className="pl-10 h-12"
                />
              </div>
              <Button variant="default" size="lg">
                {t('stores.findStore')}
              </Button>
            </div>

            {/* Nearby stores */}
            <div className="space-y-3">
              {nearbyStores.map((store) => (
                <Card key={store.name} variant="default" className="hover:shadow-md transition-shadow">
                  <CardContent className="p-4">
                    <div className="flex items-center justify-between">
                      <div>
                        <h4 className="font-display font-semibold text-foreground">{store.name}</h4>
                        <p className="text-sm text-muted-foreground">{store.address}</p>
                        <div className="flex items-center gap-3 mt-2 text-sm">
                          <span className="flex items-center gap-1 text-muted-foreground">
                            <Navigation className="h-3 w-3" />
                            {store.distance}
                          </span>
                          <span className={`flex items-center gap-1 ${store.open ? 'text-success' : 'text-destructive'}`}>
                            <Clock className="h-3 w-3" />
                            {store.open ? 'Open' : 'Closed'}
                          </span>
                        </div>
                      </div>
                      <Button variant="outline" size="sm">
                        <Phone className="h-4 w-4" />
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <Button variant="ghost" className="mt-4 w-full">
              View All Stores
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
