import { useState } from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link, useParams } from 'react-router-dom';
import ARVideoModal from '@/components/ARVideoModal';
import { ArrowLeft, Heart, ShoppingCart, Share2, Truck, RotateCcw, Shield, Play, Minus, Plus, Star } from 'lucide-react';

import giftsImg from '@/assets/category-gifts.jpg';
import costumesImg from '@/assets/category-costumes.jpg';
import decorationsImg from '@/assets/category-decorations.jpg';

const ProductDetailPage = () => {
  const { t } = useLanguage();
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);
  const [isARModalOpen, setIsARModalOpen] = useState(false);

  // Mock product data
  const product = {
    id: id || '1',
    name: 'Deluxe Party Pack',
    price: 24.99,
    originalPrice: 34.99,
    description: 'Complete party pack with everything you need for an unforgettable celebration! Includes balloons, streamers, banners, and more.',
    images: [giftsImg, costumesImg, decorationsImg],
    rating: 4.8,
    reviews: 124,
    inStock: true,
    category: 'Gifts',
    features: ['100+ pieces', 'Premium quality', 'Easy setup', 'Reusable items'],
  };

  const reviews = [
    { id: 1, name: 'Emma V.', rating: 5, text: 'Perfect for my birthday party! Great value for money.', date: '2 days ago' },
    { id: 2, name: 'Bob S.', rating: 4, text: 'Good quality decorations. Shipping was fast!', date: '1 week ago' },
    { id: 3, name: 'Lisa B.', rating: 5, text: 'Exactly what I needed. Will order again!', date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="container py-8">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 mb-6">
          <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">
            <ArrowLeft className="h-4 w-4" />
          </Link>
          <Link to="/" className="text-muted-foreground hover:text-primary transition-colors">Home</Link>
          <span className="text-muted-foreground">/</span>
          <Link to="/products" className="text-muted-foreground hover:text-primary transition-colors">Products</Link>
          <span className="text-muted-foreground">/</span>
          <span className="text-foreground font-medium">{product.name}</span>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square rounded-2xl overflow-hidden bg-secondary">
              <img
                src={product.images[0]}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="grid grid-cols-3 gap-4">
              {product.images.map((img, i) => (
                <button
                  key={i}
                  className="aspect-square rounded-xl overflow-hidden bg-secondary border-2 border-transparent hover:border-primary transition-colors"
                >
                  <img src={img} alt="" className="w-full h-full object-cover" />
                </button>
              ))}
            </div>
            <Button
              variant="accent"
              size="lg"
              className="w-full"
              onClick={() => setIsARModalOpen(true)}
            >
              <Play className="h-5 w-5 mr-2" />
              {t('ar.startExperience')}
            </Button>
          </div>

          {/* Details */}
          <div>
            <Badge variant="secondary" className="mb-2">{product.category}</Badge>
            <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-4">
              {product.name}
            </h1>

            {/* Rating */}
            <div className="flex items-center gap-2 mb-4">
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className={`h-5 w-5 ${i < Math.floor(product.rating) ? 'fill-festive text-festive' : 'text-muted'}`}
                  />
                ))}
              </div>
              <span className="font-medium">{product.rating}</span>
              <span className="text-muted-foreground">({product.reviews} reviews)</span>
            </div>

            {/* Price */}
            <div className="flex items-baseline gap-3 mb-6">
              <span className="font-display text-4xl font-bold text-primary">
                €{product.price.toFixed(2)}
              </span>
              {product.originalPrice && (
                <>
                  <span className="text-xl text-muted-foreground line-through">
                    €{product.originalPrice.toFixed(2)}
                  </span>
                  <Badge variant="sale">
                    -{Math.round((1 - product.price / product.originalPrice) * 100)}%
                  </Badge>
                </>
              )}
            </div>

            <p className="text-muted-foreground mb-6">{product.description}</p>

            {/* Features */}
            <ul className="grid grid-cols-2 gap-2 mb-6">
              {product.features.map((feature) => (
                <li key={feature} className="flex items-center gap-2 text-sm">
                  <span className="text-primary">✓</span>
                  {feature}
                </li>
              ))}
            </ul>

            {/* Quantity */}
            <div className="flex items-center gap-4 mb-6">
              <span className="font-medium">Quantity:</span>
              <div className="flex items-center border rounded-lg">
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="w-12 text-center font-medium">{quantity}</span>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            {/* Actions */}
            <div className="flex gap-3 mb-8">
              <Button variant="hero" size="xl" className="flex-1">
                <ShoppingCart className="h-5 w-5 mr-2" />
                {t('general.addToCart')}
              </Button>
              <Button variant="outline" size="xl">
                <Heart className="h-5 w-5" />
              </Button>
              <Button variant="outline" size="xl">
                <Share2 className="h-5 w-5" />
              </Button>
            </div>

            {/* Trust badges */}
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <Truck className="h-6 w-6 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Free Shipping €35+</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <RotateCcw className="h-6 w-6 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">30 Days Return</span>
              </div>
              <div className="text-center p-3 rounded-lg bg-secondary/50">
                <Shield className="h-6 w-6 mx-auto mb-1 text-primary" />
                <span className="text-xs text-muted-foreground">Secure Payment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Reviews */}
        <section className="mt-16">
          <h2 className="font-display text-2xl font-bold text-foreground mb-6">
            Customer Reviews ({product.reviews})
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {reviews.map((review) => (
              <Card key={review.id} variant="default">
                <CardContent className="pt-6">
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-festive text-festive" />
                      ))}
                    </div>
                    <span className="text-sm text-muted-foreground">{review.date}</span>
                  </div>
                  <p className="text-foreground/80 mb-3">"{review.text}"</p>
                  <p className="font-medium text-sm">{review.name}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      <ARVideoModal isOpen={isARModalOpen} onClose={() => setIsARModalOpen(false)} />
    </div>
  );
};

export default ProductDetailPage;
