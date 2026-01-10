"use client";

import { BookOpen, Calculator, FlaskConical, FileText, Clock, ChevronRight, CheckCircle } from "lucide-react";
import { useState } from "react";

const sections = [
  { name: "English", icon: FileText, questions: 75, time: "45 min", color: "bg-rose-500", accuracy: 78 },
  { name: "Math", icon: Calculator, questions: 60, time: "60 min", color: "bg-teal-500", accuracy: 72 },
  { name: "Reading", icon: BookOpen, questions: 40, time: "35 min", color: "bg-cyan-500", accuracy: 68 },
  { name: "Science", icon: FlaskConical, questions: 40, time: "35 min", color: "bg-amber-500", accuracy: 65 },
];

const currentQuestion = {
  section: "Science",
  number: 12,
  total: 40,
  passage: "A scientist conducted an experiment to study the relationship between temperature and enzyme activity. Table 1 shows the results of measuring reaction rates at different temperatures.",
  question: "Based on the data in Table 1, at which temperature did the enzyme show the highest activity?",
  options: [
    { label: "A", text: "25°C" },
    { label: "B", text: "37°C" },
    { label: "C", text: "45°C" },
    { label: "D", text: "55°C" },
  ],
};

export default function PracticePage() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-foreground">Section Practice</h1>
        <p className="text-muted mt-1">Master each ACT section with targeted practice</p>
      </div>

      {/* Section Selection */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-8">
        {sections.map((section) => (
          <button
            key={section.name}
            className="bg-surface rounded-xl p-5 border border-border hover:border-primary/50 transition text-left group"
          >
            <div className={`w-12 h-12 rounded-xl ${section.color} flex items-center justify-center mb-4`}>
              <section.icon className="w-6 h-6 text-white" />
            </div>
            <h3 className="font-semibold text-foreground mb-1">{section.name}</h3>
            <div className="flex items-center gap-3 text-sm text-muted mb-3">
              <span>{section.questions} Q</span>
              <span>•</span>
              <span>{section.time}</span>
            </div>
            <div className="flex items-center justify-between">
              <div className="w-20 bg-border rounded-full h-2">
                <div
                  className={`h-2 rounded-full ${section.color}`}
                  style={{ width: `${section.accuracy}%` }}
                />
              </div>
              <span className="text-sm font-medium text-foreground">{section.accuracy}%</span>
            </div>
          </button>
        ))}
      </div>

      {/* Practice Question Interface */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <div className="bg-surface rounded-xl border border-border">
            {/* Question Header */}
            <div className="p-4 border-b border-border flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-amber-100 flex items-center justify-center">
                  <FlaskConical className="w-5 h-5 text-amber-600" />
                </div>
                <div>
                  <p className="font-medium text-foreground">{currentQuestion.section}</p>
                  <p className="text-sm text-muted">Question {currentQuestion.number} of {currentQuestion.total}</p>
                </div>
              </div>
              <div className="flex items-center gap-2 text-muted">
                <Clock className="w-4 h-4" />
                <span className="text-sm">0:52 per question avg</span>
              </div>
            </div>

            {/* Passage */}
            <div className="p-6 border-b border-border bg-muted/5">
              <p className="text-sm text-muted leading-relaxed">{currentQuestion.passage}</p>
            </div>

            {/* Question */}
            <div className="p-6">
              <p className="text-foreground font-medium mb-6">{currentQuestion.question}</p>

              {/* Answer Options */}
              <div className="space-y-3">
                {currentQuestion.options.map((option) => (
                  <button
                    key={option.label}
                    onClick={() => setSelectedAnswer(option.label)}
                    className={`w-full p-4 rounded-xl border text-left transition flex items-center gap-4 ${
                      selectedAnswer === option.label
                        ? "border-primary bg-primary/5"
                        : "border-border hover:border-primary/50"
                    }`}
                  >
                    <div
                      className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
                        selectedAnswer === option.label
                          ? "bg-primary text-white"
                          : "bg-muted/20 text-foreground"
                      }`}
                    >
                      {option.label}
                    </div>
                    <span className="text-foreground">{option.text}</span>
                  </button>
                ))}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center justify-between mt-6 pt-6 border-t border-border">
                <button className="px-4 py-2 text-muted hover:text-foreground transition">
                  Skip Question
                </button>
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => setShowExplanation(!showExplanation)}
                    className="px-4 py-2 rounded-lg border border-border text-foreground hover:bg-muted/10 transition"
                  >
                    Show Explanation
                  </button>
                  <button
                    disabled={!selectedAnswer}
                    className={`px-6 py-2 rounded-lg font-medium transition flex items-center gap-2 ${
                      selectedAnswer
                        ? "bg-primary text-white hover:bg-primary/90"
                        : "bg-muted/20 text-muted cursor-not-allowed"
                    }`}
                  >
                    Submit Answer
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Explanation */}
              {showExplanation && (
                <div className="mt-6 p-4 rounded-xl bg-green-50 border border-green-200">
                  <div className="flex items-center gap-2 text-green-700 font-medium mb-2">
                    <CheckCircle className="w-5 h-5" />
                    Correct Answer: B
                  </div>
                  <p className="text-sm text-green-700">
                    37°C is the optimal temperature for most enzymes, as this is close to human body temperature
                    where many biological enzymes function best. The data in Table 1 shows peak activity at this
                    temperature before declining due to denaturation at higher temperatures.
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Session Progress */}
        <div>
          <div className="bg-surface rounded-xl p-6 border border-border mb-6">
            <h3 className="font-semibold text-foreground mb-4">Session Progress</h3>
            <div className="space-y-4">
              <div>
                <div className="flex justify-between text-sm mb-2">
                  <span className="text-muted">Questions Completed</span>
                  <span className="font-medium text-foreground">11/40</span>
                </div>
                <div className="w-full bg-border rounded-full h-2">
                  <div className="bg-primary h-2 rounded-full" style={{ width: "27.5%" }} />
                </div>
              </div>
              <div className="flex justify-between py-2 border-t border-border">
                <span className="text-sm text-muted">Correct</span>
                <span className="text-sm font-medium text-green-500">8</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted">Incorrect</span>
                <span className="text-sm font-medium text-red-500">3</span>
              </div>
              <div className="flex justify-between">
                <span className="text-sm text-muted">Accuracy</span>
                <span className="text-sm font-medium text-foreground">73%</span>
              </div>
            </div>
          </div>

          {/* Quick Tips */}
          <div className="bg-gradient-to-br from-amber-50 to-orange-50 rounded-xl p-6 border border-amber-200">
            <h3 className="font-semibold text-amber-800 mb-3">Science Section Tips</h3>
            <ul className="space-y-2 text-sm text-amber-700">
              <li>• Skim passages quickly - focus on data</li>
              <li>• Look at graphs and tables first</li>
              <li>• Don&apos;t overthink - answers are in the data</li>
              <li>• Average 52 seconds per question</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
