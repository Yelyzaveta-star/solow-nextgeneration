import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

import costumesImg from '@/assets/category-costumes.jpg';
import decorationsImg from '@/assets/category-decorations.jpg';
import giftsImg from '@/assets/category-gifts.jpg';
import gamesImg from '@/assets/category-games.jpg';
import christmasImg from '@/assets/category-christmas.jpg';

interface Category {
  id: string;
  name: string;
  image: string;
  count: number;
  featured?: boolean;
}

export default function CategoriesSection() {
  const { t } = useLanguage();

  const categories: Category[] = [
    { id: 'costumes', name: t('categories.costumes'), image: costumesImg, count: 2500, featured: true },
    { id: 'decorations', name: t('categories.decorations'), image: decorationsImg, count: 3200 },
    { id: 'gifts', name: t('categories.gifts'), image: giftsImg, count: 4100 },
    { id: 'games', name: t('categories.games'), image: gamesImg, count: 850 },
    { id: 'christmas', name: t('categories.christmas'), image: christmasImg, count: 1800, featured: true },
  ];

  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
            {t('categories.title')}
          </h2>
          <Link to="/categories">
            <Button variant="ghost" className="hidden sm:flex">
              {t('categories.viewAll')}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 lg:gap-6">
          {categories.map((category, index) => (
            <Link key={category.id} to={`/products?category=${category.id}`}>
              <Card
                variant="category"
                className="relative aspect-square animate-fade-in-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                
                {category.featured && (
                  <Badge variant="festive" className="absolute top-3 right-3">Hot</Badge>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="font-display text-lg font-semibold text-background mb-1">{category.name}</h3>
                  <p className="text-sm text-background/70">{category.count.toLocaleString()} items</p>
                </div>
              </Card>
            </Link>
          ))}
        </div>

        <div className="mt-6 text-center sm:hidden">
          <Link to="/categories">
            <Button variant="outline">
              {t('categories.viewAll')}
              <ArrowRight className="h-4 w-4 ml-2" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
