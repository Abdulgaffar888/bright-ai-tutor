import { Link, useLocation } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { motion, AnimatePresence } from "framer-motion";

// ✅ import your logo image
import Logo from "@/assets/logo.png";

const navigation = [
  { name: "Product", href: "/product" },
  { name: "Pricing", href: "/pricing" },
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
];

export function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-lg border-b border-border/50">
      <nav className="container flex items-center justify-between h-16 lg:h-20">
        
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <img
            src={Logo}
            alt="Edurance Logo"
            className="w-10 h-10 object-contain"
          />
          <span className="text-xl font-bold text-foreground">
            Edurance
          </span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-8">
          {navigation.map((item) => (
            <Link
              key={item.name}
              to={item.href}
              className={cn(
                "text-sm font-medium transition-colors hover:text-primary",
                location.pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground"
              )}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden lg:flex items-center gap--3">
          <Button variant="ghost" asChild>
            <Link to="/auth">Sign Up</Link>
          </Button>
          <Button variant="hero" asChild>
            <Link to="/auth?signup=true">Start Free</Link>
          </Button>
        </div>

        {/* Mobile menu button */}
        <button
          type="button"
          className="lg:hidden p-2 text-foreground"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? (
            <X className="h-6 w-6" />
          ) : (
            <Menu className="h-6 w-6" />
          )}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border"
          >
            <div className="container py-4 space-y-3">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={cn(
                    "block py-2 text-base font-medium transition-colors",
                    location.pathname === item.href
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}

              <div className="flex flex-col gap-2 pt-4 border-t border-border">
                <Button variant="outline" asChild className="w-full">
                  <Link to="/auth">Sign In</Link>
                </Button>
                <Button variant="hero" asChild className="w-full">
                  <Link to="/auth?signup=true">Start Free</Link>
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
