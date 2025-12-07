import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { useLanguage } from '@/contexts/LanguageContext';
import { Link } from 'react-router-dom';
import { ArrowLeft, Trash2, Plus, Minus, ShoppingBag, Truck, Tag } from 'lucide-react';

import giftsImg from '@/assets/category-gifts.jpg';
import christmasImg from '@/assets/category-christmas.jpg';

const CartPage = () => {
  const { t } = useLanguage();

  const cartItems = [
    { id: '1', name: 'Deluxe Party Pack', price: 24.99, quantity: 2, image: giftsImg },
    { id: '4', name: 'Christmas Sweater', price: 29.99, quantity: 1, image: christmasImg },
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = subtotal >= 35 ? 0 : 4.95;
  const total = subtotal + shipping;

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
          <span className="text-foreground font-medium">{t('nav.cart')}</span>
        </div>

        <h1 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-8">
          Shopping Cart
        </h1>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Cart Items */}
          <div className="lg:col-span-2 space-y-4">
            {cartItems.map((item) => (
              <Card key={item.id} variant="default">
                <CardContent className="p-4">
                  <div className="flex gap-4">
                    <Link to={`/product/${item.id}`} className="shrink-0">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="w-24 h-24 rounded-lg object-cover"
                      />
                    </Link>
                    <div className="flex-1">
                      <Link to={`/product/${item.id}`}>
                        <h3 className="font-display font-semibold text-foreground hover:text-primary transition-colors">
                          {item.name}
                        </h3>
                      </Link>
                      <p className="text-lg font-bold text-primary mt-1">
                        €{item.price.toFixed(2)}
                      </p>
                      <div className="flex items-center justify-between mt-3">
                        <div className="flex items-center border rounded-lg">
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Minus className="h-4 w-4" />
                          </Button>
                          <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                          <Button variant="ghost" size="icon" className="h-8 w-8">
                            <Plus className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button variant="ghost" size="sm" className="text-destructive hover:text-destructive">
                          <Trash2 className="h-4 w-4 mr-1" />
                          Remove
                        </Button>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}

            {cartItems.length === 0 && (
              <div className="text-center py-12">
                <ShoppingBag className="h-16 w-16 mx-auto text-muted-foreground mb-4" />
                <h3 className="font-display text-xl font-semibold mb-2">Your cart is empty</h3>
                <p className="text-muted-foreground mb-6">Add some items to get started!</p>
                <Link to="/products">
                  <Button variant="default">Browse Products</Button>
                </Link>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div>
            <Card variant="elevated">
              <CardContent className="p-6">
                <h3 className="font-display text-xl font-semibold mb-4">Order Summary</h3>
                
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">€{subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className={shipping === 0 ? 'text-success font-medium' : 'font-medium'}>
                      {shipping === 0 ? 'FREE' : `€${shipping.toFixed(2)}`}
                    </span>
                  </div>
                  <div className="border-t pt-3">
                    <div className="flex justify-between">
                      <span className="font-display font-semibold">Total</span>
                      <span className="font-display text-xl font-bold text-primary">€{total.toFixed(2)}</span>
                    </div>
                  </div>
                </div>

                {subtotal < 35 && (
                  <div className="bg-secondary/50 rounded-lg p-3 mb-4">
                    <div className="flex items-center gap-2 text-sm">
                      <Truck className="h-4 w-4 text-primary" />
                      <span>Add €{(35 - subtotal).toFixed(2)} more for free shipping!</span>
                    </div>
                  </div>
                )}

                <div className="flex gap-2 mb-4">
                  <input
                    type="text"
                    placeholder="Discount code"
                    className="flex-1 px-3 py-2 border rounded-lg text-sm"
                  />
                  <Button variant="outline" size="sm">
                    <Tag className="h-4 w-4" />
                  </Button>
                </div>

                <Button variant="hero" size="lg" className="w-full">
                  Proceed to Checkout
                </Button>

                <p className="text-xs text-center text-muted-foreground mt-4">
                  Secure checkout powered by Stripe
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default CartPage;
