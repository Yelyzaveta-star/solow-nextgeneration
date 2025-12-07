import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Heart, ShoppingCart, Eye, Palette, Filter, SortAsc } from 'lucide-react';

import costumesImg from '@/assets/category-costumes.jpg';
import giftsImg from '@/assets/category-gifts.jpg';
import gamesImg from '@/assets/category-games.jpg';
import christmasImg from '@/assets/category-christmas.jpg';
import decorationsImg from '@/assets/category-decorations.jpg';

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
  category: string;
}

const ProductsPage = () => {
  const { t } = useLanguage();

  const products: Product[] = [
    { id: '1', name: 'Deluxe Party Pack', price: 24.99, originalPrice: 34.99, image: giftsImg, rating: 4.8, reviews: 124, badge: 'sale', customizable: true, category: 'Gifts' },
    { id: '2', name: 'LED Balloon Set', price: 12.99, image: decorationsImg, rating: 4.5, reviews: 89, badge: 'trending', category: 'Decorations' },
    { id: '3', name: 'Party Games Bundle', price: 19.99, image: gamesImg, rating: 4.7, reviews: 56, badge: 'new', category: 'Games' },
    { id: '4', name: 'Christmas Sweater', price: 29.99, originalPrice: 39.99, image: christmasImg, rating: 4.9, reviews: 203, badge: 'sale', customizable: true, category: 'Christmas' },
    { id: '5', name: 'Costume Set Deluxe', price: 34.99, image: costumesImg, rating: 4.6, reviews: 78, badge: 'new', category: 'Costumes' },
    { id: '6', name: 'Birthday Decoration Kit', price: 15.99, image: decorationsImg, rating: 4.4, reviews: 145, category: 'Decorations' },
    { id: '7', name: 'Gift Wrapping Set', price: 8.99, image: giftsImg, rating: 4.3, reviews: 67, category: 'Gifts' },
    { id: '8', name: 'Drinking Games Collection', price: 22.99, image: gamesImg, rating: 4.7, reviews: 189, badge: 'trending', category: 'Games' },
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
          <span className="text-foreground font-medium">{t('nav.products')}</span>
        </div>

        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
          <div>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground">{t('nav.products')}</h1>
            <p className="text-muted-foreground mt-1">Showing {products.length} products</p>
          </div>
          <div className="flex gap-2">
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button variant="outline" size="sm">
              <SortAsc className="h-4 w-4 mr-2" />
              Sort
            </Button>
          </div>
        </div>

        {/* Products Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 lg:gap-6">
          {products.map((product, index) => (
            <Card
              key={product.id}
              variant="product"
              className="group animate-fade-in-up"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <Link to={`/product/${product.id}`}>
                <div className="relative aspect-square overflow-hidden">
                  <img
                    src={product.image}
                    alt={product.name}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  
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

                  <div className="absolute top-3 right-3 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
                    <Button size="icon" variant="glass" className="h-9 w-9" onClick={(e) => e.preventDefault()}>
                      <Heart className="h-4 w-4" />
                    </Button>
                    <Button size="icon" variant="glass" className="h-9 w-9" onClick={(e) => e.preventDefault()}>
                      <Eye className="h-4 w-4" />
                    </Button>
                  </div>

                  <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-foreground/80 to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                    <Button variant="hero" size="sm" className="w-full" onClick={(e) => e.preventDefault()}>
                      <ShoppingCart className="h-4 w-4 mr-2" />
                      {t('general.addToCart')}
                    </Button>
                  </div>
                </div>
              </Link>

              <div className="p-4">
                <p className="text-xs text-muted-foreground mb-1">{product.category}</p>
                <Link to={`/product/${product.id}`}>
                  <h3 className="font-display font-semibold text-foreground mb-2 line-clamp-2 hover:text-primary transition-colors">
                    {product.name}
                  </h3>
                </Link>
                
                <div className="flex items-center gap-1 mb-2">
                  <span className="text-festive">★</span>
                  <span className="text-sm font-medium">{product.rating}</span>
                  <span className="text-xs text-muted-foreground">({product.reviews})</span>
                </div>

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

        {/* Load More */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Products
          </Button>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default ProductsPage;
