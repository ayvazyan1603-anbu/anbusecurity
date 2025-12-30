-- Create app roles enum
CREATE TYPE public.app_role AS ENUM ('admin', 'author');

-- Create user_roles table
CREATE TABLE public.user_roles (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    user_id UUID REFERENCES auth.users(id) ON DELETE CASCADE NOT NULL,
    role app_role NOT NULL,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    UNIQUE (user_id, role)
);

-- Create profiles table
CREATE TABLE public.profiles (
    id UUID PRIMARY KEY REFERENCES auth.users(id) ON DELETE CASCADE,
    display_name TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create blog_posts table
CREATE TABLE public.blog_posts (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE,
    excerpt TEXT,
    content TEXT NOT NULL,
    author_id UUID REFERENCES auth.users(id) ON DELETE SET NULL,
    author_name TEXT NOT NULL DEFAULT 'ANBU Team',
    tags TEXT[] DEFAULT '{}',
    published BOOLEAN NOT NULL DEFAULT false,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now(),
    updated_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Create demo_videos table
CREATE TABLE public.demo_videos (
    id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
    title TEXT NOT NULL,
    description TEXT,
    video_url TEXT NOT NULL,
    thumbnail_url TEXT,
    created_at TIMESTAMP WITH TIME ZONE NOT NULL DEFAULT now()
);

-- Enable RLS
ALTER TABLE public.user_roles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.profiles ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.blog_posts ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.demo_videos ENABLE ROW LEVEL SECURITY;

-- Security definer function for role check
CREATE OR REPLACE FUNCTION public.has_role(_user_id UUID, _role app_role)
RETURNS BOOLEAN
LANGUAGE sql
STABLE
SECURITY DEFINER
SET search_path = public
AS $$
  SELECT EXISTS (
    SELECT 1 FROM public.user_roles
    WHERE user_id = _user_id AND role = _role
  )
$$;

-- RLS Policies for user_roles
CREATE POLICY "Users can view their own roles" ON public.user_roles
FOR SELECT USING (auth.uid() = user_id);

CREATE POLICY "Admins can manage all roles" ON public.user_roles
FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for profiles
CREATE POLICY "Profiles viewable by everyone" ON public.profiles
FOR SELECT USING (true);

CREATE POLICY "Users can update own profile" ON public.profiles
FOR UPDATE USING (auth.uid() = id);

CREATE POLICY "Users can insert own profile" ON public.profiles
FOR INSERT WITH CHECK (auth.uid() = id);

-- RLS Policies for blog_posts
CREATE POLICY "Published posts viewable by everyone" ON public.blog_posts
FOR SELECT USING (published = true);

CREATE POLICY "Authors can view all posts" ON public.blog_posts
FOR SELECT USING (public.has_role(auth.uid(), 'author') OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Authors can create posts" ON public.blog_posts
FOR INSERT WITH CHECK (public.has_role(auth.uid(), 'author') OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Authors can update own posts" ON public.blog_posts
FOR UPDATE USING (author_id = auth.uid() OR public.has_role(auth.uid(), 'admin'));

CREATE POLICY "Admins can delete posts" ON public.blog_posts
FOR DELETE USING (public.has_role(auth.uid(), 'admin'));

-- RLS Policies for demo_videos
CREATE POLICY "Videos viewable by everyone" ON public.demo_videos
FOR SELECT USING (true);

CREATE POLICY "Admins can manage videos" ON public.demo_videos
FOR ALL USING (public.has_role(auth.uid(), 'admin'));

-- Trigger to create profile on signup
CREATE OR REPLACE FUNCTION public.handle_new_user()
RETURNS TRIGGER
LANGUAGE plpgsql
SECURITY DEFINER SET search_path = public
AS $$
BEGIN
  INSERT INTO public.profiles (id, display_name)
  VALUES (new.id, new.raw_user_meta_data ->> 'display_name');
  RETURN new;
END;
$$;

CREATE TRIGGER on_auth_user_created
  AFTER INSERT ON auth.users
  FOR EACH ROW EXECUTE FUNCTION public.handle_new_user();

-- Create storage bucket for videos
INSERT INTO storage.buckets (id, name, public) VALUES ('demo-videos', 'demo-videos', true);

-- Storage policies
CREATE POLICY "Videos are publicly accessible" ON storage.objects
FOR SELECT USING (bucket_id = 'demo-videos');

CREATE POLICY "Admins can upload videos" ON storage.objects
FOR INSERT WITH CHECK (bucket_id = 'demo-videos' AND public.has_role(auth.uid(), 'admin'));