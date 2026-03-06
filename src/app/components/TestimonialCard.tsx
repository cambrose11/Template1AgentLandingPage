import { Star } from 'lucide-react';

interface TestimonialCardProps {
  quote: string;
  name: string;
  rating: number;
}

export function TestimonialCard({ quote, name, rating }: TestimonialCardProps) {
  return (
    <div className="bg-white p-8">
      <div className="flex gap-1 mb-6">
        {[...Array(rating)].map((_, i) => (
          <Star key={i} className="w-5 h-5 fill-[#C29B40] text-[#C29B40]" />
        ))}
      </div>
      <p 
        className="text-[#666666] mb-6 leading-relaxed"
        style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }}
      >
        "{quote}"
      </p>
      <p 
        className="text-black"
        style={{ fontFamily: 'var(--font-sans)', fontSize: '14px' }}
      >
        — {name}
      </p>
    </div>
  );
}
