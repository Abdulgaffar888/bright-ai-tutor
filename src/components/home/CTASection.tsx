import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

export function CTASection() {
  return (
    <section className="py-20 lg:py-28 bg-primary relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary-foreground/10 rounded-full blur-3xl" />
      </div>

      <div className="container relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center max-w-3xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-foreground/20 text-primary-foreground text-sm font-medium mb-6">
            <Sparkles className="w-4 h-4" />
            <span>Start your free trial today</span>
          </div>

          <h2 className="text-3xl lg:text-5xl font-bold text-primary-foreground mb-6">
            Ready to Transform How Your Child Learns?
          </h2>


          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              variant="secondary"
              size="xl"
              asChild
              className="font-bold"
            >
              <Link to="/auth?signup=true" className="flex items-center gap-2">
                Start 3 Free Lessons
                <ArrowRight className="w-5 h-5" />
              </Link>
            </Button>
            <Button
              variant="ghost"
              size="xl"
              asChild
              className="text-primary-foreground border-2 border-primary-foreground/30 hover:bg-primary-foreground/10"
            >
              <Link to="/contact">
                Talk to Us
              </Link>
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
