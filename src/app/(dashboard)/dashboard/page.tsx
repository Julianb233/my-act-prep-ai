"use client";

import { motion } from "framer-motion";
import { Header } from "@/components/dashboard/header";
import {
  Target,
  FileText,
  TrendingUp,
  Clock,
  ArrowRight,
  BookOpen,
  Calculator,
  FlaskConical,
  PenTool,
  GraduationCap,
  Zap,
} from "lucide-react";

const fadeInUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const sectionScores = [
  { section: "English", score: 29, maxScore: 36, color: "bg-blue-500", icon: BookOpen },
  { section: "Math", score: 27, maxScore: 36, color: "bg-green-500", icon: Calculator },
  { section: "Reading", score: 28, maxScore: 36, color: "bg-purple-500", icon: PenTool },
  { section: "Science", score: 28, maxScore: 36, color: "bg-orange-500", icon: FlaskConical },
];

const quickActions = [
  { label: "Start Section Practice", icon: Target, href: "/dashboard/practice", gradient: true },
  { label: "Take Full Test", icon: FileText, href: "/dashboard/tests" },
  { label: "Time Management Tips", icon: Clock, href: "/dashboard/timing" },
];

const todaysFocus = [
  { section: "Science", topic: "Data Representation", duration: "25 min", icon: FlaskConical, color: "text-orange-500" },
  { section: "Math", topic: "Trigonometry Review", duration: "20 min", icon: Calculator, color: "text-green-500" },
  { section: "Reading", topic: "Passage Analysis", duration: "20 min", icon: BookOpen, color: "text-purple-500" },
];

const collegeMatches = [
  { name: "State University", minScore: 24, matchLevel: "Safety" },
  { name: "Tech Institute", minScore: 28, matchLevel: "Target" },
  { name: "Elite College", minScore: 32, matchLevel: "Reach" },
];

