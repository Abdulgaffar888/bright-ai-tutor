import { motion } from "framer-motion";
import { UserCheck, Clock, Sparkles } from "lucide-react";

const benefits = [
  {
    icon: UserCheck,
    title: "Personalized Lessons",
    description: "AI adapts explanations to your child's grade level, learning style, and pace. No more one-size-fits-all education.",
    color: "primary",
  },
  {
    icon: Clock,
    title: "24/7 Instant Doubt Solving",
    description: "Stuck at 11 PM before an exam? Get instant, accurate answers anytime, anywhere. Like having a tutor on call.",
    color: "accent",
  },
  {
    icon: Sparkles,
    title: "Fun, Visual Explanations",
    description: "Complex concepts broken down with animations, diagrams, and real-world examples that make learning enjoyable.",
    color: "primary",
  },
];

export function BenefitsSection() {
  return (
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
            Why Parents & Students <span className="text-gradient">Love Us</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We've reimagined tutoring for the digital age. Here's what makes AI School different.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elevated transition-all duration-300"
            >
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center mb-6 ${
                  benefit.color === "primary"
                    ? "bg-primary/10 text-primary"
                    : "bg-accent/10 text-accent"
                }`}
              >
                <benefit.icon className="w-7 h-7" />
              </div>
              <h3 className="text-xl font-bold mb-3">{benefit.title}</h3>
              <p className="text-muted-foreground leading-relaxed">
                {benefit.description}
              </p>
              
              {/* Hover gradient effect */}
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
