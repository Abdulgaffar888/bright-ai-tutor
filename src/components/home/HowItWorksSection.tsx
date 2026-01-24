import { motion } from "framer-motion";
import { MessageSquare, Zap, Trophy } from "lucide-react";

const steps = [
  {
    icon: MessageSquare,
    step: "01",
    title: "Assessment Test",
    description: "The student takes a short assessment based on their grade to check what they already know and where they are struggling.",
  },
  {
    icon: Zap,
    step: "02",
    title: "AI Tutor Teaches Weak Areas",
    description: "Based on the assessment, an AI tutor focuses only on the topics the student is weak in, explaining concepts step by step like a personal teacher.",
  },
  {
    icon: Trophy,
    step: "03",
    title: "Track Learning Progress",
    description: "After each session, Edurance tracks what the student has learned, how much progress they’ve made, and what they need to study next.",
  },
];

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 lg:py-28 bg-muted/50">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            Learning Made <span className="text-gradient">Simple</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Three easy steps to transform how your child learns. No complicated setup required.
          </p>
        </motion.div>

        <div className="relative">
          {/* Connection line */}
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-border -translate-y-1/2" />

          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {steps.map((item, index) => (
              <motion.div
                key={item.step}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.15 }}
                className="relative"
              >
                <div className="bg-card rounded-2xl p-8 shadow-card text-center relative z-10">
                  {/* Step number */}
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                    {index + 1}
                  </div>

                  <div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center mx-auto mb-6">
                    <item.icon className="w-8 h-8 text-primary" />
                  </div>

                  <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
