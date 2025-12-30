import { AlertTriangle } from "lucide-react";

interface WarningBannerProps {
  children: React.ReactNode;
  className?: string;
}

export const WarningBanner = ({ children, className = "" }: WarningBannerProps) => {
  return (
    <div className={`warning-box ${className}`}>
      <div className="flex items-start gap-3">
        <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
        <div className="text-sm text-muted-foreground">
          {children}
        </div>
      </div>
    </div>
  );
};
