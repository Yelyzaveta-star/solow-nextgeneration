import { DollarSign, Truck, Package, View } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';

export default function FeaturesSection() {
  const { t } = useLanguage();

  const features = [
    {
      icon: DollarSign,
      title: t('features.prices'),
      description: t('features.pricesDesc'),
      color: 'bg-primary/10 text-primary',
    },
    {
      icon: Truck,
      title: t('features.delivery'),
      description: t('features.deliveryDesc'),
      color: 'bg-accent/10 text-accent',
    },
    {
      icon: Package,
      title: t('features.selection'),
      description: t('features.selectionDesc'),
      color: 'bg-festive/10 text-festive-foreground',
    },
    {
      icon: View,
      title: t('features.ar'),
      description: t('features.arDesc'),
      color: 'bg-success/10 text-success',
    },
  ];

  return (
    <section className="py-16 lg:py-20">
      <div className="container">
        <h2 className="font-display text-3xl lg:text-4xl font-bold text-center text-foreground mb-12">
          {t('features.title')}
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card
              key={feature.title}
              variant="elevated"
              className="text-center animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-8 pb-6">
                <div className={`inline-flex p-4 rounded-2xl mb-4 ${feature.color}`}>
                  <feature.icon className="h-8 w-8" />
                </div>
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground">
                  {feature.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
