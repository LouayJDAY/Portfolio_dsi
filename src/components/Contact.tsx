import { motion } from 'motion/react';
import { Mail, Linkedin, Github, Send } from 'lucide-react';
import { Card } from './ui/card';

export function Contact() {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email",
      value: "jdalouay@gmail.com",
      link: "mailto:jdalouay@gmail.com",
      color: "from-blue-500 to-blue-600"
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      value: "linkedin.com/feed",
      link: "https://www.linkedin.com/feed/",
      color: "from-blue-600 to-blue-700"
    },
    {
      icon: Github,
      title: "GitHub",
      value: "github.com/LouayJDAY",
      link: "https://github.com/LouayJDAY",
      color: "from-gray-700 to-gray-900"
    }
  ];

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl mb-4">
            Contactez-moi
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-600 to-teal-500 mx-auto rounded-full"></div>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            Je suis actuellement à la recherche d'un stage. N'hésitez pas à me contacter pour discuter de vos opportunités !
          </p>
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            {contactMethods.map((method, index) => {
              const isExternal = method.link?.startsWith('http');
              return (
                <motion.a
                  key={method.title}
                  href={method.link}
                  target={isExternal ? '_blank' : undefined}
                  rel={isExternal ? 'noopener noreferrer' : undefined}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                >
                  <Card className="p-6 text-center hover:shadow-xl transition-all duration-300 border-2 hover:border-blue-200 group cursor-pointer h-full">
                    <div className={`w-14 h-14 mx-auto mb-4 rounded-full bg-gradient-to-br ${method.color} flex items-center justify-center shadow-lg group-hover:shadow-xl group-hover:scale-110 transition-all`}>
                      <method.icon className="w-7 h-7 text-white" />
                    </div>
                    <h3 className="mb-2">{method.title}</h3>
                    <p className="text-sm text-gray-600 break-all">{method.value}</p>
                  </Card>
                </motion.a>
              );
            })}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <Card className="p-8 bg-gradient-to-br from-blue-600 to-teal-500 text-white border-0 shadow-2xl">
              <div className="text-center space-y-4">
                <div className="w-16 h-16 mx-auto bg-white/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                  <Send className="w-8 h-8" />
                </div>
                <h3 className="text-2xl">Vous avez un projet en tête ?</h3>
                <p className="text-blue-50 max-w-md mx-auto">
                  Je serais ravi d'échanger avec vous sur vos besoins et de voir comment je peux contribuer à vos projets.
                </p>
                <a 
                  href="mailto:jdalouay@gmail.com"
                  className="inline-flex items-center gap-2 px-8 py-3 bg-white text-blue-600 rounded-full hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl mt-4"
                >
                  <Mail className="w-5 h-5" />
                  Envoyez-moi un email
                </a>
              </div>
            </Card>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-center mt-16 pt-8 border-t border-gray-200"
        >
          <p className="text-gray-600">
            © 2025 Louay. Créé avec passion et React ⚛️
          </p>
        </motion.div>
      </div>
    </section>
  );
}
