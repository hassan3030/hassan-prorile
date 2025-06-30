"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, GraduationCap, MapPin, Calendar } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import Image from "next/image"

export default function AboutPage() {
  const { language } = useLanguage()
  const t = translations[language]

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
            {t.aboutTitle}
          </h1>
          <p className="text-xl text-muted-foreground">{t.aboutSubtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Profile Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-1"
          >
            <Card className="neon-border">
              <CardContent className="p-6 text-center">
                <div className="w-48 h-48 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-orange-500/20 p-2 glow-effect">
                  <div className="w-full h-full rounded-full overflow-hidden bg-muted">
                    <Image
                      src="/placeholder.svg?height=192&width=192"
                      alt="Hassan Hamdi"
                      width={192}
                      height={192}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
                <h2 className="text-2xl font-bold mb-2">{t.name}</h2>
                <p className="text-muted-foreground mb-4">{t.title}</p>
                <div className="flex items-center justify-center gap-2 text-sm text-muted-foreground mb-6">
                  <MapPin className="w-4 h-4" />
                  <span>{t.location}</span>
                </div>
                <Button className="w-full glow-effect">
                  <Download className="w-4 h-4 mr-2" />
                  {t.downloadCV}
                </Button>
              </CardContent>
            </Card>
          </motion.div>

          {/* Content Section */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="lg:col-span-2 space-y-8"
          >
            {/* Introduction */}
            <Card className="neon-border">
              <CardContent className="p-6">
                <p className={`text-lg leading-relaxed ${language === "ar" ? "text-right" : "text-left"}`}>
                  {t.aboutIntro}
                </p>
              </CardContent>
            </Card>

            {/* Education */}
            <Card className="neon-border">
              <CardHeader>
                <CardTitle className={`flex items-center gap-2 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <GraduationCap className="w-5 h-5 text-primary" />
                  {t.education}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className={`space-y-2 ${language === "ar" ? "text-right" : "text-left"}`}>
                  <h3 className="text-lg font-semibold">{t.degree}</h3>
                  <p className="text-muted-foreground">{t.university}</p>
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    <Calendar className="w-4 h-4" />
                    <span>{t.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Interests */}
            <Card className="neon-border">
              <CardHeader>
                <CardTitle>{t.interests}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex flex-wrap gap-2">
                  {t.interestsList.map((interest, index) => (
                    <motion.span
                      key={interest}
                      initial={{ opacity: 0, scale: 0.8 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.6 + index * 0.1 }}
                      className="px-3 py-1 bg-primary/10 text-primary rounded-full text-sm border border-primary/20"
                    >
                      {interest}
                    </motion.span>
                  ))}
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
