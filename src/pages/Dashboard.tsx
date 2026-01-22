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
  Play,
  Clock,
  Trophy,
  Target,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";

// ✅ CORRECT RELATIVE IMPORT (IMPORTANT)
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

const recentTopics = [
  { name: "Quadratic Equations", subject: "Mathematics", progress: 75, time: "2h ago" },
  { name: "Photosynthesis", subject: "Biology", progress: 100, time: "Yesterday" },
  { name: "French Revolution", subject: "History", progress: 40, time: "2 days ago" },
];

const recommendedLessons = [
  { title: "Linear Equations", subject: "Mathematics", duration: "15 min", difficulty: "Medium" },
  { title: "Cell Structure", subject: "Biology", duration: "20 min", difficulty: "Easy" },
  { title: "Grammar Basics", subject: "English", duration: "10 min", difficulty: "Easy" },
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

  // 📥 Fetch user profile from database
  useEffect(() => {
    supabase.auth.getUser().then(async ({ data }) => {
      if (!data.user) return;

      const { data: profile, error } = await supabase
        .from("profiles")
        .select("full_name")
        .eq("id", data.user.id)
        .single();

      if (!error) {
        setFullName(profile.full_name);
      }
    });
  }, []);


  // ✅ LOGOUT
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

        {ENABLE_DASHBOARD && (
          <div className="p-6">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Stat icon={BookOpen} label="Lessons Completed" value="24" />
              <Stat icon={Clock} label="Learning Time" value="8.5h" />
              <Stat icon={Trophy} label="Quiz Accuracy" value="85%" />
              <Stat icon={Target} label="Day Streak 🔥" value="7" />
            </div>

            <div className="mt-8 bg-primary text-primary-foreground rounded-2xl p-8 flex justify-between">
              <div>
                <h2 className="text-2xl font-bold">Got a doubt?</h2>
                <p>Ask your AI tutor anytime.</p>
              </div>
              <Button variant="secondary" asChild>
                <Link to="/dashboard/ask">
                  <Play className="w-5 h-5 mr-2" />
                  Start Learning
                </Link>
              </Button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}

function Stat({ icon: Icon, label, value }: any) {
  return (
    <div className="bg-card p-6 rounded-2xl shadow-soft flex gap-4">
      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
        <Icon className="w-6 h-6 text-primary" />
      </div>
      <div>
        <div className="text-2xl font-bold">{value}</div>
        <div className="text-sm text-muted-foreground">{label}</div>
      </div>
    </div>
  );
}
