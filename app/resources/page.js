"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ExternalLink, Code, Database, Palette, BookOpen, Tool, Brain } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"
import Link from "next/link"
import Image from "next/image"

// Resource Card Component

function ResourceCard({ title, res }) {
  const { language } = useLanguage();

  return (
    <Card className="w-full border-none shadow-none bg-background">
      <CardHeader>
        <CardTitle className="text-2xl font-bold mb-4">{title}</CardTitle>
      </CardHeader>

      <CardContent className="space-y-6 w-full">
        {res.map((resource, index) => (
          <Link
            key={index}
            href={resource.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block"
          >
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
            >
              <Card className="w-full flex flex-col md:flex-row h-auto overflow-hidden border hover:shadow-lg transition-all duration-300">
                <div className="md:w-1/4 w-full h-48 md:h-auto flex-shrink-0 bg-muted">
                  <ImageWithFallback
                    src={resource.image}
                    alt={resource.name}
                    fallback="/alternative.jpg"
                    className="w-full h-full object-cover"
                    width={200}
                    height={200}
                  />
                </div>
                <div className="md:w-3/4 w-full p-4 flex flex-col justify-center">
                  <CardTitle
                    className={`text-lg font-semibold mb-2 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    {resource.name}
                  </CardTitle>
                  <CardContent
                    className={`p-0 ${
                      language === "ar" ? "text-right" : "text-left"
                    }`}
                  >
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {resource.description}
                    </p>
                  </CardContent>
                </div>
              </Card>
            </motion.div>
          </Link>
        ))}
      </CardContent>
    </Card>
  );
}

// ⛑️ Helper: Handles image fallback
function ImageWithFallback({ src, fallback, ...props }) {
  const [imgSrc, setImgSrc] = useState(src || fallback);

  return (
    <Image
      {...props}
      src={imgSrc}
      onError={() => setImgSrc(fallback)}
      alt={props.alt}
    />
  );
}


export default function ResourcesPage() {
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Developer Resources</h1>
            <p className="text-xl text-muted-foreground">Helpful sites for developers</p>
          </div>
        </div>
      </div>
    )
  }

  const t = translations[language]
  
const resources = {
  frontendResources: [
    {
      name: "MDN Web Docs",
      url: "https://developer.mozilla.org/",
      description: "Comprehensive documentation for web technologies",
      image: "https://developer.mozilla.org/static/img/favicon144.png"
    },
    {
      name: "freeCodeCamp",
      url: "https://www.freecodecamp.org/",
      description: "Free courses and projects for learning frontend development",
      image: "https://www.freecodecamp.org/news/content/images/2022/03/fcc_primary_icon_black.png"
    },
    {
      name: "CSS Tricks",
      url: "https://css-tricks.com/",
      description: "Tips, tricks, and guides for CSS and frontend development",
      image: "https://css-tricks.com/favicon.ico"
    },
    {
      name: "Frontend Mentor",
      url: "https://www.frontendmentor.io/",
      description: "Real-world frontend challenges to improve your skills",
      image: "https://frontendmentor.io/static/favicon-32x32.png"
    },
    {
      name: "W3Schools",
      url: "https://www.w3schools.com/",
      description: "Beginner-friendly tutorials on HTML, CSS, and JS",
      image: "https://www.w3schools.com/favicon.ico"
    },
    {
      name: "CodePen",
      url: "https://codepen.io/",
      description: "Online code editor for frontend experimentation",
      image: "https://blog.codepen.io/wp-content/uploads/2012/06/Button-Fill-Black-Large.png"
    },
    {
      name: "HTML Reference",
      url: "https://htmlreference.io/",
      description: "Semantic, visual reference for HTML tags and usage",
      image: "https://htmlreference.io/favicon.ico"
    },
    {
      name: "JavaScript.info",
      url: "https://javascript.info/",
      description: "Deep JavaScript knowledge with tutorials and examples",
      image: "https://javascript.info/img/favicon/favicon.ico"
    },
    {
      name: "React Docs",
      url: "https://reactjs.org/",
      description: "Official documentation for React",
      image: "https://reactjs.org/favicon.ico"
    },
    {
      name: "Tailwind CSS Docs",
      url: "https://tailwindcss.com/docs",
      description: "Utility-first CSS framework documentation",
      image: "https://tailwindcss.com/favicon-32x32.png"
    },
    {
      name: "ShadCN/UI",
      url: "https://ui.shadcn.dev/",
      description: "Beautifully designed React components using Tailwind",
      image: "https://ui.shadcn.dev/favicon.ico"
    },
    {
      name: "Frontend Roadmap",
      url: "https://roadmap.sh/frontend",
      description: "Interactive roadmap for becoming a frontend developer",
      image: "https://roadmap.sh/favicon.ico"
    },
    {
      name: "Smashing Magazine",
      url: "https://www.smashingmagazine.com/",
      description: "In-depth frontend articles, tutorials, and design patterns",
      image: "https://www.smashingmagazine.com/favicon.ico"
    },
    {
      name: "Frontend Masters",
      url: "https://frontendmasters.com/",
      description: "Paid platform for expert-led frontend development courses",
      image: "https://frontendmasters.com/favicon.ico"
    },
    {
      name: "JavaScript30",
      url: "https://javascript30.com/",
      description: "30-day vanilla JavaScript coding challenge by Wes Bos",
      image: "https://javascript30.com/favicon.ico"
    },
    {
      name: "Codrops",
      url: "https://tympanus.net/codrops/",
      description: "Creative frontend UI/UX tutorials and inspiration",
      image: "https://tympanus.net/codrops/favicon.ico"
    },
    {
      name: "Can I Use",
      url: "https://caniuse.com/",
      description: "Browser compatibility tables for web features",
      image: "https://caniuse.com/favicon.ico"
    },
    {
      name: "Web.dev by Google",
      url: "https://web.dev/",
      description: "Best practices and tutorials for building modern web apps",
      image: "https://web.dev/favicon.ico"
    }
  ],

  backendResources: [
    {
      name: "Node.js Docs",
      url: "https://nodejs.org/en/docs/",
      description: "Official Node.js documentation for backend development",
      image: "https://nodejs.org/static/images/favicons/favicon.ico"
    },
    {
      name: "Express.js Docs",
      url: "https://expressjs.com/",
      description: "Minimal and flexible Node.js web application framework",
      image: "https://expressjs.com/images/favicon.png"
    },
    {
      name: "The Odin Project",
      url: "https://www.theodinproject.com/paths/full-stack-javascript",
      description: "Full-stack curriculum covering backend with Node.js",
      image: "https://www.theodinproject.com/favicon.ico"
    },
    {
      name: "DigitalOcean Tutorials",
      url: "https://www.digitalocean.com/community/tutorials",
      description: "In-depth backend tutorials on servers, databases, and APIs",
      image: "https://www.digitalocean.com/favicon.ico"
    },
    {
      name: "PostgreSQL Docs",
      url: "https://www.postgresql.org/docs/",
      description: "Comprehensive guide to PostgreSQL database",
      image: "https://www.postgresql.org/media/img/about/press/elephant.png"
    },
    {
      name: "MongoDB University",
      url: "https://university.mongodb.com/",
      description: "Courses and tutorials on MongoDB NoSQL database",
      image: "https://webassets.mongodb.com/_com_assets/cms/mongodb-logo-rgb-j6w271g1xn.jpg"
    },
    {
      name: "Django Docs",
      url: "https://docs.djangoproject.com/",
      description: "Official documentation for Django Python framework",
      image: "https://static.djangoproject.com/img/logos/django-logo-negative.png"
    },
    {
      name: "Laravel Docs",
      url: "https://laravel.com/docs",
      description: "PHP-based web framework with elegant syntax",
      image: "https://laravel.com/img/favicon/favicon.ico"
    },
    {
      name: "Flask Docs",
      url: "https://flask.palletsprojects.com/",
      description: "Micro web framework for Python",
      image: "https://flask.palletsprojects.com/en/2.3.x/_images/flask-logo.png"
    },
    {
      name: "Redis Docs",
      url: "https://redis.io/docs/",
      description: "In-memory data structure store, often used in backend caching",
      image: "https://redis.io/images/favicon.ico"
    },
    {
      name: "GraphQL Docs",
      url: "https://graphql.org/learn/",
      description: "Query language for APIs, alternative to REST",
      image: "https://graphql.org/img/favicon.png"
    },
    {
      name: "Prisma ORM",
      url: "https://www.prisma.io/docs",
      description: "Modern Node.js ORM for SQL databases",
      image: "https://www.prisma.io/images/favicon/favicon.ico"
    },
    {
      name: "Node Best Practices",
      url: "https://github.com/goldbergyoni/nodebestpractices",
      description: "Curated list of best practices for Node.js",
      image: "https://avatars.githubusercontent.com/u/1154413?s=200&v=4"
    },
    {
      name: "NestJS",
      url: "https://docs.nestjs.com/",
      description: "Progressive Node.js framework for building efficient, scalable apps",
      image: "https://nestjs.com/img/logo-small.svg"
    },
    {
      name: "Strapi",
      url: "https://strapi.io/",
      description: "Headless CMS for building APIs quickly",
      image: "https://strapi.io/assets/favicon.png"
    },
    {
      name: "Directus Docs",
      url: "https://docs.directus.io/",
      description: "Modern headless CMS for APIs and backend admin",
      image: "https://docs.directus.io/assets/img/directus-icon.svg"
    },
    {
      name: "Supabase",
      url: "https://supabase.com/docs",
      description: "Open-source Firebase alternative with database and auth",
      image: "https://supabase.com/favicon.ico"
    },
    {
      name: "Hasura",
      url: "https://hasura.io/docs/latest/",
      description: "Instant GraphQL APIs on PostgreSQL",
      image: "https://hasura.io/favicon.ico"
    }
  ],

  designResources: [
    {
      name: "Figma",
      url: "https://www.figma.com/learn/",
      description: "Collaborative design tool with learning resources",
      image: "https://static.figma.com/app/icon/1/favicon.png"
    },
    {
      name: "Dribbble",
      url: "https://dribbble.com/",
      description: "Community for showcasing and exploring design",
      image: "https://cdn.dribbble.com/assets/favicon.ico"
    },
    {
      name: "Behance",
      url: "https://www.behance.net/",
      description: "Design portfolios and inspiration",
      image: "https://a5.behance.net/favicons/apple-touch-icon-57x57.png"
    },
    {
      name: "Canva Design School",
      url: "https://www.canva.com/learn/",
      description: "Design basics and tutorials for beginners",
      image: "https://static.canva.com/web/images/favicons/favicon-32x32.png"
    },
    {
      name: "UX Collective",
      url: "https://uxdesign.cc/",
      description: "Articles and tips on UX and UI design",
      image: "https://uxdesign.cc/favicon.ico"
    },
    {
      name: "Design Resources",
      url: "https://www.designresourc.es/",
      description: "Free design resources like icons, mockups, fonts",
      image: "https://www.designresourc.es/favicon.ico"
    },
    {
      name: "Uplabs",
      url: "https://www.uplabs.com/",
      description: "Free and premium UI kits, templates, and design assets",
      image: "https://www.uplabs.com/favicon.ico"
    },
    {
      name: "Humaaans",
      url: "https://www.humaaans.com/",
      description: "Mix-and-match illustrations of people",
      image: "https://www.humaaans.com/favicon.ico"
    },
    {
      name: "Google Fonts",
      url: "https://fonts.google.com/",
      description: "Free fonts library from Google",
      image: "https://fonts.google.com/favicon.ico"
    },
    {
      name: "Font Awesome",
      url: "https://fontawesome.com/",
      description: "Icon toolkit and library for web design",
      image: "https://fontawesome.com/favicon.ico"
    },
    {
      name: "Open Peeps",
      url: "https://www.openpeeps.com/",
      description: "Hand-drawn vector illustration library",
      image: "https://www.openpeeps.com/favicon.ico"
    },
    {
      name: "Coolors",
      url: "https://coolors.co/",
      description: "Color palette generator and inspiration",
      image: "https://coolors.co/favicon.ico"
    },
    {
      name: "LottieFiles",
      url: "https://lottiefiles.com/",
      description: "Free animations and tools for lightweight web animations",
      image: "https://lottiefiles.com/favicon.ico"
    },
    {
      name: "Heroicons",
      url: "https://heroicons.com/",
      description: "Free, beautiful hand-crafted SVG icons by Tailwind creators",
      image: "https://heroicons.com/favicon.ico"
    },
    {
      name: "Blush",
      url: "https://blush.design/",
      description: "Customizable illustrations created by artists",
      image: "https://blush.design/favicon.ico"
    },
    {
      name: "FigJam",
      url: "https://www.figma.com/figjam/",
      description: "Online whiteboard tool for design collaboration",
      image: "https://static.figma.com/app/icon/1/favicon.png"
    },
    {
      name: "Undraw",
      url: "https://undraw.co/illustrations",
      description: "Open-source illustrations for any idea you imagine",
      image: "https://undraw.co/favicon.ico"
    },
    {
      name: "Get Waves",
      url: "https://getwaves.io/",
      description: "SVG wave generator for web design",
      image: "https://getwaves.io/favicon.ico"
    }
  ],

  aiResources: [
    {
      name: "DeepLearning.AI",
      url: "https://www.deeplearning.ai/",
      description: "Courses and resources by Andrew Ng on AI and ML",
      image: "https://www.deeplearning.ai/favicon.ico"
    },
    {
      name: "Google AI",
      url: "https://ai.google/",
      description: "Research and resources from Google AI",
      image: "https://ai.google/favicon.ico"
    },
    {
      name: "OpenAI",
      url: "https://openai.com/research",
      description: "Leading AI research and tools like ChatGPT and DALL·E",
      image: "https://openai.com/favicon.ico"
    },
    {
      name: "Hugging Face",
      url: "https://huggingface.co/",
      description: "Transformers and ML tools for developers",
      image: "https://huggingface.co/favicon.ico"
    },
    {
      name: "Fast.ai",
      url: "https://www.fast.ai/",
      description: "Free practical deep learning courses",
      image: "https://www.fast.ai/favicon.ico"
    },
    {
      name: "Papers with Code",
      url: "https://paperswithcode.com/",
      description: "ML papers linked with code implementations",
      image: "https://paperswithcode.com/favicon.ico"
    },
    {
      name: "Kaggle",
      url: "https://www.kaggle.com/",
      description: "Datasets, competitions, and notebooks for data science and ML",
      image: "https://kaggle.com/static/images/favicon.ico"
    },
    {
      name: "MIT OpenCourseWare - AI",
      url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2020/",
      description: "Free AI courses by MIT",
      image: "https://ocw.mit.edu/favicon.ico"
    },
    {
      name: "Machine Learning Mastery",
      url: "https://machinelearningmastery.com/",
      description: "Practical machine learning guides by Jason Brownlee",
      image: "https://machinelearningmastery.com/favicon.ico"
    },
    {
      name: "DataCamp",
      url: "https://www.datacamp.com/",
      description: "Interactive learning platform for data science and AI",
      image: "https://www.datacamp.com/favicon.ico"
    },
    {
      name: "AI Dungeon",
      url: "https://play.aidungeon.io/",
      description: "Creative AI-based text adventure experience",
      image: "https://play.aidungeon.io/favicon.ico"
    },
    {
      name: "Stability AI (Stable Diffusion)",
      url: "https://stability.ai/",
      description: "Company behind Stable Diffusion image generation model",
      image: "https://stability.ai/favicon.ico"
    },
    {
      name: "EleutherAI",
      url: "https://www.eleuther.ai/",
      description: "Open research group focused on AI and large language models",
      image: "https://www.eleuther.ai/favicon.ico"
    },
    {
      name: "ML Cheat Sheet (Google)",
      url: "https://developers.google.com/machine-learning/crash-course/ml-intro",
      description: "Google’s crash course on machine learning",
      image: "https://developers.google.com/favicon.ico"
    },
    {
      name: "Coursera - AI for Everyone",
      url: "https://www.coursera.org/learn/ai-for-everyone",
      description: "Non-technical course explaining AI’s impact on industries",
      image: "https://coursera.org/favicon.ico"
    },
    {
      name: "You.com AI Tools",
      url: "https://you.com/",
      description: "Search engine with integrated AI tools and writing assistants",
      image: "https://you.com/favicon.ico"
    },
    {
      name: "AI Experiments by Google",
      url: "https://experiments.withgoogle.com/collection/ai",
      description: "Fun, interactive AI projects you can explore",
      image: "https://experiments.withgoogle.com/favicon.ico"
    },
    {
      name: "Rasa",
      url: "https://rasa.com/",
      description: "Open-source conversational AI (chatbot framework)",
      image: "https://rasa.com/favicon.ico"
    }
  ],

  youtubeChannels: [
    {
      name: "The Net Ninja",
      url: "https://www.youtube.com/c/TheNetNinja",
      description: "High-quality frontend and backend tutorials",
      image: "https://yt3.googleusercontent.com/ytc/AGIKgqNf5xfHRqG7VxaNGQcbMMhysjb39OdQTx6h0Mok=s88-c-k-c0x00ffffff-no-rj"
    },
    {
      name: "Traversy Media",
      url: "https://www.youtube.com/c/TraversyMedia",
      description: "Web development tutorials from beginner to advanced",
      image: "https://yt3.googleusercontent.com/ytc/AGIKgqPv86nH6gPtZsIs8T3TZL"
    }] , 
  learningResources: [
    {
      name: "Coursera",
      url: "https://www.coursera.org/",
      description: "Online courses from top universities and companies",
      image: "https://www.coursera.org/favicon.ico"
    },
    {
      name: "Udemy",
      url: "https://www.udemy.com/",
      description: "Massive library of video courses on software, design, business",
      image: "https://www.udemy.com/staticx/udemy/images/v7/favicon-96x96.png"
    },
    {
      name: "edX",
      url: "https://www.edx.org/",
      description: "University-level courses in a wide range of disciplines",
      image: "https://www.edx.org/favicon.ico"
    },
    {
      name: "Khan Academy",
      url: "https://www.khanacademy.org/",
      description: "Free world-class education in math, computer science, and more",
      image: "https://www.khanacademy.org/favicon.ico"
    },
    {
      name: "Pluralsight",
      url: "https://www.pluralsight.com/",
      description: "Tech learning platform with skill assessments and paths",
      image: "https://www.pluralsight.com/favicon.ico"
    },
    {
      name: "LinkedIn Learning",
      url: "https://www.linkedin.com/learning/",
      description: "Professional courses taught by industry experts",
      image: "https://static.licdn.com/sc/h/68pzqatvogbaj8xbt0s62vent"
    }
  ],

  toolsResources: [
    {
      name: "Visual Studio Code",
      url: "https://code.visualstudio.com/",
      description: "Lightweight but powerful code editor from Microsoft",
      image: "https://code.visualstudio.com/favicon.ico"
    },
    {
      name: "GitHub",
      url: "https://github.com/",
      description: "Platform for version control, collaboration & CI/CD",
      image: "https://github.githubassets.com/favicons/favicon.svg"
    },
    {
      name: "Postman",
      url: "https://www.postman.com/",
      description: "API development environment for building and testing APIs",
      image: "https://www.postman.com/favicon.ico"
    },
    {
      name: "Figma",
      url: "https://www.figma.com/",
      description: "Design/prototyping tool with real-time collaboration",
      image: "https://static.figma.com/app/icon/1/favicon.png"
    },
    {
      name: "Docker",
      url: "https://www.docker.com/",
      description: "Platform for containerizing applications",
      image: "https://www.docker.com/favicon.ico"
    },
    {
      name: "VS Code Live Share",
      url: "https://visualstudio.microsoft.com/services/live-share/",
      description: "Collaborative real-time code editing",
      image: "https://visualstudio.microsoft.com/favicon.ico"
    },
    {
      name: "Webpack",
      url: "https://webpack.js.org/",
      description: "Module bundler for JavaScript applications",
      image: "https://webpack.js.org/favicon.ico"
    },
    {
      name: "Babel",
      url: "https://babeljs.io/",
      description: "JavaScript compiler (ES6+ to older browser support)",
      image: "https://babeljs.io/img/favicon.ico"
    }
  ]}

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
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            {t.resourcesTitle || "Developer Resources"}
          </h1>
          <p className="text-xl text-muted-foreground">{t.resourcesSubtitle || "Helpful sites for developers"}</p>
        </motion.div>

        {/* Resources Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <ResourceCard 
              title={t.frontendResources || "Frontend Development"} 
              res={resources.frontendResources} 
              icon={Code}
            />
          </motion.div>

           <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <ResourceCard 
              title={t.backendResources || "Backend Development"} 
              res={resources.designResources} 
              icon={Database}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <ResourceCard 
              title={t.designResources || "Design Resources"} 
              res={resources.designResources} 
              icon={Palette}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <ResourceCard 
              title={t.learningResources || "Learning Platforms"} 
              res={resources.learningResources} 
              icon={BookOpen}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <ResourceCard 
              title={t.toolsResources || "Development Tools"} 
              res={resources.toolsResources} 
              icon={Tool}
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ResourceCard 
              title={t.aiResources || "AI Resources"} 
              res={resources.aiResources} 
              icon={Brain}
            />
          </motion.div> 
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <ResourceCard 
              title={t.youtubeChannels || "AI Resources"} 
              res={resources.youtubeChannels} 
              icon={Brain}
            />
          </motion.div> 
        </div>
      </div>
    </div>
  )
}