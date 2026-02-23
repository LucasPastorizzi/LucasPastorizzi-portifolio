import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState, useEffect } from "react";

const navItems = [
  { label: "Home", id: "home" },
  { label: "Sobre", id: "about" },
  { label: "Tecnologias", id: "technologies" },
  { label: "Projetos", id: "projects" },
  { label: "Contato", id: "contact" },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
  }, [isOpen]);

  const handleScroll = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className="fixed top-0 inset-x-0 w-full z-40 bg-black border-b border-neutral-900"
      >
        <nav className="max-w-7xl mx-auto flex items-center justify-between h-16 px-6">
          {/* Logo */}
          <button
            onClick={() => handleScroll("home")}
            className="text-xl font-bold whitespace-nowrap"
          >
            <span className="text-white">Lucas </span>
            <span className="text-white">Pastorizzi</span>
          </button>

          {/* Desktop */}
          <ul className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => handleScroll(item.id)}
                  className="text-sm text-neutral-400 hover:text-yellow-400 transition-colors duration-300"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          {/* Mobile Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-white hover:text-yellow-400 transition-colors shrink-0"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </nav>
      </motion.header>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Overlay */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.6 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 bg-black backdrop-blur-sm z-[998] md:hidden"
              onClick={() => setIsOpen(false)}
            />

            {/* Drawer */}
            <motion.div
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 260, damping: 25 }}
              className="fixed top-0 right-0 h-full w-72 bg-black z-[999] md:hidden shadow-2xl border-l border-neutral-900"
            >
              {/* Drawer Header */}
              <div className="flex items-center justify-between px-6 h-16 border-b border-neutral-900 bg-black">
                <span className="text-lg font-semibold text-white">
                  Menu
                </span>

                <button
                  onClick={() => setIsOpen(false)}
                  className="p-2 rounded-md hover:bg-neutral-800 transition-colors"
                >
                  <X size={24} className="text-white" />
                </button>
              </div>

              {/* Links */}
              <div className="flex flex-col mt-10 px-6 gap-6">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => handleScroll(item.id)}
                    className="text-left text-lg font-medium text-neutral-300 hover:text-yellow-400 transition-all duration-300 hover:translate-x-1"
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
};

export default Header;