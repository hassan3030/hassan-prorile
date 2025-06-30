"use client"

import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Mail, Phone, MapPin, Send, Github, Linkedin } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import { useState } from "react"

export default function ContactPage() {
  const { language } = useLanguage()
  const t = translations[language]
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Reset form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setIsSubmitting(false)

    // Here you would typically send the form data to your backend or email service
    alert("Message sent successfully!")
  }

  const handleChange = (e) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

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
            {t.contactTitle}
          </h1>
          <p className="text-xl text-muted-foreground">{t.contactSubtitle}</p>
        </motion.div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="lg:col-span-2"
          >
            <Card className="neon-border">
              <CardContent className="p-6">
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="name">{t.name}</Label>
                      <Input
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder={t.namePlaceholder}
                        required
                        className={language === "ar" ? "text-right" : "text-left"}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="email">{t.email}</Label>
                      <Input
                        id="email"
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder={t.emailPlaceholder}
                        required
                        className={language === "ar" ? "text-right" : "text-left"}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject">{t.subject}</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      placeholder={t.subjectPlaceholder}
                      required
                      className={language === "ar" ? "text-right" : "text-left"}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message">{t.message}</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder={t.messagePlaceholder}
                      rows={6}
                      required
                      className={language === "ar" ? "text-right" : "text-left"}
                    />
                  </div>

                  <Button type="submit" className="w-full glow-effect" disabled={isSubmitting}>
                    {isSubmitting ? (
                      <>
                        <div className="w-4 h-4 mr-2 border-2 border-current border-t-transparent rounded-full animate-spin" />
                        {t.sending}
                      </>
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        {t.send}
                      </>
                    )}
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="space-y-6"
          >
            <Card className="neon-border">
              <CardHeader>
                <CardTitle>{t.contactInfo}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className={`flex items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <Mail className="w-5 h-5 text-primary" />
                  <span className="text-sm">hassan@example.com</span>
                </div>
                <div className={`flex items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <Phone className="w-5 h-5 text-primary" />
                  <span className="text-sm">{t.phone}</span>
                </div>
                <div className={`flex items-center gap-3 ${language === "ar" ? "flex-row-reverse" : ""}`}>
                  <MapPin className="w-5 h-5 text-primary" />
                  <span className="text-sm">{t.location}</span>
                </div>
              </CardContent>
            </Card>

            <Card className="neon-border">
              <CardHeader>
                <CardTitle>{t.followMe}</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-4">
                  <a href="https://github.com/HassanHamdi" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:text-primary hover:border-primary bg-transparent"
                    >
                      <Github className="w-5 h-5" />
                    </Button>
                  </a>
                  <a href="https://linkedin.com/in/hassan-hamdi" target="_blank" rel="noopener noreferrer">
                    <Button
                      variant="outline"
                      size="icon"
                      className="hover:text-primary hover:border-primary bg-transparent"
                    >
                      <Linkedin className="w-5 h-5" />
                    </Button>
                  </a>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </div>
    </div>
  )
}
