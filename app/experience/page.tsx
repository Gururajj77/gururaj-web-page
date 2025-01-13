export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">Senior Full Stack Developer</h2>
          <p className="mb-2">TechCorp Inc. | 2021 - Present</p>
          <ul className="list-disc list-inside">
            <li>Led development of enterprise web applications</li>
            <li>Implemented microservices architecture</li>
            <li>Mentored junior developers</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">Full Stack Developer</h2>
          <p className="mb-2">WebSolutions Co. | 2019 - 2021</p>
          <ul className="list-disc list-inside">
            <li>Developed responsive web applications using React</li>
            <li>Optimized backend performance for high-traffic sites</li>
            <li>Implemented CI/CD pipelines</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

