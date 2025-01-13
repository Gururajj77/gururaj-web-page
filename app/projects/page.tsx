export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="dotted-border p-8 relative">
        {/* Company Header */}
        <div className="mb-8">
          <h2 className="text-3xl font-bold mb-3">Edzeeta Digital Platform</h2>
          <div className="flex flex-wrap gap-3 text-sm mb-6">
            <span className="px-3 py-1 rounded-full border border-border">
              Next.js
            </span>
            <span className="px-3 py-1 rounded-full border border-border">
              Firebase
            </span>
            <span className="px-3 py-1 rounded-full border border-border">
              ShadcN UI
            </span>
            <span className="px-3 py-1 rounded-full border border-border">
              Google Sheets
            </span>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-6">
          {/* Test Platform */}
          <div className="p-6 border-2 border-border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Online Test Platform</h3>
            <p className="text-foreground/80 mb-4">
              Secure assessment platform with real-time evaluation and result
              tracking. Students can take tests online with automated scoring
              and immediate feedback.
            </p>
            <a
              href="https://cit-exam.edzeeta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm hover:underline text-foreground/60 hover:text-foreground transition-colors"
            >
              cit-exam.edzeeta.in →
            </a>
          </div>

          {/* Registration System */}
          <div className="p-6 border-2 border-border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Course Registration</h3>
            <p className="text-foreground/80 mb-4">
              Complete registration system with admin dashboard for managing
              time-limited coupons. Includes individual and combo coupon
              generation with usage tracking.
            </p>
            <a
              href="https://registration.edzeeta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm hover:underline text-foreground/60 hover:text-foreground transition-colors"
            >
              registration.edzeeta.in →
            </a>
          </div>

          {/* Landing Page */}
          <div className="p-6 border-2 border-border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Platform Landing</h3>
            <p className="text-foreground/80 mb-4">
              Modern landing page showcasing test platform features and
              benefits. Optimized for conversion with clear calls-to-action and
              responsive design.
            </p>
            <a
              href="https://cit.edzeeta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm hover:underline text-foreground/60 hover:text-foreground transition-colors"
            >
              cit.edzeeta.in →
            </a>
          </div>

          {/* Careers Portal */}
          <div className="p-6 border-2 border-border rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Careers Portal</h3>
            <p className="text-foreground/80 mb-4">
              Dedicated careers page with dynamic job listings and integrated
              application form. Features direct submission handling and
              applicant tracking.
            </p>
            <a
              href="https://careers.edzeeta.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block text-sm hover:underline text-foreground/60 hover:text-foreground transition-colors"
            >
              careers.edzeeta.in →
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
