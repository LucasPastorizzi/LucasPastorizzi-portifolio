import { motion, useInView, useMotionValue } from "framer-motion";
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

  // 3D Motion Values
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement>) {
    const rect = e.currentTarget.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const rotateYValue = ((x / width) - 0.5) * 20;
    const rotateXValue = ((y / height) - 0.5) * -20;

    rotateX.set(rotateXValue);
    rotateY.set(rotateYValue);
  }

  return (
    <section
      id="about"
      className="section-padding bg-card/50"
      ref={ref}
      style={{ perspective: 1200 }}
    >
      <div className="container-narrow">

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 80, scale: 0.9 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
          transition={{ duration: 0.8, type: "spring" }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Sobre <span className="text-gradient-accent">Mim</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Conheça um pouco mais sobre minha trajetória e paixão por tecnologia
          </p>
        </motion.div>

        {/* Main Section */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">

          {/* FOTO COM 3D */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="flex justify-center"
          >
            <motion.div
              style={{ rotateX, rotateY }}
              onMouseMove={handleMouseMove}
              onMouseLeave={() => {
                rotateX.set(0);
                rotateY.set(0);
              }}
              transition={{ type: "spring", stiffness: 150 }}
              className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-primary/30 glow-accent"
            >
              <img
                src={foto}
                alt="Foto de perfil"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </motion.div>

          {/* TEXTO */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="space-y-6"
          >
            <h3 className="text-2xl md:text-3xl font-bold">
              Desenvolvedor apaixonado por criar soluções inovadoras
            </h3>

            <p className="text-muted-foreground leading-relaxed">
              Sou desenvolvedor web de Ivoti – RS e desde pequeno sempre fui movido pela curiosidade de entender como as coisas funcionam — especialmente quando envolviam tecnologia.
            </p>

            <p className="text-muted-foreground leading-relaxed">
              Meu diferencial está na combinação de <span className="text-primary font-semibold">habilidades técnicas sólidas</span> com 
              um olhar atento para <span className="text-primary font-semibold">design e experiência do usuário</span>.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
              <div className="flex items-center gap-3 text-muted-foreground">
                <MapPin className="w-5 h-5 text-primary" />
                <span>Novo Hamburgo, Brasil</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Briefcase className="w-5 h-5 text-primary" />
                <span>3+ anos de experiência</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <GraduationCap className="w-5 h-5 text-primary" />
                <span>Técnico em Desenvolvimento de Sistemas - Senac RS</span>
              </div>
              <div className="flex items-center gap-3 text-muted-foreground">
                <Coffee className="w-5 h-5 text-primary" />
                <span>Disponível para projetos</span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Highlights com 3D leve */}
        <motion.div
          initial={{ opacity: 0, y: 80 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
        >
          <h3 className="text-2xl md:text-3xl font-bold text-center mb-10">
            O que eu <span className="text-gradient-accent">faço</span>
          </h3>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((item) => (
              <motion.div
                key={item.title}
                whileHover={{
                  rotateY: 10,
                  rotateX: -5,
                  scale: 1.05,
                }}
                transition={{ type: "spring", stiffness: 200 }}
                className="card-gradient border border-border rounded-xl p-6 text-center shadow-lg"
                style={{ transformStyle: "preserve-3d" }}
              >
                <div className="w-14 h-14 mx-auto mb-4 rounded-xl bg-primary/10 flex items-center justify-center">
                  <item.icon className="w-7 h-7 text-primary" />
                </div>
                <h4 className="font-semibold text-lg mb-2">
                  {item.title}
                </h4>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </motion.div>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;