import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { CodeBlock } from "@/components/CodeBlock";
import { WarningBanner } from "@/components/WarningBanner";
import { AlertTriangle, Zap, Server, Shield } from "lucide-react";

const attackSteps = [
  {
    step: 1,
    title: "Разведка",
    description: "Бот сканирует целевой сервер, собирая информацию о ролях, каналах и правах доступа.",
    icon: Server,
  },
  {
    step: 2,
    title: "Эксплуатация",
    description: "Используя найденные уязвимости (скомпрометированные боты, слабые права), атакующий получает доступ.",
    icon: Zap,
  },
  {
    step: 3,
    title: "Деструкция",
    description: "Массовое удаление каналов, ролей, бан участников, спам сообщениями.",
    icon: AlertTriangle,
  },
];

const exampleCode = `# ⚠️ ПРИМЕР ТОЛЬКО ДЛЯ ОБРАЗОВАТЕЛЬНЫХ ЦЕЛЕЙ
# НЕ ИСПОЛЬЗУЙТЕ ЭТОТ КОД ДЛЯ АТАК!

import discord
from discord.ext import commands

# Пример того, как НЕ надо настраивать бота
bot = commands.Bot(
    command_prefix="!",
    intents=discord.Intents.all()  # Опасно!
)

# Уязвимая команда без проверки прав
@bot.command()
async def delete_channel(ctx, channel_name):
    # НЕТ ПРОВЕРКИ ПРАВ ПОЛЬЗОВАТЕЛЯ!
    channel = discord.utils.get(ctx.guild.channels, name=channel_name)
    if channel:
        await channel.delete()
        
# Это позволяет ЛЮБОМУ пользователю удалять каналы
# если у бота есть соответствующие права`;

const HowItWorks = () => {
  return (
    <Layout>
      <Section>
        <SectionHeader
          title="Как работают краш-боты"
          subtitle="Понимание механизмов атак — первый шаг к защите"
        />

        <WarningBanner className="mb-12">
          <p>
            Информация ниже предоставляется <span className="text-foreground font-medium">ИСКЛЮЧИТЕЛЬНО</span> в 
            образовательных целях. Использование этих знаний для атак на реальные серверы является 
            <span className="text-primary font-medium"> УГОЛОВНЫМ ПРЕСТУПЛЕНИЕМ</span>.
          </p>
        </WarningBanner>

        {/* Attack Flow Diagram */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">
            <span className="text-terminal-green">→</span> Типичный сценарий атаки
          </h3>

          <div className="grid md:grid-cols-3 gap-6">
            {attackSteps.map((step, index) => (
              <div
                key={step.step}
                className="terminal-border p-6 relative animate-fade-in"
                style={{ animationDelay: `${index * 150}ms` }}
              >
                <div className="absolute -top-3 left-4 bg-background px-2 text-xs text-muted-foreground">
                  Шаг {step.step}
                </div>
                <step.icon className="w-8 h-8 text-primary mb-4" />
                <h4 className="font-medium mb-2">{step.title}</h4>
                <p className="text-sm text-muted-foreground">{step.description}</p>
                {index < attackSteps.length - 1 && (
                  <div className="hidden md:block absolute -right-3 top-1/2 -translate-y-1/2 text-primary text-2xl">
                    →
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Vulnerability Example */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">
            <span className="text-terminal-green">→</span> Пример уязвимого кода
          </h3>

          <CodeBlock
            code={exampleCode}
            language="python"
            warning="ЭТОТ КОД ДЕМОНСТРИРУЕТ УЯЗВИМОСТЬ. НЕ ИСПОЛЬЗУЙТЕ ЕГО!"
          />
        </div>

        {/* Attack Vectors */}
        <div className="mb-16">
          <h3 className="text-xl font-medium mb-8">
            <span className="text-terminal-green">→</span> Основные векторы атак
          </h3>

          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                title: "Скомпрометированные боты",
                description: "Атакующие получают доступ к токенам популярных ботов и используют их права для атаки.",
                severity: "Критический",
              },
              {
                title: "Вредоносные ссылки",
                description: "Фишинговые страницы, маскирующиеся под Discord, крадут токены пользователей.",
                severity: "Высокий",
              },
              {
                title: "Социальная инженерия",
                description: "Манипуляции с администраторами для получения прав или приглашения вредоносных ботов.",
                severity: "Высокий",
              },
              {
                title: "Злоупотребление Webhooks",
                description: "Использование украденных webhook URL для спама и дестабилизации каналов.",
                severity: "Средний",
              },
            ].map((vector, index) => (
              <div
                key={index}
                className="terminal-border p-6 animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-medium">{vector.title}</h4>
                  <span className={`text-xs px-2 py-1 rounded ${
                    vector.severity === "Критический" 
                      ? "bg-primary/20 text-primary" 
                      : vector.severity === "Высокий"
                      ? "bg-terminal-yellow/20 text-terminal-yellow"
                      : "bg-muted text-muted-foreground"
                  }`}>
                    {vector.severity}
                  </span>
                </div>
                <p className="text-sm text-muted-foreground">{vector.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="terminal-border p-8 text-center">
          <Shield className="w-12 h-12 text-primary mx-auto mb-4" />
          <h3 className="text-xl font-medium mb-3">Готовы защитить свой сервер?</h3>
          <p className="text-muted-foreground mb-6">
            Перейдите к полному руководству по защите
          </p>
          <a
            href="/protection-guide"
            className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
          >
            <Shield className="w-4 h-4" />
            Перейти к защите
          </a>
        </div>
      </Section>
    </Layout>
  );
};

export default HowItWorks;
