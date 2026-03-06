import { Phone, Mail, MapPin } from 'lucide-react';
import { Button } from './components/Button';
import { ListingCard } from './components/ListingCard';
import { TestimonialCard } from './components/TestimonialCard';

export default function App() {
  // Dynamic data placeholders
  const agentName = "[AGENT NAME]";
  const town = "[CITY/TOWN]";
  const ctaText = "[CTA TEXT]";
  const agentPhone = "[PHONE NUMBER]";
  const agentEmail = "[EMAIL ADDRESS]";
  const agentOffice = "[OFFICE LOCATION]";
  const agentBio = "[AGENT BIO - Add your professional background, experience, and unique value proposition here.]";
  const agentPhotoUrl = "https://via.placeholder.com/600x800/002349/FFFFFF?text=Agent+Photo";

  const listings = [
    {
      image: 'https://via.placeholder.com/600x400/002349/FFFFFF?text=Property+1',
      address: '[Property Address 1]',
      price: '[Price]',
      beds: 4,
      baths: 4,
    },
    {
      image: 'https://via.placeholder.com/600x400/002349/FFFFFF?text=Property+2',
      address: '[Property Address 2]',
      price: '[Price]',
      beds: 5,
      baths: 5,
    },
    {
      image: 'https://via.placeholder.com/600x400/002349/FFFFFF?text=Property+3',
      address: '[Property Address 3]',
      price: '[Price]',
      beds: 3,
      baths: 3,
    },
  ];

  const testimonials = [
    {
      quote: "[Client testimonial quote 1]",
      name: "[Client Name 1]",
      rating: 5,
    },
    {
      quote: "[Client testimonial quote 2]",
      name: "[Client Name 2]",
      rating: 5,
    },
    {
      quote: "[Client testimonial quote 3]",
      name: "[Client Name 3]",
      rating: 5,
    },
  ];

  return (
    <div className="bg-white min-h-screen" style={{ fontFamily: 'var(--font-sans)' }}>
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-[700px] flex items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 35, 73, 0.75), rgba(0, 35, 73, 0.75)), url('https://images.unsplash.com/photo-1706809019043-c16ada0165e9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjBtb2Rlcm4lMjBob21lJTIwZXh0ZXJpb3J8ZW58MXx8fHwxNzcyNzQ4MTMzfDA&ixlib=rb-4.1.0&q=80&w=1080')`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="max-w-[1440px] mx-auto px-[80px] py-32 w-full">
          <div className="max-w-[700px]">
            <h1 
              className="mb-8 text-white"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '72px', lineHeight: '1.1', fontWeight: 'normal' }}
              data-field="agent_name"
            >
              {agentName}
            </h1>
            <p 
              className="text-white/90 mb-12"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '24px', lineHeight: '1.5' }}
            >
              Luxury Real Estate Advisor Serving <span data-field="town">{town}</span>
            </p>
            <div className="flex flex-wrap gap-4">
              <Button variant="primary" data-field="cta_text" data-link="cta_link">{ctaText}</Button>
              <Button variant="secondary" className="!border-white !text-white hover:!bg-white hover:!text-[#002349]">View Listings</Button>
            </div>
          </div>
        </div>
      </section>

      {/* Credibility Strip */}
      <section className="bg-[#F5F5F5] py-8 border-b border-[rgba(0,0,0,0.1)]">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="flex flex-wrap justify-center gap-12 text-center">
            <div>
              <p className="text-[#002349]" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', letterSpacing: '0.05em' }}>
                TRUSTED REAL ESTATE ADVISOR
              </p>
            </div>
            <div className="border-l border-[#C29B40]"></div>
            <div>
              <p className="text-[#002349]" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', letterSpacing: '0.05em' }}>
                SERVING HUDSON COUNTY
              </p>
            </div>
            <div className="border-l border-[#C29B40]"></div>
            <div>
              <p className="text-[#002349]" style={{ fontFamily: 'var(--font-sans)', fontSize: '14px', letterSpacing: '0.05em' }}>
                LUXURY PROPERTY SPECIALIST
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Agent Profile Section */}
      <section className="bg-white py-32">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-start">
            <div className="aspect-[3/4] overflow-hidden rounded-lg shadow-lg">
              <img 
                src={agentPhotoUrl}
                alt={agentName}
                className="w-full h-full object-cover"
                data-field="agent_photo"
              />
            </div>
            <div className="pt-8">
              <h2 
                className="mb-6 text-[#002349]"
                style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', lineHeight: '1.2', fontWeight: 'normal' }}
              >
                Meet <span data-field="agent_name">{agentName}</span>
              </h2>
              <div className="w-24 h-[2px] bg-[#C29B40] mb-10"></div>
              <p 
                className="text-[#666666] mb-12 leading-relaxed"
                style={{ fontFamily: 'var(--font-sans)', fontSize: '17px', lineHeight: '1.8' }}
                data-field="agent_bio"
              >
                {agentBio}
              </p>
              <div className="space-y-5 bg-[#F5F5F5] p-8 rounded-lg">
                <div className="flex items-center gap-4">
                  <Phone className="w-5 h-5 text-[#C29B40]" />
                  <span className="text-[#002349]" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} data-field="agent_phone">
                    {agentPhone}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-5 h-5 text-[#C29B40]" />
                  <span className="text-[#002349]" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} data-field="agent_email">
                    {agentEmail}
                  </span>
                </div>
                <div className="flex items-center gap-4">
                  <MapPin className="w-5 h-5 text-[#C29B40]" />
                  <span className="text-[#002349]" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} data-field="agent_office">
                    {agentOffice}
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Listings Section */}
      <section className="bg-[#F5F5F5] py-32">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="text-center mb-16">
            <h2 
              className="mb-6 text-[#002349]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', lineHeight: '1.2', fontWeight: 'normal' }}
            >
              Featured Properties
            </h2>
            <div className="w-24 h-[2px] bg-[#C29B40] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {listings.map((listing, index) => (
              <ListingCard key={index} {...listing} />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-white py-32">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="text-center mb-16">
            <h2 
              className="mb-6 text-[#002349]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', lineHeight: '1.2', fontWeight: 'normal' }}
            >
              What Clients Are Saying
            </h2>
            <div className="w-24 h-[2px] bg-[#C29B40] mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
            {testimonials.map((testimonial, index) => (
              <TestimonialCard key={index} {...testimonial} />
            ))}
          </div>
        </div>
      </section>

      {/* Lead Capture Section */}
      <section className="bg-[#F5F5F5] py-32">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="max-w-[700px] mx-auto text-center">
            <h2 
              className="mb-6 text-[#002349]"
              style={{ fontFamily: 'var(--font-serif)', fontSize: '48px', lineHeight: '1.2', fontWeight: 'normal' }}
            >
              Work With <span data-field="agent_name">{agentName}</span>
            </h2>
            <div className="w-24 h-[2px] bg-[#C29B40] mx-auto mb-8"></div>
            <p 
              className="text-[#666666] mb-12"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '18px', lineHeight: '1.6' }}
            >
              Discuss buying or selling in <span data-field="town">{town}</span>
            </p>
            <form className="space-y-6 text-left bg-white p-10 rounded-lg shadow-lg">
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full px-6 py-4 border border-[rgba(0,0,0,0.15)] rounded focus:outline-none focus:border-[#C29B40] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div>
                <input
                  type="email"
                  placeholder="Email"
                  className="w-full px-6 py-4 border border-[rgba(0,0,0,0.15)] rounded focus:outline-none focus:border-[#C29B40] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div>
                <input
                  type="tel"
                  placeholder="Phone"
                  className="w-full px-6 py-4 border border-[rgba(0,0,0,0.15)] rounded focus:outline-none focus:border-[#C29B40] transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <div>
                <textarea
                  placeholder="Message"
                  rows={5}
                  className="w-full px-6 py-4 border border-[rgba(0,0,0,0.15)] rounded focus:outline-none focus:border-[#C29B40] resize-none transition-colors"
                  style={{ fontFamily: 'var(--font-sans)' }}
                />
              </div>
              <Button type="submit" variant="primary" className="w-full !py-4">
                Contact <span data-field="agent_name">{agentName}</span>
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#002349] text-white py-20">
        <div className="max-w-[1440px] mx-auto px-[80px]">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 mb-16">
            <div>
              <div className="mb-12">
                <img 
                  src="figma:asset/081745fa6d76828276652f9bc789c69c355d253e.png"
                  alt="Prominent Properties Sotheby's International Realty"
                  className="h-16 w-auto"
                  data-field="brokerage_logo"
                />
              </div>
            </div>
            <div className="md:text-right space-y-3">
              <p className="text-white" style={{ fontFamily: 'var(--font-sans)', fontSize: '18px' }} data-field="agent_name">{agentName}</p>
              <p className="text-white/80" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} data-field="agent_phone">{agentPhone}</p>
              <p className="text-white/80" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} data-field="agent_email">{agentEmail}</p>
              <p className="text-white/80" style={{ fontFamily: 'var(--font-sans)', fontSize: '16px' }} data-field="agent_office">{agentOffice}</p>
            </div>
          </div>
          <div className="pt-10 border-t border-white/20">
            <p 
              className="text-white/60 leading-relaxed"
              style={{ fontFamily: 'var(--font-sans)', fontSize: '13px', lineHeight: '1.7' }}
            >
              © {new Date().getFullYear()} Sotheby's International Realty Affiliates LLC. All Rights Reserved. 
              Sotheby's International Realty® is a licensed trademark to Sotheby's International Realty Affiliates LLC. 
              Each Office Is Independently Owned And Operated. Equal Housing Opportunity.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}