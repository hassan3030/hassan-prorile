"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Checkbox } from "@/components/ui/checkbox"
import { Clock, CheckSquare, AlarmClockIcon as AlarmIcon, Play, Pause, RotateCcw, Plus, Trash2 } from "lucide-react"
import { useLanguage } from "@/components/language-provider"
import { translations } from "@/lib/translations"

// Pomodoro Timer Component
function PomodoroTimer({ t }) {
  const [time, setTime] = useState(25 * 60) // 25 minutes in seconds
  const [isActive, setIsActive] = useState(false)
  const [isBreak, setIsBreak] = useState(false)
  const [sessions, setSessions] = useState(0)

  useEffect(() => {
    let interval = null
    if (isActive && time > 0) {
      interval = setInterval(() => {
        setTime((time) => time - 1)
      }, 1000)
    } else if (time === 0) {
      // Timer finished
      if (isBreak) {
        setTime(25 * 60) // Back to work
        setIsBreak(false)
        setSessions(sessions + 1)
      } else {
        setTime(5 * 60) // Break time
        setIsBreak(true)
      }
      setIsActive(false)
      // Play notification sound (you can add audio here)
    }
    return () => clearInterval(interval)
  }, [isActive, time, isBreak, sessions])

  const toggleTimer = () => {
    setIsActive(!isActive)
  }

  const resetTimer = () => {
    setIsActive(false)
    setTime(isBreak ? 5 * 60 : 25 * 60)
  }

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60)
    const secs = seconds % 60
    return `${mins.toString().padStart(2, "0")}:${secs.toString().padStart(2, "0")}`
  }

  const progress = isBreak ? ((5 * 60 - time) / (5 * 60)) * 283 : ((25 * 60 - time) / (25 * 60)) * 283

  return (
    <Card className="light-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Clock className="w-5 h-5 text-primary" />
          {t.pomodoro}
        </CardTitle>
      </CardHeader>
      <CardContent className="text-center space-y-6">
        <div className="relative w-48 h-48 mx-auto">
          <svg className="w-full h-full transform -rotate-90" viewBox="0 0 100 100">
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-muted-foreground/20"
            />
            <circle
              cx="50"
              cy="50"
              r="45"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              className="text-primary timer-circle"
              style={{ strokeDashoffset: 283 - progress }}
            />
          </svg>
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <div className="text-3xl font-bold">{formatTime(time)}</div>
            <div className="text-sm text-muted-foreground">{isBreak ? t.pomodoroBreak : t.pomodoroWork}</div>
          </div>
        </div>

        <div className="flex gap-2 justify-center">
          <Button onClick={toggleTimer} className="btn-primary">
            {isActive ? <Pause className="w-4 h-4 mr-2" /> : <Play className="w-4 h-4 mr-2" />}
            {isActive ? t.pomodoroPause : t.pomodoroStart}
          </Button>
          <Button variant="outline" onClick={resetTimer}>
            <RotateCcw className="w-4 h-4 mr-2" />
            {t.pomodoroReset}
          </Button>
        </div>

        <div className="text-sm text-muted-foreground">
          {t.pomodoroSession}: {sessions}
        </div>
      </CardContent>
    </Card>
  )
}

// Todo List Component
function TodoList({ t }) {
  const [todos, setTodos] = useState([])
  const [newTodo, setNewTodo] = useState("")

  useEffect(() => {
    // Load todos from localStorage
    const savedTodos = localStorage.getItem("portfolio-todos")
    if (savedTodos) {
      setTodos(JSON.parse(savedTodos))
    }
  }, [])

  useEffect(() => {
    // Save todos to localStorage
    localStorage.setItem("portfolio-todos", JSON.stringify(todos))
  }, [todos])

  const addTodo = () => {
    if (newTodo.trim()) {
      setTodos([
        ...todos,
        {
          id: Date.now(),
          text: newTodo.trim(),
          completed: false,
          createdAt: new Date().toISOString(),
        },
      ])
      setNewTodo("")
    }
  }

  const toggleTodo = (id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, completed: !todo.completed } : todo)))
  }

  const deleteTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id))
  }

  return (
    <Card className="light-card">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <CheckSquare className="w-5 h-5 text-primary" />
          {t.todoList}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="flex gap-2">
          <Input
            value={newTodo}
            onChange={(e) => setNewTodo(e.target.value)}
            placeholder={t.todoPlaceholder}
            onKeyPress={(e) => e.key === "Enter" && addTodo()}
          />
          <Button onClick={addTodo} className="btn-primary">
            <Plus className="w-4 h-4" />
          </Button>
        </div>

        <div className="space-y-2 max-h-64 overflow-y-auto">
          {todos.length === 0 ? (
            <p className="text-muted-foreground text-center py-4">{t.todoEmpty}</p>
          ) : (
            todos.map((todo) => (
              <motion.div
                key={todo.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                className={`todo-item flex items-center gap-3 p-3 rounded-lg border ${
                  todo.completed ? "completed" : ""
                }`}
              >
                <Checkbox checked={todo.completed} onCheckedChange={() => toggleTodo(todo.id)} />
                <span className="flex-1">{todo.text}</span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => deleteTodo(todo.id)}
                  className="text-destructive hover:text-destructive"
                >
                  <Trash2 className="w-4 h-4" />
                </Button>
              </motion.div>
            ))
          )}
        </div>
      </CardContent>
    </Card>
  )
}

