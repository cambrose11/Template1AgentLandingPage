export function Footer() {
  return (
    <footer className="bg-[#0B1F3B] text-white py-20">
      <div className="max-w-[1440px] mx-auto px-[80px]">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-12">
          <div>
            <div className="mb-6">
              <p className="text-xl mb-1" style={{ fontFamily: 'var(--font-serif)' }}>Prominent Properties</p>
              <p className="text-lg" style={{ fontFamily: 'var(--font-serif)' }}>Sotheby's</p>
              <p className="text-sm" style={{ fontFamily: 'var(--font-sans)' }}>INTERNATIONAL REALTY</p>
            </div>
            <p className="text-white/70 text-sm leading-relaxed" style={{ fontFamily: 'var(--font-sans)' }}>
              Your trusted partner in luxury real estate
            </p>
          </div>
          <div className="md:text-right">
            <p className="mb-2" style={{ fontFamily: 'var(--font-sans)' }}>123 Main Street, Suite 100</p>
            <p className="mb-2" style={{ fontFamily: 'var(--font-sans)' }}>New York, NY 10001</p>
            <p className="mb-2" style={{ fontFamily: 'var(--font-sans)' }}>Phone: (555) 123-4567</p>
            <p style={{ fontFamily: 'var(--font-sans)' }}>Email: info@ppsir.com</p>
          </div>
        </div>
        <div className="pt-8 border-t border-white/20">
          <p className="text-white/50 text-sm" style={{ fontFamily: 'var(--font-sans)' }}>
            © {new Date().getFullYear()} Prominent Properties Sotheby's International Realty. All rights reserved. 
            Each office is independently owned and operated. Equal Housing Opportunity.
          </p>
        </div>
      </div>
    </footer>
  );
}
