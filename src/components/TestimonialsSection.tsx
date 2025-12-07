import { Star, Quote } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const testimonials = [
  {
    name: 'Emma de Vries',
    location: 'Amsterdam',
    rating: 5,
    text: 'Amazing selection of party supplies at unbeatable prices! The Click & Collect option saved me so much time. Will definitely shop here again!',
    avatar: '👩',
  },
  {
    name: 'Bob Smith',
    location: 'Groningen',
    rating: 5,
    text: 'As an international student, I loved that they have an English website. The AR preview helped me visualize decorations before buying. Perfect for King\'s Day!',
    avatar: '👨',
  },
  {
    name: 'Lisa van der Berg',
    location: 'Rotterdam',
    rating: 4,
    text: 'Great store for last-minute party needs. The loyalty program is a nice bonus - already saved 20% on my Christmas shopping!',
    avatar: '👩‍🦰',
  },
];

export default function TestimonialsSection() {
  return (
    <section className="py-16 lg:py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="h-6 w-6 fill-festive text-festive" />
            ))}
          </div>
          <h2 className="font-display text-3xl lg:text-4xl font-bold text-foreground mb-2">
            Loved by Customers
          </h2>
          <p className="text-lg text-muted-foreground">
            4.5/5 rating on Trustpilot from 10,000+ reviews
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card
              key={testimonial.name}
              variant="elevated"
              className="animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardContent className="pt-6">
                <Quote className="h-8 w-8 text-primary/20 mb-4" />
                
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-festive text-festive" />
                  ))}
                </div>

                <p className="text-foreground/80 mb-6">
                  "{testimonial.text}"
                </p>

                <div className="flex items-center gap-3">
                  <span className="text-3xl">{testimonial.avatar}</span>
                  <div>
                    <p className="font-display font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
