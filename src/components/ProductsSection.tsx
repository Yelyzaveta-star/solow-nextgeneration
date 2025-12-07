import { Heart, ShoppingCart, Eye, Palette } from 'lucide-react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';

import costumesImg from '@/assets/category-costumes.jpg';
import giftsImg from '@/assets/category-gifts.jpg';
import gamesImg from '@/assets/category-games.jpg';
import christmasImg from '@/assets/category-christmas.jpg';

interface Product {
  id: string;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  rating: number;
  reviews: number;
  badge?: 'sale' | 'new' | 'trending';
  customizable?: boolean;
}

export default function ProductsSection() {
  const { t } = useLanguage();

  const products: Product[] = [
    {
      id: '1',
      name: 'Deluxe Party Pack',
      price: 24.99,
      originalPrice: 34.99,
      image: giftsImg,
      rating: 4.8,
      reviews: 124,
      badge: 'sale',
      customizable: true,
    },
    {
      id: '2',
      name: 'LED Balloon Set',
      price: 12.99,
      image: costumesImg,
      rating: 4.5,
      reviews: 89,
      badge: 'trending',
    },
    {
      id: '3',
      name: 'Party Games Bundle',
      price: 19.99,
      image: gamesImg,
      rating: 4.7,
      reviews: 56,
      badge: 'new',
    },
    {
      id: '4',
      name: 'Christmas Sweater',
      price: 29.99,
      originalPrice: 39.99,
      image: christmasImg,
      rating: 4.9,
      reviews: 203,
      badge: 'sale',
      customizable: true,
    },
  ];

  const getBadgeVariant = (badge: string) => {
    switch (badge) {
      case 'sale': return 'sale';
      case 'new': return 'new';
      case 'trending': return 'festive';
      default: return 'default';
    }
  };

  return (
    <section className="py-16 lg:py-24">
      <div className="container">
        <div className="flex items-center justify-between mb-10">
          <div>
            <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground">
              Popular Products
            </h2>
            <p className="text-muted-foreground mt-2">Top picks loved by our customers</p>
          </div>
          <Button variant="outline" className="hidden sm:flex">
            View All Products
          </Button>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              variant="product"
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image container */}
              <div className="relative aspect-square overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                
                {/* Badges */}
                <div className="absolute top-3 left-3 flex flex-col gap-2">
                  {product.badge && (
                    <Badge variant={getBadgeVariant(product.badge)}>
                      {product.badge === 'sale' ? t('general.sale') : 
                       product.badge === 'new' ? t('general.new') : 
                       t('general.trending')}
                    </Badge>
                  )}
                  {product.customizable && (
                    <Badge variant="accent" className="text-xs">
                      <Palette className="h-3 w-3 mr-1" />
                      {t('general.customize')}
                    </Badge>
                  )}
                </div>

                {/* Quick actions */}
                <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                  <Button size="icon" variant="glass" className="h-9 w-9">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button size="icon" variant="glass" className="h-9 w-9">
                    <Eye className="h-4 w-4" />
                  </Button>
                </div>

                {/* Add to cart overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                  <Button variant="hero" size="sm" className="w-full">
                    <ShoppingCart className="h-4 w-4 mr-2" />
                    {t('general.addToCart')}
                  </Button>
                </div>
              </div>

              {/* Content */}
              <div className="p-4">
                <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2">
                  {product.name}
                </h3>
                
                {/* Rating */}
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-festive">★</span>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

                {/* Price */}
                <div className="flex items-center gap-2">
                  <span className="font-display text-lg font-bold text-primary">
                    €{product.price.toFixed(2)}
                  </span>
                  {product.originalPrice && (
                    <span className="text-sm text-muted-foreground line-through">
                      €{product.originalPrice.toFixed(2)}
                    </span>
                  )}
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
