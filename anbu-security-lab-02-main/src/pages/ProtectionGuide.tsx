import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Check, X, Shield, Bot, Key, Users, AlertTriangle } from "lucide-react";

const securityChecklist = [
  {
    category: "Настройки сервера",
    items: [
      { text: "Включена двухфакторная аутентификация для модераторов", required: true },
      { text: "Отключено создание приглашений для @everyone", required: true },
      { text: "Ограничены права на упоминание @everyone/@here", required: true },
      { text: "Настроен Verification Level (минимум Medium)", required: false },
      { text: "Включен Explicit Content Filter", required: false },
    ],
  },
  {
    category: "Права ботов",
    items: [
      { text: "Каждый бот имеет только необходимые права", required: true },
      { text: "Административные права только у проверенных ботов", required: true },
      { text: "Роли ботов ниже ролей модераторов", required: true },
      { text: "Регулярный аудит прав ботов", required: false },
    ],
  },
];

const ProtectionGuide = () => {
  return (
    <Layout>
      <Section>
        <SectionHeader
          title="Защита Discord-сервера"
          subtitle="Полный чек-лист безопасности для администраторов"
        />

        {/* Security Checklist */}
        <div className="mb-16 space-y-8">
          {securityChecklist.map((section, sectionIndex) => (
            <div
              key={section.category}
              className="terminal-border p-6 animate-fade-in"
              style={{ animationDelay: `${sectionIndex * 100}ms` }}
            >
              <h3 className="text-lg font-medium mb-6 flex items-center gap-2">
                <Shield className="w-5 h-5 text-primary" />
                {section.category}
              </h3>
              <div className="space-y-4">
                {section.items.map((item, itemIndex) => (
                  <div
                    key={itemIndex}
                    className="flex items-start gap-3 p-3 rounded bg-muted/30"
                  >
                    <div className={`flex-shrink-0 w-6 h-6 rounded-full flex items-center justify-center ${
                      item.required ? "bg-primary/20 text-primary" : "bg-muted text-muted-foreground"
                    }`}>
                      {item.required ? (
                        <AlertTriangle className="w-3 h-3" />
                      ) : (
                        <Check className="w-3 h-3" />
                      )}
                    </div>
                    <div className="flex-1">
                      <p className="text-sm">{item.text}</p>
                      {item.required && (
                        <span className="text-xs text-primary mt-1 inline-block">
                          Обязательно
                        </span>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* 2FA Section */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">
            <span className="text-terminal-green">→</span> Двухфакторная аутентификация
          </h3>

          <div className="terminal-border p-6">
            <div className="flex items-start gap-4">
              <Key className="w-8 h-8 text-primary flex-shrink-0" />
              <div>
                <h4 className="font-medium mb-2">Почему 2FA критически важна?</h4>
                <p className="text-muted-foreground text-sm mb-4">
                  Двухфакторная аутентификация — это последний рубеж защиты аккаунта. 
                  Даже если злоумышленник получит ваш пароль, без второго фактора 
                  он не сможет войти в аккаунт.
                </p>
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="p-4 bg-muted/30 rounded">
                    <div className="flex items-center gap-2 text-terminal-green mb-2">
                      <Check className="w-4 h-4" />
                      <span className="font-medium">С 2FA</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Требуется код из приложения для входа
                    </p>
                  </div>
                  <div className="p-4 bg-muted/30 rounded">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <X className="w-4 h-4" />
                      <span className="font-medium">Без 2FA</span>
                    </div>
                    <p className="text-sm text-muted-foreground">
                      Компрометация пароля = полный доступ
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Best Practices */}
        <div className="terminal-border p-8">
          <h3 className="text-xl font-medium mb-6 flex items-center gap-2">
            <Users className="w-6 h-6 text-primary" />
            Правила для команды модераторов
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h4 className="font-medium text-terminal-green mb-3">✓ Делайте</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Используйте уникальные пароли для Discord</li>
                <li>• Включите 2FA на всех аккаунтах</li>
                <li>• Проверяйте ботов перед добавлением</li>
                <li>• Регулярно проводите аудит прав</li>
                <li>• Ведите логи всех изменений</li>
              </ul>
            </div>
            <div>
              <h4 className="font-medium text-primary mb-3">✗ Избегайте</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>• Не давайте права администратора всем подряд</li>
                <li>• Не переходите по подозрительным ссылкам</li>
                <li>• Не добавляйте неизвестных ботов</li>
                <li>• Не игнорируйте подозрительную активность</li>
                <li>• Не делитесь токенами ботов</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default ProtectionGuide;
