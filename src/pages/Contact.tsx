import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin, MessageSquare, Clock, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { toast } from "sonner";

const faqs = [
  {
    question: "How does the AI personalize lessons?",
    answer: "Our AI analyzes your child's grade level, learning history, response patterns, and preferred explanation style. It then generates lessons tailored specifically for them, adjusting complexity, examples, and visual aids accordingly.",
  },
  {
    question: "Is my child's data safe?",
    answer: "Absolutely. We take privacy seriously. All data is encrypted, we never sell personal information, and we comply with all Indian data protection regulations. Parents have full control over their child's data.",
  },
  {
    question: "Can I get a refund if not satisfied?",
    answer: "Yes! We offer a 7-day money-back guarantee on all premium plans. If you're not satisfied for any reason, contact us within 7 days for a full refund.",
  },
  {
    question: "Do you support competitive exam preparation?",
    answer: "Yes, our premium plans include preparation support for JEE, NEET, NTSE, Olympiads, and other competitive exams with specialized practice questions and topic coverage.",
  },
  {
    question: "What devices can I use AI School on?",
    answer: "AI School works on any device with a web browser — smartphones, tablets, laptops, and desktop computers. We also have Android and iOS apps for a better mobile experience.",
  },
  {
    question: "How do I track my child's progress?",
    answer: "Premium plans include a comprehensive parent dashboard showing topics covered, time spent, quiz scores, areas of improvement, and weekly progress reports delivered to your email.",
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast.success("Message sent! We'll get back to you within 24 hours.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

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
                Get in <span className="text-gradient">Touch</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Have questions? We'd love to hear from you. Our team is here to help.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Contact Info + Form */}
        <section className="py-16 lg:py-24 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16">
              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-2xl font-bold mb-8">Contact Information</h2>
                
                <div className="space-y-6 mb-12">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Mail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Email</h3>
                      <p className="text-muted-foreground">support@edurance.com</p>
                      <p className="text-muted-foreground">sales@Edurance.com</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <Phone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Phone</h3>
                      <p className="text-muted-foreground">+91 73865 38067</p>
                      <p className="text-sm text-muted-foreground">Mon-Sat, 9 AM - 6 PM IST</p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                      <MapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">Office</h3>
                      <p className="text-muted-foreground">
                        Neerja colony,<br />
                        Tolichowki, Hyderabad,<br />
                        Telengana 500008
                      </p>
                    </div>
                  </div>
                </div>

                {/* Support Hours */}
                <div className="bg-muted/50 rounded-2xl p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <Clock className="w-5 h-5 text-primary" />
                    <h3 className="font-semibold">Support Hours</h3>
                  </div>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <p className="font-medium">Chat Support</p>
                      <p className="text-muted-foreground">24/7 Available</p>
                    </div>
                    <div>
                      <p className="font-medium">Phone Support</p>
                      <p className="text-muted-foreground">Mon-Sat, 9 AM - 6 PM</p>
                    </div>
                    <div>
                      <p className="font-medium">Email Response</p>
                      <p className="text-muted-foreground">Within 24 hours</p>
                    </div>
                    <div>
                      <p className="font-medium">Premium Support</p>
                      <p className="text-muted-foreground">Priority response</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <div className="bg-card rounded-2xl p-8 shadow-card">
                  <h2 className="text-2xl font-bold mb-6">Send us a message</h2>
                  
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name</Label>
                        <Input
                          id="name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          placeholder="Your name"
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                          id="email"
                          type="email"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          placeholder="you@example.com"
                          required
                        />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="subject">Subject</Label>
                      <Input
                        id="subject"
                        value={formData.subject}
                        onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                        placeholder="How can we help?"
                        required
                      />
                    </div>

                    <div className="space-y-2">
                      <Label htmlFor="message">Message</Label>
                      <Textarea
                        id="message"
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        placeholder="Tell us more about your question or concern..."
                        rows={5}
                        required
                      />
                    </div>

                    <Button type="submit" variant="hero" size="lg" className="w-full">
                      Send Message
                    </Button>
                  </form>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-16 lg:py-24 bg-muted/50">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-12"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Frequently Asked <span className="text-gradient">Questions</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Can't find what you're looking for? Reach out to our support team.
              </p>
            </motion.div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <motion.div
                  key={faq.question}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: index * 0.05 }}
                  className="bg-card rounded-xl p-6 shadow-soft"
                >
                  <div className="flex items-start gap-4">
                    <HelpCircle className="w-6 h-6 text-primary shrink-0 mt-0.5" />
                    <div>
                      <h3 className="font-semibold mb-2">{faq.question}</h3>
                      <p className="text-muted-foreground">{faq.answer}</p>
                    </div>
                  </div>
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

export default Contact;
