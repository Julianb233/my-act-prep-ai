"use client";

import { Clock, Timer, AlertTriangle, CheckCircle, TrendingUp, Target, Zap } from "lucide-react";

const sectionTiming = [
  {
    name: "English",
    totalTime: 45,
    questions: 75,
    targetPace: 36,
    yourPace: 42,
    status: "slow",
    tip: "You're spending too long on grammar questions. Trust your first instinct.",
  },
  {
    name: "Math",
    totalTime: 60,
    questions: 60,
    targetPace: 60,
    yourPace: 58,
    status: "good",
    tip: "Great pacing! Consider saving 2-3 minutes for review.",
  },
  {
    name: "Reading",
    totalTime: 35,
    questions: 40,
    targetPace: 52,
    yourPace: 65,
    status: "slow",
    tip: "Try the passage-mapping technique to reduce reading time.",
  },
  {
    name: "Science",
    totalTime: 35,
    questions: 40,
    targetPace: 52,
    yourPace: 48,
    status: "good",
    tip: "Excellent! You've mastered the data-first approach.",
  },
];

const timeCheckpoints = [
  { section: "English", checkpoints: ["Q20 at 12min", "Q40 at 24min", "Q60 at 36min", "Finish at 45min"] },
  { section: "Math", checkpoints: ["Q15 at 15min", "Q30 at 30min", "Q45 at 45min", "Finish at 60min"] },
  { section: "Reading", checkpoints: ["Passage 1 at 9min", "Passage 2 at 18min", "Passage 3 at 27min", "Finish at 35min"] },
  { section: "Science", checkpoints: ["Passages 1-2 at 12min", "Passages 3-4 at 24min", "Finish at 35min"] },
];

const recentSessions = [
  { date: "Jan 7", section: "Reading", targetTime: 35, actualTime: 38, questionsAnswered: 40, accuracy: 75 },
  { date: "Jan 6", section: "Science", targetTime: 35, actualTime: 33, questionsAnswered: 40, accuracy: 80 },
  { date: "Jan 5", section: "English", targetTime: 45, actualTime: 48, questionsAnswered: 75, accuracy: 82 },
];

export default function TimingPage() {
  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Time Management</h1>
        <p className="text-muted mt-1">Master ACT pacing with targeted strategies</p>
      </div>

      {/* Overview Cards */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Timer className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Overall Pacing</span>
          </div>
          <p className="text-3xl font-bold text-foreground">Good</p>
          <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
            <TrendingUp className="w-4 h-4" /> Improved 15%
          </p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Clock className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Avg. Completion</span>
          </div>
          <p className="text-3xl font-bold text-foreground">98%</p>
          <p className="text-sm text-muted mt-1">of questions answered</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Zap className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Fastest Section</span>
          </div>
          <p className="text-3xl font-bold text-foreground">Science</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <AlertTriangle className="w-5 h-5 text-amber-500" />
            <span className="text-sm text-muted">Needs Work</span>
          </div>
          <p className="text-3xl font-bold text-foreground">Reading</p>
        </div>
      </div>

      {/* Section Pacing */}
      <div className="bg-surface rounded-xl p-6 border border-border mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">Section Pacing Analysis</h2>
        <div className="space-y-6">
          {sectionTiming.map((section) => (
            <div key={section.name} className="p-4 rounded-xl border border-border">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                  {section.status === "good" ? (
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center">
                      <CheckCircle className="w-5 h-5 text-green-600" />
                    </div>
                  ) : (
                    <div className="w-10 h-10 rounded-full bg-amber-100 flex items-center justify-center">
                      <AlertTriangle className="w-5 h-5 text-amber-600" />
                    </div>
                  )}
                  <div>
                    <h3 className="font-semibold text-foreground">{section.name}</h3>
                    <p className="text-sm text-muted">{section.questions} questions in {section.totalTime} minutes</p>
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm text-muted">Seconds per question</p>
                  <div className="flex items-center gap-2">
                    <span className={`text-lg font-bold ${section.status === "good" ? "text-green-600" : "text-amber-600"}`}>
                      {section.yourPace}s
                    </span>
                    <span className="text-sm text-muted">/ {section.targetPace}s target</span>
                  </div>
                </div>
              </div>
              <div className="w-full bg-border rounded-full h-2 mb-3">
                <div
                  className={`h-2 rounded-full ${section.status === "good" ? "bg-green-500" : "bg-amber-500"}`}
                  style={{ width: `${Math.min(100, (section.targetPace / section.yourPace) * 100)}%` }}
                />
              </div>
              <p className="text-sm text-muted flex items-center gap-2">
                <Target className="w-4 h-4" />
                {section.tip}
              </p>
            </div>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Time Checkpoints */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-6">Pacing Checkpoints</h2>
          <p className="text-sm text-muted mb-4">Use these checkpoints during your test to stay on track</p>
          <div className="space-y-4">
            {timeCheckpoints.map((section) => (
              <div key={section.section} className="p-4 rounded-xl bg-muted/10">
                <h4 className="font-medium text-foreground mb-2">{section.section}</h4>
                <div className="flex flex-wrap gap-2">
                  {section.checkpoints.map((checkpoint, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 rounded-full bg-primary/10 text-primary text-sm"
                    >
                      {checkpoint}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Recent Timed Sessions */}
        <div className="bg-surface rounded-xl p-6 border border-border">
          <h2 className="text-xl font-semibold text-foreground mb-6">Recent Timed Sessions</h2>
          <div className="space-y-4">
            {recentSessions.map((session, index) => (
              <div key={index} className="p-4 rounded-xl border border-border">
                <div className="flex items-center justify-between mb-2">
                  <div>
                    <p className="font-medium text-foreground">{session.section}</p>
                    <p className="text-sm text-muted">{session.date}</p>
                  </div>
                  <div className="text-right">
                    <p className={`font-semibold ${session.actualTime <= session.targetTime ? "text-green-600" : "text-amber-600"}`}>
                      {session.actualTime} min
                    </p>
                    <p className="text-sm text-muted">Target: {session.targetTime} min</p>
                  </div>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-muted">Questions: {session.questionsAnswered}</span>
                  <span className="text-muted">Accuracy: {session.accuracy}%</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Timing Tips */}
      <div className="mt-8 bg-gradient-to-br from-cyan-50 to-teal-50 rounded-xl p-6 border border-cyan-200">
        <h3 className="font-semibold text-cyan-800 mb-4">ACT Timing Strategies</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="space-y-2 text-sm text-cyan-700">
            <p>• <strong>English:</strong> Read quickly, answer quickly. Most questions test patterns.</p>
            <p>• <strong>Math:</strong> Do easy questions first. Mark hard ones and return later.</p>
          </div>
          <div className="space-y-2 text-sm text-cyan-700">
            <p>• <strong>Reading:</strong> Skim passage first (3 min), then answer questions (6 min).</p>
            <p>• <strong>Science:</strong> Skip the passage, go straight to data and questions.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
