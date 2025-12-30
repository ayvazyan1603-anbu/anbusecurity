import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { WarningBanner } from "@/components/WarningBanner";
import { Play, Lock, AlertTriangle } from "lucide-react";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface DemoVideo {
  id: string;
  title: string;
  description: string;
  video_url: string;
  thumbnail_url: string | null;
  created_at: string;
}

const Demo = () => {
  const { data: videos, isLoading } = useQuery({
    queryKey: ["demo-videos"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("demo_videos")
        .select("*")
        .order("created_at", { ascending: false });
      
      if (error) {
        console.error("Error fetching videos:", error);
        return [];
      }
      return data as DemoVideo[];
    },
  });

  return (
    <Layout>
      <Section>
        <SectionHeader
          title="Демонстрации атак"
          subtitle="Видео-примеры атак, проведённых на тестовых серверах"
        />

        <WarningBanner className="mb-12">
          <p>
            Все демонстрации проводятся <span className="text-foreground font-medium">ИСКЛЮЧИТЕЛЬНО</span> на 
            тестовых серверах с полного согласия их владельцев. Эти видео служат образовательным целям — 
            показать администраторам, как выглядят атаки и почему важна защита.
          </p>
        </WarningBanner>

        {isLoading ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="terminal-border p-4 animate-pulse">
                <div className="aspect-video bg-muted rounded mb-4" />
                <div className="h-4 bg-muted rounded w-3/4 mb-2" />
                <div className="h-3 bg-muted rounded w-1/2" />
              </div>
            ))}
          </div>
        ) : videos && videos.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {videos.map((video, index) => (
              <div
                key={video.id}
                className="terminal-border overflow-hidden animate-fade-in group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="relative aspect-video bg-muted">
                  {video.thumbnail_url ? (
                    <img
                      src={video.thumbnail_url}
                      alt={video.title}
                      className="w-full h-full object-cover"
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <Play className="w-12 h-12 text-muted-foreground" />
                    </div>
                  )}
                  <div className="absolute inset-0 bg-background/60 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <a
                      href={video.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 bg-primary text-primary-foreground px-4 py-2 rounded"
                    >
                      <Play className="w-4 h-4" />
                      Смотреть
                    </a>
                  </div>
                  <div className="absolute top-2 right-2">
                    <span className="bg-primary/90 text-primary-foreground text-xs px-2 py-1 rounded flex items-center gap-1">
                      <AlertTriangle className="w-3 h-3" />
                      Тестовый сервер
                    </span>
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="font-medium mb-2 group-hover:text-primary transition-colors">
                    {video.title}
                  </h3>
                  <p className="text-sm text-muted-foreground line-clamp-2">
                    {video.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div className="terminal-border p-12 text-center">
            <Lock className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Видео скоро появятся</h3>
            <p className="text-muted-foreground">
              Мы готовим демонстрационные материалы на тестовых серверах.
            </p>
          </div>
        )}

        {/* Disclaimer */}
        <div className="mt-12 terminal-border p-6">
          <div className="flex items-start gap-4">
            <AlertTriangle className="w-6 h-6 text-primary flex-shrink-0" />
            <div>
              <h4 className="font-medium mb-2">О записях демонстраций</h4>
              <ul className="text-sm text-muted-foreground space-y-2">
                <li>• Все видео записаны на серверах, созданных специально для тестирования</li>
                <li>• На видео не показываются реальные пользователи или их данные</li>
                <li>• Код и методы атак показаны в образовательных целях</li>
              </ul>
            </div>
          </div>
        </div>
      </Section>
    </Layout>
  );
};

export default Demo;
