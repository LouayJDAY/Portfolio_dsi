import { motion } from 'motion/react';
import { Code2, Lightbulb, Rocket } from 'lucide-react';

export function About() {
  const qualities = [
    {
      icon: Code2,
      title: "Apprentissage continu",
      description: "Je me forme constamment aux nouvelles technologies et best practices du développement web."
    },
    {
      icon: Lightbulb,
      title: "Créativité",
      description: "J'aime concevoir des solutions innovantes et des interfaces utilisateur intuitives."
    },
    {
      icon: Rocket,
      title: "Motivation",
      description: "Passionné par la tech, je m'investis pleinement dans chaque projet pour atteindre l'excellence."
    }
  ];

  return (
    <section id="about" className="py-20 bg-white">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-4xl mx-auto"
        >
          <div className="text-center mb-12">
            <h2 className="text-4xl mb-4">
              À propos de moi
            </h2>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-gray-600 mb-12">
            <p>
              Étudiant passionné en 3ᵉ année de Développement des Systèmes d'Information, je me spécialise dans la création d'applications web modernes et performantes. Mon parcours académique m'a permis d'acquérir une solide compréhension des technologies front-end et back-end.
            </p>
            <p>
              Curieux et autodidacte, je consacre mon temps libre à explorer de nouveaux frameworks, à contribuer à des projets open-source et à perfectionner mes compétences en design UI/UX. Mon objectif est de créer des expériences numériques qui allient esthétique et fonctionnalité.
            </p>
            <p>
              Je recherche actuellement un stage qui me permettra de mettre en pratique mes connaissances théoriques, d'apprendre auprès de professionnels expérimentés et de contribuer à des projets concrets et impactants.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {qualities.map((quality, index) => (
              <motion.div
                key={quality.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="p-6 rounded-xl bg-gradient-to-br from-gray-50 to-blue-50/30 border border-gray-100 hover:shadow-lg transition-shadow"
              >
                <quality.icon className="w-10 h-10 text-blue-600 mb-4" />
                <h3 className="mb-2">{quality.title}</h3>
                <p className="text-gray-600">{quality.description}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
