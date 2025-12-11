import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Check, X, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";

const plans = [
  {
    name: "Free",
    price: "₹0",
    period: "forever",
    description: "Try AI School with basic features",
    features: [
      { name: "3 lessons per day", included: true },
      { name: "Basic doubt solving", included: true },
      { name: "Grade 1-12 coverage", included: true },
      { name: "Text-based explanations", included: true },
      { name: "Visual explanations", included: false },
      { name: "Practice quizzes", included: false },
      { name: "Progress tracking", included: false },
      { name: "Parent dashboard", included: false },
      { name: "Priority support", included: false },
    ],
    cta: "Start Free",
    highlighted: false,
  },
  {
    name: "Premium",
    price: "₹299",
    period: "/month",
    description: "Everything for serious learners",
    features: [
      { name: "Unlimited lessons", included: true },
      { name: "Advanced doubt solving", included: true },
      { name: "Grade 1-12 coverage", included: true },
      { name: "Text-based explanations", included: true },
      { name: "Visual & animated explanations", included: true },
      { name: "Practice quizzes & tests", included: true },
      { name: "Detailed progress tracking", included: true },
      { name: "Parent dashboard & reports", included: true },
      { name: "Priority support", included: true },
    ],
    cta: "Start Premium",
    highlighted: true,
    badge: "Most Popular",
  },
  {
    name: "Family",
    price: "₹499",
    period: "/month",
    description: "Perfect for multiple children",
    features: [
      { name: "Everything in Premium", included: true },
      { name: "Up to 3 student profiles", included: true },
      { name: "Family progress overview", included: true },
      { name: "Shared subscription", included: true },
      { name: "Individual learning paths", included: true },
      { name: "Sibling comparison disabled", included: true, tooltip: "Each child learns at their own pace without comparison" },
      { name: "Priority support", included: true },
      { name: "Early access to new features", included: true },
      { name: "1-on-1 onboarding call", included: true },
    ],
    cta: "Start Family Plan",
    highlighted: false,
  },
];

const faqs = [
  {
    question: "Can I cancel anytime?",
    answer: "Yes! You can cancel your subscription at any time. Your access will continue until the end of your billing period.",
  },
  {
    question: "Is there a free trial for Premium?",
    answer: "Yes, we offer 3 free lessons to all new users so you can experience the premium features before committing.",
  },
  {
    question: "Do you offer school/institution pricing?",
    answer: "Yes! We have special pricing for schools and tuition centers. Contact us for a custom quote.",
  },
  {
    question: "What payment methods do you accept?",
    answer: "We accept all major credit/debit cards, UPI, net banking, and popular wallets like PayTM and PhonePe.",
  },
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main>
        {/* Hero */}
        <section className="pt-24 lg:pt-32 pb-16 lg:pb-20 bg-hero-gradient">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="text-center max-w-3xl mx-auto"
            >
              <h1 className="text-4xl lg:text-5xl font-bold mb-6">
                Simple, <span className="text-gradient">Transparent</span> Pricing
              </h1>
              <p className="text-lg text-muted-foreground">
                80% cheaper than offline tuition. No hidden fees. Cancel anytime.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Pricing Cards */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {plans.map((plan, index) => (
                <motion.div
                  key={plan.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`relative rounded-2xl p-8 ${
                    plan.highlighted
                      ? "bg-primary text-primary-foreground shadow-glow scale-105"
                      : "bg-card shadow-card"
                  }`}
                >
                  {plan.badge && (
                    <div className="absolute -top-3 right-6 px-4 py-1 rounded-full bg-accent text-accent-foreground text-sm font-semibold">
                      {plan.badge}
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
                      <li key={feature.name} className="flex items-center gap-3">
                        {feature.included ? (
                          <Check className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-primary-foreground" : "text-primary"}`} />
                        ) : (
                          <X className={`w-5 h-5 shrink-0 ${plan.highlighted ? "text-primary-foreground/40" : "text-muted-foreground/40"}`} />
                        )}
                        <span className={`text-sm ${
                          feature.included 
                            ? plan.highlighted ? "text-primary-foreground" : "text-foreground"
                            : plan.highlighted ? "text-primary-foreground/40" : "text-muted-foreground/40"
                        }`}>
                          {feature.name}
                        </span>
                        {feature.tooltip && (
                          <Tooltip>
                            <TooltipTrigger>
                              <HelpCircle className={`w-4 h-4 ${plan.highlighted ? "text-primary-foreground/60" : "text-muted-foreground"}`} />
                            </TooltipTrigger>
                            <TooltipContent>
                              <p className="max-w-xs">{feature.tooltip}</p>
                            </TooltipContent>
                          </Tooltip>
                        )}
                      </li>
                    ))}
                  </ul>

                  <Button
                    variant={plan.highlighted ? "secondary" : "hero"}
                    size="lg"
                    className="w-full"
                    asChild
                  >
                    <Link to="/auth?signup=true">{plan.cta}</Link>
                  </Button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* School/Institution CTA */}
        <section className="py-16 bg-muted/50">
          <div className="container">
            <div className="bg-card rounded-2xl p-8 lg:p-12 shadow-card max-w-4xl mx-auto text-center">
              <h2 className="text-2xl lg:text-3xl font-bold mb-4">
                For Schools & Tuition Centers
              </h2>
              <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
                Special pricing for educational institutions. Get AI School for your entire class or coaching center.
              </p>
              <Button variant="outline" size="lg" asChild>
                <Link to="/contact">Contact Sales</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container max-w-3xl">
            <h2 className="text-3xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            <div className="space-y-6">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.1 }}
                  className="bg-card rounded-xl p-6 shadow-soft"
                >
                  <h3 className="font-semibold mb-2">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Pricing;
