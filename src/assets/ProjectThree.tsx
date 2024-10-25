import pubCrawl2 from "../assets/mockuper(9).png";
import pubCrawl3 from "../assets/mockuper(10).png";
import pubCrawl4 from "../assets/mockuper(11).png";
import pubCrawl5 from "../assets/mockuper(12).png";
import pubCrawl11 from "../assets/mockuper(8).png";
import useLoadAnimation from "../hooks/useLoadAnimation";
import SlideShow, { ProjectImage } from "../components/SlideShow";

const ProjectThreePage = () => {
  const { loadAnimationOnMount, ref } = useLoadAnimation();
  const slideshowData: ProjectImage[] = [
    { id: 0, imageLocation: pubCrawl4 },
    { id: 1, imageLocation: pubCrawl2 },
    { id: 2, imageLocation: pubCrawl11 },
    { id: 3, imageLocation: pubCrawl5 },
    { id: 4, imageLocation: pubCrawl3 },
  ];

  return (
    <div ref={ref} className="h-full flex mt-20  flex-wrap">
      <div className="max-lg:mx-0 bg-white relative text-black">
        <div
          className={`flex lg:px-[12%] px-[7.5%] justify-around sm:justify-start items-start flex-wrap ${
            loadAnimationOnMount ? "mounted" : "first-render"
          }`}
        >
          <img
            className="max-lg:w-full w-1/2  mx-auto rounded-xl"
            src={pubCrawl2}
          />
          <div className="flex max-md:flex-col flex-row items-center justify-between w-full mt-20">
            <div className="mr-32 max-md:mr-0">
              <h2 className="font-bold text-3xl mb-5">Case Study:</h2>
              <p>
                In a world where travelers seek authentic local experiences, Pub
                Crawl, a mobile web app, has revolutionized the way enthusiasts
                explore new cities. This innovative platform offers curated
                recommendations for exciting pub crawls in any city you choose
                to visit. Whether you're a seasoned traveler or a curious local,
                Pub Crawl equips you with the ultimate tool to savor the flavors
                of local watering holes. Not only can you access pre-designed
                crawls, but you can also create and save your personalized pub
                crawls, ensuring you're always in control of your adventure.
                <br />
                <br />
                The brilliance of Pub Crawl doesn't stop there. The app also
                fosters community engagement by allowing users to share their
                self-crafted pub crawls with friends and fellow travelers. These
                personalized crawls can be liked and rated by others, creating a
                dynamic hub of user-generated content. With GPS tracking,
                distance calculations, and precise location pins, Pub Crawl
                ensures you're never lost on your quest to discover the hidden
                gems of any city's nightlife. This app embodies the spirit of
                exploration, bringing people together over pints and experiences
                in a unique and engaging way.
                <br />
                <br />
                So, whether you're in a familiar city or exploring a new one,
                Pub Crawl is your ultimate guide to unforgettable nights out.
                With its user-driven, interactive features, it transforms
                ordinary pub crawls into unforgettable, community-building
                adventures, showcasing the power of technology to connect people
                with their surroundings and each other in a way that is both
                enjoyable and educational. Pub Crawl has truly become the go-to
                app for those who want to explore, connect, and revel in the
                essence of local nightlife.
              </p>
            </div>
            <div className="flex flex-col gap-2 w-full max-md:mt-10 max-md:flex-row max-md:gap-3">
              <div>
                <p className=" font-bold text-blue-500 ">Name</p>
                <p>Pub Crawl</p>
              </div>
              <div>
                <p className=" font-bold text-blue-500 ">Industry</p>
                <p>Travel & Local</p>
              </div>
              <div>
                <p className="font-bold text-blue-500 ">Link</p>
                <div className="leading-[20px]">
                  <p className="font-medium">Design</p>
                  <p className="font-medium">Web Dev</p>
                  <p className="font-medium">Mobile App</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <SlideShow data={slideshowData} nonInteractive />
      </div>
    </div>
  );
};

export default ProjectThreePage;
