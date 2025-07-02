"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Download, Mail, Github, Linkedin, MapPin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import Image from "next/image"
import Link from "next/link"

export default function HomePage() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])
useEffect(() => {
  document.title = "Hassan Hamdi - Frontend Developer";
}, []);
  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <div className="min-h-screen relative overflow-hidden">
        <div className="container mx-auto px-4 py-20">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <p className="text-lg text-muted-foreground">Hello, I'm</p>
              <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
                Hassan Hamdi 
              </h1>
              <h2 className="text-2xl lg:text-3xl font-semibold text-foreground">Frontend Developer</h2>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-5 h-5" />
                <span>Cairo, Nasr City</span>
              </div>
            </div>
            <div className="flex justify-center">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 p-2">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <Image
                    src="/Myphoto.JPG"
                    alt="Hassan Hamdi"
                    width={320}
                    height={320}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }

  const t = translations[language]

  return (
    <div className="min-h-screen relative overflow-hidden">
      {/* Floating Background Elements */}
      <div className="floating-circles">
        <div className="floating-circle w-32 h-32 top-20 left-10 opacity-20" style={{ animationDelay: "0s" }} />
        <div className="floating-circle w-24 h-24 top-40 right-20 opacity-30" style={{ animationDelay: "2s" }} />
        <div className="floating-circle w-16 h-16 bottom-32 left-1/4 opacity-25" style={{ animationDelay: "4s" }} />
        <div className="floating-circle w-20 h-20 bottom-20 right-1/3 opacity-20" style={{ animationDelay: "1s" }} />
      </div>

      <div className="container mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className={`space-y-6 ${language === "ar" ? "text-right" : "text-left"}`}
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-muted-foreground"
            >
              {t.greeting}
            </motion.p>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="text-5xl lg:text-7xl font-bold bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent"
            >
              {t.name}
            </motion.h1>

            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-2xl lg:text-3xl font-semibold text-foreground"
            >
              {t.title}
            </motion.h2>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="flex items-center gap-2 text-muted-foreground"
            >
              <MapPin className="w-5 h-5" />
              <span>{t.location}</span>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
              className="text-lg text-muted-foreground leading-relaxed max-w-lg"
            >
              {t.intro}
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="flex flex-wrap gap-4"
            >
              <Link href="/projects">
                <Button size="lg" className="glow-effect">
                  {t.viewProjects}
                </Button>
              </Link>
              <Link href="/resume.pdf" target="_blank">
                <Button variant="outline" size="lg" className="neon-border bg-transparent">
                <Download className="w-4 h-4 mr-2" />
                {t.downloadCV}
              </Button>
              </Link>
            
              <Link href="/contact">
                <Button variant="ghost" size="lg">
                  <Mail className="w-4 h-4 mr-2" />
                  {t.contactMe}
                </Button>
              </Link>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="flex gap-4 pt-4"
            >
              <a href="https://github.com/hassan3030" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="w-5 h-5" />
                </Button>
              </a>
              <a href="https://www.linkedin.com/in/hassan-hamdia" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-5 h-5" />
                </Button>
              </a>

              
            </motion.div>
          </motion.div>

          {/* Right Content - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="flex justify-center"
          >
            <div className="relative">
              <div className="w-80 h-80 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 p-2 glow-effect">
                <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                  <Image
                   src="/Myphoto.JPG"
                    // src="/placeholder.svg?height=320&width=320"
                    alt="Hassan Hamdi"
                    width={320}
                    height={320}
                    className="w-full h-full "
                  />
                </div>
              </div>
              {/* Decorative rings */}
              <div className="absolute -top-4 -right-4 w-20 h-20 border-2 border-primary/30 rounded-full animate-pulse" />
              <div
                className="absolute -bottom-4 -left-4 w-16 h-16 border-2 border-orange-500/30 rounded-full animate-pulse"
                style={{ animationDelay: "1s" }}
              />
            </div>
          </motion.div>
        </div>

        {/* Stats Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="grid md:grid-cols-3 gap-6 mt-20"
        >
          <Card className="p-6 text-center neon-border">
            <h3 className="text-2xl font-bold text-primary">2+</h3>
            <p className="text-muted-foreground">{t.yearsExp}</p>
          </Card>
          <Card className="p-6 text-center neon-border">
            <h3 className="text-2xl font-bold text-primary">35+</h3>
            <p className="text-muted-foreground">{t.projectsCompleted}</p>
          </Card>
          <Card className="p-6 text-center neon-border">
            <h3 className="text-2xl font-bold text-primary">∞</h3>
            <p className="text-muted-foreground">{t.techStack}</p>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
