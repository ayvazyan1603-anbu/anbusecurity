import { Layout } from "@/components/Layout";
import { Section } from "@/components/Section";
import { Calendar, User, ArrowLeft, Tag } from "lucide-react";
import { Link, useParams } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";
import { format } from "date-fns";
import { ru } from "date-fns/locale";

interface BlogPost {
  id: string;
  title: string;
  content: string;
  slug: string;
  author_name: string;
  created_at: string;
  tags: string[];
}

const BlogPost = () => {
  const { slug } = useParams<{ slug: string }>();

  const { data: post, isLoading, error } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("blog_posts")
        .select("*")
        .eq("slug", slug)
        .eq("published", true)
        .maybeSingle();
      
      if (error) throw error;
      return data as BlogPost | null;
    },
    enabled: !!slug,
  });

  if (isLoading) {
    return (
      <Layout>
        <Section>
          <div className="max-w-3xl mx-auto animate-pulse">
            <div className="h-8 bg-muted rounded w-3/4 mb-4" />
            <div className="h-4 bg-muted rounded w-1/2 mb-8" />
            <div className="space-y-4">
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-full" />
              <div className="h-4 bg-muted rounded w-3/4" />
            </div>
          </div>
        </Section>
      </Layout>
    );
  }

  if (!post || error) {
    return (
      <Layout>
        <Section>
          <div className="text-center py-12">
            <h1 className="text-2xl font-bold mb-4">Статья не найдена</h1>
            <Link to="/blog" className="text-primary hover:underline">
              ← Вернуться к блогу
            </Link>
          </div>
        </Section>
      </Layout>
    );
  }

  return (
    <Layout>
      <Section>
        <div className="max-w-3xl mx-auto">
          <Link
            to="/blog"
            className="inline-flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors mb-8"
          >
            <ArrowLeft className="w-4 h-4" />
            Назад к блогу
          </Link>

          <article>
            <header className="mb-8">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {post.title}
              </h1>
              
              <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
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
                <div className="flex flex-wrap items-center gap-2">
                  <Tag className="w-4 h-4 text-muted-foreground" />
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
            </header>

            <div 
              className="prose prose-invert max-w-none"
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </div>
      </Section>
    </Layout>
  );
};

export default BlogPost;
