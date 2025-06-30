"use client"

import { createContext, useContext, useEffect, useState } from "react"

const LanguageContext = createContext({
  language: "en",
  toggleLanguage: () => {},
})

export function LanguageProvider({ children }) {
  const [language, setLanguage] = useState("en")

  useEffect(() => {
    // Only run on client side
    if (typeof window !== "undefined") {
      const savedLanguage = localStorage.getItem("language") || "en"
      setLanguage(savedLanguage)
      document.documentElement.dir = savedLanguage === "ar" ? "rtl" : "ltr"
    }
  }, [])

  const toggleLanguage = () => {
    if (typeof window !== "undefined") {
      const newLanguage = language === "en" ? "ar" : "en"
      setLanguage(newLanguage)
      localStorage.setItem("language", newLanguage)
      document.documentElement.dir = newLanguage === "ar" ? "rtl" : "ltr"
    }
  }

  return <LanguageContext.Provider value={{ language, toggleLanguage }}>{children}</LanguageContext.Provider>
}

export const useLanguage = () => {
  const context = useContext(LanguageContext)
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider")
  }
  return context
}
