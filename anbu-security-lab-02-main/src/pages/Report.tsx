import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Youtube, Send, MessageCircle, Music } from "lucide-react";
import { Mail, Shield, AlertTriangle, CheckCircle } from "lucide-react";

const Report = () => {
  const email = "anbucorporation@gmail.com";

  return (
    <Layout>
      <Section>
        <SectionHeader
          title="Сообщить об уязвимости"
          subtitle="Responsible Disclosure — помогите нам сделать Discord безопаснее"
        />

        <div className="grid md:grid-cols-2 gap-8 mb-12">
          {/* Contact Info */}
          <div className="terminal-border p-8">
            <Mail className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-4">Связаться с нами</h3>
            <p className="text-muted-foreground mb-6">
              Если вы обнаружили уязвимость в Discord-боте или сервере, 
              пожалуйста, сообщите нам. Мы поможем связаться с владельцами 
              для исправления проблемы.
            </p>
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
            >
              <Mail className="w-4 h-4" />
              {email}
            </a>
          </div>

          {/* What to Report */}
          <div className="terminal-border p-8">
            <Shield className="w-12 h-12 text-primary mb-6" />
            <h3 className="text-xl font-medium mb-4">Что можно сообщить</h3>
            <ul className="space-y-3 text-muted-foreground">
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green mt-1 flex-shrink-0" />
                <span>Уязвимости в популярных Discord-ботах</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green mt-1 flex-shrink-0" />
                <span>Вредоносные серверы или каналы</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green mt-1 flex-shrink-0" />
                <span>Новые методы атак на серверы</span>
              </li>
              <li className="flex items-start gap-2">
                <CheckCircle className="w-4 h-4 text-terminal-green mt-1 flex-shrink-0" />
                <span>Скомпрометированные токены ботов</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Disclosure Process */}
        <div className="mb-12">
          <h3 className="text-xl font-medium mb-8">
            <span className="text-terminal-green">→</span> Процесс Responsible Disclosure
          </h3>

          <div className="grid md:grid-cols-4 gap-4">
            {[
              {
                step: 1,
                title: "Отправка",
                description: "Опишите уязвимость в письме с техническими деталями",
              },
              {
                step: 2,
                title: "Анализ",
                description: "Мы проверяем информацию и оцениваем серьёзность",
              },
              {
                step: 3,
                title: "Уведомление",
                description: "Связываемся с владельцем для исправления",
              },
              {
                step: 4,
                title: "Публикация",
                description: "После исправления публикуем в блоге (при согласии)",
              },
            ].map((item, index) => (
              <div
                key={item.step}
                className="terminal-border p-4 relative animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-primary">
                  Шаг {item.step}
                </div>
                <h4 className="font-medium mb-2 mt-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
        {/* Social Links */}
          <div className="mb-12">
            <h3 className="text-xl font-medium mb-8">
              <span className="text-terminal-green">→</span> Наши официальные каналы
            </h3>

            <div className="grid md:grid-cols-4 gap-6">

              {/* YouTube */}
              <a
                href="https://youtube.com/@ANBUCorporation"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-border p-6 flex flex-col items-center text-center hover:border-primary transition-colors"
              >
                <svg className="w-10 h-10 text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M23.5 6.2s-.2-1.6-.9-2.3c-.8-.9-1.7-.9-2.1-1C16.9 2.5 12 2.5 12 2.5h0s-4.9 0-8.5.4c-.4.1-1.3.1-2.1 1C.7 4.6.5 6.2.5 6.2S0 8.1 0 10v1.9c0 1.9.5 3.8.5 3.8s.2 1.6.9 2.3c.8.9 1.9.9 2.4 1 1.7.2 7.2.4 8.2.4 0 0 4.9 0 8.5-.4.4-.1 1.3-.1 2.1-1 .7-.7.9-2.3.9-2.3s.5-1.9.5-3.8V10c0-1.9-.5-3.8-.5-3.8zM9.8 13.7V7.8l6.2 3-6.2 2.9z"/>
                </svg>
                <span className="font-medium">YouTube</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Видео и разборы
                </span>
              </a>

              {/* TikTok */}
              <a
                href="https://tiktok.com/@anbu.corporation?_r=1&_t=ZS-92TNK2fJp4K@YOUR_TIKTOK"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-border p-6 flex flex-col items-center text-center hover:border-primary transition-colors"
              >
                <svg className="w-10 h-10 text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M21 8.5c-1.6 0-3.2-.5-4.5-1.4v8.2c0 4.1-3.3 7.4-7.4 7.4S1.7 19.4 1.7 15.3c0-4.1 3.3-7.4 7.4-7.4.4 0 .8 0 1.2.1v4.1c-.4-.1-.8-.2-1.2-.2-1.8 0-3.3 1.5-3.3 3.3s1.5 3.3 3.3 3.3 3.3-1.5 3.3-3.3V1.5h4.2c.3 2.4 2.3 4.4 4.7 4.7v2.3z"/>
                </svg>
                <span className="font-medium">TikTok</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Короткие клипы
                </span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/yaminoanbu"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-border p-6 flex flex-col items-center text-center hover:border-primary transition-colors"
              >
                <svg className="w-10 h-10 text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M9.8 16.6l-.4 5.6c.6 0 .8-.3 1.1-.6l2.6-2.5 5.4 3.9c1 .6 1.7.3 2-.9l3.6-17c.4-1.7-.6-2.4-1.6-2L1.3 9.4c-1.6.6-1.6 1.5-.3 1.9l5.7 1.8L19.9 5.4c.6-.4 1.2-.2.7.2"/>
                </svg>
                <span className="font-medium">Telegram</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Новости и апдейты
                </span>
              </a>

              {/* Discord */}
              <a
                href="https://discord.gg/GGDzXP25ut"
                target="_blank"
                rel="noopener noreferrer"
                className="terminal-border p-6 flex flex-col items-center text-center hover:border-primary transition-colors"
              >
                <svg className="w-10 h-10 text-primary mb-4" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.3 4.4A19.6 19.6 0 0015.8 3c-.2.4-.4.8-.5 1.2a18.4 18.4 0 00-6.6 0c-.1-.4-.3-.8-.5-1.2-1.6.3-3.2.8-4.6 1.5C.7 8.7-.2 12.8.2 16.9a19.8 19.8 0 005.9 3c.5-.7.9-1.4 1.3-2.2-1-.3-2-.8-2.9-1.4.2-.1.4-.3.5-.4a13.9 13.9 0 0012.4 0c.2.1.4.3.5.4-.9.6-1.9 1.1-2.9 1.4.4.8.8 1.5 1.3 2.2a19.7 19.7 0 006-3c.4-4.7-.7-8.7-3.8-12.5zM8.6 14.3c-.8 0-1.5-.7-1.5-1.6 0-.9.6-1.6 1.5-1.6.8 0 1.5.7 1.5 1.6 0 .9-.6 1.6-1.5 1.6zm6.8 0c-.8 0-1.5-.7-1.5-1.6 0-.9.6-1.6 1.5-1.6s1.5.7 1.5 1.6c0 .9-.6 1.6-1.5 1.6z"/>
                </svg>
                <span className="font-medium">Discord</span>
                <span className="text-sm text-muted-foreground mt-1">
                  Сообщество
                </span>
              </a>

            </div>
          </div>

        {/* Guidelines */}
        <div className="terminal-border p-8">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-4">Правила сообщения об уязвимостях</h4>
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h5 className="text-terminal-green font-medium mb-3">✓ Ожидаем от вас</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Подробное описание уязвимости</li>
                    <li>• Шаги для воспроизведения</li>
                    <li>• Конфиденциальность до исправления</li>
                    <li>• Готовность к диалогу</li>
                  </ul>
                </div>
                <div>
                  <h5 className="text-primary font-medium mb-3">✗ Не делайте</h5>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li>• Не эксплуатируйте уязвимость</li>
                    <li>• Не публикуйте до исправления</li>
                    <li>• Не требуйте денег за молчание</li>
                    <li>• Не атакуйте реальных пользователей</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Report;
