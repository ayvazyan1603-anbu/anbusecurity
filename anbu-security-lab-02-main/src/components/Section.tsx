import { ReactNode } from "react";

interface SectionProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

export const Section = ({ children, className = "", id }: SectionProps) => {
  return (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
      <div className="container mx-auto px-4">
        {children}
      </div>
    </section>
  );
};

interface SectionHeaderProps {
  title: string;
  subtitle?: string;
  className?: string;
}

export const SectionHeader = ({ title, subtitle, className = "" }: SectionHeaderProps) => {
  return (
    <div className={`mb-12 ${className}`}>
      <h2 className="text-2xl md:text-3xl font-bold mb-4">
        <span className="text-terminal-green">$</span> {title}
      </h2>
      {subtitle && (
        <p className="text-muted-foreground max-w-2xl">{subtitle}</p>
      )}
    </div>
  );
};
