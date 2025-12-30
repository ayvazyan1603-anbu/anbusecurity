import { Shield, AlertTriangle } from "lucide-react";
import { Youtube, Send, MessageCircle, Music } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="border-t border-border bg-card/30 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="warning-box mb-8">
          <div className="flex items-start gap-3">
            <AlertTriangle className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
            <p className="text-sm text-muted-foreground">
              <span className="text-foreground font-medium">DISCLAIMER:</span> Этот сайт носит{" "}
              <span className="text-primary font-medium">ИСКЛЮЧИТЕЛЬНО ОБРАЗОВАТЕЛЬНЫЙ</span> характер. 
              Мы не поощряем и не предоставляем инструменты для вредоносных действий. 
              Все демонстрации проводятся на тестовых серверах с согласия владельцев.
            </p>
          </div>
        </div>
       
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2 text-muted-foreground">
            <Shield className="w-5 h-5 text-primary" />
            <span className="text-sm">© 2026 ANBU Security Lab</span>
          </div>
 {/* Left — Social Icons */}
          <div className="flex items-center gap-4 text-muted-foreground">

            {/* YouTube */}
            <a
              href="https://youtube.com/@ANBUCorporation"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="YouTube"
              className="hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.5.4c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.2.4 8.2.4 0 0 4.9 0 8.5-.4.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.8 13.7V7.8l6.2 3-6.2 2.9z"/>
              </svg>
            </a>

            {/* TikTok */}
            <a
              href="https://tiktok.com/@anbu.corporation?_r=1&_t=ZS-92TNK2fJp4K"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="TikTok"
              className="hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M21 8.5c-1.6 0-3.2-.5-4.5-1.4v8.2c0 4.1-3.3 7.4-7.4 7.4S1.7 19.4 1.7 15.3c0-4.1 3.3-7.4 7.4-7.4.4 0 .8 0 1.2.1v4.1c-.4-.1-.8-.2-1.2-.2-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3V1.5h4.2c.3 2.4 2.3 4.4 4.7 4.7v2.3z"/>
              </svg>
            </a>

            {/* Telegram */}
            <a
              href="https://t.me/yaminoanbu"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Telegram"
              className="hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M9.8 16.6l-.4 5.6c.6 0 .8-.3 1.1-.6l2.6-2.5 5.4 3.9c1 .6 1.7.3 2-.9l3.6-17c.4-1.7-.6-2.4-1.6-2L1.3 9.4c-1.6.6-1.6 1.5-.3 1.9l5.7 1.8L19.9 5.4c.6-.4 1.2-.2.7.2"/>
              </svg>
            </a>

            {/* Discord */}
            <a
              href="https://discord.gg/GGDzXP25ut"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Discord"
              className="hover:text-primary transition-colors"
            >
              <svg className="w-5 h-5" viewBox="0 0 24 24" fill="currentColor">
                <path d="M20.3 4.4A19.6 19.6 0 0015.8 3c-.2.4-.4.8-.5 1.2a18.4 18.4 0 00-6.6 0c-.1-.4-.3-.8-.5-1.2-1.6.3-3.2.8-4.6 1.5C.7 8.7-.2 12.8.2 16.9a19.8 19.8 0 005.9 3c.5-.7.9-1.4 1.3-2.2-1-.3-2-.8-2.9-1.4.2-.1.4-.3.5-.4a13.9 13.9 0 0012.4 0c.2.1.4.3.5.4-.9.6-1.9 1.1-2.9 1.4.4.8.8 1.5 1.3 2.2a19.7 19.7 0 006-3c.4-4.7-.7-8.7-3.8-12.5zM8.6 14.3c-.8 0-1.5-.7-1.5-1.6 0-.9.6-1.6 1.5-1.6.8 0 1.5.7 1.5 1.6 0 .9-.6 1.6-1.5 1.6zm6.8 0c-.8 0-1.5-.7-1.5-1.6 0-.9.6-1.6 1.5-1.6s1.5.7 1.5 1.6c0 .9-.6 1.6-1.5 1.6z"/>
              </svg>
            </a>

          </div>
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <Link to="/report" className="hover:text-foreground transition-colors">
              Связаться с нами
            </Link>
            <span className="text-border">|</span>
            <Link to="/admin" className="hover:text-foreground transition-colors">
              Админ
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};
