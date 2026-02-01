import { Link } from "react-router-dom";
import {
  GraduationCap,
  Mail,
  Phone,
  MapPin,
  Linkedin,
  Twitter,
  Instagram,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

const footerLinks = {
  product: [
    { name: "Features", href: "/product" },
    { name: "How It Works", href: "/product#how-it-works" },
    { name: "Pricing", href: "/pricing" },
    { name: "Demo", href: "/#demo" },
  ],
  company: [
    { name: "About Us", href: "/about" },
    { name: "Careers", disabled: true },
    { name: "Blog", disabled: true },
    { name: "Press", disabled: true },
  ],
  support: [
    { name: "Help Center", disabled: true },
    { name: "Contact Us", href: "/contact" },
    { name: "FAQ", href: "/contact#faq" },
    { name: "Community", disabled: true },
  ],
  legal: [
    { name: "Terms of Service", href: "/terms" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Refund Policy", href: "/refund" },
  ],
};

const socialLinks = [
  { icon: Twitter, href: "https://x.com/eduranceai7", label: "X (Twitter)" },
  {
    icon: Instagram,
    href: "https://www.instagram.com/edurance.in?utm_source=qr&igsh=NDdodHZoYXV4ODJi",
    label: "Instagram",
  },
  {
    icon: Linkedin,
    href: "https://www.linkedin.com/in/edurance-ai-8573203a8",
    label: "LinkedIn",
  },
];

export function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16 lg:py-20">
        {/* Newsletter Section */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-8 pb-12 border-b border-background/10">
          <div className="max-w-md">
            <h3 className="text-2xl font-bold mb-2">Stay Updated</h3>
            <p className="text-background/70">
              Get the latest tips, updates, and educational resources delivered
              to your inbox.
            </p>
          </div>
          <form className="flex w-full lg:w-auto gap-3">
            <Input
              type="email"
              placeholder="Enter your email"
              className="w-full lg:w-80 bg-background/10 border-background/20 text-background placeholder:text-background/50"
            />
            <Button variant="accent" className="shrink-0">
              Subscribe
            </Button>
          </form>
        </div>

        {/* Links Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 py-12">
          {/* Brand Column */}
          <div className="col-span-2 md:col-span-4 lg:col-span-1">
            <Link to="/" className="flex items-center gap-2 mb-4">
              <div className="flex items-center justify-center w-10 h-10 rounded-xl bg-primary text-primary-foreground">
                <GraduationCap className="w-6 h-6" />
              </div>
              <span className="text-xl font-bold">Edurance</span>
            </Link>
            <p className="text-background/70 text-sm mb-6">
              Making world-class tutoring accessible to every child through
              AI-powered personalized education.
            </p>
            <div className="flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="p-2 rounded-lg bg-background/10 hover:bg-background/20 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Product */}
          <FooterColumn title="Product" links={footerLinks.product} />

          {/* Company */}
          <FooterColumn title="Company" links={footerLinks.company} />

          {/* Support */}
          <FooterColumn title="Support" links={footerLinks.support} />

          {/* Legal */}
          <FooterColumn title="Legal" links={footerLinks.legal} />
        </div>

        {/* Contact Info */}
        <div className="flex flex-col md:flex-row gap-6 py-8 border-t border-background/10">
          <div className="flex items-center gap-2 text-sm text-background/70">
            <Mail className="w-4 h-4" />
            <span>Eduranceai7@gmail.com</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-background/70">
            <Phone className="w-4 h-4" />
            <span>+91 73865 38067</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-background/70">
            <MapPin className="w-4 h-4" />
            <span>Hyderabad, India</span>
          </div>
        </div>

        {/* Copyright */}
        <div className="pt-8 border-t border-background/10 text-center text-sm text-background/50">
          <p>© {new Date().getFullYear()} Edurance. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

/* 🔹 Reusable Footer Column */
function FooterColumn({
  title,
  links,
}: {
  title: string;
  links: { name: string; href?: string; disabled?: boolean }[];
}) {
  return (
    <div>
      <h4 className="font-semibold mb-4">{title}</h4>
      <ul className="space-y-3">
        {links.map((link) => (
          <li key={link.name}>
            {link.disabled ? (
              <span
                title="Coming soon"
                className="text-sm text-background/40 cursor-not-allowed"
              >
                {link.name}
              </span>
            ) : (
              <Link
                to={link.href!}
                className="text-sm text-background/70 hover:text-background transition-colors"
              >
                {link.name}
              </Link>
            )}
          </li>
        ))}
      </ul>
    </div>
  );
}
