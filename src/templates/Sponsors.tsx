import { Section } from '@/layout/Section';

const Sponsors = () => (
  <Section
    title="What our future looks like"
    // description="Our Partners' exceptional support has made this project possible."
  >
    <table className="mx-auto border-collapse">
      <tbody>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3 text-center">
            <a>
              <h3 className="font-bold">Research</h3>
              <p>
                We are looking to test techniques, therapies and technologies
                that improve mental wellness. Help create best practice
                materials for our community by giving us your feedback
              </p>
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <a>
              <h3 className="font-bold">Building community</h3>
              <p>
                We look to leverage and integrate innovative digital and in
                person methods to build and develop community that is replicable
                and scalable. White paper coming soon!
              </p>
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <a>
              <h3 className="font-bold">Partners</h3>
              <p>
                We are looking for collaboration partners to help with all
                aspects of our project from medical institutions and experts,
                volunteers, educational centers, marketeers to researchers to
                subject matter experts.
              </p>
            </a>
          </td>
        </tr>
        <tr className="h-56">
          <td className="border-2 border-gray-300 p-3 text-center">
            <a>
              <h3 className="font-bold">Mission</h3>
              <p>
                To build supportive mental health communities and spaces with a
                focus on neurodiversity
              </p>
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <a>
              <h3 className="font-bold">Vision</h3>
              <p>
                Foster human connections to action mental health change and
                growth
              </p>
            </a>
          </td>
          <td className="border-2 border-gray-300 p-3 text-center">
            <a>
              <h3 className="font-bold">Purpose</h3>
              <p>
                To improve people’s mental wellness outcomes through community
                development, education and innovation
              </p>
            </a>
          </td>
        </tr>
      </tbody>
    </table>
  </Section>
);

export { Sponsors };
