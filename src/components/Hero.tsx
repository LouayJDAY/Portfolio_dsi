import { Download, Mail } from 'lucide-react';
import { Button } from './ui/button';
import { motion } from 'motion/react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function Hero() {
  const scrollToContact = () => {
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="min-h-screen flex items-center pt-20 bg-gradient-to-br from-gray-50 to-blue-50/30">
      <div className="container mx-auto px-6 py-20">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left: Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="space-y-6">
              <div className="inline-block px-4 py-2 bg-blue-100 text-blue-700 rounded-full">
                👋 Bienvenue sur mon portfolio
              </div>
              
              <h1 className="text-5xl md:text-6xl">
                Bonjour, je suis{' '}
                <span className="bg-gradient-to-r from-blue-600 to-teal-500 bg-clip-text text-transparent">
                  Louay
                </span>
              </h1>
              
              <p className="text-xl text-gray-600">
                Étudiant en 3ᵉ année DSI – passionné par le développement web et mobile
              </p>
              
              <p className="text-gray-500">
                Je crée des applications modernes et intuitives en utilisant les dernières technologies web.
                Actuellement à la recherche d'un stage enrichissant pour mettre en pratique mes compétences.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <Button 
                  onClick={scrollToContact}
                  size="lg" 
                  className="relative bg-gradient-to-r from-blue-600 to-teal-500 hover:from-blue-700 hover:to-teal-600 shadow-lg hover:shadow-xl transition-all group"
                >
                  <span className="absolute inset-0 bg-gradient-to-r from-blue-600 to-teal-500 blur-lg opacity-50 group-hover:opacity-75 transition-opacity rounded-md"></span>
                  <span className="relative flex items-center gap-2">
                    <Mail className="w-5 h-5" />
                    Me contacter
                  </span>
                </Button>
                
                <Button 
                  size="lg" 
                  variant="outline"
                  className="border-2 hover:bg-gray-50 shadow-md hover:shadow-lg transition-all"
                >
                  <Download className="w-5 h-5 mr-2" />
                  Télécharger CV
                </Button>
              </div>
            </div>
          </motion.div>

          {/* Right: Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-teal-500 rounded-full blur-2xl opacity-20"></div>
              <div className="relative rounded-full w-80 h-80 md:w-96 md:h-96 overflow-hidden shadow-2xl border-8 border-white bg-white">
                <ImageWithFallback 
                  src="/images/Gemini_Generated_Image_1zve7f1zve7f1zve.png"
                  alt="Louay - Développeur DSI"
                  className="w-full h-full object-cover object-center"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
