import { motion } from "framer-motion";
import { ExternalLink, GraduationCap } from "lucide-react";

export default function Dashboard() {
  return (
    <div className="fixed inset-0 overflow-hidden bg-[#0A0A15] flex items-center justify-center px-6">
      {/* Background Aurora */}
      <div className="absolute inset-0">
        <div className="absolute -top-40 -left-40 w-[600px] h-[600px] bg-violet-500/30 rounded-full blur-[160px]" />
        <div className="absolute top-1/3 -right-40 w-[500px] h-[500px] bg-cyan-400/25 rounded-full blur-[160px]" />
        <div className="absolute bottom-[-200px] left-1/3 w-[500px] h-[500px] bg-emerald-400/20 rounded-full blur-[160px]" />
      </div>

      {/* Gateway Card */}
      <motion.div
        initial={{ opacity: 0, y: 32 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="relative z-10 max-w-xl w-full"
      >
        <div className="relative rounded-3xl p-[1px] bg-gradient-to-br from-violet-500/60 via-cyan-400/60 to-emerald-400/60">
          <div className="rounded-3xl bg-[#0F0F1E]/95 px-10 py-14 text-center shadow-2xl backdrop-blur-xl">
            {/* Logo */}
            <div className="flex justify-center mb-6">
              <div className="flex items-center justify-center w-14 h-14 rounded-2xl bg-primary text-primary-foreground">
                <GraduationCap className="w-7 h-7" />
              </div>
            </div>

            {/* Message */}
            <h1 className="text-2xl sm:text-3xl font-semibold text-white mb-4">
              Learn like you’re sitting  
              <span className="block text-cyan-300 mt-1">
                with Aristotle.
              </span>
            </h1>

            <p className="text-muted-foreground leading-relaxed mb-10">
              Step-by-step explanations.  
              Exam-focused teaching.  
              One concept at a time.
            </p>

            {/* CTA */}
            <a
              href="https://y-zeta-virid.vercel.app/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-10 py-4 rounded-2xl bg-primary text-primary-foreground font-semibold text-lg hover:scale-[1.04] transition-transform"
            >
              Start Learning
              <ExternalLink className="w-5 h-5" />
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
