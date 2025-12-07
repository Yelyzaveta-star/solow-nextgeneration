import { Link } from 'react-router-dom';
import { Crown, Gift, Star, Trophy } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { useLanguage } from '@/contexts/LanguageContext';
import { toast } from '@/hooks/use-toast';

export default function LoyaltySection() {
  const { t } = useLanguage();

  const handleJoin = () => {
    toast({
      title: "Welcome to SoLow Rewards!",
      description: "You've successfully joined our loyalty program. Start earning points today!",
    });
  };

  const tiers = [
    { name: t('loyalty.bronze'), icon: Star, points: '0-499', benefits: ['5% off all orders', 'Birthday surprise', 'Early sale access'], color: 'from-amber-600 to-amber-700' },
    { name: t('loyalty.silver'), icon: Gift, points: '500-1499', benefits: ['10% off all orders', 'Free shipping', 'Exclusive products', 'Priority support'], color: 'from-slate-400 to-slate-500' },
    { name: t('loyalty.gold'), icon: Crown, points: '1500+', benefits: ['15% off all orders', 'VIP events', 'Personal stylist', 'Free returns', 'Double points days'], color: 'from-yellow-400 to-amber-500' },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 mb-4 px-4 py-2 bg-primary/10 rounded-full">
            <Trophy className="h-5 w-5 text-primary" />
            <span className="font-medium text-primary">Loyalty Program</span>
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">{t('loyalty.title')}</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">{t('loyalty.description')}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
          {tiers.map((tier, index) => (
            <Card key={tier.name} variant="elevated" className="relative overflow-hidden animate-fade-in-up" style={{ animationDelay: `${index * 0.15}s` }}>
              <div className={`h-24 bg-gradient-to-r ${tier.color} flex items-center justify-center`}>
                <tier.icon className="h-12 w-12 text-background" />
              </div>
              <CardContent className="pt-6">
                <h3 className="font-display text-2xl font-bold text-center text-foreground mb-2">{tier.name}</h3>
                <p className="text-center text-muted-foreground mb-6">{tier.points} points</p>
                <ul className="space-y-3">
                  {tier.benefits.map((benefit) => (
                    <li key={benefit} className="flex items-center gap-2 text-foreground/80">
                      <span className="text-primary">✓</span>{benefit}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <Button variant="hero" size="xl" onClick={handleJoin}>{t('loyalty.join')}</Button>
        </div>
      </div>
    </section>
  );
}
