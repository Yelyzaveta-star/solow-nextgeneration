import { Recycle, Leaf, ArrowRightLeft, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

export default function MarketplaceSection() {
  const { t } = useLanguage();

  const features = [
    { icon: ArrowRightLeft, text: 'Buy, sell, or swap items' },
    { icon: Coins, text: 'Earn eco-points' },
    { icon: Recycle, text: 'Reduce waste' },
    { icon: Leaf, text: 'Sustainable shopping' },
  ];

  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-success/5 via-background to-accent/5" />
      
      <div className="container relative">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div>
            <Badge variant="eco" className="mb-4 px-4 py-2">
              <Leaf className="h-4 w-4 mr-2" />
              Eco-Friendly
            </Badge>
            
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {t('marketplace.title')}
            </h2>
            
            <p className="text-lg text-muted-foreground mb-8">
              {t('marketplace.description')}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              {features.map((feature) => (
                <div key={feature.text} className="flex items-center gap-3">
                  <div className="p-2 rounded-lg bg-success/10">
                    <feature.icon className="h-5 w-5 text-success" />
                  </div>
                  <span className="text-sm font-medium text-foreground">{feature.text}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap gap-4">
              <Button variant="success" size="lg">
                {t('marketplace.browse')}
              </Button>
              <Button variant="outline" size="lg">
                {t('marketplace.sell')}
              </Button>
            </div>
          </div>

          {/* Visual */}
          <div className="relative">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-success/20 via-accent/10 to-primary/10 p-8 flex items-center justify-center">
              <div className="relative">
                <div className="absolute -top-8 -left-8 w-24 h-24 bg-success/20 rounded-full blur-xl" />
                <div className="absolute -bottom-8 -right-8 w-32 h-32 bg-accent/20 rounded-full blur-xl" />
                
                <div className="relative z-10 text-center">
                  <div className="inline-flex p-6 rounded-full bg-success/20 mb-6">
                    <Recycle className="h-16 w-16 text-success" />
                  </div>
                  <h3 className="font-display text-2xl font-bold text-foreground mb-2">
                    Give Items a Second Life
                  </h3>
                  <p className="text-muted-foreground">
                    Join our community of conscious shoppers
                  </p>
                  
                  {/* Stats */}
                  <div className="grid grid-cols-3 gap-4 mt-8">
                    <div>
                      <p className="font-display text-2xl font-bold text-success">5k+</p>
                      <p className="text-xs text-muted-foreground">Items Listed</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-accent">12k</p>
                      <p className="text-xs text-muted-foreground">Eco Points</p>
                    </div>
                    <div>
                      <p className="font-display text-2xl font-bold text-primary">3k+</p>
                      <p className="text-xs text-muted-foreground">Happy Traders</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
