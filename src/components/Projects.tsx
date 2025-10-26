import { motion } from 'motion/react';
import { ExternalLink, Github } from 'lucide-react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Badge } from './ui/badge';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Projects() {
  const projects = [
    {
      title: "Plateforme E-Learning",
      description: "Application web complète permettant aux étudiants de suivre des cours en ligne, avec gestion des utilisateurs et tableau de bord interactif.",
      image: "https://images.unsplash.com/photo-1593720213681-e9a8778330a7?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWIlMjBkZXZlbG9wbWVudCUyMGNvZGluZ3xlbnwxfHx8fDE3NjEzMjI3NjZ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Node.js", "MongoDB", "Tailwind"],
      codeUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      title: "App Mobile de Gestion",
      description: "Application mobile cross-platform pour la gestion de tâches et projets avec notifications en temps réel et synchronisation cloud.",
      image: "https://images.unsplash.com/photo-1618761714954-0b8cd0026356?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2JpbGUlMjBhcHAlMjBpbnRlcmZhY2V8ZW58MXx8fHwxNzYxMzUyMTg3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React Native", "Firebase", "Express"],
      codeUrl: "https://github.com",
      demoUrl: "https://example.com"
    },
    {
      title: "Dashboard Analytics",
      description: "Tableau de bord analytique avec visualisations de données interactives, graphiques temps réel et exports de rapports.",
      image: "https://images.unsplash.com/photo-1760553120930-316de067c79c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb2Rlcm4lMjBkYXNoYm9hcmQlMjBkZXNpZ258ZW58MXx8fHwxNzYxMzUxODc1fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
      technologies: ["React", "Chart.js", "MySQL", "Tailwind"],
      codeUrl: "https://github.com",
      demoUrl: "https://example.com"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">
            Projets récents
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Découvrez mes réalisations universitaires et personnelles
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="overflow-hidden h-full flex flex-col group hover:shadow-2xl transition-all duration-300 border-2 hover:border-blue-200">
                {/* Image */}
                <div className="relative overflow-hidden h-48">
                  <ImageWithFallback 
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>

                {/* Content */}
                <div className="p-6 flex-1 flex flex-col">
                  <h3 className="text-xl mb-3">{project.title}</h3>
                  <p className="text-gray-600 mb-4 flex-1">
                    {project.description}
                  </p>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge 
                        key={tech} 
                        variant="secondary"
                        className="bg-blue-50 text-blue-700 hover:bg-blue-100"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  {/* Buttons */}
                  <div className="flex gap-3">
                    <Button 
                      variant="outline" 
                      size="sm"
                      className="flex-1 group/btn border-2 hover:border-blue-600 hover:bg-blue-50"
                      asChild
                    >
                      <a href={project.codeUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4 mr-2 group-hover/btn:rotate-12 transition-transform" />
                        Code
                      </a>
                    </Button>
                    <Button 
                      size="sm"
                      className="flex-1 relative bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 group/btn"
                      asChild
                    >
                      <a href={project.demoUrl} target="_blank" rel="noopener noreferral">
                        <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 blur opacity-30 group-hover/btn:opacity-50 transition-opacity rounded-md"></span>
                        <span className="relative flex items-center justify-center">
                          <ExternalLink className="w-4 h-4 mr-2" />
                          Démo
                        </span>
                      </a>
                    </Button>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
