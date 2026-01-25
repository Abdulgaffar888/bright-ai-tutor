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
                  {/* Profile Image */}
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
