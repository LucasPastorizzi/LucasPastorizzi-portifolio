import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { MapPin, Briefcase, GraduationCap } from "lucide-react";

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="about" className="section-padding bg-card/50" ref={ref}>
      <div className="container-narrow">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient-accent">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e paixão por tecnologia
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-accent">
                <img
                  src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop&crop=face"
                  alt="Foto de perfil"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative elements */}
              <div className="absolute -top-4 -right-4 w-24 h-24 border-2 border-primary/30 rounded-full" />
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-primary/20 rounded-full blur-xl" />
            </div>
          </motion.div>

          {/* About Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Desenvolvedor apaixonado por criar soluções inovadoras
            </h3>
            
            <p className="text-muted-foreground leading-relaxed">
              Com mais de 3 anos de experiência em desenvolvimento web, me especializei em 
              criar aplicações modernas e escaláveis. Minha jornada começou com curiosidade 
              sobre como as coisas funcionam na internet, e evoluiu para uma carreira dedicada 
              a transformar ideias em realidade digital.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Meu diferencial está na combinação de <span className="text-primary font-semibold">habilidades técnicas sólidas</span> com 
              um olhar atento para <span className="text-primary font-semibold">design e experiência do usuário</span>. Acredito que 
              código limpo e interfaces intuitivas são a base de qualquer projeto de sucesso.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>São Paulo, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>3+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Ciência da Computação</span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
