import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { 
  Sparkles, 
  Brain, 
  BarChart3, 
  MessageSquare, 
  Lightbulb,
  Target,
  BookOpen,
  Mic,
  Camera
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const features = [
  {
    icon: Sparkles,
    title: "Personalized Lesson Generator",
    description: "Every lesson is uniquely crafted based on your child's grade level, learning history, and preferred style. No two students get the same explanation.",
    color: "primary",
  },
  {
    icon: Brain,
    title: "Learning Style Detection",
    description: "Our AI identifies whether your child learns best through visuals, reading, examples, or hands-on practice — then adapts accordingly.",
    color: "accent",
  },
  {
    icon: MessageSquare,
    title: "Interactive Q&A",
    description: "Natural conversations with the AI tutor. Ask follow-up questions, request simpler explanations, or dive deeper into topics.",
    color: "primary",
  },
  {
    icon: BarChart3,
    title: "Progress Dashboard",
    description: "Both parents and students can track learning progress, identify weak areas, and celebrate improvements with detailed analytics.",
    color: "accent",
  },
  {
    icon: Lightbulb,
    title: "Concept Connections",
    description: "The AI links new topics to what your child already knows, building a stronger foundation and deeper understanding.",
    color: "primary",
  },
  {
    icon: Target,
    title: "Adaptive Quizzes",
    description: "Quizzes that adjust difficulty in real-time. Too easy? They get harder. Struggling? More practice on fundamentals.",
    color: "accent",
  },
];

const subjects = [
  { name: "Mathematics", icon: "📐", topics: "Arithmetic, Algebra, Geometry, Calculus" },
  { name: "Science", icon: "🔬", topics: "Physics, Chemistry, Biology, Environmental" },
  { name: "Languages", icon: "📚", topics: "English, Hindi, Grammar, Literature" },
  { name: "Social Studies", icon: "🌍", topics: "History, Geography, Civics, Economics" },
];

const Product = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-24 bg-hero-gradient">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                The Most Advanced <span className="text-gradient">AI Tutor</span> for Students
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Discover how our cutting-edge AI technology creates personalized learning experiences 
                that adapt to every student's unique needs.
              </p>
              <Button variant="hero" size="xl" asChild>
                <Link to="/auth?signup=true">Try It Free</Link>
              </Button>
            </motion.div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Powerful <span className="text-gradient">Features</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {features.map((feature, index) => (
                <motion.div
                  key={feature.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
                >
                  <div
                    className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                      feature.color === "primary"
                        ? "bg-primary/10 text-primary"
                        : "bg-accent/10 text-accent"
                    }`}
                  >
                    <feature.icon className="w-7 h-7" />
                  </div>
                  <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Subjects Covered */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                All Subjects, <span className="text-gradient">All Grades</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Comprehensive coverage from Class 1 to Class 12, aligned with CBSE, ICSE, and State boards.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {subjects.map((subject, index) => (
                <motion.div
                  key={subject.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-card"
                >
                  <div className="text-4xl mb-4">{subject.icon}</div>
                  <h3 className="text-lg font-bold mb-2">{subject.name}</h3>
                  <p className="text-sm text-muted-foreground">{subject.topics}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Input Methods */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Ask <span className="text-gradient">Your Way</span>
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Multiple ways to interact with your AI tutor for maximum convenience.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <BookOpen className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Type</h3>
                <p className="text-muted-foreground text-sm">
                  Type your question in your own words, any language
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-accent/10 flex items-center justify-center mx-auto mb-4">
                  <Mic className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-lg font-bold mb-2">Speak</h3>
                <p className="text-muted-foreground text-sm">
                  Just say your doubt out loud, we'll understand
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                  <Camera className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-lg font-bold mb-2">Snap</h3>
                <p className="text-muted-foreground text-sm">
                  Take a photo of a problem from your textbook
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 lg:py-28 bg-primary">
          <div className="container text-center">
            <h2 className="text-3xl lg:text-4xl font-bold text-primary-foreground mb-6">
              Experience the Future of Learning
            </h2>
            <p className="text-xl text-primary-foreground/80 mb-8 max-w-2xl mx-auto">
              Start with free lessons and see the difference for yourself.
            </p>
            <Button variant="secondary" size="xl" asChild>
              <Link to="/auth?signup=true">Get Started Free</Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Product;
