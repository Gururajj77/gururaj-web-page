export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Frontend</h2>
          <ul className="list-disc list-inside">
            <li>React & Next.js</li>
            <li>TypeScript</li>
            <li>TailwindCSS</li>
            <li>Redux</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Backend</h2>
          <ul className="list-disc list-inside">
            <li>Node.js</li>
            <li>Express</li>
            <li>PostgreSQL</li>
            <li>GraphQL</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

