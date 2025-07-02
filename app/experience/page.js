"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Calendar, Building } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations, experienceData } from "@/lib/translations"
import Link from "next/link"

export default function ExperiencePage() {
  const [mounted, setMounted] = useState(false)
  const { language } = useLanguage()

  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="min-h-screen pt-20 pb-10">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Work Experience</h1>
            <p className="text-xl text-muted-foreground">My professional journey</p>
          </div>
        </div>
      </div>
    )
  }

  const t = translations[language]

  return (
    <div className="min-h-screen pt-20 pb-10 light-gradient">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-12 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
            {t.experienceTitle}
          </h1>
          <p className="text-xl text-muted-foreground">{t.experienceSubtitle}</p>
        </motion.div>

        {/* Timeline */}
        <div className="max-w-4xl mx-auto space-y-4">
          {experienceData.map((experience, index) => (
            <motion.div
              key={experience.id}
              initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="timeline-item mb-8 last:mb-0"
            >
              <Card className="light-card hover:glow-effect transition-all duration-300">
                <CardHeader>
                  <div
                    className={`flex flex-col md:flex-row md:items-center md:justify-between gap-4 ${language === "ar" ? "md:flex-row-reverse" : ""}`}
                  >
                    <div>
                      <CardTitle className="text-xl font-bold text-primary">
                        {language === "ar" ? experience.titleKeyAr : experience.titleKey}
                      </CardTitle>
                      <Link href={experience.link} target="_blank" rel="noopener noreferrer"
                      className="hover:translate-x-3 hover:scale-110"
                      >
                          <div
                        className={`flex items-center gap-2 text-muted-foreground mt-2 " ${language === "ar" ? "flex-row-reverse" : ""}`}
                      >
                        <Building className="w-4 h-4" />
                        <span>{language === "ar" ? experience.companyAr : experience.company}</span>
                      </div>
                      </Link>
                    </div>
                    <Badge variant="secondary" className="w-fit">
                      <Calendar className="w-3 h-3 mr-1" />
                      {language === "ar" ? experience.periodAr : experience.period}
                    </Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <p
                    className={`text-muted-foreground leading-relaxed ${language === "ar" ? "text-right" : "text-left"}`}
                  >
                    {language === "ar" ? experience.descriptionKeyAr : experience.descriptionKey}
                  </p>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Skills Preview */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="mt-16 text-center"
        >
          <Card className="light-card max-w-2xl mx-auto">
            <CardContent className="p-8">
              <h3 className="text-2xl font-bold mb-4">Key Technologies</h3>
              <div className="flex flex-wrap gap-2 justify-center">
                {["React", "Next.js", "JavaScript", "TypeScript", "Node.js", "MongoDB", "Tailwind CSS", "Git"].map(
                  (tech) => (
                    <Badge key={tech} variant="outline" className="text-sm">
                      {tech}
                    </Badge>
                  ),
                )}
              </div>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
