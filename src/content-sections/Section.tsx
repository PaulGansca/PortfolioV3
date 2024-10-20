export const Section = ({
  id,
  ariaLabel,
  children,
}: {
  children: JSX.Element;
  id?: string;
  ariaLabel?: string;
}) => {
  return (
    <section
      id={id}
      className="mb-16 scroll-mt-16 md:mb-24 lg:mb-36 lg:scroll-mt-24"
      aria-label={ariaLabel}
    >
      {children}
    </section>
  );
};
