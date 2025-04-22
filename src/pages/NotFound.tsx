
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <>
      <Header />
      
      <div className="min-h-[60vh] flex items-center justify-center bg-brand-lightGray">
        <div className="text-center px-4">
          <h1 className="text-6xl font-bold text-brand-blue mb-4">404</h1>
          <p className="text-2xl text-brand-gray mb-6">Oops! Página não encontrada</p>
          <p className="text-lg text-brand-gray mb-8 max-w-lg mx-auto">
            A página que você está procurando não existe ou foi movida.
            Volte para a página inicial ou entre em contato conosco.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg">
              <Link to="/">
                Voltar ao Início
              </Link>
            </Button>
            <WhatsAppButton size="lg" />
          </div>
        </div>
      </div>
      
      <Footer />
    </>
  );
};

export default NotFound;
