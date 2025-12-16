import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Parent of 10-year-old",
    image: "https://images.unsplash.com/photo-1494790108755-2616b612b786?w=150&h=150&fit=crop&crop=face",
    content: "My daughter's math anxiety has completely disappeared. The AI explains concepts in ways her school teacher never could. It's like having a personal tutor who understands her perfectly.",
    rating: 5,
  },
  {
    name: "Rahul Verma",
    role: "Student, Class 12",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
    content: "Feels like the teacher is talking only to me. I used to struggle with Physics, but now I actually look forward to learning. The instant doubt solving before exams is a lifesaver!",
    rating: 5,
    featured: true,
  },
  {
    name: "Anita Reddy",
    role: "Parent of twins",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face",
    content: "Both my kids learn differently - one is visual, one prefers reading. Edurance adapts to each of them. The progress dashboard helps me stay involved without hovering.",
    rating: 5,
  },
];

export function TestimonialsSection() {
  return (
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
            Loved by <span className="text-gradient">Families</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Join thousands of students and parents who have transformed their learning journey.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={testimonial.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className={`relative bg-card rounded-2xl p-8 shadow-card ${
                testimonial.featured ? "md:-mt-4 md:mb-4 ring-2 ring-primary/20" : ""
              }`}
            >
              {/* Quote icon */}
              <Quote className="w-10 h-10 text-primary/20 mb-4" />

              {/* Rating */}
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                ))}
              </div>

              {/* Content */}
              <p className="text-foreground mb-6 leading-relaxed">
                "{testimonial.content}"
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <div className="font-semibold">{testimonial.name}</div>
                  <div className="text-sm text-muted-foreground">{testimonial.role}</div>
                </div>
              </div>

              {testimonial.featured && (
                <div className="absolute -top-3 right-6 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-semibold">
                  Featured
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
