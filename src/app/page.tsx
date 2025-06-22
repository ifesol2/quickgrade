'use client'

import React, { useState } from 'react'

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-blue-50 via-white to-blue-50 text-gray-900">
  <header className="bg-white shadow sticky top-0 z-30">
    <nav className="container mx-auto px-6 py-4 flex items-center justify-between">
      <a href="#" className="text-2xl font-extrabold text-blue-700 hover:text-blue-800 transition-colors" aria-label="QuickGrade homepage">QuickGrade</a>
      <MobileMenu />
    </nav>
  </header>

  <main className="flex-grow">
    {/* Hero Section */}
    <section
      aria-label="Hero section with headline, subheadline and dashboard mockup"
      className="container mx-auto px-6 pt-20 pb-16 flex flex-col-reverse lg:flex-row items-center lg:items-start gap-12 lg:gap-16"
    >
      <div className="lg:w-1/2 max-w-lg text-center lg:text-left">
        <h1 className="text-4xl sm:text-5xl font-extrabold leading-tight text-blue-900 mb-4">
          Grade Smarter, Not Harder.
        </h1>
        <p className="text-lg sm:text-xl text-gray-700 mb-8">
          Upload student work and get instant, AI-assisted grading with feedback — in minutes, not hours.
        </p>
        <a
          href="#early-access"
          className="inline-block bg-blue-600 text-white font-semibold px-8 py-3 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          aria-label="Request Early Access to QuickGrade"
        >
          Request Early Access
        </a>
      </div>

      <div className="lg:w-1/2 flex justify-center">
        <DashboardMockup />
      </div>
    </section>

    {/* How It Works */}
    <section
      id="how-it-works"
      aria-labelledby="how-it-works-title"
      className="bg-white py-16"
    >
      <div className="container mx-auto px-6">
        <h2 id="how-it-works-title" className="text-3xl font-extrabold text-blue-900 mb-10 text-center">
          How It Works
        </h2>
        <ol className="flex flex-col md:flex-row justify-center gap-12 max-w-5xl mx-auto text-center">
          <li className="flex flex-col items-center max-w-xs">
            <UploadIcon className="w-14 h-14 text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg text-blue-800 mb-2">Upload Student Submissions</h3>
            <p className="text-gray-600">PDFs, images, or typed text</p>
          </li>
          <li className="flex flex-col items-center max-w-xs">
            <RubricIcon className="w-14 h-14 text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg text-blue-800 mb-2">Choose a Rubric or Let AI Create One</h3>
            <p className="text-gray-600">Flexible grading criteria tailored to your needs</p>
          </li>
          <li className="flex flex-col items-center max-w-xs">
            <ReviewIcon className="w-14 h-14 text-blue-600 mb-4" aria-hidden="true" />
            <h3 className="font-semibold text-lg text-blue-800 mb-2">Get Smart Grades + Suggestions</h3>
            <p className="text-gray-600">Review and export your results effortlessly</p>
          </li>
        </ol>
      </div>
    </section>

    {/* Designed For */}
    <section
      aria-labelledby="designed-for-title"
      className="bg-blue-50 py-16"
    >
      <div className="container mx-auto px-6 max-w-4xl text-center">
        <h2 id="designed-for-title" className="text-3xl font-extrabold text-blue-900 mb-8">
          Designed For
        </h2>
        <ul className="grid grid-cols-2 sm:grid-cols-4 gap-8 text-gray-700 text-lg font-medium">
          <li>🎓 K-12 teachers</li>
          <li>🎓 College professors</li>
          <li>🎓 Tutors and EdTech companies</li>
          <li>🎓 Homeschooling parents</li>
        </ul>
      </div>
    </section>

    {/* Why Teachers Love It */}
    <section
      aria-labelledby="why-teachers-love-title"
      className="bg-white py-16"
    >
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 id="why-teachers-love-title" className="text-3xl font-extrabold text-blue-900 mb-10 text-center">
          Why Teachers Love It
        </h2>
        <ul className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 text-gray-700 text-lg font-semibold max-w-4xl mx-auto">
          <li className="flex items-center gap-3">
            <ClockIcon className="w-8 h-8 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <span>Saves hours every week</span>
          </li>
          <li className="flex items-center gap-3">
            <PenIcon className="w-8 h-8 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <span>Gives detailed, unbiased feedback</span>
          </li>
          <li className="flex items-center gap-3">
            <BrainIcon className="w-8 h-8 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <span>Learns from your grading style</span>
          </li>
          <li className="flex items-center gap-3">
            <RecordIcon className="w-8 h-8 text-blue-600 flex-shrink-0" aria-hidden="true" />
            <span>Keeps a digital record of everything</span>
          </li>
        </ul>
      </div>
    </section>

    {/* Testimonial */}
    <section
      aria-label="Testimonial from a teacher"
      className="bg-blue-50 py-16"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <blockquote className="text-xl italic font-semibold text-blue-900 mb-6 relative before:absolute before:-left-4 before:top-0 before:text-7xl before:text-blue-300 before:content-['“'] after:absolute after:-right-4 after:bottom-0 after:text-7xl after:text-blue-300 after:content-['”']">
          QuickGrade cut my Sunday night workload in half.
        </blockquote>
        <cite className="block text-gray-700 font-medium">— Ms. Allen, High School English Teacher</cite>
      </div>
    </section>

    {/* Final Call to Action */}
    <section
      id="early-access"
      aria-labelledby="final-cta-title"
      className="bg-white py-20"
    >
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <h2 id="final-cta-title" className="text-4xl font-extrabold text-blue-900 mb-6">
          Start grading like it’s 2025.
        </h2>
        <div className="flex flex-col sm:flex-row justify-center gap-6">
          <a
            href="#"
            className="inline-block bg-blue-600 text-white font-semibold px-10 py-4 rounded-md shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Try It Now
          </a>
          <a
            href="#"
            className="inline-block border-2 border-blue-600 text-blue-600 font-semibold px-10 py-4 rounded-md hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
          >
            Join the Beta
          </a>
        </div>
      </div>
    </section>
  </main>

  <footer className="bg-blue-900 text-blue-200 py-8">
    <div className="container mx-auto px-6 flex flex-col sm:flex-row justify-between items-center gap-6">
      <nav aria-label="Footer navigation" className="flex gap-6 text-sm font-medium">
        <a href="#" className="hover:text-white transition">FAQ</a>
        <a href="#" className="hover:text-white transition">Terms</a>
        <a href="#" className="hover:text-white transition">Privacy</a>
      </nav>
      <p className="text-sm italic select-none">Built with teachers, for teachers.</p>
      <SocialLinks />
    </div>
  </footer>

  {/* Mobile menu component */}
  <style jsx>{\`
    /* Hide scrollbar for dashboard mockup text area */
    .scrollbar-hide::-webkit-scrollbar {
      display: none;
    }
    .scrollbar-hide {
      -ms-overflow-style: none;
      scrollbar-width: none;
    }
  \`}</style>
</div>

{/* Components */}

function MobileMenu() {
  const [open, setOpen] = React.useState(false);

  return (
    <>
      <button
        type="button"
        aria-label="Toggle menu"
        aria-expanded={open}
        onClick={() => setOpen(!open)}
        className="lg:hidden p-2 rounded-md text-blue-700 hover:text-blue-900 hover:bg-blue-100 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" viewBox="0 0 24 24" aria-hidden="true">
          {open ? (
            <path d="M6 18L18 6M6 6l12 12" />
          ) : (
            <path d="M3 12h18M3 6h18M3 18h18" />
          )}
        </svg>
      </button>
      <nav
        className={\`lg:hidden fixed top-16 right-0 w-56 bg-white shadow-lg rounded-l-md border border-blue-100 transition-transform transform \${
          open ? 'translate-x-0' : 'translate-x-full'
        }\`}
        aria-label="Mobile navigation"
      >
        <ul className="flex flex-col p-4 space-y-4 text-blue-700 font-semibold">
          <li>
            <a href="#how-it-works" onClick={() => setOpen(false)} className="block hover:text-blue-900 transition">
              How It Works
            </a>
          </li>
          <li>
            <a href="#designed-for-title" onClick={() => setOpen(false)} className="block hover:text-blue-900 transition">
              Designed For
            </a>
          </li>
          <li>
            <a href="#why-teachers-love-title" onClick={() => setOpen(false)} className="block hover:text-blue-900 transition">
              Why Teachers Love It
            </a>
          </li>
          <li>
            <a href="#early-access" onClick={() => setOpen(false)} className="block hover:text-blue-900 transition">
              Request Early Access
            </a>
          </li>
        </ul>
      </nav>
    </>
  );
}

function DashboardMockup() {
  return (
    <div
      className="flex flex-col sm:flex-row bg-white rounded-xl shadow-xl overflow-hidden max-w-full w-full border border-gray-200"
      role="region"
      aria-label="Dashboard mockup showing student work and AI grading"
    >
      {/* Left panel: student essay */}
      <div className="sm:w-1/2 p-6 bg-gray-50 flex flex-col">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">Student Essay</h3>
        <article
          className="flex-grow overflow-y-auto scrollbar-hide prose max-h-[320px] pr-2 text-gray-800"
          aria-label="Student essay or worksheet content"
        >
          <p>
            The industrial revolution was a period of major industrialization that took place during the late 1700s and early 1800s. It started in Great Britain and quickly spread to other parts of the world.
          </p>
          <p>
            This era saw the development of new machinery, such as the spinning jenny and the steam engine, which greatly increased production capabilities.
          </p>
          <p>
            The revolution also brought about significant social changes, including urbanization and changes in labor systems.
          </p>
          <p>
            Overall, the industrial revolution marked a major turning point in history, influencing the way we live and work today.
          </p>
        </article>
      </div>

      {/* Right panel: AI-generated grade and feedback */}
      <div className="sm:w-1/2 p-6 bg-white flex flex-col border-l border-gray-200">
        <h3 className="text-lg font-semibold text-blue-800 mb-4">AI-Generated Grade & Feedback</h3>
        <div className="flex-grow overflow-y-auto scrollbar-hide max-h-[320px]">
          <dl className="space-y-4 text-gray-800">
            <div>
              <dt className="font-semibold text-blue-700">Grade:</dt>
              <dd className="text-3xl font-extrabold text-green-600">B+</dd>
            </div>
            <div>
              <dt className="font-semibold text-blue-700 mb-2">Rubric Breakdown:</dt>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Content Accuracy: 85%</li>
                <li>Clarity & Structure: 90%</li>
                <li>Grammar & Spelling: 80%</li>
                <li>Originality: 88%</li>
              </ul>
            </div>
            <div>
              <dt className="font-semibold text-blue-700 mb-2">Feedback Comments:</dt>
              <ul className="list-disc list-inside space-y-1 text-gray-700">
                <li>Great explanation of the industrial revolution's key inventions.</li>
                <li>Consider adding more examples to support your points.</li>
                <li>Watch out for minor grammatical errors in the third paragraph.</li>
                <li>Excellent organization and flow throughout the essay.</li>
              </ul>
            </div>
          </dl>
        </div>
      </div>
    </div>
  );
}

// Icons (Font Awesome classes used, but SVG paths included for self-containment)

function UploadIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <path d="M4 17v2a2 2 0 002 2h12a2 2 0 002-2v-2" />
      <polyline points="7 9 12 4 17 9" />
      <line x1="12" y1="4" x2="12" y2="16" />
    </svg>
  );
}

function RubricIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <rect x="3" y="4" width="18" height="16" rx="2" ry="2" />
      <line x1="3" y1="10" x2="21" y2="10" />
      <line x1="7" y1="16" x2="7" y2="16" />
      <line x1="11" y1="16" x2="11" y2="16" />
      <line x1="15" y1="16" x2="15" y2="16" />
      <line x1="19" y1="16" x2="19" y2="16" />
    </svg>
  );
}

function ReviewIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

function ClockIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <circle cx="12" cy="12" r="10" />
      <polyline points="12 6 12 12 16 14" />
    </svg>
  );
}

function PenIcon(props) {
  return (
    <svg
      {...props}
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
      aria-hidden="true"
      role="img"
    >
      <path d="M12 20h9" />
  )
}