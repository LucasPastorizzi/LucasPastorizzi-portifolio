import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import HomeEcom from "@/assets/Ecommerce.png";
import FlypiEc from "@/assets/Flypii.png";
import Daoraa from "@/assets/Daora.png";
import OrientalJaponess from "@/assets/OrientalJapones.png"; 
const projects = [
  {
    id: 1,
    title: "E-commerce - Loja Virtual",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e dashboard admin.",
    image: HomeEcom,
  technologies: ["React", "TypeScript", "Node.js", "PostgreSQL", "API "],
    demoUrl: "https://lucaspastorizzi.github.io/dapper-dapper/",
    githubUrl: "https://github.com/LucasPastorizzi/EcommerceVirtual",
  },
  {
    id: 2,
    title: "Flypi - Landing Page + API",
    description: "Dashboard interativo com gráficos em tempo real e relatórios customizáveis.",
    image: FlypiEc,
    technologies: ["React","Tailwind", "API", "Framer Motion", "TypeScript", "Node.js"],
    demoUrl: "https://lucaspastorizzi.github.io/flypi-black-3d-vibe/",
    githubUrl: "https://github.com/LucasPastorizzi/flypi-black-3d-vibe",
  },
  {
    id: 3,
    title: "Daora Massas - Projeto Java",
    description: "Aplicativo de gestão de tarefas e sincronização em nuvem.",
    image: Daoraa,
    technologies: ["Java", "JavaX", "JPA", "MySQL", "Hibernate"],
    demoUrl: "https://github.com/LucasPastorizzi/Daora-Project",
    githubUrl: "https://github.com/LucasPastorizzi/Daora-Project",
  },
  {
    id: 4,
    title: "Landing Page - Restaurante Japones",
    description: "Landing page moderna e responsiva para restaurantes orientais com animações + agendamentos.",
    image: OrientalJaponess,
    technologies: ["React", "Framer Motion", "Tailwind"],
    demoUrl: "https://lucaspastorizzi.github.io/Projeto-RestauranteOriental/",
    githubUrl: "https://github.com/LucasPastorizzi/Projeto-RestauranteOriental",
  },

];

const Projects = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const carouselRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);

  const checkScroll = () => {
    if (carouselRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = carouselRef.current;
      setCanScrollLeft(scrollLeft > 0);
      setCanScrollRight(scrollLeft < scrollWidth - clientWidth - 10);
    }
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const scrollAmount = 400;
      carouselRef.current.scrollBy({
        left: direction === "left" ? -scrollAmount : scrollAmount,
        behavior: "smooth",
      });
      setTimeout(checkScroll, 300);
    }
  };

  return (
    <section id="projects" className="section-padding bg-card/50" ref={ref}>
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 px-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Meus <span className="text-gradient-accent">Projetos</span>
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Alguns dos projetos que desenvolvi com dedicação e atenção aos detalhes
          </p>
        </motion.div>

        {/* Carousel Navigation */}
        <div className="flex justify-end gap-2 mb-6 px-4 md:px-8">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Anterior"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className="p-2 rounded-full border border-border hover:border-primary hover:text-primary disabled:opacity-30 disabled:cursor-not-allowed transition-all"
            aria-label="Próximo"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Carousel */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          ref={carouselRef}
          onScroll={checkScroll}
          className="flex gap-6 overflow-x-auto pb-6 px-4 md:px-8 snap-x snap-mandatory scrollbar-hide"
          style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
        >
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, x: 50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.1 * index }}
              className="flex-shrink-0 w-[340px] md:w-[400px] snap-start"
            >
              <div className="group card-gradient border border-border rounded-xl overflow-hidden hover:border-primary/50 transition-all duration-300 hover-lift h-full">
                {/* Project Image */}
                <div className="relative overflow-hidden h-48">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-secondary rounded-md text-muted-foreground"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex gap-3">
                    <Button variant="hero" size="sm" asChild className="flex-1">
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink size={16} className="mr-2" />
                        Demo
                      </a>
                    </Button>
                    <Button variant="heroOutline" size="sm" asChild className="flex-1">
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github size={16} className="mr-2" />
                        GitHub
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
