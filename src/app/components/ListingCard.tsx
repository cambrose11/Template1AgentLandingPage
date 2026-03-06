import { Home, Bath } from 'lucide-react';
import { Button } from './Button';

interface ListingCardProps {
  image: string;
  address: string;
  price: string;
  beds: number;
  baths: number;
}

export function ListingCard({ image, address, price, beds, baths }: ListingCardProps) {
  return (
    <div className="bg-white shadow-md hover:shadow-xl transition-shadow duration-300 rounded-lg overflow-hidden">
      <div className="relative h-[280px] overflow-hidden">
        <img 
          src={image} 
          alt={address}
          className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <p 
          className="text-[#002349] mb-2"
          style={{ fontFamily: 'var(--font-serif)', fontSize: '24px' }}
        >
          {price}
        </p>
        <p 
          className="text-[#666666] mb-4"
          style={{ fontFamily: 'var(--font-sans)', fontSize: '15px' }}
        >
          {address}
        </p>
        <div 
          className="flex items-center gap-6 mb-6 text-[#999999]" 
          style={{ fontFamily: 'var(--font-sans)', fontSize: '14px' }}
        >
          <div className="flex items-center gap-2">
            <Home className="w-4 h-4" />
            <span>{beds} Beds</span>
          </div>
          <div className="flex items-center gap-2">
            <Bath className="w-4 h-4" />
            <span>{baths} Baths</span>
          </div>
        </div>
        <Button variant="secondary" className="w-full">View Property</Button>
      </div>
    </div>
  );
}