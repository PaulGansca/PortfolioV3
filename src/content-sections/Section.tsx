import { useEffect } from 'react';
import useOnScreen from '../hooks/useOnScreen';

export const Section = ({
  id,
  ariaLabel,
  children,
  setActiveSection,
}: {
  children: JSX.Element;
  id: string;
  ariaLabel?: string;
  setActiveSection: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const [ref, isVisible] = useOnScreen({
    root: null, // Use the viewport as the root
    rootMargin: '0px',
    threshold: 0.5, // Trigger when 10% of the element is visible
  });
  useEffect(() => {
    if (isVisible) {
      setActiveSection(id);
    }
  }, [isVisible]);
  return (
    <section
      ref={ref}
      id={id}
      className="content-section mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};
