import { Trophy, Target, TrendingUp, Users, Clock, Shield } from "lucide-react";
import Link from "next/link";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center gap-2">
              <div className="w-8 h-8 bg-gradient-to-r from-teal-600 to-cyan-600 rounded-lg flex items-center justify-center">
                <Trophy className="w-5 h-5 text-white" />
              </div>
              <span className="font-bold text-xl">My ACT Prep AI</span>
            </Link>
            <Link
              href="/"
              className="text-gray-600 hover:text-gray-900 transition"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            About <span className="bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">My ACT Prep AI</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            We&apos;re making comprehensive ACT preparation accessible to every student with intelligent, adaptive AI technology.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl font-bold mb-8 text-center">Our Mission</h2>
          <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              The ACT is unique - with its Science section, strict timing, and different scoring system, it requires specialized preparation. Yet most students either can&apos;t afford comprehensive prep courses or spend time on generic materials that don&apos;t address their specific weaknesses.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed mb-6">
              My ACT Prep AI was built to solve this problem. <strong>Our AI creates a truly personalized ACT prep experience</strong> - analyzing your performance across all four sections, identifying exactly where you lose points, and building a custom study plan that maximizes your score improvement.
            </p>
            <p className="text-lg text-gray-600 leading-relaxed">
              From time management strategies to section-specific techniques, we give every student the tools they need to conquer the ACT.
            </p>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Results</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">+4</p>
              <p className="text-gray-600 mt-2">Avg. Composite Improvement</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">30K+</p>
              <p className="text-gray-600 mt-2">Students Prepared</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">6</p>
              <p className="text-gray-600 mt-2">Full Practice Tests</p>
            </div>
            <div className="text-center">
              <p className="text-5xl font-bold bg-gradient-to-r from-teal-600 to-cyan-600 bg-clip-text text-transparent">4.8</p>
              <p className="text-gray-600 mt-2">Average Rating</p>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl font-bold mb-12 text-center">Our Values</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-teal-100 rounded-xl flex items-center justify-center mb-4">
                <Target className="w-6 h-6 text-teal-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">ACT-Specific Focus</h3>
              <p className="text-gray-600">We specialize in the ACT. Our strategies, content, and practice tests are built specifically for this exam.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-rose-100 rounded-xl flex items-center justify-center mb-4">
                <Clock className="w-6 h-6 text-rose-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Time Mastery</h3>
              <p className="text-gray-600">The ACT is a race against the clock. Our time management tools are designed to help you finish every section.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-cyan-100 rounded-xl flex items-center justify-center mb-4">
                <TrendingUp className="w-6 h-6 text-cyan-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Measurable Progress</h3>
              <p className="text-gray-600">Track your improvement with predicted scores and detailed analytics. Know exactly where you stand.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-purple-100 rounded-xl flex items-center justify-center mb-4">
                <Users className="w-6 h-6 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Accessibility</h3>
              <p className="text-gray-600">Every student deserves access to quality ACT prep. We offer free tiers and affordable premium plans.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-amber-100 rounded-xl flex items-center justify-center mb-4">
                <Shield className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">Student Privacy</h3>
              <p className="text-gray-600">Your data stays private. We never sell student information and maintain strict security standards.</p>
            </div>
            <div className="bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-lg transition">
              <div className="w-12 h-12 bg-green-100 rounded-xl flex items-center justify-center mb-4">
                <Trophy className="w-6 h-6 text-green-600" />
              </div>
              <h3 className="text-xl font-bold mb-2">College Success</h3>
              <p className="text-gray-600">We connect your scores to college opportunities. Our matching feature helps you set meaningful goals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-8">Our Team</h2>
          <p className="text-lg text-gray-600 mb-8">
            We&apos;re a team of ACT experts, educators, and AI engineers passionate about helping students succeed. Our team includes former ACT tutors, test prep curriculum designers, and data scientists who specialize in adaptive learning.
          </p>
          <div className="bg-gray-50 rounded-2xl p-8 border border-gray-100">
            <p className="text-gray-600 mb-4">
              <strong>Founded:</strong> 2024
            </p>
            <p className="text-gray-600 mb-4">
              <strong>Headquarters:</strong> Chicago, IL
            </p>
            <p className="text-gray-600">
              <strong>Students Helped:</strong> 30,000+ and growing
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Conquer the ACT?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Join thousands of students who&apos;ve improved their ACT scores with intelligent, AI-powered preparation.
          </p>
          <Link
            href="/signup"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-teal-600 to-cyan-600 text-white px-8 py-4 rounded-full font-semibold text-lg hover:opacity-90 transition"
          >
            Start Your Free Practice
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-gray-400">&copy; {new Date().getFullYear()} My ACT Prep AI. All rights reserved.</p>
          <div className="flex justify-center gap-6 mt-4 text-gray-400">
            <Link href="/privacy" className="hover:text-white transition">Privacy</Link>
            <Link href="/terms" className="hover:text-white transition">Terms</Link>
            <Link href="/" className="hover:text-white transition">Home</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
