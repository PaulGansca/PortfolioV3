import { useEffect, useState } from 'react';
import { twMerge } from 'tailwind-merge';
import { AnimatePresence, motion, PanInfo, Variants } from 'framer-motion';
import useMobileOrTablet from './hooks/useMobile';
import './SlideShowStyles.css';
const variants: Variants = {
  initial: {
    opacity: 0.2,
  },
  animate: {
    opacity: 1,
    transition: {
      opacity: { type: 'tween', duration: 0.75, ease: 'easeIn' },
    },
  },
  exit: {
    opacity: 0,
    zIndex: 20,
  },
};

export type ProjectImage = {
  id: number;
  imageLocation: string;
  title?: string;
  text?: string;
};

const SlideShow = ({
  data,
  nonInteractive,
}: {
  data: ProjectImage[];
  nonInteractive?: boolean;
}) => {
  const [selectedItemIndex, setSelectedItemIndex] = useState<number>(0);
  const { isTablet } = useMobileOrTablet();
  const [activeOption, setActiveOption] = useState<number | null>(0);

  const handleOptionClick = (index: number) => {
    setActiveOption(index);
  };

  useEffect(() => {
    if (!data?.length) return;

    const interval = setInterval(() => {
      setSelectedItemIndex((item) => (item + 1) % data?.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [data?.length, selectedItemIndex]);

  if (!data?.length) return null;

  const handleLeft = () => {
    setSelectedItemIndex(
      selectedItemIndex === 0 ? data?.length - 1 : selectedItemIndex - 1
    );
  };

  const handleRight = () => {
    setSelectedItemIndex(
      selectedItemIndex === data?.length - 1 ? 0 : selectedItemIndex + 1
    );
  };

  const handleDragEnd = (_e: Event, dragProps: PanInfo) => {
    const { offset } = dragProps;

    if (offset.x < 0) handleRight();
    else handleLeft();
  };

  return (
    <>
      <div
        className={twMerge(
          'mt-20 w-full mx-auto hidden max-lg:flex overflow-hidden',
          nonInteractive && 'flex'
        )}
      >
        <div className="w-full h-1/3 overflow-hidden aspect-[1.5/1]">
          <AnimatePresence initial={true}>
            <motion.div
              variants={variants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="h-full w-full"
              key={selectedItemIndex}
              onDragEnd={handleDragEnd}
              drag={isTablet && data.length > 1 ? 'x' : false}
              dragConstraints={{ left: 0, right: 0 }}
              dragElastic={0}
            >
              <img
                className="w-full h-full object-[500px 500px]"
                src={data[selectedItemIndex].imageLocation}
              />
            </motion.div>
          </AnimatePresence>
        </div>
        {data.length > 1 && (
          <div className="absolute left-1/2 flex -translate-x-1/2 gap-1 bottom-[100px]">
            {data.map((item, index: number) => (
              <span
                key={item?.id}
                className={twMerge(
                  'border-transparent h-[2px] w-4 rounded-[20px] bg-[#E6E7EB]',
                  index === selectedItemIndex && 'bg-[#4890E3]'
                )}
              ></span>
            ))}
          </div>
        )}
      </div>
      <div
        className={twMerge(
          'flex w-full mt-20  max-lg:hidden ',
          nonInteractive && 'hidden'
        )}
      >
        <div className="options mx-auto">
          {data.map((data) => (
            <div
              key={data.id}
              className={twMerge('option', data.id == activeOption && 'active')}
              onClick={() => handleOptionClick(data.id)}
              style={{
                background: `url(${data.imageLocation})`,
                backgroundSize: 'cover',
              }}
            >
              <div className="shadow"></div>
              <div className="label">
                <div className="info">
                  <div className="main">{data.title}</div>
                  <div className="sub">{data.text}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default SlideShow;
