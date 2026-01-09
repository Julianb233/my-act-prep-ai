"use client";

import { motion } from "framer-motion";
import {
  ClipboardList,
  BarChart3,
  Clock,
  GraduationCap,
  BookOpen,
  RefreshCw,
  Check,
  ChevronDown,
  ArrowRight,
  Star,
  Play,
  Sparkles,
  Trophy,
  TrendingUp,
} from "lucide-react";
import { useState } from "react";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const stagger = {
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

function Navigation() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
              <Trophy className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-xl">My ACT Prep AI</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <a href="#features" className="text-gray-600 hover:text-gray-900 transition">Features</a>
            <a href="#how-it-works" className="text-gray-600 hover:text-gray-900 transition">How it Works</a>
            <a href="#pricing" className="text-gray-600 hover:text-gray-900 transition">Pricing</a>
            <a href="#faq" className="text-gray-600 hover:text-gray-900 transition">FAQ</a>
          </div>
          <div className="flex items-center gap-4">
            <a href="/login" className="text-gray-600 hover:text-gray-900 transition hidden sm:block">Log in</a>
            <a
              href="/signup"
              className="gradient-bg text-white px-4 py-2 rounded-full font-medium hover:opacity-90 transition"
            >
              Start Free Practice
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}

function Hero() {
  return (
    <section className="pt-32 pb-20 px-4 overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial="hidden"
          animate="visible"
          variants={stagger}
          className="text-center"
        >
          <motion.div variants={fadeInUp} className="inline-flex items-center gap-2 bg-teal-50 text-teal-700 px-4 py-2 rounded-full text-sm font-medium mb-8">
            <BarChart3 className="w-4 h-4" />
            Average improvement: +4 composite points
          </motion.div>

          <motion.h1 variants={fadeInUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-6">
            Conquer the ACT with
            <span className="gradient-text block">intelligent practice</span>
          </motion.h1>

          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto mb-10">
            AI-powered preparation that adapts to you. Full-length practice tests, section-specific strategies, and college matching based on your scores.
          </motion.p>

          <motion.div variants={fadeInUp} className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a
              href="/signup"
              className="gradient-bg text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition flex items-center justify-center gap-2 animate-pulse-glow"
            >
              Start Free Practice
              <ArrowRight className="w-5 h-5" />
            </a>
            <a
              href="#how-it-works"
              className="bg-white border-2 border-gray-200 text-gray-700 px-8 py-4 rounded-full font-semibold text-lg hover:border-gray-300 transition flex items-center justify-center gap-2"
            >
              <Play className="w-5 h-5" />
              Explore Features
            </a>
          </motion.div>

          <motion.div variants={fadeInUp} className="flex items-center justify-center gap-8 text-sm text-gray-500">
            <div className="flex -space-x-2">
              {[1, 2, 3, 4, 5].map((i) => (
                <div
                  key={i}
                  className="w-8 h-8 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-white"
                />
              ))}
            </div>
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((i) => (
                <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
              ))}
              <span className="ml-2">4.8/5 from 1,500+ reviews</span>
            </div>
          </motion.div>
        </motion.div>

        {/* 3D Product Mockup with Glassmorphism */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="mt-16 relative perspective-container"
        >
          {/* Background Glow Effects */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-1/2 left-1/4 w-72 h-72 bg-teal-400/30 rounded-full blur-3xl animate-pulse" />
            <div className="absolute top-1/3 right-1/4 w-64 h-64 bg-cyan-400/30 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
            <div className="absolute bottom-1/4 left-1/3 w-56 h-56 bg-rose-400/20 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
          </div>

          {/* Main 3D Mockup */}
          <motion.div
            whileHover={{ rotateY: -5, rotateX: 2, scale: 1.02 }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            className="mockup-3d mockup-shadow rounded-2xl overflow-hidden"
          >
            <div className="glass-card p-1">
              <div className="bg-gradient-to-br from-white/90 to-white/70 dark:from-gray-900/90 dark:to-gray-800/70 rounded-xl p-6 backdrop-blur-xl">
                {/* Browser Chrome */}
                <div className="flex items-center gap-2 mb-4">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                  <div className="flex-1 mx-4">
                    <div className="bg-gray-100 dark:bg-gray-800 rounded-full px-4 py-1 text-xs text-gray-500 text-center">
                      myactprepai.com/dashboard
                    </div>
                  </div>
                </div>

                {/* Score Dashboard */}
                <div className="space-y-6">
                  <div className="flex justify-between items-start">
                    <div className="glass-card rounded-xl p-4 flex-1 mr-4">
                      <p className="text-sm text-gray-500 mb-1">Composite Score</p>
                      <div className="flex items-baseline gap-2">
                        <motion.span
                          className="text-6xl font-bold gradient-text"
                          initial={{ scale: 0.5, opacity: 0 }}
                          animate={{ scale: 1, opacity: 1 }}
                          transition={{ delay: 0.6, type: "spring" }}
                        >
                          28
                        </motion.span>
                        <span className="flex items-center gap-1 text-green-600 font-medium">
                          <TrendingUp className="w-4 h-4" />
                          +4
                        </span>
                      </div>
                    </div>
                    <div className="glass-card rounded-xl p-4 text-center">
                      <p className="text-sm text-gray-500 mb-1">Target</p>
                      <p className="text-3xl font-bold text-gray-400">32</p>
                      <p className="text-xs text-rose-500 font-medium mt-1">34 days left</p>
                    </div>
                  </div>

                  {/* Section Scores - 4 columns */}
                  <div className="grid grid-cols-4 gap-3">
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.7 }}
                      className="glass-card rounded-lg p-3 text-center"
                    >
                      <div className="text-xs text-gray-500 mb-1">English</div>
                      <div className="text-xl font-bold text-blue-600">29</div>
                      <div className="h-1.5 rounded-full bg-gray-100 mt-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-blue-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '81%' }}
                          transition={{ duration: 1, delay: 0.9 }}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.8 }}
                      className="glass-card rounded-lg p-3 text-center"
                    >
                      <div className="text-xs text-gray-500 mb-1">Math</div>
                      <div className="text-xl font-bold text-green-600">27</div>
                      <div className="h-1.5 rounded-full bg-gray-100 mt-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-green-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '75%' }}
                          transition={{ duration: 1, delay: 1 }}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 0.9 }}
                      className="glass-card rounded-lg p-3 text-center"
                    >
                      <div className="text-xs text-gray-500 mb-1">Reading</div>
                      <div className="text-xl font-bold text-purple-600">28</div>
                      <div className="h-1.5 rounded-full bg-gray-100 mt-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-purple-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 1, delay: 1.1 }}
                        />
                      </div>
                    </motion.div>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: 1 }}
                      className="glass-card rounded-lg p-3 text-center"
                    >
                      <div className="text-xs text-gray-500 mb-1">Science</div>
                      <div className="text-xl font-bold text-orange-600">28</div>
                      <div className="h-1.5 rounded-full bg-gray-100 mt-2 overflow-hidden">
                        <motion.div
                          className="h-full bg-orange-500 rounded-full"
                          initial={{ width: 0 }}
                          animate={{ width: '78%' }}
                          transition={{ duration: 1, delay: 1.2 }}
                        />
                      </div>
                    </motion.div>
                  </div>

                  {/* Time Management Banner */}
                  <div className="flex items-center justify-between glass-card rounded-lg p-3">
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-teal-600" />
                      <span className="text-sm font-medium text-gray-600">Time Management</span>
                    </div>
                    <div className="flex gap-2 text-xs">
                      <span className="bg-blue-100/70 text-blue-700 px-2 py-1 rounded">45 min</span>
                      <span className="bg-green-100/70 text-green-700 px-2 py-1 rounded">60 min</span>
                      <span className="bg-purple-100/70 text-purple-700 px-2 py-1 rounded">35 min</span>
                      <span className="bg-orange-100/70 text-orange-700 px-2 py-1 rounded">35 min</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Floating Glassmorphism Cards */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.8 }}
            className="absolute -right-4 lg:-right-8 top-20 glass-card rounded-xl p-4 animate-float-3d hidden lg:block glow-primary"
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 gradient-bg rounded-full flex items-center justify-center shadow-lg">
                <Sparkles className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">Focus Today</p>
                <p className="text-xs text-gray-500">Science: Data Rep</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 1 }}
            className="absolute -left-4 lg:-left-8 top-40 glass-card rounded-xl p-4 animate-float hidden lg:block"
            style={{ animationDelay: '0.5s' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-green-500 rounded-full flex items-center justify-center shadow-lg">
                <TrendingUp className="w-5 h-5 text-white" />
              </div>
              <div>
                <p className="font-semibold text-sm">+4 Composite</p>
                <p className="text-xs text-gray-500">Avg. improvement</p>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2 }}
            className="absolute right-20 -bottom-4 glass-card rounded-xl p-3 animate-float hidden lg:block"
            style={{ animationDelay: '1s' }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-2">
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-rose-400 to-pink-500 border-2 border-white" />
                <div className="w-6 h-6 rounded-full bg-gradient-to-br from-orange-400 to-amber-500 border-2 border-white" />
              </div>
              <span className="text-xs text-gray-600">30,000+ students</span>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}

