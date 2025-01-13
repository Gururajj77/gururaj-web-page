export default function Skills() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Skills</h1>
      <div className="grid grid-cols-2 gap-8">
        <div>
          <h2 className="text-2xl font-bold mb-4">Development</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>React.js & Angular</li>
            <li>TypeScript & JavaScript</li>
            <li>HTML5 & Tailwind CSS</li>
            <li>SCSS & CSS3</li>
            <li>GraphQL</li>
            <li>Nx & Lerna (Monorepo Tools)</li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold mb-4">Testing & Tools</h2>
          <ul className="list-disc list-inside space-y-2">
            <li>Jest</li>
            <li>React Testing Library</li>
            <li>Playwright (Visual Regression)</li>
            <li>Accessibility Testing</li>
            <li>Storybook</li>
            <li>Git Version Control</li>
          </ul>
        </div>
      </div>
    </div>
  );
}
