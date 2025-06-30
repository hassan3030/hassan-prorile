"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Button } from "@/components/ui/button"
import { Github, Linkedin, Mail, Heart } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

export default function Footer() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  // Prevent hydration mismatch
  if (!mounted) {
    return (
      <footer className="border-t border-border bg-background/50 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <span>Made with</span>
              <Heart className="w-4 h-4 text-red-500" />
              <span>by Hassan Hamdi</span>
            </div>
            <div className="flex gap-2">
              <Button variant="ghost" size="icon">
                <Github className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Linkedin className="w-4 h-4" />
              </Button>
              <Button variant="ghost" size="icon">
                <Mail className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </div>
      </footer>
    )
  }

  const t = translations[language]

  return (
    <motion.footer
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="border-t border-border bg-background/50 backdrop-blur-sm"
    >
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          <div
            className={`flex items-center gap-2 text-sm text-muted-foreground ${language === "ar" ? "flex-row-reverse" : ""}`}
          >
            <span>{t.madeWith}</span>
            <Heart className="w-4 h-4 text-red-500 animate-pulse" />
            <span>{t.by}</span>
          </div>

          <div className="flex items-center gap-4">
            <span className="text-sm text-muted-foreground hidden md:block">{t.connect}</span>
            <div className="flex gap-2">
              <a href="https://github.com/HassanHamdi" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Github className="w-4 h-4" />
                </Button>
              </a>
              <a href="https://linkedin.com/in/hassan-hamdi" target="_blank" rel="noopener noreferrer">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </a>
              <a href="mailto:hassan@example.com">
                <Button variant="ghost" size="icon" className="hover:text-primary">
                  <Mail className="w-4 h-4" />
                </Button>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-4 pt-4 border-t border-border text-center">
          <p className="text-xs text-muted-foreground">
            © {new Date().getFullYear()} Hassan Hamdi. {t.rights}
          </p>
        </div>
      </div>
    </motion.footer>
  )
}