function SectionBreakdown() {
  const sections = [
    { name: "ENGLISH", questions: "75 Q", time: "45 min", skills: ["Grammar", "Rhetoric", "Punctuation"] },
    { name: "MATH", questions: "60 Q", time: "60 min", skills: ["Algebra", "Geometry", "Functions"] },
    { name: "READING", questions: "40 Q", time: "35 min", skills: ["Inference", "Main Idea", "Details"] },
    { name: "SCIENCE", questions: "40 Q", time: "35 min", skills: ["Data", "Experiments", "Conflicting Views"] },
    { name: "WRITING", questions: "1 essay", time: "40 min", skills: ["Argument", "Analysis", "Thesis"] },
  ];

  return (
    <section className="py-16 border-y border-gray-100 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <p className="text-center text-gray-600 font-semibold mb-8">ACT Sections We Master</p>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
          {sections.map((section) => (
            <div key={section.name} className="bg-white rounded-xl p-4 text-center border border-gray-100">
              <p className="font-bold text-teal-600">{section.name}</p>
              <p className="text-sm text-gray-500">{section.questions} / {section.time}</p>
              <div className="mt-2 space-y-1">
                {section.skills.map((skill) => (
                  <span key={skill} className="block text-xs text-gray-400">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Features() {
  const features = [
    {
      icon: ClipboardList,
      title: "Practice Tests",
      description: "Take realistic full-length ACT simulations with accurate timing, official format, and detailed answer explanations. Our tests mirror the real ACT so closely that students consistently say test day felt like just another practice session.",
    },
    {
      icon: BarChart3,
      title: "Score Analysis",
      description: "Get a deep dive into your performance across every question type and topic. See exactly which areas trip you up, track your improvement over time, and identify patterns in your mistakes that you might miss on your own.",
    },
    {
      icon: Clock,
      title: "Time Management",
      description: "Master ACT pacing with our intelligent section timers, rushing alerts, and proven strategies to finish every section strong. Learn exactly when to move on from tough questions and how to budget your time for maximum points.",
    },
    {
      icon: GraduationCap,
      title: "College Matching",
      description: "See which colleges match your current and projected score ranges. Set target scores based on your dream schools and watch your college matches expand as your scores improve. Make informed decisions about where to apply.",
    },
    {
      icon: BookOpen,
      title: "Section Mastery",
      description: "Focused, intensive practice for each ACT section - English, Math, Reading, Science, and the optional Writing. Each section has customized strategies and practice sets designed to help you master the specific skills tested.",
    },
    {
      icon: RefreshCw,
      title: "Smart Review",
      description: "Our AI analyzes your wrong answers to find patterns you might not notice yourself. Review sessions automatically focus on your specific mistake types, ensuring you don't keep making the same errors on test day.",
    },
  ];

  return (
    <section id="features" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-teal-600 font-semibold mb-4">FEATURES</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Everything you need to <span className="gradient-text">master the ACT</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Comprehensive preparation for every section, with AI-powered insights to maximize your score.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {features.map((feature) => (
            <motion.div
              key={feature.title}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition border border-gray-100"
            >
              <div className="w-12 h-12 gradient-bg rounded-xl flex items-center justify-center mb-6">
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function HowItWorks() {
  const steps = [
    {
      step: "01",
      title: "Take a diagnostic test",
      description: "Complete a full ACT or section diagnostic. Our AI builds your skill profile across all four sections.",
    },
    {
      step: "02",
      title: "Practice with purpose",
      description: "Get targeted practice on your weak areas. Learn time management strategies specific to each section.",
    },
    {
      step: "03",
      title: "Track and improve",
      description: "Monitor your composite and section scores. See college matches update as your scores improve.",
    },
  ];

  return (
    <section id="how-it-works" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-teal-600 font-semibold mb-4">HOW IT WORKS</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Your path to <span className="gradient-text">ACT success</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {steps.map((item, index) => (
            <motion.div key={item.step} variants={fadeInUp} className="relative">
              <div className="text-8xl font-bold text-gray-100 absolute -top-8 left-0">{item.step}</div>
              <div className="relative pt-12">
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 text-lg">{item.description}</p>
              </div>
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                  <ArrowRight className="w-8 h-8 text-gray-300" />
                </div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "$0",
      period: "",
      description: "Get started with ACT prep",
      features: [
        "5 questions/day per section",
        "Basic score tracking",
        "1 practice test section",
      ],
      cta: "Get Started",
      popular: false,
    },
    {
      name: "Prep",
      price: "$29",
      period: "/month",
      description: "Comprehensive ACT preparation",
      features: [
        "Unlimited practice",
        "6 full practice tests",
        "Detailed analytics",
        "Time management tools",
        "Score predictions",
      ],
      cta: "Start Free Trial",
      popular: true,
    },
    {
      name: "Pro",
      price: "$49",
      period: "/month",
      description: "Maximum score potential",
      features: [
        "Everything in Prep",
        "Writing section scoring",
        "College matching",
        "1-on-1 strategy session/month",
        "Superscoring analysis",
      ],
      cta: "Start Free Trial",
      popular: false,
    },
  ];

  return (
    <section id="pricing" className="py-24">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-teal-600 font-semibold mb-4">PRICING</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Invest in your <span className="gradient-text">college future</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600">
            Start free, upgrade when you&apos;re ready to commit.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto"
        >
          {plans.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeInUp}
              className={`rounded-2xl p-8 ${
                plan.popular
                  ? "gradient-bg text-white scale-105 shadow-2xl"
                  : "bg-white border border-gray-200"
              }`}
            >
              {plan.popular && (
                <span className="bg-white text-teal-600 text-sm font-semibold px-3 py-1 rounded-full">
                  Most Popular
                </span>
              )}
              <h3 className={`text-2xl font-bold mt-4 ${plan.popular ? "text-white" : ""}`}>
                {plan.name}
              </h3>
              <div className="mt-4 mb-6">
                <span className={`text-5xl font-bold ${plan.popular ? "text-white" : ""}`}>
                  {plan.price}
                </span>
                <span className={plan.popular ? "text-white/80" : "text-gray-500"}>
                  {plan.period}
                </span>
              </div>
              <p className={plan.popular ? "text-white/90" : "text-gray-600"}>{plan.description}</p>
              <ul className="mt-8 space-y-4">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className={`w-5 h-5 ${plan.popular ? "text-white" : "text-teal-600"}`} />
                    <span className={plan.popular ? "text-white/90" : "text-gray-600"}>{feature}</span>
                  </li>
                ))}
              </ul>
              <button
                className={`w-full mt-8 py-3 rounded-full font-semibold transition ${
                  plan.popular
                    ? "bg-white text-teal-600 hover:bg-gray-100"
                    : "gradient-bg text-white hover:opacity-90"
                }`}
              >
                {plan.cta}
              </button>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function Comparison() {
  const features = [
    { name: "Full Practice Tests", us: "6", competitor1: "3", competitor2: "4" },
    { name: "AI Adaptive Practice", us: true, competitor1: true, competitor2: false },
    { name: "Time Management Tools", us: true, competitor1: false, competitor2: "limited" },
    { name: "College Matching", us: true, competitor1: false, competitor2: false },
    { name: "Science Section Drills", us: "Unlimited", competitor1: "Limited", competitor2: "Yes" },
    { name: "Score Prediction", us: true, competitor1: "partial", competitor2: false },
    { name: "Superscore Analysis", us: true, competitor1: false, competitor2: true },
    { name: "Price", us: "$29/mo", competitor1: "$99 one-time", competitor2: "$449+" },
  ];

  const renderValue = (value: boolean | string) => {
    if (value === true) return <Check className="w-5 h-5 text-green-500 mx-auto" />;
    if (value === false) return <span className="text-gray-300">—</span>;
    if (value === "limited" || value === "partial") return <span className="text-yellow-500 text-sm font-medium">Partial</span>;
    return <span className="text-sm font-medium">{value}</span>;
  };

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-5xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-teal-600 font-semibold mb-4">COMPARISON</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            See why students <span className="gradient-text">choose us</span>
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-gray-600 max-w-2xl mx-auto">
            Compare our features with other popular ACT prep options.
          </motion.p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100"
        >
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-100">
                  <th className="px-6 py-4 text-left text-sm font-semibold text-gray-600">Feature</th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 gradient-bg rounded-lg flex items-center justify-center mb-2">
                        <Trophy className="w-5 h-5 text-white" />
                      </div>
                      <span className="font-bold text-teal-600">My ACT Prep AI</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-gray-500 text-xs font-bold">M</span>
                      </div>
                      <span className="font-medium text-gray-600">Magoosh</span>
                    </div>
                  </th>
                  <th className="px-6 py-4 text-center">
                    <div className="flex flex-col items-center">
                      <div className="w-10 h-10 bg-gray-200 rounded-lg flex items-center justify-center mb-2">
                        <span className="text-gray-500 text-xs font-bold">K</span>
                      </div>
                      <span className="font-medium text-gray-600">Kaplan</span>
                    </div>
                  </th>
                </tr>
              </thead>
              <tbody>
                {features.map((feature, index) => (
                  <tr
                    key={feature.name}
                    className={`${index % 2 === 0 ? "bg-gray-50/50" : ""} ${
                      feature.name === "Price" ? "border-t-2 border-teal-100" : ""
                    }`}
                  >
                    <td className="px-6 py-4 text-sm font-medium text-gray-700">{feature.name}</td>
                    <td className="px-6 py-4 text-center bg-teal-50/30">{renderValue(feature.us)}</td>
                    <td className="px-6 py-4 text-center">{renderValue(feature.competitor1)}</td>
                    <td className="px-6 py-4 text-center">{renderValue(feature.competitor2)}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-6 py-4 bg-gradient-to-r from-teal-50 to-cyan-50 border-t border-teal-100">
            <p className="text-sm text-gray-600 text-center">
              <span className="font-semibold text-teal-600">Best value:</span> Get unlimited AI-powered practice, 6 full tests, and college matching for just $29/month.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Testimonials() {
  const testimonials = [
    {
      quote: "The time management feature was a game-changer. I used to run out of time on Reading every single test - now I finish with 3 minutes to spare and have time to double-check my answers.",
      author: "Marcus T.",
      role: "Senior, University of Michigan",
      rating: 5,
      initials: "MT",
      score: "28 → 33 Composite",
    },
    {
      quote: "I love seeing which colleges match my scores. It motivated me to push for that extra 2 points. Watching my college matches update as I improved was incredibly motivating!",
      author: "Sophia L.",
      role: "Junior, Phoenix AZ",
      rating: 5,
      initials: "SL",
      score: "26 → 31 Composite",
    },
    {
      quote: "The Science section practice is so thorough. I went from a 24 to a 31 in just 6 weeks. The data interpretation drills were exactly what I needed.",
      author: "Ryan P.",
      role: "Senior, Northwestern Admit",
      rating: 5,
      initials: "RP",
      score: "Science: 24 → 31",
    },
    {
      quote: "I was terrified of the English section - all those grammar rules. The targeted practice broke everything down and my score jumped from 25 to 32. Incredible!",
      author: "Jessica H.",
      role: "Senior, Dallas TX",
      rating: 5,
      initials: "JH",
      score: "25 → 30 Composite",
    },
    {
      quote: "The reading pacing strategies were essential. I learned to skim efficiently and now I actually finish the passages with time to spare. My Reading score went up 5 points.",
      author: "Kevin D.",
      role: "Junior, Atlanta GA",
      rating: 5,
      initials: "KD",
      score: "26 → 32 Composite",
    },
    {
      quote: "As a college counselor, I've seen many ACT prep programs. This is by far the most comprehensive and personalized. I recommend it to every student I work with.",
      author: "Dr. Martinez",
      role: "College Counselor, Private High School",
      rating: 5,
      initials: "DM",
      score: "Top Recommendation",
    },
  ];

  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-teal-600 font-semibold mb-4">SUCCESS STORIES</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Real students, real <span className="gradient-text">results</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="grid md:grid-cols-3 gap-8"
        >
          {testimonials.map((testimonial) => (
            <motion.div
              key={testimonial.author}
              variants={fadeInUp}
              className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
            >
              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                ))}
              </div>
              <p className="text-lg text-gray-700 mb-6">&ldquo;{testimonial.quote}&rdquo;</p>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center text-white font-bold">
                    {testimonial.initials}
                  </div>
                  <div>
                    <p className="font-semibold">{testimonial.author}</p>
                    <p className="text-sm text-gray-500">{testimonial.role}</p>
                  </div>
                </div>
                <div className="text-xs font-semibold text-teal-600 bg-teal-50 px-2 py-1 rounded">
                  {testimonial.score}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FAQ() {
  const faqs = [
    {
      question: "How is ACT prep different from SAT prep?",
      answer: "The ACT has a Science section and different timing. Our AI creates ACT-specific strategies for each section, including science reasoning skills and section-specific pacing techniques.",
    },
    {
      question: "What is superscoring and do you support it?",
      answer: "Superscoring takes your best section scores from multiple test dates to create your highest composite. Our Pro plan includes superscore analysis to help you plan which sections to focus on.",
    },
    {
      question: "How many practice tests are included?",
      answer: "The Prep plan includes 6 full-length practice tests, plus unlimited section-specific practice. Each test mirrors the real ACT in format, timing, and difficulty.",
    },
    {
      question: "Is the Writing section included?",
      answer: "The Writing (essay) section is optional on the ACT. Our Pro plan includes essay scoring and feedback if you choose to take it. Many colleges no longer require it.",
    },
    {
      question: "Can I see which colleges match my score?",
      answer: "Yes! Our college matching feature (Pro plan) shows you which schools match your current and predicted scores, helping you set realistic target scores.",
    },
  ];

  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <section id="faq" className="py-24">
      <div className="max-w-3xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="text-center mb-16"
        >
          <motion.p variants={fadeInUp} className="text-teal-600 font-semibold mb-4">FAQ</motion.p>
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold">
            Common <span className="gradient-text">questions</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="space-y-4"
        >
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              variants={fadeInUp}
              className="bg-white rounded-xl border border-gray-200 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 text-left flex items-center justify-between font-semibold"
              >
                {faq.question}
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 pb-4 text-gray-600">{faq.answer}</div>
              )}
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

function FinalCTA() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="max-w-4xl mx-auto px-4">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={stagger}
          className="gradient-bg rounded-3xl p-12 text-center text-white"
        >
          <motion.h2 variants={fadeInUp} className="text-4xl md:text-5xl font-bold mb-6">
            Ready to conquer the ACT?
          </motion.h2>
          <motion.p variants={fadeInUp} className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who&apos;ve improved their ACT scores with intelligent, AI-powered preparation.
          </motion.p>
          <motion.div variants={fadeInUp}>
            <a
              href="/signup"
              className="inline-flex items-center gap-2 bg-white text-teal-600 px-8 py-4 rounded-full font-semibold text-lg hover:bg-gray-100 transition"
            >
              Start Your Free Practice
              <ArrowRight className="w-5 h-5" />
            </a>
          </motion.div>
          <motion.p variants={fadeInUp} className="mt-6 text-white/70 text-sm">
            No credit card required. Start improving today.
          </motion.p>
        </motion.div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 gradient-bg rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">My ACT Prep AI</span>
            </div>
            <p className="text-gray-400 mb-4">
              AI-powered ACT preparation for your college dreams.
            </p>
            <div className="flex gap-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="https://tiktok.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Product</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="#features" className="hover:text-white transition">Features</a></li>
              <li><a href="#pricing" className="hover:text-white transition">Pricing</a></li>
              <li><a href="#how-it-works" className="hover:text-white transition">How It Works</a></li>
              <li><a href="#faq" className="hover:text-white transition">FAQ</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/about" className="hover:text-white transition">About Us</a></li>
              <li><a href="#testimonials" className="hover:text-white transition">Success Stories</a></li>
              <li><a href="mailto:hello@myactprepai.com" className="hover:text-white transition">Contact</a></li>
              <li><a href="mailto:support@myactprepai.com" className="hover:text-white transition">Support</a></li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold mb-4">Legal</h4>
            <ul className="space-y-2 text-gray-400">
              <li><a href="/privacy" className="hover:text-white transition">Privacy Policy</a></li>
              <li><a href="/terms" className="hover:text-white transition">Terms of Service</a></li>
              <li><a href="/terms#refund" className="hover:text-white transition">Refund Policy</a></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} My ACT Prep AI. All rights reserved.</p>
          <p className="mt-4 md:mt-0 text-sm">Helping students conquer the ACT</p>
        </div>
      </div>
    </footer>
  );
}

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <Hero />
      <SectionBreakdown />
      <Features />
      <HowItWorks />
      <Pricing />
      <Comparison />
      <Testimonials />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
