export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto px-4 lg:px-0 pb-20 lg:pb-0">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>

      <div className="dotted-border p-4 sm:p-6 lg:p-8 relative">
        {/* Company Header */}
        <div className="mb-6 lg:mb-8">
          <h2 className="text-2xl lg:text-3xl font-bold mb-3">
            Edzeeta Digital Platform
          </h2>
          <div className="flex flex-wrap gap-2 sm:gap-3 text-sm mb-6">
            <span className="px-2 sm:px-3 py-1 rounded-full border border-border">
              Next.js
            </span>
            <span className="px-2 sm:px-3 py-1 rounded-full border border-border">
              Firebase
            </span>
            <span className="px-2 sm:px-3 py-1 rounded-full border border-border">
              ShadcN UI
            </span>
            <span className="px-2 sm:px-3 py-1 rounded-full border border-border">
              Google Sheets
            </span>
          </div>
        </div>

        {/* Projects List */}
        <div className="space-y-4 sm:space-y-6">
          {/* Test Platform */}
          <div className="p-4 sm:p-6 border-2 border-border rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Online Test Platform
            </h3>
            <p className="text-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">
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
              cit-exam.edzeeta.in &rarr;
            </a>
          </div>

          {/* Registration System */}
          <div className="p-4 sm:p-6 border-2 border-border rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Course Registration
            </h3>
            <p className="text-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">
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
              registration.edzeeta.in &rarr;
            </a>
          </div>

          {/* Landing Page */}
          <div className="p-4 sm:p-6 border-2 border-border rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Platform Landing
            </h3>
            <p className="text-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">
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
              cit.edzeeta.in &rarr;
            </a>
          </div>

          {/* Careers Portal */}
          <div className="p-4 sm:p-6 border-2 border-border rounded-lg">
            <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">
              Careers Portal
            </h3>
            <p className="text-foreground/80 mb-3 sm:mb-4 text-sm sm:text-base">
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
              careers.edzeeta.in &rarr;
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
