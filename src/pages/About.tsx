import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Globe, Award } from "lucide-react";

const team = [
  {
    name: "Arjun Mehta",
    role: "Co-Founder & CEO",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=300&fit=crop&crop=face",
    bio: "Former Google engineer, passionate about democratizing education.",
  },
  {
    name: "Sneha Kapoor",
    role: "Co-Founder & CTO",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=300&h=300&fit=crop&crop=face",
    bio: "AI researcher from IIT Delhi, building the future of learning.",
  },
  {
    name: "Vikram Singh",
    role: "Head of Education",
    image: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=300&h=300&fit=crop&crop=face",
    bio: "20 years of teaching experience, curriculum design expert.",
  },
  {
    name: "Priya Sharma",
    role: "Head of Product",
    image: "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?w=300&h=300&fit=crop&crop=face",
    bio: "Previously at Byju's, focused on student-first design.",
  },
];

const values = [
  {
    icon: Target,
    title: "Student-First",
    description: "Every decision we make starts with one question: Will this help students learn better?",
  },
  {
    icon: Heart,
    title: "Accessible to All",
    description: "Quality education shouldn't depend on where you live or what you can afford.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description: "We bring Ivy League quality education to every village and city in India.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We're never satisfied. We constantly improve based on student outcomes.",
  },
];


const About = () => {
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
                Making World-Class Tutoring{" "}
                <span className="text-gradient">Accessible to All</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                We're on a mission to give every child access to the best education, 
                regardless of their background or location.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
              >
                <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    Edurance was born from a simple observation: the best tutors are expensive 
                    and inaccessible to most families. A child in a tier-3 city deserves the same 
                    quality education as one in an elite school.
                  </p>
                  <p>
                    Our founders — engineers, educators, and parents — came together to solve 
                    this problem. What if AI could be the great equalizer? What if every child 
                    could have a personal tutor that adapts to their needs?
                  </p>
                  <p>
                    Today, we're proud to serve 50,000+ students across India. But we're just 
                    getting started. Our vision is to build the "AI Ivy League" — world-class 
                    education for everyone.
                  </p>
                </div>
              </motion.div>

              
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="py-20 lg:py-28 bg-muted/50">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Our Values</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                The principles that guide everything we do.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-card"
                >
                  <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <value.icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">{value.title}</h3>
                  <p className="text-sm text-muted-foreground">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Team */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">Meet Our Team</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Engineers, educators, and dreamers united by a common mission.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <motion.div
                  key={member.name}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-card rounded-2xl p-6 text-center shadow-card"
                >
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium mb-2">{member.role}</p>
                  <p className="text-sm text-muted-foreground">{member.bio}</p>
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

export default About;
