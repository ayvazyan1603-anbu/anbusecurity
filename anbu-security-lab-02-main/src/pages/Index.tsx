import { Layout } from "@/components/Layout";
import { TerminalText } from "@/components/TerminalText";
import { Section, SectionHeader } from "@/components/Section";
import { WarningBanner } from "@/components/WarningBanner";
import { Shield, Bug, Lock, BookOpen, Video, Mail } from "lucide-react";
import { Link } from "react-router-dom";
import { useState } from "react";

const features = [
  {
    icon: Bug,
    title: "Как работают краш-боты",
    description: "Разбор механизмов атак на Discord-серверы",
    href: "/how-it-works",
  },
  {
    icon: Lock,
    title: "Защита сервера",
    description: "Полный гайд по защите вашего сервера",
    href: "/protection-guide",
  },
  {
    icon: Video,
    title: "Демонстрации",
    description: "Видео-примеры атак на тестовых серверах",
    href: "/demo",
  },
  {
    icon: BookOpen,
    title: "Блог",
    description: "Статьи о безопасности Discord",
    href: "/blog",
  },
  {
    icon: Mail,
    title: "Сообщить об уязвимости",
    description: "Responsible disclosure программа",
    href: "/report",
  },
];

const Index = () => {
  const [showContent, setShowContent] = useState(false);

  return (
    <Layout>
      {/* Hero Section */}
      <Section className="min-h-[80vh] flex items-center">
        <div className="max-w-4xl">
          <div className="mb-6 text-muted-foreground font-mono text-sm">
            <span className="text-terminal-green">root@anbu</span>
            <span className="text-muted-foreground">:</span>
            <span className="text-terminal-cyan">~</span>
            <span className="text-muted-foreground">$ </span>
            <span>./init_security_lab.sh</span>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            <TerminalText
              text="ANBU Security Lab"
              speed={80}
              onComplete={() => setShowContent(true)}
            />
          </h1>

          <div className={`space-y-6 transition-opacity duration-500 ${showContent ? "opacity-100" : "opacity-0"}`}>
            <div className="flex items-center gap-3 text-lg text-muted-foreground">
              <Shield className="w-6 h-6 text-primary" />
              <span>Образовательный ресурс о безопасности Discord-серверов</span>
            </div>

            <p className="text-muted-foreground max-w-2xl leading-relaxed">
              Изучайте механизмы атак, чтобы лучше защищать свои серверы. 
              Мы показываем, как работают краш-боты и другие угрозы, 
              чтобы вы могли эффективно им противостоять.
            </p>

            <WarningBanner className="max-w-2xl">
              <p>
                <span className="text-foreground font-medium">ВНИМАНИЕ:</span> Вся информация 
                предоставляется исключительно в образовательных целях. Использование этих 
                знаний для атак на реальные серверы <span className="text-primary font-medium">НЕЗАКОННО</span> и 
                может повлечь уголовную ответственность.
              </p>
            </WarningBanner>

            <div className="flex flex-wrap gap-4 pt-4">
              <Link
                to="/how-it-works"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
              >
                <Bug className="w-4 h-4" />
                Как работают атаки
              </Link>
              <Link
                to="/protection-guide"
                className="inline-flex items-center gap-2 border border-border bg-secondary text-secondary-foreground px-6 py-3 font-medium hover:bg-muted transition-colors"
              >
                <Lock className="w-4 h-4" />
                Защитить сервер
              </Link>
            </div>
          </div>
        </div>
      </Section>

      {/* Features Grid */}
      <Section className="border-t border-border">
        <SectionHeader
          title="Разделы лаборатории"
          subtitle="Выберите тему для изучения"
        />

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <Link
              key={feature.href}
              to={feature.href}
              className="terminal-border p-6 hover:border-primary/50 transition-all group animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <feature.icon className="w-8 h-8 text-primary mb-4 group-hover:scale-110 transition-transform" />
              <h3 className="text-lg font-medium mb-2 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </Section>

      {/* Stats Section */}
      <Section className="border-t border-border">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { value: "50K+", label: "Защищённых серверов" },
            { value: "100+", label: "Статей в блоге" },
            { value: "24/7", label: "Мониторинг угроз" },
            { value: "0", label: "Терпимости к скаму" },
          ].map((stat, index) => (
            <div key={index} className="animate-fade-in" style={{ animationDelay: `${index * 150}ms` }}>
              <div className="text-3xl md:text-4xl font-bold text-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </Section>
    </Layout>
  );
};

export default Index;
