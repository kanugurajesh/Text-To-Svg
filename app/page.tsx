import TextToSvgMain from '@/components/TextToSvgMain';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-16 mb-8">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight">
              TextCraft Pro
            </h1>
            <p className="text-lg md:text-xl text-purple-100 mb-8">
              Transform your text into beautiful SVG images with our powerful and intuitive editor
            </p>
            <div className="flex justify-center gap-4">
              <a
                href="#editor"
                className="bg-white text-purple-600 hover:bg-purple-50 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Get Started
              </a>
              <a
                href="/how-to-use"
                className="bg-purple-700 text-white hover:bg-purple-800 px-6 py-3 rounded-lg font-semibold transition-colors"
              >
                Learn More
              </a>
            </div>
          </div>
        </div>
      </header>

      <section id="editor" className="container mx-auto px-4 mb-16">
        <TextToSvgMain />
      </section>

      <footer className="mt-auto py-16 bg-white/50 dark:bg-gray-900/50 backdrop-blur-sm">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">
              Created by Kanugu Rajesh
            </h2>
            <p className="text-gray-600 dark:text-gray-300 mb-6">
              Full Stack Developer
            </p>
            
            <div className="flex justify-center gap-6">
              <a
                href="https://github.com/kanugurajesh"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                aria-label="GitHub Profile"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                aria-label="LinkedIn Profile"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://kanugurajesh.vercel.app"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
                aria-label="Portfolio Website"
              >
                <FaGlobe size={24} />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}