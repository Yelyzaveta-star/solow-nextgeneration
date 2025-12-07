import React, { createContext, useContext, useState, ReactNode } from 'react';

type Language = 'en' | 'nl' | 'fr' | 'de';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  languageNames: Record<Language, string>;
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
    'stores.viewAll': 'View All Stores',
    
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
    'general.viewAllProducts': 'View All Products',
    'general.close': 'Close',
    
    // AR
    'ar.title': 'AR/VR Product Preview',
    'ar.description': 'Experience our products in augmented reality before you buy',
    'ar.startExperience': 'Start AR Experience',
    'ar.watchVideo': 'Watch Demo Video',
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
    'features.pricesDesc': 'Kwaliteitsproducten tegen de laagste prijzen',
    'features.delivery': 'Snelle Levering',
    'features.deliveryDesc': 'Click & Collect of thuisbezorging',
    'features.selection': 'Enorm Assortiment',
    'features.selectionDesc': 'Meer dan 20.000 producten',
    'features.ar': 'AR Preview',
    'features.arDesc': 'Bekijk producten voordat je koopt',
    
    // Loyalty
    'loyalty.title': 'Word Lid van Ons Loyaliteitsprogramma',
    'loyalty.description': 'Verdien punten bij elke aankoop en ontgrendel exclusieve beloningen!',
    'loyalty.bronze': 'Brons',
    'loyalty.silver': 'Zilver',
    'loyalty.gold': 'Goud',
    'loyalty.join': 'Word Nu Lid',
    
    // Marketplace
    'marketplace.title': 'Hergebruik & Deel Marktplaats',
    'marketplace.description': 'Geef feestartikelen een tweede leven! Koop, verkoop of ruil tweedehands decoraties en kostuums.',
    'marketplace.browse': 'Bekijk Marktplaats',
    'marketplace.sell': 'Verkoop Je Items',
    
    // Store Locator
    'stores.title': 'Vind een Winkel bij Jou in de Buurt',
    'stores.description': 'Bezoek een van onze 70+ winkels door heel Nederland',
    'stores.findStore': 'Vind Winkel',
    'stores.clickCollect': 'Click & Collect',
    'stores.viewAll': 'Bekijk Alle Winkels',
    
    // Footer
    'footer.about': 'Over SoLow',
    'footer.aboutText': 'SoLow is jouw bestemming voor betaalbare feestartikelen, cadeaus en huisartikelen.',
    'footer.quickLinks': 'Snelle Links',
    'footer.customerService': 'Klantenservice',
    'footer.followUs': 'Volg Ons',
    'footer.newsletter': 'Nieuwsbrief',
    'footer.newsletterText': 'Schrijf je in voor exclusieve aanbiedingen!',
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
    'general.viewAllProducts': 'Bekijk Alle Producten',
    'general.close': 'Sluiten',
    
    // AR
    'ar.title': 'AR/VR Product Preview',
    'ar.description': 'Ervaar onze producten in augmented reality voordat je koopt',
    'ar.startExperience': 'Start AR Ervaring',
    'ar.watchVideo': 'Bekijk Demo Video',
  },
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.categories': 'Catégories',
    'nav.products': 'Produits',
    'nav.stores': 'Magasins',
    'nav.about': 'À Propos',
    'nav.contact': 'Contact',
    'nav.cart': 'Panier',
    'nav.search': 'Rechercher des produits...',
    
    // Hero
    'hero.title': 'Articles de Fête & Cadeaux',
    'hero.subtitle': 'pour Chaque Célébration',
    'hero.description': 'Découvrez des milliers d\'articles de fête, costumes, décorations et cadeaux uniques à prix abordables. Rendez chaque moment spécial avec SoLow!',
    'hero.cta': 'Acheter Maintenant',
    'hero.ar': 'Aperçu AR',
    'hero.freeShipping': 'Livraison Gratuite dès €35',
    'hero.minOrder': 'Commande Min. €10',
    
    // Categories
    'categories.title': 'Acheter par Catégorie',
    'categories.costumes': 'Costumes & Déguisements',
    'categories.decorations': 'Décorations de Fête',
    'categories.gifts': 'Cadeaux & Cartes',
    'categories.games': 'Jeux de Fête',
    'categories.christmas': 'Noël',
    'categories.viewAll': 'Voir Tout',
    
    // Features
    'features.title': 'Pourquoi Choisir SoLow?',
    'features.prices': 'Prix Imbattables',
    'features.pricesDesc': 'Produits de qualité aux prix les plus bas garantis',
    'features.delivery': 'Livraison Rapide',
    'features.deliveryDesc': 'Click & Collect ou livraison à domicile',
    'features.selection': 'Immense Sélection',
    'features.selectionDesc': 'Plus de 20 000 produits pour chaque occasion',
    'features.ar': 'Aperçu AR',
    'features.arDesc': 'Voyez les produits avant d\'acheter',
    
    // Loyalty
    'loyalty.title': 'Rejoignez Notre Programme de Fidélité',
    'loyalty.description': 'Gagnez des points à chaque achat et débloquez des récompenses exclusives!',
    'loyalty.bronze': 'Bronze',
    'loyalty.silver': 'Argent',
    'loyalty.gold': 'Or',
    'loyalty.join': 'Rejoindre Maintenant',
    
    // Marketplace
    'marketplace.title': 'Marché Réutiliser & Partager',
    'marketplace.description': 'Donnez une seconde vie aux articles de fête! Achetez, vendez ou échangez des décorations et costumes d\'occasion.',
    'marketplace.browse': 'Parcourir le Marché',
    'marketplace.sell': 'Vendre Vos Articles',
    
    // Store Locator
    'stores.title': 'Trouvez un Magasin Près de Chez Vous',
    'stores.description': 'Visitez l\'un de nos 70+ magasins aux Pays-Bas',
    'stores.findStore': 'Trouver un Magasin',
    'stores.clickCollect': 'Click & Collect',
    'stores.viewAll': 'Voir Tous les Magasins',
    
    // Footer
    'footer.about': 'À Propos de SoLow',
    'footer.aboutText': 'SoLow est votre destination pour des articles de fête, cadeaux et articles ménagers abordables.',
    'footer.quickLinks': 'Liens Rapides',
    'footer.customerService': 'Service Client',
    'footer.followUs': 'Suivez-Nous',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Inscrivez-vous pour des offres exclusives!',
    'footer.subscribe': 'S\'inscrire',
    'footer.rights': 'Tous droits réservés',
    
    // General
    'general.addToCart': 'Ajouter au Panier',
    'general.buyNow': 'Acheter Maintenant',
    'general.viewDetails': 'Voir Détails',
    'general.customize': 'Personnaliser',
    'general.reviews': 'Avis',
    'general.inStock': 'En Stock',
    'general.outOfStock': 'Rupture de Stock',
    'general.sale': 'Soldes',
    'general.new': 'Nouveau',
    'general.trending': 'Tendance',
    'general.viewAllProducts': 'Voir Tous les Produits',
    'general.close': 'Fermer',
    
    // AR
    'ar.title': 'Aperçu Produit AR/VR',
    'ar.description': 'Découvrez nos produits en réalité augmentée avant d\'acheter',
    'ar.startExperience': 'Démarrer l\'Expérience AR',
    'ar.watchVideo': 'Voir la Vidéo Démo',
  },
  de: {
    // Navigation
    'nav.home': 'Startseite',
    'nav.categories': 'Kategorien',
    'nav.products': 'Produkte',
    'nav.stores': 'Geschäfte',
    'nav.about': 'Über Uns',
    'nav.contact': 'Kontakt',
    'nav.cart': 'Warenkorb',
    'nav.search': 'Produkte suchen...',
    
    // Hero
    'hero.title': 'Partyartikel & Geschenke',
    'hero.subtitle': 'für Jede Feier',
    'hero.description': 'Entdecken Sie tausende erschwingliche Partyartikel, Kostüme, Dekorationen und einzigartige Geschenke. Machen Sie jeden Moment besonders mit SoLow!',
    'hero.cta': 'Jetzt Einkaufen',
    'hero.ar': 'AR Vorschau',
    'hero.freeShipping': 'Kostenloser Versand ab €35',
    'hero.minOrder': 'Mindestbestellung €10',
    
    // Categories
    'categories.title': 'Nach Kategorie Einkaufen',
    'categories.costumes': 'Kostüme & Verkleidung',
    'categories.decorations': 'Party Dekoration',
    'categories.gifts': 'Geschenke & Karten',
    'categories.games': 'Partyspiele',
    'categories.christmas': 'Weihnachten',
    'categories.viewAll': 'Alle Anzeigen',
    
    // Features
    'features.title': 'Warum SoLow Wählen?',
    'features.prices': 'Unschlagbare Preise',
    'features.pricesDesc': 'Qualitätsprodukte zu garantiert niedrigsten Preisen',
    'features.delivery': 'Schnelle Lieferung',
    'features.deliveryDesc': 'Click & Collect oder Hauslieferung verfügbar',
    'features.selection': 'Riesige Auswahl',
    'features.selectionDesc': 'Über 20.000 Produkte für jeden Anlass',
    'features.ar': 'AR Vorschau',
    'features.arDesc': 'Sehen Sie Produkte bevor Sie kaufen',
    
    // Loyalty
    'loyalty.title': 'Treten Sie Unserem Treueprogramm Bei',
    'loyalty.description': 'Sammeln Sie Punkte bei jedem Einkauf und schalten Sie exklusive Prämien frei!',
    'loyalty.bronze': 'Bronze',
    'loyalty.silver': 'Silber',
    'loyalty.gold': 'Gold',
    'loyalty.join': 'Jetzt Beitreten',
    
    // Marketplace
    'marketplace.title': 'Wiederverwenden & Teilen Marktplatz',
    'marketplace.description': 'Geben Sie Partyartikeln ein zweites Leben! Kaufen, verkaufen oder tauschen Sie gebrauchte Dekorationen und Kostüme.',
    'marketplace.browse': 'Marktplatz Durchsuchen',
    'marketplace.sell': 'Ihre Artikel Verkaufen',
    
    // Store Locator
    'stores.title': 'Finden Sie ein Geschäft in Ihrer Nähe',
    'stores.description': 'Besuchen Sie eines unserer 70+ Geschäfte in den Niederlanden',
    'stores.findStore': 'Geschäft Finden',
    'stores.clickCollect': 'Click & Collect',
    'stores.viewAll': 'Alle Geschäfte Anzeigen',
    
    // Footer
    'footer.about': 'Über SoLow',
    'footer.aboutText': 'SoLow ist Ihr Ziel für erschwingliche Partyartikel, Geschenke und Haushaltsartikel.',
    'footer.quickLinks': 'Schnelllinks',
    'footer.customerService': 'Kundenservice',
    'footer.followUs': 'Folgen Sie Uns',
    'footer.newsletter': 'Newsletter',
    'footer.newsletterText': 'Abonnieren Sie für exklusive Angebote!',
    'footer.subscribe': 'Abonnieren',
    'footer.rights': 'Alle Rechte vorbehalten',
    
    // General
    'general.addToCart': 'In den Warenkorb',
    'general.buyNow': 'Jetzt Kaufen',
    'general.viewDetails': 'Details Anzeigen',
    'general.customize': 'Anpassen',
    'general.reviews': 'Bewertungen',
    'general.inStock': 'Auf Lager',
    'general.outOfStock': 'Nicht Vorrätig',
    'general.sale': 'Sale',
    'general.new': 'Neu',
    'general.trending': 'Beliebt',
    'general.viewAllProducts': 'Alle Produkte Anzeigen',
    'general.close': 'Schließen',
    
    // AR
    'ar.title': 'AR/VR Produktvorschau',
    'ar.description': 'Erleben Sie unsere Produkte in Augmented Reality bevor Sie kaufen',
    'ar.startExperience': 'AR Erfahrung Starten',
    'ar.watchVideo': 'Demo Video Ansehen',
  },
};

const languageNames: Record<Language, string> = {
  en: 'English',
  nl: 'Nederlands',
  fr: 'Français',
  de: 'Deutsch',
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>('en');

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, languageNames }}>
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

export type { Language };
