import { Routes, Route } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";

import Index from "./pages/Index";
import HowItWorks from "./pages/HowItWorks";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import Demo from "./pages/Demo";
import ProtectionGuide from "./pages/ProtectionGuide";
import Report from "./pages/Report";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/how-it-works" element={<HowItWorks />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:id" element={<BlogPost />} />
          <Route path="/demo" element={<Demo />} />
          <Route path="/protection-guide" element={<ProtectionGuide />} />
          <Route path="/report" element={<Report />} />
          <Route path="*" element={<NotFound />} />
        </Routes>

        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
