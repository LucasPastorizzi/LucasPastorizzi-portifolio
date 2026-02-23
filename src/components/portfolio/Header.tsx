import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre", href: "#about" },
  { label: "Tecnologias", href: "#technologies" },
  { label: "Projetos", href: "#projects" },
  { label: "Contato", href: "#contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
className="fixed top-0 inset-x-0 w-full z-50 bg-background/80 backdrop-blur-lg border-b border-border"    >
      <nav className="container-narrow flex items-center justify-between h-16 px-4 md:px-8">
        <a href="#home" className="text-xl font-bold">
          <span className="text-gradient-yellow">Lucas</span>
          <span className="text-foreground">Pastorizzi</span>
        </a>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex items-center gap-8">
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
className="md:hidden p-2 text-foreground hover:text-primary transition-colors shrink-0"          aria-label="Toggle menu"
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Mobile Navigation */}
       {isOpen && (
  <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    exit={{ opacity: 0 }}
    className="fixed inset-0 top-16 bg-background/95 backdrop-blur-xl md:hidden"
  >
    <ul className="flex flex-col items-center justify-center h-[calc(100vh-4rem)] gap-8">
      {navItems.map((item) => (
        <li key={item.href}>
          <a
            href={item.href}
            onClick={() => setIsOpen(false)}
            className="text-2xl font-semibold text-foreground hover:text-primary transition-colors"
          >
            {item.label}
          </a>
        </li>
      ))}
    </ul>
  </motion.div>
)}
      </nav>
    </motion.header>
  );
};

export default Header;
