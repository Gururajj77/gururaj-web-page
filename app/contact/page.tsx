import { Mail, Github, Linkedin, Twitter } from 'lucide-react'

export default function Contact() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Contact</h1>
      <p className="mb-6">Get in touch for collaborations and opportunities.</p>
      <div className="flex space-x-6">
        <a href="#" className="hover:text-gray-300">
          <Mail className="w-8 h-8" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Github className="w-8 h-8" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Linkedin className="w-8 h-8" />
        </a>
        <a href="#" className="hover:text-gray-300">
          <Twitter className="w-8 h-8" />
        </a>
      </div>
    </div>
  )
}

