import { Sparkles, Play, Truck, Tag } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import heroImage from '@/assets/hero-party.jpg';

export default function HeroSection() {
  const { t } = useLanguage();

  return (
    <section className="relative overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={heroImage}
          alt="Party supplies and celebration"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/70 to-transparent" />
      </div>

      {/* Content */}
      <div className="container relative z-10 py-20 lg:py-32">
        <div className="max-w-2xl">
          {/* Badges */}
          <div className="flex flex-wrap gap-2 mb-6 animate-fade-in-up" style={{ animationDelay: '0.1s' }}>
            <Badge variant="festive" className="px-3 py-1">
              <Sparkles className="h-3 w-3 mr-1" />
              {t('hero.freeShipping')}
            </Badge>
            <Badge variant="secondary" className="px-3 py-1">
              <Tag className="h-3 w-3 mr-1" />
              {t('hero.minOrder')}
            </Badge>
          </div>

          {/* Title */}
          <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold text-background mb-2 animate-fade-in-up" style={{ animationDelay: '0.2s' }}>
            {t('hero.title')}
          </h1>
          <p className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold text-primary mb-6 animate-fade-in-up" style={{ animationDelay: '0.3s' }}>
            {t('hero.subtitle')}
          </p>

          {/* Description */}
          <p className="text-lg text-background/80 mb-8 max-w-lg animate-fade-in-up" style={{ animationDelay: '0.4s' }}>
            {t('hero.description')}
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 animate-fade-in-up" style={{ animationDelay: '0.5s' }}>
            <Button variant="hero" size="xl">
              {t('hero.cta')}
            </Button>
            <Button variant="glass" size="xl" className="text-background border-background/30 hover:bg-background/10">
              <Play className="h-5 w-5 mr-2" />
              {t('hero.ar')}
            </Button>
          </div>

          {/* Trust indicators */}
          <div className="flex flex-wrap items-center gap-6 mt-10 pt-10 border-t border-background/20 animate-fade-in-up" style={{ animationDelay: '0.6s' }}>
            <div className="flex items-center gap-2 text-background/80">
              <Truck className="h-5 w-5 text-primary" />
              <span className="text-sm">Click & Collect</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <span className="text-2xl">⭐</span>
              <span className="text-sm">4.5/5 Trustpilot</span>
            </div>
            <div className="flex items-center gap-2 text-background/80">
              <span className="text-2xl">🎉</span>
              <span className="text-sm">20,000+ Products</span>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-10 right-10 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse" />
      <div className="absolute bottom-10 right-1/3 w-24 h-24 bg-festive/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }} />
    </section>
  );
}
