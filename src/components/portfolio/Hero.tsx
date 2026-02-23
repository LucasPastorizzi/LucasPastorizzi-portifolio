import { motion } from "framer-motion";
import { ArrowDown, Code2, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import Scene3D from "./Scene3D";

const Hero = () => {
  return (
    <section
      id="home"
      className="min-h-[100svh] flex items-center justify-center"
    >
      {/* 3D Background */}
      <Scene3D />
      
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/15 via-transparent to-transparent" />
      
      {/* Grid Pattern */}
      <div className="absolute inset-15 bg-[linear-gradient(to_right,hsl(0_0%_15%/0.3)_1px,transparent_1px),linear-gradient(to_bottom,hsl(0_0%_15%/0.3)_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container-narrow relative z-10 text-center px-6 pt-24 pb-16">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="flex items-center justify-center gap-2 mb-6"
        >
          <Code2 className="w-5 h-5 text-primary" />
          <span className="text-sm font-mono text-primary tracking-wider uppercase">
            Desenvolvedor Full Stack
          </span>
          <Sparkles className="w-5 h-5 text-primary" />
        </motion.div>

      <motion.h1
  initial="hidden"
  animate="visible"
  variants={{
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15,
      },
    },
  }}
  className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black mb-6 tracking-tight leading-tight"
>
  <motion.span
    variants={{
      hidden: { opacity: 0, y: 40 },
      visible: { opacity: 1, y: 0 },
    }}
    transition={{ duration: 0.6 }}
    className="block text-foreground"
  >
    Olá, eu sou
  </motion.span>

  <motion.span
    variants={{
      hidden: { opacity: 0, y: 60, scale: 0.9 },
      visible: { opacity: 1, y: 0, scale: 1 },
    }}
    transition={{ duration: 0.8, ease: "easeOut" }}
    className="block text-gradient-accent"
  >
    Lucas Pastorizzi
  </motion.span>

  
</motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-10"
        >
          Transformo ideias em experiências digitais incríveis. 
          Especializado em criar aplicações web modernas, performáticas e com design impecável.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-5 w-full sm:w-auto"
        >
          <Button variant="hero" size="lg" asChild>
            <a href="#projects">Ver Portfólio</a>
          </Button>
          <Button variant="heroOutline" size="lg" asChild>
            <a href="#contact">Entrar em Contato</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <a
            href="#about"
            className="flex flex-col items-center gap-2 text-muted-foreground hover:text-primary transition-colors"
          >
            <span className="text-xs tracking-wider uppercase">Scroll</span>
            <ArrowDown className="w-5 h-5 animate-bounce" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
