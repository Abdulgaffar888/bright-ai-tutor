import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Check, ArrowRight } from "lucide-react";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Perfect for trying out Edurance",
    features: [
      "3 lessons per day",
      "Basic doubt solving",
      "Grade 1-12 coverage",
      "Text-based explanations",
    ],
    cta: "Sign Up",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₹299",
    period: "/month",
    description: "Everything you need for serious learning",
    features: [
      "Unlimited lessons",
      "24/7 instant doubt solving",
      "Visual & animated explanations",
      "Practice quizzes & tests",
      "Progress dashboard",
      "Parent reports",
    ],
    cta: "Start Premium",
    highlighted: true,
  },
];

export function PricingPreviewSection() {
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
            Simple, <span className="text-gradient">Affordable</span> Pricing
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            80% cheaper than offline tuition, available 24/7. Choose the plan that works for you.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative rounded-2xl p-8 ${
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-glow"
                  : "bg-card shadow-card"
              }`}
            >
              {plan.highlighted && (
                <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                  Most Popular
                </div>
              )}

              <div className="mb-6">
                <h3 className={`text-xl font-bold mb-2 ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                  {plan.name}
                </h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-4xl font-extrabold">{plan.price}</span>
                  <span className={`text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                    {plan.period}
                  </span>
                </div>
                <p className={`mt-2 text-sm ${plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"}`}>
                  {plan.description}
                </p>
              </div>

              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                    <span className={`text-sm ${plan.highlighted ? "text-primary-foreground" : "text-foreground"}`}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              <Button
                variant={plan.highlighted ? "secondary" : "hero"}
                size="lg"
                className="w-full"
                asChild
              >
                <Link to="/auth?signup=true">
                  {plan.cta}
                </Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            to="/pricing"
            className="inline-flex items-center gap-2 text-primary font-medium hover:underline"
          >
            View all plans & features
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
