export default function Projects() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Projects</h1>
      <div className="space-y-8">
        <div className="dotted-border p-4 relative mb-2">
          <h2 className="text-2xl font-bold mb-2">E-commerce Platform</h2>
          <p className="text-sm mb-2">React, Node.js, PostgreSQL</p>
          <p>A full-stack e-commerce solution with real-time inventory management.</p>
        </div>
        <div className="dotted-border p-4 relative mb-2">
          <h2 className="text-2xl font-bold mb-2">Analytics Dashboard</h2>
          <p className="text-sm mb-2">Next.js, D3.js, Firebase</p>
          <p>Real-time analytics dashboard for monitoring business metrics.</p>
        </div>
      </div>
    </div>
  )
}

