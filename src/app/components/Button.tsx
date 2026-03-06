import { ButtonHTMLAttributes, ReactNode } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary';
  children: ReactNode;
}

export function Button({ variant = 'primary', children, className = '', ...props }: ButtonProps) {
  const baseClasses = 'px-8 py-3 transition-all duration-300';
  
  const variantClasses = {
    primary: 'bg-[#002349] text-white hover:bg-[#C29B40]',
    secondary: 'border-2 border-[#002349] text-[#002349] hover:bg-[#002349] hover:text-white',
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses[variant]} ${className}`}
      style={{ fontFamily: 'var(--font-sans)' }}
      {...props}
    >
      {children}
    </button>
  );
}