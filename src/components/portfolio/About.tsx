import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import foto from "@/assets/fotoperfil.png";
import { 
  MapPin, 
  Briefcase, 
  GraduationCap, 
  Heart, 
  Target, 
  Coffee,
  Code,
  Lightbulb,
  Users,
  Rocket
} from "lucide-react";

const highlights = [
  {
    icon: Code,
    title: "Clean Code",
    description: "Código limpo, bem documentado e de fácil manutenção",
  },
  {
    icon: Lightbulb,
    title: "Inovação",
    description: "Sempre buscando as melhores soluções tecnológicas",
  },
  {
    icon: Users,
    title: "Colaboração",
    description: "Trabalho em equipe e comunicação eficiente",
  },
  {
    icon: Rocket,
    title: "Performance",
    description: "Aplicações rápidas e otimizadas para o usuário",
  },
];

const interests = [
  "Desenvolvimento Web",
  "UI/UX Design",
  "Arquitetura de Software",
  "Open Source",
  "Metodologias Ágeis",
  "Aprendizado Contínuo",
];

const About = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

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

        {/* Main About Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
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
                  src={foto}
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
              <div className="flex items-center gap-3 text-muted-foreground">
                <Coffee className="w-5 h-5 text-primary" />
                <span>Disponível para projetos</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* What I Do - Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mb-20"
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            O que eu <span className="text-gradient-accent">faço</span>
          </h3>
          
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
          >
            {highlights.map((item, index) => (
              <motion.div
                key={item.title}
                variants={itemVariants}
                className="group card-gradient border border-border rounded-xl p-6 hover:border-primary/50 transition-all duration-300 hover-lift text-center"
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2 group-hover:text-primary transition-colors">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>

        {/* Interests & Values */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="grid md:grid-cols-2 gap-12"
        >
          {/* Interests */}
          <div className="card-gradient border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Heart className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-bold">Interesses</h4>
            </div>
            <div className="flex flex-wrap gap-3">
              {interests.map((interest) => (
                <span
                  key={interest}
                  className="px-4 py-2 bg-secondary rounded-full text-sm text-muted-foreground hover:text-primary hover:bg-primary/10 transition-colors cursor-default"
                >
                  {interest}
                </span>
              ))}
            </div>
          </div>

          {/* Goals */}
          <div className="card-gradient border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-6">
              <Target className="w-6 h-6 text-primary" />
              <h4 className="text-xl font-bold">Objetivos</h4>
            </div>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Contribuir para projetos open source impactantes
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Desenvolver produtos que melhorem a vida das pessoas
                </p>
              </li>
              <li className="flex items-start gap-3">
                <div className="w-2 h-2 rounded-full bg-primary mt-2" />
                <p className="text-muted-foreground">
                  Continuar aprendendo e evoluindo como profissional
                </p>
              </li>
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
