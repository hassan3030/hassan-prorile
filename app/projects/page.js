"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink, Github, Filter } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations, projectsData } from "@/lib/translations"
import { useState } from "react"
import Image from "next/image"

export default function ProjectsPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [selectedTech, setSelectedTech] = useState("All")

  // Combine translation data with project data using translation keys
  const projects = projectsData.map((project) => ({
    ...project,
    title: t[project.titleKey] || "Project Title",
    description: t[project.descriptionKey] || "Project Description",
  }))

  const allTechnologies = [...new Set(projects.flatMap((project) => project.technologies))]
  const filteredProjects =
    selectedTech === "All" ? projects : projects.filter((project) => project.technologies.includes(selectedTech))

  return (
    <div className="min-h-screen pt-20 pb-10">
      <div className="container mx-auto px-4">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className={`text-center mb-12 ${language === "ar" ? "text-right" : "text-left"}`}
        >
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-orange-500 bg-clip-text text-transparent">
            {t.projectsTitle}
          </h1>
          <p className="text-xl text-muted-foreground">{t.projectsSubtitle}</p>
        </motion.div>

        {/* Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mb-8"
        >
          <div className={`flex items-center gap-4 mb-4 ${language === "ar" ? "flex-row-reverse" : ""}`}>
            <Filter className="w-5 h-5 text-primary" />
            <span className="text-sm font-medium">{t.filterBy}:</span>
          </div>
          <div className="flex flex-wrap gap-2">
            <Button
              variant={selectedTech === "All" ? "default" : "outline"}
              size="sm"
              onClick={() => setSelectedTech("All")}
              className={selectedTech === "All" ? "glow-effect" : ""}
            >
              {t.allProjects}
            </Button>
            {allTechnologies.map((tech) => (
              <Button
                key={tech}
                variant={selectedTech === tech ? "default" : "outline"}
                size="sm"
                onClick={() => setSelectedTech(tech)}
                className={selectedTech === tech ? "glow-effect" : ""}
              >
                {tech}
              </Button>
            ))}
          </div>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <Card className="h-full neon-border hover:glow-effect transition-all duration-300">
                <div className="relative overflow-hidden rounded-t-lg">
                  <Image
                    src={project.image || "/placeholder.svg"}
                    alt={project.title}
                    width={300}
                    height={200}
                    className="w-full h-48 object-cover transition-transform duration-300 hover:scale-105"
                  />
                </div>
                <CardHeader>
                  <CardTitle className={language === "ar" ? "text-right" : "text-left"}>{project.title}</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className={`text-sm text-muted-foreground ${language === "ar" ? "text-right" : "text-left"}`}>
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1">
                    {project.technologies.map((tech) => (
                      <Badge key={tech} variant="secondary" className="text-xs">
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex gap-2 pt-2">
                    <Button size="sm" className="flex-1" asChild>
                      <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                        <ExternalLink className="w-4 h-4 mr-2" />
                        {t.liveDemo}
                      </a>
                    </Button>
                    <Button size="sm" variant="outline" asChild>
                      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                        <Github className="w-4 h-4" />
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  )
}
