import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import ArenaBackground from "./components/ArenaBackground";
import Home from "./pages/Home";
import Cursos from "./pages/Cursos";
import Programacao from "./pages/Programacao";
import Instrutores from "./pages/Instrutores";
import Patrocinadores from "./pages/Patrocinadores";
import ComoPatrocinar from "./pages/ComoPatrocinar";
import Contato from "./pages/Contato";
import Inscricao from "./pages/Inscricao";
import Sobre from "./pages/Sobre";
import FAQ from "./pages/FAQ";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        {/* Global starry background — rendered once for all pages */}
        <ArenaBackground />
        <Navbar />
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route index                 element={<Home />} />
          <Route path="/cursos"        element={<Cursos />} />
          <Route path="/programacao"   element={<Programacao />} />
          <Route path="/instrutores"   element={<Instrutores />} />
          <Route path="/patrocinadores" element={<Patrocinadores />} />
          <Route path="/como-patrocinar" element={<ComoPatrocinar />} />
          <Route path="/contato"       element={<Contato />} />
          <Route path="/inscricao"     element={<Inscricao />} />
          <Route path="/sobre"         element={<Sobre />} />
          <Route path="/faq"           element={<FAQ />} />
          <Route path="*"              element={<NotFound />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