// Alarm Clock Component
function AlarmClockComponent({ t }) {
  const [alarmTime, setAlarmTime] = useState("")
  const [isAlarmSet, setIsAlarmSet] = useState(false)
  const [isRinging, setIsRinging] = useState(false)
  const [currentTime, setCurrentTime] = useState(new Date())

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date())
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  useEffect(() => {
    if (isAlarmSet && alarmTime) {
      const now = new Date()
      const [hours, minutes] = alarmTime.split(":")
      const alarmDate = new Date()
      alarmDate.setHours(Number.parseInt(hours), Number.parseInt(minutes), 0, 0)

      if (alarmDate <= now) {
        alarmDate.setDate(alarmDate.getDate() + 1)
      }

      const timeUntilAlarm = alarmDate.getTime() - now.getTime()

      const timeout = setTimeout(() => {
        setIsRinging(true)
        setIsAlarmSet(false)
      }, timeUntilAlarm)

      return () => clearTimeout(timeout)
    }
  }, [isAlarmSet, alarmTime])

  const setAlarm = () => {
    if (alarmTime) {
      setIsAlarmSet(true)
      setIsRinging(false)
    }
  }

  const cancelAlarm = () => {
    setIsAlarmSet(false)
    setIsRinging(false)
  }

  const stopAlarm = () => {
    setIsRinging(false)
  }

  return (
    <Card className={`light-card ${isRinging ? "alarm-ring" : ""}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlarmIcon className="w-5 h-5 text-primary" />
          {t.alarm}
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center">
          <div className="text-3xl font-bold mb-2">{currentTime.toLocaleTimeString()}</div>
          <div className="text-sm text-muted-foreground">{currentTime.toLocaleDateString()}</div>
        </div>

        {isRinging ? (
          <div className="text-center space-y-4">
            <div className="text-lg font-semibold text-destructive">{t.alarmRinging}</div>
            <Button onClick={stopAlarm} variant="destructive">
              {t.alarmStop}
            </Button>
          </div>
        ) : (
          <div className="space-y-4">
            <div>
              <label className="block text-sm font-medium mb-2">{t.alarmTime}</label>
              <Input type="time" value={alarmTime} onChange={(e) => setAlarmTime(e.target.value)} />
            </div>

            {isAlarmSet ? (
              <div className="text-center space-y-2">
                <div className="text-sm text-muted-foreground">
                  {t.alarmActive} {alarmTime}
                </div>
                <Button onClick={cancelAlarm} variant="outline">
                  {t.alarmCancel}
                </Button>
              </div>
            ) : (
              <Button onClick={setAlarm} className="w-full btn-primary" disabled={!alarmTime}>
                {t.alarmSet}
              </Button>
            )}
          </div>
        )}
      </CardContent>
    </Card>
  )
}

export default function ToolsPage() {
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
            <h1 className="text-4xl lg:text-6xl font-bold mb-4">Productivity Tools</h1>
            <p className="text-xl text-muted-foreground">Built-in tools to boost your productivity</p>
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
          <h1 className="text-4xl lg:text-6xl font-bold mb-4 bg-gradient-to-r from-primary to-green-600 bg-clip-text text-transparent">
            {t.toolsTitle}
          </h1>
          <p className="text-xl text-muted-foreground">{t.toolsSubtitle}</p>
        </motion.div>

        {/* Tools Grid */}
        <div className="grid lg:grid-cols-3 gap-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <PomodoroTimer t={t} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <TodoList t={t} />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <AlarmClockComponent t={t} />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
