import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, ArrowRight } from 'lucide-react';

import costumesImg from '@/assets/category-costumes.jpg';
import decorationsImg from '@/assets/category-decorations.jpg';
import giftsImg from '@/assets/category-gifts.jpg';
import gamesImg from '@/assets/category-games.jpg';
import christmasImg from '@/assets/category-christmas.jpg';

interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
  count: number;
  featured?: boolean;
}

const CategoriesPage = () => {
  const { t } = useLanguage();

  const categories: Category[] = [
    { id: 'costumes', name: t('categories.costumes'), description: 'Fancy dress, wigs, masks, and costume accessories for every occasion', image: costumesImg, count: 2500, featured: true },
    { id: 'decorations', name: t('categories.decorations'), description: 'Balloons, banners, streamers, and party decorations', image: decorationsImg, count: 3200 },
    { id: 'gifts', name: t('categories.gifts'), description: 'Unique gifts, greeting cards, and wrapping supplies', image: giftsImg, count: 4100 },
    { id: 'games', name: t('categories.games'), description: 'Party games, drinking games, and entertainment', image: gamesImg, count: 850 },
    { id: 'christmas', name: t('categories.christmas'), description: 'Christmas sweaters, decorations, and holiday supplies', image: christmasImg, count: 1800, featured: true },
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
          <span className="text-foreground font-medium">{t('nav.categories')}</span>
        </div>

        {/* Header */}
        <div className="mb-10">
          <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
            {t('categories.title')}
          </h1>
          <p className="text-lg text-muted-foreground">
            Browse our wide selection of party supplies and gifts
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.id}
              to={`/products?category=${category.id}`}
              className="group"
            >
              <Card
                variant="category"
                className="relative h-72 animate-fade-in-up overflow-hidden"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <img
                  src={category.image}
                  alt={category.name}
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/90 via-foreground/40 to-transparent" />
                
                {category.featured && (
                  <Badge variant="festive" className="absolute top-4 right-4">
                    Hot
                  </Badge>
                )}

                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl font-semibold text-background mb-2">
                    {category.name}
                  </h3>
                  <p className="text-sm text-background/70 mb-3 line-clamp-2">
                    {category.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <span className="text-sm text-background/60">
                      {category.count.toLocaleString()} items
                    </span>
                    <span className="flex items-center text-primary font-medium">
                      Shop Now
                      <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </div>
                </div>
              </Card>
            </Link>
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CategoriesPage;
