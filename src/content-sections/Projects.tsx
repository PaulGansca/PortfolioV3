import { ProjectTile } from './ProjectTile';
import { Section } from './Section';
import flex from '../assets/flex.png';
import bodysculpt from '../assets/BodySculpt.png';
import expensivo from '../assets/ExpensivoThumbnail.png';
import pubCrawl from '../assets/mockuper(9).png';
import pubCrawl3 from '../assets/mockuper(10).png';
import pubCrawl4 from '../assets/mockuper(11).png';
import pubCrawl5 from '../assets/mockuper(12).png';
import pubCrawl11 from '../assets/mockuper(8).png';
import { Modal } from '../Modal';
import { useState } from 'react';
import SlideShow from '../SlideShow';

export const Projects = ({
  setActiveSection,
}: {
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [showModal, setShowModal] = useState(false);
  const [modalContent, setModalContent] = useState(<></>);
  const slideshowData = [
    { id: 0, imageLocation: pubCrawl4 },
    { id: 1, imageLocation: pubCrawl },
    { id: 2, imageLocation: pubCrawl11 },
    { id: 3, imageLocation: pubCrawl5 },
    { id: 4, imageLocation: pubCrawl3 },
  ];
  return (
    <Section
      setActiveSection={setActiveSection}
      id="projects"
      ariaLabel="Projects Showcase"
    >
      <>
        <div className="sticky top-0 z-20 -mx-6 mb-4 w-screen bg-slate-900/75 px-6 py-5 backdrop-blur md:-mx-12 md:px-12 lg:sr-only lg:relative lg:top-auto lg:mx-auto lg:w-full lg:px-0 lg:py-0 lg:opacity-0">
          <h2 className="text-sm font-bold uppercase tracking-widest text-slate-200 lg:sr-only">
            Projects
          </h2>
        </div>
        <ul className="group/list">
          <ProjectTile
            title="Flex SRL"
            description={`Built a website for a Software Consultancy firm. 
            From loose concepts in figma and minimalistic colour palette to a cohesive
            presentation of services covered, introduction of developers and contact
            form to convert leads`}
            link="https://www.flexinit.eu/"
            imgSrc={flex}
            skills={['React', 'Typescript', 'Tailwind CSS', 'Vercel', 'Figma']}
          />
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              setModalContent(
                <iframe
                  width="560"
                  height="400"
                  src="https://www.youtube.com/embed/Pj_aXRnMbNw?si=JQxSLn9hjvuA4UJu"
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  referrerPolicy="strict-origin-when-cross-origin"
                  className="max-w-[80vw]"
                  allowFullScreen
                ></iframe>
              );
              setShowModal(true);
            }}
          >
            <ProjectTile
              title="Expensivo"
              description={`Finance tracking application that leveraged AI to analyze and visualize financial data.
            The goal of the app was to allow users to upload bank statements, and use AI to extract key data,
            generate insights, and display them in a clear, user-friendly interface. The app was designed to handle
            a variety of screen sizes and devices, ensuring a seamless experience anywhere.`}
              imgSrc={expensivo}
              skills={[
                'AI',
                'Next JS',
                'Typescript',
                'Tailwind CSS',
                'Shadcn',
                'Suppabase',
              ]}
            />
          </div>
          <div
            className="hover:cursor-pointer"
            onClick={() => {
              setModalContent(
                <SlideShow data={slideshowData} nonInteractive />
              );
              setShowModal(true);
            }}
          >
            <ProjectTile
              title="PubCrawl"
              description={`In a world where travelers seek authentic local experiences, Pub Crawl, a mobile app,
            has revolutionized the way enthusiasts explore new cities. This innovative platform offers curated
            recommendations for exciting pub crawls in any city you choose to visit. Whether you're a seasoned
            traveler or a curious local, Pub Crawl equips you with the ultimate tool to savor the flavors of
            local watering holes. Not only can you access pre-designed crawls, but you can also create and save
            your personalized pub crawls, ensuring you're always in control of your adventure.`}
              imgSrc={pubCrawl}
              skills={[
                'React Native',
                'Typescript',
                'Tailwind CSS',
                'Express',
                'Prisma',
              ]}
            />
          </div>
          <ProjectTile
            title="Body Sculpt"
            description={`Fitness is a journey, and it's different for everyone. People of all ages and fitness
            levels often struggle to find the right personalized workout routines that align with their goals,
            whether it's weight loss, muscle gain or overall health improvement. BodySculpt is an AI-powered
            web app that takes the guesswork out of fitness. It starts with a few preliminary questions to
            understand the user's goals, fitness level, available equipment, and time commitment. Armed with
            this information, BodySculpt's AI engine goes to work, generating tailored workout splits and
            supplying detailed exercise information. `}
            link="https://body-sculpt-5ab47.web.app/"
            imgSrc={bodysculpt}
            skills={['React', 'Typescript', 'Firebase', 'Mongo', 'Figma']}
          />
        </ul>
        <Modal
          showModal={showModal}
          setShowModal={setShowModal}
          headerText="Demo"
          body={<div className="my-4">{modalContent}</div>}
        />
      </>
    </Section>
  );
};
