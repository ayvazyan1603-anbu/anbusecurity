import { Layout } from "@/components/Layout";
import { Section, SectionHeader } from "@/components/Section";
import { Calendar, User, ArrowRight, BookOpen } from "lucide-react";
import { Link } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface BlogPost {
  id: string;
  title: string;
  excerpt: string;
  slug: string;
  author_name: string;
  created_at: string;
  tags: string[];
  published: boolean;
}

const Blog = () => {
  const { data: posts, isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("id, title, excerpt, slug, author_name, created_at, tags, published")
        .eq("published", true)
        .order("created_at", { ascending: false });
      
      if (error) {
        console.error("Error fetching posts:", error);
        return [];
      }
      return data as BlogPost[];
    },
  });

  return (
    <Layout>
      <Section>
        <SectionHeader
          title="Блог о безопасности"
          subtitle="Статьи, исследования и новости о защите Discord-серверов"
        />

        {isLoading ? (
          <div className="space-y-6">
            {[1, 2, 3].map((i) => (
              <div key={i} className="terminal-border p-6 animate-pulse">
                <div className="h-6 bg-muted rounded w-3/4 mb-4" />
                <div className="h-4 bg-muted rounded w-1/2 mb-4" />
                <div className="h-3 bg-muted rounded w-full mb-2" />
                <div className="h-3 bg-muted rounded w-2/3" />
              </div>
            ))}
          </div>
        ) : posts && posts.length > 0 ? (
          <div className="space-y-6">
            {posts.map((post, index) => (
              <Link
                key={post.id}
                to={`/blog/${post.slug}`}
                className="terminal-border p-6 block hover:border-primary/50 transition-all group animate-fade-in"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="text-xl font-medium mb-3 group-hover:text-primary transition-colors">
                      {post.title}
                    </h3>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {post.excerpt}
                    </p>
                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <User className="w-4 h-4" />
                        {post.author_name}
                      </span>
                      <span className="flex items-center gap-1">
                        <Calendar className="w-4 h-4" />
                        {format(new Date(post.created_at), "d MMMM yyyy", { locale: ru })}
                      </span>
                    </div>
                    {post.tags && post.tags.length > 0 && (
                      <div className="flex flex-wrap gap-2 mt-4">
                        {post.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-xs px-2 py-1 bg-muted rounded"
                          >
                            #{tag}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                  <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="terminal-border p-12 text-center">
            <BookOpen className="w-12 h-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-medium mb-2">Статьи скоро появятся</h3>
            <p className="text-muted-foreground">
              Мы работаем над первыми материалами для блога.
            </p>
          </div>
        )}
      </Section>
    </Layout>
  );
};

export default Blog;
