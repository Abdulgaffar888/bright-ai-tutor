import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { motion } from "framer-motion";
import { Target, Heart, Globe, Award } from "lucide-react";

import ibrahim from "@/assets/Team/Ibrahim.jpeg";
import rahil from "@/assets/Team/Rahil.jpeg";
import gaffar from "@/assets/Team/Gaffar.jpeg";
import kamran from "@/assets/Team/Kamran.jpeg";

const team = [
  {
    name: "Ibrahim Hassan",
    role: "Co-Founder & CEO",
    image: ibrahim,
  },
  {
    name: "Rahil Nisar",
    role: "Co-Founder & CTO",
    image: rahil,
  },
  {
    name: "Abdul Gaffar",
    role: "Co-Founder & COO",
    image: gaffar,
  },
  {
    name: "Abdul Shakoor Kamran",
    role: "Co-Founder & Head Of Product",
    image: kamran,
  },
];

const values = [
  {
    icon: Target,
    title: "Student-First",
    description:
      "Every decision we make starts with one question: Will this help students learn better?",
  },
  {
    icon: Heart,
    title: "Accessible to All",
    description:
      "Quality education shouldn't depend on where you live or what you can afford.",
  },
  {
    icon: Globe,
    title: "Global Standards",
    description:
      "We bring world-class learning experiences to every student, everywhere.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We constantly improve so students never feel left behind.",
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

        {/* Vision & Mission */}
        <section className="py-20 lg:py-28 bg-muted/30">
          <div className="container max-w-4xl mx-auto text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Vision</h2>
              <p className="text-lg text-muted-foreground mb-10">
                A world where no student feels invisible — learning that is patient,
                personal, and supportive.
              </p>

              <h2 className="text-3xl lg:text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-lg text-muted-foreground mb-6">
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
                  <p className="text-sm text-muted-foreground">
                    {value.description}
                  </p>
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
              <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                Meet Our Team
              </h2>
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
                    className="w-24 h-24 mx-auto rounded-full object-cover mb-4"
                  />
                  <h3 className="text-lg font-bold">{member.name}</h3>
                  <p className="text-sm text-primary font-medium">
                    {member.role}
                  </p>
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
