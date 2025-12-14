import { useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Home,
  BookOpen,
  BarChart3,
  Settings,
  LogOut,
  Menu,
  X,
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

const Dashboard = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

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
          {/* Logo */}
          <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
            <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
              <GraduationCap className="w-6 h-6" />
            </div>
            <span className="text-xl font-bold">Edurance</span>
          </div>

          {/* Navigation */}
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

          {/* User & Logout */}
          <div className="px-4 py-4 border-t border-border">
            <div className="flex items-center gap-3 px-4 py-3 mb-2">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <span className="text-sm font-semibold text-primary">AS</span>
              </div>
              <div className="flex-1 min-w-0">
                <div className="font-medium truncate">Rahil</div>
                <div className="text-xs text-muted-foreground">Class 10</div>
              </div>
            </div>
            <Link
              to="/"
              className="flex items-center gap-3 px-4 py-3 rounded-xl text-muted-foreground hover:bg-destructive/10 hover:text-destructive transition-colors"
            >
              <LogOut className="w-5 h-5" />
              <span className="font-medium">Sign Out</span>
            </Link>
          </div>
        </div>
      </aside>

      {/* Mobile sidebar overlay */}
      {sidebarOpen && (
        <div
          className="fixed inset-0 bg-foreground/20 backdrop-blur-sm z-40 lg:hidden"
          onClick={() => setSidebarOpen(false)}
        />
      )}

      {/* Main Content */}
      <main className="lg:ml-64">
        {/* Header */}
        <header className="sticky top-0 z-30 bg-background/80 backdrop-blur-lg border-b border-border">
          <div className="flex items-center justify-between px-6 py-4">
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-2 -ml-2 text-foreground"
            >
              <Menu className="w-6 h-6" />
            </button>

            <div className="flex-1 lg:flex-none">
              <h1 className="text-xl font-bold">Welcome back, Rahil! 👋</h1>
            </div>

            <Button variant="hero" size="sm" asChild>
              <Link to="/dashboard/ask" className="flex items-center gap-2">
                <Sparkles className="w-4 h-4" />
                Ask AI Tutor
              </Link>
            </Button>
          </div>
        </header>

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Cards */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <BookOpen className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">24</div>
                  <div className="text-sm text-muted-foreground">Lessons Completed</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.1 }}
              className="bg-card rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">8.5h</div>
                  <div className="text-sm text-muted-foreground">Learning Time</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.2 }}
              className="bg-card rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  <Trophy className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <div className="text-2xl font-bold">85%</div>
                  <div className="text-sm text-muted-foreground">Quiz Accuracy</div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-xl bg-accent/10 flex items-center justify-center">
                  <Target className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <div className="text-2xl font-bold">7</div>
                  <div className="text-sm text-muted-foreground">Day Streak 🔥</div>
                </div>
              </div>
            </motion.div>
          </div>

          <div className="grid lg:grid-cols-3 gap-6">
            {/* Recent Topics */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.2 }}
              className="lg:col-span-2 bg-card rounded-2xl p-6 shadow-soft"
            >
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-lg font-bold">Recent Topics</h2>
                <Link
                  to="/dashboard/lessons"
                  className="text-sm text-primary hover:underline flex items-center gap-1"
                >
                  View All <ChevronRight className="w-4 h-4" />
                </Link>
              </div>

              <div className="space-y-4">
                {recentTopics.map((topic, index) => (
                  <div
                    key={topic.name}
                    className="flex items-center gap-4 p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <BookOpen className="w-6 h-6 text-primary" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="font-semibold truncate">{topic.name}</div>
                      <div className="text-sm text-muted-foreground">{topic.subject}</div>
                    </div>
                    <div className="text-right">
                      <div className="text-sm font-medium">{topic.progress}%</div>
                      <div className="text-xs text-muted-foreground">{topic.time}</div>
                    </div>
                    <div className="w-20 hidden sm:block">
                      <Progress value={topic.progress} className="h-2" />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Recommended Lessons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="bg-card rounded-2xl p-6 shadow-soft"
            >
              <h2 className="text-lg font-bold mb-6">Recommended for You</h2>

              <div className="space-y-4">
                {recommendedLessons.map((lesson, index) => (
                  <div
                    key={lesson.title}
                    className="p-4 rounded-xl border border-border hover:border-primary/50 hover:shadow-soft transition-all cursor-pointer"
                  >
                    <div className="font-semibold mb-1">{lesson.title}</div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span>{lesson.subject}</span>
                      <span>•</span>
                      <span>{lesson.duration}</span>
                    </div>
                    <div className="mt-2">
                      <span className={cn(
                        "text-xs px-2 py-1 rounded-full",
                        lesson.difficulty === "Easy" 
                          ? "bg-primary/10 text-primary"
                          : "bg-accent/10 text-accent"
                      )}>
                        {lesson.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-4">
                Browse All Lessons
              </Button>
            </motion.div>
          </div>

          {/* Quick Ask Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="mt-6 bg-gradient-to-r from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground"
          >
            <div className="flex flex-col md:flex-row items-center justify-between gap-6">
              <div>
                <h2 className="text-2xl font-bold mb-2">Got a doubt? Ask away!</h2>
                <p className="text-primary-foreground/80">
                  Your AI tutor is ready to help you understand any concept.
                </p>
              </div>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/dashboard/ask" className="flex items-center gap-2">
                  <Play className="w-5 h-5" />
                  Start Learning
                </Link>
              </Button>
            </div>
          </motion.div>
        </div>
      </main>
    </div>
  );
};

export default Dashboard;
