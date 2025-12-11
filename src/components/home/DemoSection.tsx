import { motion } from "framer-motion";
import { useState } from "react";

const demos = [
  {
    id: "young",
    age: "7-year-old",
    question: "Explain gravity",
    response: {
      title: "🍎 Why Things Fall Down",
      content: "Imagine Earth is like a giant magnet that loves everything! It pulls things toward it, like how a magnet pulls metal. When you throw a ball up, Earth says 'Come back here!' and pulls it down. That's gravity!",
      visual: "Simple animation of an apple falling from a tree with friendly arrows pointing down",
    },
  },
  {
    id: "teen",
    age: "15-year-old",
    question: "Explain gravity",
    response: {
      title: "📐 Newton's Law of Universal Gravitation",
      content: "Every object with mass attracts every other object with mass. The force of gravity is: F = G × (m₁ × m₂) / r². Where G is the gravitational constant (6.674 × 10⁻¹¹ N⋅m²/kg²), and r is the distance between centers of mass.",
      visual: "Interactive diagram showing force vectors between Earth and Moon, with calculations",
    },
  },
];

export function DemoSection() {
  const [activeDemo, setActiveDemo] = useState("young");
  const currentDemo = demos.find((d) => d.id === activeDemo)!;

  return (
    <section id="demo" className="py-20 lg:py-28 bg-background">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            See the <span className="text-gradient">Difference</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Watch how AI School adapts the same concept for different age groups. 
            Personalization that actually works.
          </p>
        </motion.div>

        {/* Toggle */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex p-1 rounded-xl bg-muted">
            {demos.map((demo) => (
              <button
                key={demo.id}
                onClick={() => setActiveDemo(demo.id)}
                className={`px-6 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeDemo === demo.id
                    ? "bg-card text-foreground shadow-soft"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                For a {demo.age}
              </button>
            ))}
          </div>
        </div>

        {/* Demo Card */}
        <motion.div
          key={activeDemo}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto"
        >
          <div className="bg-card rounded-2xl shadow-elevated overflow-hidden">
            {/* Question */}
            <div className="p-6 bg-muted/50 border-b border-border">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <span className="text-lg">👤</span>
                </div>
                <div>
                  <div className="text-sm text-muted-foreground">Student asks:</div>
                  <div className="font-semibold">"{currentDemo.question}"</div>
                </div>
              </div>
            </div>

            {/* Response */}
            <div className="p-8">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <span className="text-lg">🤖</span>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold mb-4">{currentDemo.response.title}</h3>
                  <p className="text-foreground leading-relaxed mb-6">
                    {currentDemo.response.content}
                  </p>
                  <div className="bg-muted/50 rounded-xl p-4 border border-border">
                    <div className="text-sm text-muted-foreground mb-2">📊 Visual Aid:</div>
                    <p className="text-sm italic">{currentDemo.response.visual}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        <p className="text-center text-muted-foreground mt-8">
          Same question, completely different approach. That's the power of personalization.
        </p>
      </div>
    </section>
  );
}
