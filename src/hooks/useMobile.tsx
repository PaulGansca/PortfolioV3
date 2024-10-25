import { useEffect, useState } from 'react';

const useMobileOrTablet = () => {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const onResize = () => {
      if (window.innerWidth < 768) {
        setIsTablet(true);
        setIsMobile(true);
        return;
      } else if (window.innerWidth < 1024 && window.innerWidth > 768) {
        setIsTablet(true);
        setIsMobile(false);
        return;
      }

      setIsMobile(false);
      setIsTablet(false);
    };

    onResize();
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, []);

  return { isMobile, isTablet };
};

export default useMobileOrTablet;
