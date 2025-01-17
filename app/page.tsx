import TextToSvgMain from '@/components/TextToSvgMain';
import { FaGithub, FaLinkedin, FaGlobe } from 'react-icons/fa';

export default function Home() {
  return (
    <div className="min-h-screen">
      <header className="bg-gradient-to-r from-purple-600 to-pink-600 text-white py-8 mb-8">
        <div className="container mx-auto px-4">
          <h1 className="text-5xl font-bold text-center mb-4">
            TextCraft Pro
          </h1>
          <p className="text-xl text-center text-purple-100">
            Transform your text into beautiful Images
          </p>
        </div>
      </header>

      <main className="container mx-auto px-4">
        <TextToSvgMain />

        <footer className="mt-16 pb-8 text-center">
          <div className="mb-4">
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white">Created by Kanugu Rajesh</h2>
            <p className="text-gray-600 dark:text-gray-300">Full Stack Developer</p>
          </div>
          
          <div className="flex justify-center gap-6">
            <a
              href="https://github.com/kanugurajesh"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/rajesh-kanugu-aba8a3254/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="https://kanugurajesh.vercel.app"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-purple-600 dark:text-gray-400 dark:hover:text-purple-400 transition-colors"
            >
              <FaGlobe size={24} />
            </a>
          </div>
        </footer>
      </main>
    </div>
  );
}