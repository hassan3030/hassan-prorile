"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Code, Server, PenToolIcon as Tool } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations, skillsData } from "@/lib/translations"

export default function SkillsPage() {
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Skills & Technologies</h1>
            <p className="text-xl text-muted-foreground">Technologies I work with</p>
          </div>
        </div>
      </div>
    )
  }

  const t = translations[language]

  const skillCategories = [
    {
      title: t.frontendSkills,
      icon: Code,
      skills: skillsData.frontend,
      color: "text-blue-500",
    },
    {
      title: t.backendSkills,
      icon: Server,
      skills: skillsData.backend,
      color: "text-green-500",
    },
    {
      title: t.toolsSkills,
      icon: Tool,
      skills: skillsData.tools,
      color: "text-purple-500",
    },
  ]

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
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-purple-600 bg-clip-text text-transparent">
            {t.skillsTitle}
          </h1>
          <p className="text-xl text-muted-foreground">{t.skillsSubtitle}</p>
        </motion.div>

        {/* Skills Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.2 }}
            >
              <Card className="light-card h-full hover:glow-effect transition-all duration-300">
                <CardHeader>
                  <CardTitle className={`flex items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                    <category.icon className={`w-6 h-6 ${category.color}`} />
                    {category.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, x: language === "ar" ? 50 : -50 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6, delay: categoryIndex * 0.2 + skillIndex * 0.1 }}
                      className="space-y-2"
                    >
                      <div
                        className={`flex justify-between items-center ${language === "ar" ? "flex-row-reverse" : ""}`}
                      >
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <div className="progress-bar h-2">
                        <motion.div
                          className="progress-fill h-full"
                          initial={{ width: 0 }}
                          animate={{ width: `${skill.level}%` }}
                          transition={{ duration: 1, delay: categoryIndex * 0.2 + skillIndex * 0.1 + 0.5 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Additional Info */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="mt-16"
        >
          <Card className="light-card max-w-4xl mx-auto">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Always Learning</h3>
              <p className="text-muted-foreground leading-relaxed max-w-2xl mx-auto">
                I'm constantly expanding my skill set and staying up-to-date with the latest technologies and best
                practices in web development. Currently exploring AI integration, advanced React patterns, and cloud
                technologies.
              </p>
            </CardContent>
          </Card>
        </motion.div>
      </div>
    </div>
  )
}
