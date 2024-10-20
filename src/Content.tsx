import { About } from './content-sections/About';
import { Projects } from './content-sections/Projects';
import { WorkExperience } from './content-sections/WorkExperience';

export const Content = () => {
  return (
    <main id="content" className="pt-24 lg:w-1/2 lg:py-24">
      <About />
      <WorkExperience />
      <Projects />
    </main>
  );
};