export default function DashboardPage() {
  const compositeScore = Math.round(sectionScores.reduce((sum, s) => sum + s.score, 0) / 4);

  return (
    <div className="min-h-screen">
      <Header
        title="Welcome back!"
        subtitle="Let's conquer the ACT together"
        daysUntilTest={34}
      />

      <div className="p-6 space-y-6">
        {/* Composite Score Overview */}
        <motion.section {...fadeInUp}>
          <div className="rounded-2xl border border-border bg-gradient-to-br from-surface via-surface to-primary/5 p-6 backdrop-blur-sm relative overflow-hidden">
            {/* Glassmorphism decoration */}
            <div className="absolute top-0 right-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

            <div className="relative z-10">
              <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6">
                <div>
                  <p className="text-sm text-muted mb-1">Composite Score</p>
                  <div className="flex items-baseline gap-3">
                    <motion.span
                      className="text-6xl font-bold gradient-text"
                      initial={{ opacity: 0, scale: 0.5 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.5, type: "spring" }}
                    >
                      {compositeScore}
                    </motion.span>
                    <span className="flex items-center gap-1 text-secondary font-medium">
                      <TrendingUp className="h-4 w-4" />
                      +4 from diagnostic
                    </span>
                  </div>
                  <p className="text-sm text-muted mt-2">Target: 32 composite</p>
                </div>

                {/* Section Breakdown */}
                <div className="grid grid-cols-2 gap-3 lg:gap-4">
                  {sectionScores.map((section, index) => (
                    <motion.div
                      key={section.section}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.2 + index * 0.1 }}
                      className="rounded-xl bg-background/50 backdrop-blur-sm border border-border p-4"
                    >
                      <div className="flex items-center gap-2 mb-2">
                        <section.icon className={`h-4 w-4 ${section.color.replace('bg-', 'text-')}`} />
                        <span className="text-xs text-muted">{section.section}</span>
                      </div>
                      <p className="text-2xl font-bold text-foreground">{section.score}</p>
                      <div className="mt-2 h-1.5 rounded-full bg-border overflow-hidden">
                        <motion.div
                          className={`h-full ${section.color}`}
                          initial={{ width: 0 }}
                          animate={{ width: `${(section.score / section.maxScore) * 100}%` }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        {/* Quick Actions */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">Quick Actions</h2>
          <div className="grid gap-4 md:grid-cols-3">
            {quickActions.map((action, index) => (
              <motion.a
                key={action.label}
                href={action.href}
                whileHover={{ scale: 1.02, y: -2 }}
                whileTap={{ scale: 0.98 }}
                className={`flex items-center justify-between rounded-xl p-5 transition-all duration-300 ${
                  action.gradient
                    ? "gradient-bg text-white shadow-lg shadow-primary/25"
                    : "border border-border bg-surface/50 backdrop-blur-sm hover:border-primary/50 hover:shadow-lg hover:shadow-primary/10"
                }`}
              >
                <div className="flex items-center gap-3">
                  <action.icon className={`h-5 w-5 ${action.gradient ? "text-white" : "text-primary"}`} />
                  <span className={`font-medium ${action.gradient ? "text-white" : "text-foreground"}`}>
                    {action.label}
                  </span>
                </div>
                <ArrowRight className={`h-5 w-5 ${action.gradient ? "text-white/80" : "text-muted"}`} />
              </motion.a>
            ))}
          </div>
        </motion.section>

        <div className="grid gap-6 lg:grid-cols-2">
          {/* Today's Focus */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3 }}
          >
            <h2 className="text-lg font-semibold text-foreground mb-4">Today&apos;s Focus</h2>
            <div className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden">
              {todaysFocus.map((item, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${
                    index !== todaysFocus.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-background/50">
                    <item.icon className={`h-5 w-5 ${item.color}`} />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{item.topic}</p>
                    <p className="text-xs text-muted flex items-center gap-2">
                      <span>{item.section}</span>
                      <span>•</span>
                      <Clock className="h-3 w-3" />
                      <span>{item.duration}</span>
                    </p>
                  </div>
                  <motion.button
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="flex items-center gap-1 rounded-lg bg-primary/10 px-3 py-1.5 text-xs font-medium text-primary hover:bg-primary/20 transition-colors"
                  >
                    <Zap className="h-3 w-3" />
                    Start
                  </motion.button>
                </div>
              ))}
            </div>
          </motion.section>

          {/* College Matches Preview */}
          <motion.section
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
          >
            <div className="flex items-center justify-between mb-4">
              <h2 className="text-lg font-semibold text-foreground">College Matches</h2>
              <span className="text-xs text-muted bg-muted/20 px-2 py-1 rounded-full">Coming Soon</span>
            </div>
            <div className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm overflow-hidden opacity-75">
              {collegeMatches.map((college, index) => (
                <div
                  key={index}
                  className={`flex items-center gap-4 p-4 ${
                    index !== collegeMatches.length - 1 ? "border-b border-border" : ""
                  }`}
                >
                  <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-foreground">{college.name}</p>
                    <p className="text-xs text-muted">Min Score: {college.minScore}</p>
                  </div>
                  <span className={`text-xs font-medium px-2 py-1 rounded-full ${
                    college.matchLevel === "Safety" ? "bg-green-500/20 text-green-500" :
                    college.matchLevel === "Target" ? "bg-blue-500/20 text-blue-500" :
                    "bg-orange-500/20 text-orange-500"
                  }`}>
                    {college.matchLevel}
                  </span>
                </div>
              ))}
            </div>
          </motion.section>
        </div>

        {/* Section Timing Overview */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <h2 className="text-lg font-semibold text-foreground mb-4">ACT Section Timing</h2>
          <div className="grid gap-4 md:grid-cols-4">
            {[
              { section: "English", questions: 75, time: 45, color: "bg-blue-500" },
              { section: "Math", questions: 60, time: 60, color: "bg-green-500" },
              { section: "Reading", questions: 40, time: 35, color: "bg-purple-500" },
              { section: "Science", questions: 40, time: 35, color: "bg-orange-500" },
            ].map((item, index) => (
              <motion.div
                key={item.section}
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5 + index * 0.1 }}
                className="rounded-xl border border-border bg-surface/50 backdrop-blur-sm p-4 text-center"
              >
                <div className={`mx-auto mb-3 h-2 w-16 rounded-full ${item.color}`} />
                <p className="text-sm font-medium text-foreground">{item.section}</p>
                <p className="text-xs text-muted mt-1">{item.questions} questions</p>
                <p className="text-xs text-muted">{item.time} minutes</p>
              </motion.div>
            ))}
          </div>
        </motion.section>
      </div>
    </div>
  );
}
