import { motion } from 'motion/react';
import { Code2, Server, Palette } from 'lucide-react';
import { Card } from './ui/card';

export function Skills() {
  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend",
      color: "from-blue-500 to-blue-600",
      skills: [
        { name: "HTML", level: 90 },
        { name: "CSS", level: 85 },
        { name: "JavaScript", level: 80 },
        { name: "React", level: 75 },
                { name: "Angular", level: 75 },

        { name: "Tailwind", level: 85 }
      ]
    },
    {
      icon: Server,
      title: "Backend",
      color: "from-teal-500 to-teal-600",
      skills: [
        { name: "Node.js", level: 60 },
        { name: "Springboot", level: 60},

        { name: "Express", level: 60 },
        { name: "MySQL", level: 80 },
        { name: "MongoDB", level: 65 }
      ]
    },
    {
      icon: Palette,
      title: "Design",
      color: "from-purple-500 to-purple-600",
      skills: [
        { name: "Figma", level: 80 },
        { name: "UI/UX", level: 75 },
        { name: "Responsive Design", level: 85 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">
            Compétences
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4">
            Les technologies et outils que je maîtrise
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="p-6 h-full hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group">
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center gap-3 mb-6">
                    <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} shadow-lg group-hover:shadow-xl transition-shadow`}>
                      <category.icon className="w-6 h-6 text-white" />
                    </div>
                    <h3 className="text-xl">{category.title}</h3>
                  </div>

                  {/* Skills List */}
                  <div className="space-y-4">
                    {category.skills.map((skill, skillIndex) => (
                      <div key={skill.name} className="space-y-2">
                        <div className="flex justify-between items-center">
                          <span className="text-gray-700">{skill.name}</span>
                          <span className="text-sm text-gray-500">{skill.level}%</span>
                        </div>
                        <div className="h-2 bg-gray-200 rounded-full overflow-hidden">
                          <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: `${skill.level}%` }}
                            viewport={{ once: true }}
                            transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                            className={`h-full bg-gradient-to-r ${category.color} rounded-full`}
                          />
                        </div>
                      </div>
                    ))}
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
