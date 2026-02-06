import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Home,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  Sparkles,
  ExternalLink,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { supabase } from "../lib/supabase";

/**
 * FEATURE FLAG
 */
const ENABLE_DASHBOARD = false;

const sidebarItems = [
  { icon: Home, label: "Dashboard", href: "/dashboard", active: true },
  { icon: BookOpen, label: "My Lessons", href: "/dashboard/lessons" },
  { icon: BarChart3, label: "Progress", href: "/dashboard/progress" },
  { icon: Settings, label: "Settings", href: "/dashboard/settings" },
];

export default function Dashboard() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [fullName, setFullName] = useState<string | null>(null);

  // 🔐 Auth protection
  useEffect(() => {
    supabase.auth.getSession().then(({ data }) => {
      if (!data.session) {
        navigate("/auth");
      }
    });
  }, [navigate]);

  // 📥 Fetch user profile
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return;

      const { data: profile } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", data.user.id)
        .single();

      if (profile?.full_name) {
        setFullName(profile.full_name);
      }
    });
  }, []);

  const handleLogout = async () => {
    await supabase.auth.signOut();
    navigate("/auth");
  };

  return (
    <div className="min-h-screen bg-muted/30">
      {/* Sidebar */}
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 w-64 bg-card border-r border-border transform transition-transform duration-200 ease-in-out lg:translate-x-0",
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        )}
      >
        <div className="flex flex-col h-full">
          <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Edurance</span>
          </div>

          <nav className="flex-1 px-4 py-6">
            <ul className="space-y-2">
              {sidebarItems.map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.href}
                    className={cn(
                      "flex items-center gap-3 px-4 py-3 rounded-xl transition-colors",
                      item.active
                        ? "bg-primary text-primary-foreground"
                        : "text-muted-foreground hover:bg-muted hover:text-foreground"
                    )}
                  >
                    <item.icon className="w-5 h-5" />
                    <span className="font-medium">{item.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="px-4 py-4 border-t border-border">
            <button
              onClick={handleLogout}
              className="flex w-full items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </button>
          </div>
        </div>
      </aside>

      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      <main className="lg:ml-64">
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2"
            >
              <Menu className="w-6 h-6" />
            </button>

            <h1 className="text-xl font-bold">
              Welcome back{fullName ? `, ${fullName}` : ""}! 👋
            </h1>

            <Button variant="hero" size="sm" asChild>
              <Link to="/dashboard/ask" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Ask AI Tutor
              </Link>
            </Button>
          </div>
        </header>

        {/* 🌌 AURORA GATEWAY */}
        {!ENABLE_DASHBOARD && (
          <div className="flex items-center justify-center min-h-[70vh] px-6">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative max-w-xl w-full rounded-3xl p-[1px]"
              style={{
                background:
                  "linear-gradient(135deg, rgba(124,58,237,0.45), rgba(0,212,255,0.45), rgba(16,185,129,0.45))",
              }}
            >
              <div className="relative rounded-3xl bg-card px-10 py-12 text-center shadow-2xl overflow-hidden">
                {/* Aurora glow */}
                <div className="absolute inset-0 bg-gradient-to-r from-violet-500/20 via-cyan-400/20 to-emerald-400/20 blur-3xl opacity-70" />

                <h2 className="relative text-2xl font-semibold mb-3">
                  Your AI Tutor is ready.
                </h2>

                <p className="relative text-muted-foreground leading-relaxed mb-8">
                  Step into a focused learning space where concepts are taught
                  clearly, patiently, and exam-first — like a real teacher.
                </p>

                <a
                  href="https://y-zeta-virid.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="relative inline-flex items-center justify-center gap-2 px-8 py-3 rounded-2xl bg-primary text-primary-foreground font-semibold hover:scale-[1.03] transition-transform"
                >
                  Start Learning
                  <ExternalLink className="w-4 h-4" />
                </a>
              </div>
            </motion.div>
          </div>
        )}
      </main>
    </div>
  );
}
