import { Section } from './Section';
import { TextHighlight } from './text-highlight';

export const About = ({
  setActiveSection,
}: {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  return (
    <Section
      setActiveSection={setActiveSection}
      id={'about'}
      ariaLabel={'About me'}
    >
      <>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            About
          </h2>
        </div>
        <div>
          <p className="mb-4">
            With <TextHighlight text={'over 4 years'} /> of experience in
            building scalable, high-performance web applications and leading
            front-end teams. Proven track record of driving cost-saving
            initiatives and optimizing workflows through modern tech stacks like
            <TextHighlight text={' React '} />,
            <TextHighlight text={' React Native '} />,
            <TextHighlight text={' Next JS'} />,
            <TextHighlight text={' Typescript'} />,
            <TextHighlight text={' Redux'} />, and
            <TextHighlight text={' Node.js'} />. Skilled in mentoring teams and
            delivering solutions that align with business goals. Strong
            background in project management, stakeholder communication, and
            Agile methodologies. Seeking opportunities to lead innovative
            projects and deliver technical excellence.
          </p>
          <p className="mb-4">
            These days I play around with <TextHighlight text={'AI'} /> trying
            to discover how to best use it to solve problems I face in my day to
            day life. One such example is <TextHighlight text={'Expensivo'} /> a
            finance tracker that ingests financial statements and extracts
            transactions from them. It then helps you understand where money
            flows using beautfiul visualizations. Besides my fulltime job I also
            manage
            <TextHighlight text={'Flex'} /> your one stop shop for App
            development needs.
          </p>
          <p>
            When I'm not coding I enjoy drinking overpriced coffee in the city
            centre. I love eating out things that I'm not able to make at home,
            then going boxing or weight training to burn off the food baby.
          </p>
        </div>
      </>
    </Section>
  );
};
