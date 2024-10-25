import { WorkExperienceTile } from './WorkExperienceTile';
import cvPaul from '../assets/Paul Mihai Gansca Software Engineer CV.pdf';
import { Section } from './Section';

export const WorkExperience = ({
  setActiveSection,
}: {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Section
      setActiveSection={setActiveSection}
      id={'workexperience'}
      ariaLabel={'Work Experience'}
    >
      <>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Experience
          </h2>
        </div>
        <div>
          <ol className="group/list">
            <WorkExperienceTile
              jobTitle="Lead Front End Developer"
              company="Qubiz"
              description={`Build and maintain critical frontend components and user stories across all products.
            Enhanced developer experience, by updating toolset and optimizing development process. Mentored a team of 7 interns through a custom curriculum,
            guiding them in building an internal web app and providing detailed code reviews. Led weekly front-end
            team meetings focused on improvemetns while fostering a collaborative environment.`}
              period={['2021', 'Present']}
              linkToCompany="https://qubiz.com/"
              skills={[
                'React',
                'Next JS',
                'Typescript',
                'Redux',
                'Node JS',
                'CSS & SCSS',
                'React Native',
              ]}
            />
            <WorkExperienceTile
              jobTitle="Full Stack Developer"
              company="Nomura"
              description={`Developed and deployed a custom survey tool (similar to SurveyMonkey) for internal use,
            replacing SharePoint surveys and Google Forms, which saved £2 million in subscription costs. 
            The tool saw rapid adoption with a peak of 20,000 users in a week and hundreds of surveys created
            throughout the year. I built the front end with React JS, used Redux for state management and
            developed the back end using Node JS and MySQL. I managed the project with JIRA and conducted 
            stakeholder demos to ensure alignment with priorities and gather feedback.`}
              period={['2019', '2020']}
              linkToCompany="https://www.nomura.com/"
              skills={[
                'React',
                'Redux',
                'Node JS',
                'CSS & SCSS',
                'MySql',
                'JQuery',
                'JavaScript',
                'MongoDB',
              ]}
            />
          </ol>
          <div className="mt-12">
            <a
              className="inline-flex items-baseline leading-tight hover:text-blue-400 focus-visible:text-blue-400 font-semibold text-slate-200 group/link text-base"
              href={cvPaul}
              target="_blank"
              rel="noreferrer noopener"
              aria-label="View Full Résumé (opens in a new tab)"
            >
              <span>
                View Full{' '}
                <span className="inline-block">
                  Résumé
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 20 20"
                    fill="currentColor"
                    className="inline-block h-4 w-4 shrink-0 transition-transform group-hover/link:-translate-y-1 group-hover/link:translate-x-1 group-focus-visible/link:-translate-y-1 group-focus-visible/link:translate-x-1 motion-reduce:transition-none ml-1 translate-y-px"
                    aria-hidden="true"
                  >
                    <path
                      fillRule="evenodd"
                      d="M5.22 14.78a.75.75 0 001.06 0l7.22-7.22v5.69a.75.75 0 001.5 0v-7.5a.75.75 0 00-.75-.75h-7.5a.75.75 0 000 1.5h5.69l-7.22 7.22a.75.75 0 000 1.06z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </span>
              </span>
            </a>
          </div>
        </div>
      </>
    </Section>
  );
};
