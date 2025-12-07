import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'nl';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.categories': 'Categories',
    'nav.products': 'Products',
    'nav.stores': 'Stores',
    'nav.about': 'About',
    'nav.contact': 'Contact',
    'nav.cart': 'Cart',
    'nav.search': 'Search products...',
    
    // Hero
    'hero.title': 'Party Supplies & Gifts',
    'hero.subtitle': 'for Every Celebration',
    'hero.description': 'Discover thousands of affordable party supplies, costumes, decorations, and unique gifts. Make every moment special with SoLow!',
    'hero.cta': 'Shop Now',
    'hero.ar': 'Try AR Preview',
    'hero.freeShipping': 'Free Shipping €35+',
    'hero.minOrder': 'Min. Order €10',
    
    // Categories
    'categories.title': 'Shop by Category',
    'categories.costumes': 'Costumes & Dress Up',
    'categories.decorations': 'Party Decorations',
    'categories.gifts': 'Gifts & Cards',
    'categories.games': 'Party Games',
    'categories.christmas': 'Christmas',
    'categories.viewAll': 'View All',
    
    // Features
    'features.title': 'Why Choose SoLow?',
    'features.prices': 'Unbeatable Prices',
    'features.pricesDesc': 'Quality products at the lowest prices guaranteed',
    'features.delivery': 'Fast Delivery',
    'features.deliveryDesc': 'Click & Collect or home delivery available',
    'features.selection': 'Huge Selection',
    'features.selectionDesc': 'Over 20,000 products for every occasion',
    'features.ar': 'AR Preview',
    'features.arDesc': 'See how products look before you buy',
    
    // Loyalty
    'loyalty.title': 'Join Our Loyalty Program',
    'loyalty.description': 'Earn points with every purchase and unlock exclusive rewards!',
    'loyalty.bronze': 'Bronze',
    'loyalty.silver': 'Silver',
    'loyalty.gold': 'Gold',
    'loyalty.join': 'Join Now',
    
    // Marketplace
    'marketplace.title': 'Reuse & Share Marketplace',
    'marketplace.description': 'Give party items a second life! Buy, sell, or swap pre-loved decorations and costumes. Earn eco-points for sustainable shopping.',
    'marketplace.browse': 'Browse Marketplace',
    'marketplace.sell': 'Sell Your Items',
    
    // Store Locator
    'stores.title': 'Find a Store Near You',
    'stores.description': 'Visit one of our 70+ stores across the Netherlands',
    'stores.findStore': 'Find Store',
    'stores.clickCollect': 'Click & Collect',
    
    // Footer
    'footer.about': 'About SoLow',
    'footer.aboutText': 'SoLow is your go-to destination for affordable party supplies, gifts, and home items.',
    'footer.quickLinks': 'Quick Links',
    'footer.customerService': 'Customer Service',
    'footer.followUs': 'Follow Us',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Subscribe for exclusive offers and party inspiration!',
    'footer.subscribe': 'Subscribe',
    'footer.rights': 'All rights reserved',
    
    // General
    'general.addToCart': 'Add to Cart',
    'general.buyNow': 'Buy Now',
    'general.viewDetails': 'View Details',
    'general.customize': 'Customize',
    'general.reviews': 'Reviews',
    'general.inStock': 'In Stock',
    'general.outOfStock': 'Out of Stock',
    'general.sale': 'Sale',
    'general.new': 'New',
    'general.trending': 'Trending',
  },
  nl: {
    // Navigation
    'nav.home': 'Home',
    'nav.categories': 'Categorieën',
    'nav.products': 'Producten',
    'nav.stores': 'Winkels',
    'nav.about': 'Over Ons',
    'nav.contact': 'Contact',
    'nav.cart': 'Winkelwagen',
    'nav.search': 'Zoek producten...',
    
    // Hero
    'hero.title': 'Feestartikelen & Cadeaus',
    'hero.subtitle': 'voor Elk Feest',
    'hero.description': 'Ontdek duizenden betaalbare feestartikelen, kostuums, decoraties en unieke cadeaus. Maak elk moment speciaal met SoLow!',
    'hero.cta': 'Shop Nu',
    'hero.ar': 'AR Preview',
    'hero.freeShipping': 'Gratis Verzending vanaf €35',
    'hero.minOrder': 'Min. Bestelling €10',
    
    // Categories
    'categories.title': 'Shop per Categorie',
    'categories.costumes': 'Verkleedkleding',
    'categories.decorations': 'Feestversiering',
    'categories.gifts': 'Cadeaus & Kaarten',
    'categories.games': 'Spellen',
    'categories.christmas': 'Kerst',
    'categories.viewAll': 'Bekijk Alles',
    
    // Features
    'features.title': 'Waarom Kiezen voor SoLow?',
    'features.prices': 'Onverslaanbare Prijzen',
    'features.pricesDesc': 'Kwaliteitsproducten tegen de laagste prijzen gegarandeerd',
    'features.delivery': 'Snelle Levering',
    'features.deliveryDesc': 'Click & Collect of thuisbezorging beschikbaar',
    'features.selection': 'Enorm Assortiment',
    'features.selectionDesc': 'Meer dan 20.000 producten voor elke gelegenheid',
    'features.ar': 'AR Preview',
    'features.arDesc': 'Bekijk hoe producten eruitzien voordat je koopt',
    
    // Loyalty
    'loyalty.title': 'Word Lid van Ons Loyaliteitsprogramma',
    'loyalty.description': 'Verdien punten bij elke aankoop en ontgrendel exclusieve beloningen!',
    'loyalty.bronze': 'Brons',
    'loyalty.silver': 'Zilver',
    'loyalty.gold': 'Goud',
    'loyalty.join': 'Word Nu Lid',
    
    // Marketplace
    'marketplace.title': 'Hergebruik & Deel Marktplaats',
    'marketplace.description': 'Geef feestartikelen een tweede leven! Koop, verkoop of ruil tweedehands decoraties en kostuums. Verdien eco-punten voor duurzaam winkelen.',
    'marketplace.browse': 'Bekijk Marktplaats',
    'marketplace.sell': 'Verkoop Je Items',
    
    // Store Locator
    'stores.title': 'Vind een Winkel bij Jou in de Buurt',
    'stores.description': 'Bezoek een van onze 70+ winkels door heel Nederland',
    'stores.findStore': 'Vind Winkel',
    'stores.clickCollect': 'Click & Collect',
    
    // Footer
    'footer.about': 'Over SoLow',
    'footer.aboutText': 'SoLow is jouw bestemming voor betaalbare feestartikelen, cadeaus en huisartikelen.',
    'footer.quickLinks': 'Snelle Links',
    'footer.customerService': 'Klantenservice',
    'footer.followUs': 'Volg Ons',
    'footer.newsletter': 'Nieuwsbrief',
    'footer.newsletterText': 'Schrijf je in voor exclusieve aanbiedingen en feestinspiratie!',
    'footer.subscribe': 'Inschrijven',
    'footer.rights': 'Alle rechten voorbehouden',
    
    // General
    'general.addToCart': 'In Winkelwagen',
    'general.buyNow': 'Nu Kopen',
    'general.viewDetails': 'Bekijk Details',
    'general.customize': 'Personaliseer',
    'general.reviews': 'Reviews',
    'general.inStock': 'Op Voorraad',
    'general.outOfStock': 'Niet op Voorraad',
    'general.sale': 'Sale',
    'general.new': 'Nieuw',
    'general.trending': 'Trending',
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
}
