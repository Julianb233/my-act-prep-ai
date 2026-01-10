"use client";

import { BarChart3, TrendingUp, Target, PieChart, ArrowUp, ArrowDown } from "lucide-react";

const scoreHistory = [
  { test: "Diagnostic", english: 25, math: 24, reading: 26, science: 24, composite: 25 },
  { test: "Test 1", english: 28, math: 27, reading: 29, science: 28, composite: 28 },
  { test: "Test 2", english: 31, math: 29, reading: 30, science: 30, composite: 30 },
];

const sectionBreakdown = [
  {
    name: "English",
    score: 31,
    maxScore: 36,
    change: +3,
    subtopics: [
      { name: "Usage/Mechanics", accuracy: 85, questions: 40 },
      { name: "Rhetorical Skills", accuracy: 78, questions: 35 },
    ]
  },
  {
    name: "Math",
    score: 29,
    maxScore: 36,
    change: +2,
    subtopics: [
      { name: "Pre-Algebra", accuracy: 88, questions: 14 },
      { name: "Algebra", accuracy: 75, questions: 18 },
      { name: "Geometry", accuracy: 70, questions: 18 },
      { name: "Trigonometry", accuracy: 65, questions: 10 },
    ]
  },
  {
    name: "Reading",
    score: 30,
    maxScore: 36,
    change: +1,
    subtopics: [
      { name: "Prose Fiction", accuracy: 82, questions: 10 },
      { name: "Social Science", accuracy: 78, questions: 10 },
      { name: "Humanities", accuracy: 75, questions: 10 },
      { name: "Natural Science", accuracy: 72, questions: 10 },
    ]
  },
  {
    name: "Science",
    score: 30,
    maxScore: 36,
    change: +2,
    subtopics: [
      { name: "Data Representation", accuracy: 80, questions: 15 },
      { name: "Research Summaries", accuracy: 75, questions: 18 },
      { name: "Conflicting Viewpoints", accuracy: 70, questions: 7 },
    ]
  },
];

export default function AnalysisPage() {
  const currentComposite = scoreHistory[scoreHistory.length - 1].composite;
  const startingComposite = scoreHistory[0].composite;
  const improvement = currentComposite - startingComposite;

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Score Analysis</h1>
        <p className="text-muted mt-1">Deep dive into your ACT performance</p>
      </div>

      {/* Overview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        <div className="bg-gradient-to-br from-primary/20 to-secondary/20 rounded-xl p-5 border border-primary/20">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Current Composite</span>
          </div>
          <p className="text-3xl font-bold text-foreground">{currentComposite}</p>
          <p className="text-sm text-green-500 flex items-center gap-1 mt-1">
            <TrendingUp className="w-4 h-4" /> +{improvement} total improvement
          </p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <BarChart3 className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Target Score</span>
          </div>
          <p className="text-3xl font-bold text-foreground">32</p>
          <p className="text-sm text-muted mt-1">2 points to go</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <PieChart className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Questions Practiced</span>
          </div>
          <p className="text-3xl font-bold text-foreground">1,430</p>
        </div>
        <div className="bg-surface rounded-xl p-5 border border-border">
          <div className="flex items-center gap-2 mb-2">
            <Target className="w-5 h-5 text-primary" />
            <span className="text-sm text-muted">Overall Accuracy</span>
          </div>
          <p className="text-3xl font-bold text-foreground">76%</p>
        </div>
      </div>

      {/* Score Progress Over Time */}
      <div className="bg-surface rounded-xl p-6 border border-border mb-8">
        <h2 className="text-xl font-semibold text-foreground mb-6">Score Progress</h2>
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-muted border-b border-border">
                <th className="pb-4 font-medium">Test</th>
                <th className="pb-4 font-medium text-center">English</th>
                <th className="pb-4 font-medium text-center">Math</th>
                <th className="pb-4 font-medium text-center">Reading</th>
                <th className="pb-4 font-medium text-center">Science</th>
                <th className="pb-4 font-medium text-center">Composite</th>
              </tr>
            </thead>
            <tbody>
              {scoreHistory.map((score, index) => (
                <tr key={score.test} className="border-b border-border last:border-0">
                  <td className="py-4 font-medium text-foreground">{score.test}</td>
                  <td className="py-4 text-center">
                    <span className="text-foreground">{score.english}</span>
                    {index > 0 && score.english > scoreHistory[index - 1].english && (
                      <ArrowUp className="w-3 h-3 text-green-500 inline ml-1" />
                    )}
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-foreground">{score.math}</span>
                    {index > 0 && score.math > scoreHistory[index - 1].math && (
                      <ArrowUp className="w-3 h-3 text-green-500 inline ml-1" />
                    )}
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-foreground">{score.reading}</span>
                    {index > 0 && score.reading > scoreHistory[index - 1].reading && (
                      <ArrowUp className="w-3 h-3 text-green-500 inline ml-1" />
                    )}
                  </td>
                  <td className="py-4 text-center">
                    <span className="text-foreground">{score.science}</span>
                    {index > 0 && score.science > scoreHistory[index - 1].science && (
                      <ArrowUp className="w-3 h-3 text-green-500 inline ml-1" />
                    )}
                  </td>
                  <td className="py-4 text-center font-bold text-primary">{score.composite}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* Section Breakdown */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {sectionBreakdown.map((section) => (
          <div key={section.name} className="bg-surface rounded-xl p-6 border border-border">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-foreground">{section.name}</h3>
              <div className="flex items-center gap-3">
                <span className={`text-sm flex items-center gap-1 ${section.change > 0 ? "text-green-500" : "text-red-500"}`}>
                  {section.change > 0 ? <ArrowUp className="w-4 h-4" /> : <ArrowDown className="w-4 h-4" />}
                  {section.change > 0 ? "+" : ""}{section.change}
                </span>
                <span className="text-2xl font-bold text-foreground">{section.score}</span>
                <span className="text-sm text-muted">/ {section.maxScore}</span>
              </div>
            </div>
            <div className="w-full bg-border rounded-full h-3 mb-6">
              <div
                className="bg-primary h-3 rounded-full transition-all"
                style={{ width: `${(section.score / section.maxScore) * 100}%` }}
              />
            </div>
            <div className="space-y-3">
              {section.subtopics.map((topic) => (
                <div key={topic.name} className="flex items-center justify-between">
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-sm text-foreground">{topic.name}</span>
                      <span className="text-sm text-muted">{topic.questions} Q</span>
                    </div>
                    <div className="w-full bg-border rounded-full h-2">
                      <div
                        className={`h-2 rounded-full ${
                          topic.accuracy >= 80
                            ? "bg-green-500"
                            : topic.accuracy >= 70
                            ? "bg-yellow-500"
                            : "bg-red-500"
                        }`}
                        style={{ width: `${topic.accuracy}%` }}
                      />
                    </div>
                  </div>
                  <span className={`ml-4 font-semibold ${
                    topic.accuracy >= 80
                      ? "text-green-500"
                      : topic.accuracy >= 70
                      ? "text-yellow-500"
                      : "text-red-500"
                  }`}>
                    {topic.accuracy}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
