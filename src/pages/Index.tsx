import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CategoriesSection from '@/components/CategoriesSection';
import FeaturesSection from '@/components/FeaturesSection';
import ProductsSection from '@/components/ProductsSection';
import LoyaltySection from '@/components/LoyaltySection';
import MarketplaceSection from '@/components/MarketplaceSection';
import StoreLocatorSection from '@/components/StoreLocatorSection';
import TestimonialsSection from '@/components/TestimonialsSection';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <CategoriesSection />
        <FeaturesSection />
        <ProductsSection />
        <LoyaltySection />
        <MarketplaceSection />
        <StoreLocatorSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
