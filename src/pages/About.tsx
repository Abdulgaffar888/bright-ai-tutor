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
    description: "We bring world-class learning experiences to every student, everywhere.",
  },
  {
    icon: Award,
    title: "Excellence",
    description: "We constantly improve so students never feel left behind.",
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
                Education should never depend on favoritism, speed, or background.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20 lg:py-28 bg-background">
          <div className="container max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Edurance was born from a simple but painful truth — many students
                  are ignored not because they lack potential, but because classrooms
                  move too fast.
                </p>
                <p>
                  Teachers often focus on a few, while others quietly fall behind.
                  Questions remain unanswered. Confidence slowly fades.
                </p>
                <p>
                  We built Edurance for those students — the ones who need patience,
                  clarity, and someone who never gives up on them.
                </p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Mission & Vision (NEW SECTION) */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-10 leading-relaxed">
                We envision a world where no student feels invisible.
                A world where learning is personal, patient, and supportive —
                not rushed or judgmental.
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                To stand beside every learner when they feel stuck, confused,
                or left behind — and help them move forward with confidence.
              </p>

              <p className="text-xl font-semibold text-gradient">
                Edurance — A tutor that never gives up on you.
              </p>
            </motion.div>
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
                Builders, educators, and believers in equal learning.
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
