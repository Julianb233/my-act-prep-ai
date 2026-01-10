"use client";

import { FileText, Clock, Play, CheckCircle, Lock, TrendingUp, Award } from "lucide-react";

const practiceTests = [
  { id: 1, name: "Practice Test 1", duration: "2h 55min", questions: 215, completed: true, composite: 28 },
  { id: 2, name: "Practice Test 2", duration: "2h 55min", questions: 215, completed: true, composite: 30 },
  { id: 3, name: "Practice Test 3", duration: "2h 55min", questions: 215, completed: false, composite: null },
  { id: 4, name: "Practice Test 4", duration: "2h 55min", questions: 215, completed: false, composite: null },
  { id: 5, name: "Practice Test 5", duration: "2h 55min", questions: 215, completed: false, composite: null, locked: true },
  { id: 6, name: "Practice Test 6", duration: "2h 55min", questions: 215, completed: false, composite: null, locked: true },
];

const sectionTests = [
  { name: "English", duration: "45 min", questions: 75, icon: "📝", color: "bg-rose-100 text-rose-600" },
  { name: "Math", duration: "60 min", questions: 60, icon: "🧮", color: "bg-teal-100 text-teal-600" },
  { name: "Reading", duration: "35 min", questions: 40, icon: "📖", color: "bg-cyan-100 text-cyan-600" },
  { name: "Science", duration: "35 min", questions: 40, icon: "🔬", color: "bg-amber-100 text-amber-600" },
];

const recentScores = [
  { test: "Practice Test 2", date: "Jan 5", english: 31, math: 29, reading: 30, science: 30, composite: 30 },
  { test: "Practice Test 1", date: "Dec 22", english: 28, math: 27, reading: 29, science: 28, composite: 28 },
];

export default function TestsPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Full Practice Tests</h1>
        <p className="text-muted mt-1">Complete ACT simulations with real timing</p>
      </div>

      {/* Test Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Award className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Best Composite</span>
          </div>
          <p className="text-3xl font-bold text-foreground">30</p>
          <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
            <TrendingUp className="w-4 h-4" /> +2 from first test
          </p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <p className="text-sm text-muted mb-1">Tests Completed</p>
          <p className="text-3xl font-bold text-foreground">2 / 6</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <p className="text-sm text-muted mb-1">Average Time</p>
          <p className="text-3xl font-bold text-foreground">2h 48m</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <p className="text-sm text-muted mb-1">Superscored</p>
          <p className="text-3xl font-bold text-foreground">31</p>
        </div>
      </div>

      {/* Recent Scores Detail */}
      <div className="bg-surface rounded-xl p-6 border border-border mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Recent Test Scores</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-muted">
                <th className="pb-3 font-medium">Test</th>
                <th className="pb-3 font-medium">Date</th>
                <th className="pb-3 font-medium text-center">English</th>
                <th className="pb-3 font-medium text-center">Math</th>
                <th className="pb-3 font-medium text-center">Reading</th>
                <th className="pb-3 font-medium text-center">Science</th>
                <th className="pb-3 font-medium text-center">Composite</th>
              </tr>
            </thead>
            <tbody>
              {recentScores.map((score) => (
                <tr key={score.test} className="border-t border-border">
                  <td className="py-4 font-medium text-foreground">{score.test}</td>
                  <td className="py-4 text-muted">{score.date}</td>
                  <td className="py-4 text-center text-foreground">{score.english}</td>
                  <td className="py-4 text-center text-foreground">{score.math}</td>
                  <td className="py-4 text-center text-foreground">{score.reading}</td>
                  <td className="py-4 text-center text-foreground">{score.science}</td>
                  <td className="py-4 text-center font-bold text-primary">{score.composite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Full Practice Tests */}
      <div className="mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-4">Full Practice Tests</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {practiceTests.map((test) => (
            <div
              key={test.id}
              className={`bg-surface rounded-xl p-5 border transition ${
                test.locked ? "border-border opacity-60" : "border-border hover:border-primary/50"
              }`}
            >
              <div className="flex items-start justify-between mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                  {test.locked ? (
                    <Lock className="w-6 h-6 text-muted" />
                  ) : test.completed ? (
                    <CheckCircle className="w-6 h-6 text-green-500" />
                  ) : (
                    <FileText className="w-6 h-6 text-primary" />
                  )}
                </div>
                {test.completed && test.composite && (
                  <span className="text-2xl font-bold text-foreground">{test.composite}</span>
                )}
              </div>
              <h3 className="font-semibold text-foreground mb-2">{test.name}</h3>
              <div className="flex items-center gap-4 text-sm text-muted mb-4">
                <span className="flex items-center gap-1">
                  <Clock className="w-4 h-4" /> {test.duration}
                </span>
                <span>{test.questions} questions</span>
              </div>
              <button
                disabled={test.locked}
                className={`w-full py-2.5 rounded-lg font-medium transition flex items-center justify-center gap-2 ${
                  test.locked
                    ? "bg-muted/20 text-muted cursor-not-allowed"
                    : test.completed
                    ? "bg-primary/10 text-primary hover:bg-primary/20"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                {test.locked ? (
                  <>
                    <Lock className="w-4 h-4" />
                    Upgrade to Unlock
                  </>
                ) : test.completed ? (
                  "Review Results"
                ) : (
                  <>
                    <Play className="w-4 h-4" />
                    Start Test
                  </>
                )}
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* Section Tests */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Section Tests</h2>
        <p className="text-muted mb-4">Practice individual sections with real ACT timing</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          {sectionTests.map((section) => (
            <div
              key={section.name}
              className="bg-surface rounded-xl p-5 border border-border hover:border-primary/50 transition cursor-pointer group"
            >
              <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center text-2xl mb-4`}>
                {section.icon}
              </div>
              <h3 className="font-semibold text-foreground mb-1">{section.name}</h3>
              <div className="flex items-center gap-3 text-sm text-muted">
                <span>{section.duration}</span>
                <span>•</span>
                <span>{section.questions} Q</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
