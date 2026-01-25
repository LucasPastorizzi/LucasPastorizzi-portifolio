import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef, useState } from "react";
import { ExternalLink, Github, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const projects = [
  {
    id: 1,
    title: "E-commerce Platform",
    description: "Plataforma completa de e-commerce com carrinho, pagamentos e dashboard admin.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Node.js", "MongoDB"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 2,
    title: "Dashboard Analytics",
    description: "Dashboard interativo com gráficos em tempo real e relatórios customizáveis.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop",
    technologies: ["React", "D3.js", "Tailwind", "Firebase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 3,
    title: "App de Tarefas",
    description: "Aplicativo de gestão de tarefas com drag-and-drop e sincronização em nuvem.",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=600&h=400&fit=crop",
    technologies: ["React", "TypeScript", "Supabase"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Landing Page SaaS",
    description: "Landing page moderna e responsiva para produto SaaS com animações.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=600&h=400&fit=crop",
    technologies: ["React", "Framer Motion", "Tailwind"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 5,
    title: "API REST",
    description: "API robusta com autenticação JWT, rate limiting e documentação Swagger.",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&h=400&fit=crop",
    technologies: ["Node.js", "Express", "PostgreSQL"],
    demoUrl: "#",
    githubUrl: "#",
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
