export default function Experience() {
  return (
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold mb-8">Experience</h1>
      <div className="space-y-8">
        <div>
          <h2 className="text-2xl font-bold">
            Frontend Developer, Carbon Design System
          </h2>
          <p className="text-lg mb-2">
            IBM India Pvt. Ltd. | February 2024 - Present
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Implemented Codecov in monorepo achieving 85% coverage for
              @carbon/react library
            </li>
            <li>
              Shipped optimized UI components with 3,400+ implementations in 2
              months
            </li>
            <li>
              Led TypeScript migration with 80% downstream adoption and improved
              type safety
            </li>
            <li>
              Grew @carbon/react community from 15 to 50+ developers with 3%
              faster adoption
            </li>
            <li>
              Provided technical support to 5000+ developers through Slack
              engagement
            </li>
          </ul>
        </div>
        <div>
          <h2 className="text-2xl font-bold">
            Project Engineer, Cloud Migration and Modernization
          </h2>
          <p className="text-lg mb-2">
            WIPRO LIMITED - Wells Fargo | September 2021 - February 2024
          </p>
          <ul className="list-disc list-inside space-y-2">
            <li>
              Modernized 5 enterprise apps from WebForms to Angular 14-16 with
              reusable component library
            </li>
            <li>
              Built responsive Angular applications with 100% test coverage
              using Jasmine/Karma
            </li>
            <li>
              Optimized CI/CD pipelines and implemented secure API integrations
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
