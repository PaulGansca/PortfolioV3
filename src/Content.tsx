import { About } from './content-sections/About';
import { Projects } from './content-sections/Projects';
import { WorkExperience } from './content-sections/WorkExperience';

export const Content = ({
  setActiveSection,
}: {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About setActiveSection={setActiveSection} />
      <WorkExperience setActiveSection={setActiveSection} />
      <Projects setActiveSection={setActiveSection} />
      <footer className="max-w-md pb-16 text-sm text-slate-500 sm:pb-0">
        <p>
          Inspiration for this simply beautiful layout found in Brittany
          Chiang's
          <a
            href="https://brittanychiang.com/"
            className="pl-1 font-medium text-slate-400 hover:text-teal-300 focus-visible:text-teal-300"
            target="_blank"
            rel="noreferrer noopener"
            aria-label="Figma (opens in a new tab)"
          >
            website
          </a>
          .
        </p>
      </footer>
    </main>
  );
};
