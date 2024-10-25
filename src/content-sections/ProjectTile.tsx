import { Badge } from './badge';

export const ProjectTile = ({
  title,
  description,
  link,
  imgSrc,
  skills,
}: {
  title: string;
  description: string;
  link?: string;
  imgSrc: string;
  skills: string[];
}) => {
  const project = (
    <div className="hover:text-blue-400 focus-visible:text-blue-400  group/link">
      <span className="absolute -inset-x-4 -inset-y-2.5 hidden rounded md:-inset-x-6 md:-inset-y-4 lg:block"></span>
      <span>
        {title}{' '}
        <span className="inline-block">
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
    </div>
  );
  return (
    <li className="mb-12">
      <div className="group relative grid gap-4 pb-1 transition-all sm:grid-cols-8 sm:gap-8 md:gap-4 lg:hover:!opacity-100 lg:group-hover/list:opacity-50">
        <div className="absolute -inset-x-4 -inset-y-4 z-0 hidden rounded-md transition motion-reduce:transition-none lg:-inset-x-6 lg:block lg:group-hover:bg-slate-800/50 lg:group-hover:shadow-[inset_0_1px_0_0_rgba(148,163,184,0.1)] lg:group-hover:drop-shadow-lg"></div>
        <div className="z-10 sm:order-2 sm:col-span-6">
          <h3>
            {link ? (
              <a
                className="inline-flex items-baseline font-medium leading-tight text-slate-200 hover:text-blue-400 focus-visible:text-blue-400  group/link text-base"
                href={link}
                target="_blank"
                rel="noreferrer noopener"
                aria-label={`${title} (opens in a new tab)`}
              >
                {project}
              </a>
            ) : (
              project
            )}
          </h3>
          <p className="mt-2 text-sm leading-normal">{description}</p>
          <ul className="mt-2 flex flex-wrap" aria-label="Technologies used">
            {skills.map((s) => (
              <Badge key={s} text={s} />
            ))}
          </ul>
        </div>
        <img
          alt={`${title} project card`}
          loading="lazy"
          width="200"
          height="48"
          decoding="async"
          data-nimg="1"
          className="rounded group-hover:scale-125 transition-all duration-500 border-2 border-slate-200/10 group-hover:border-slate-200/30 sm:order-1 sm:col-span-2 sm:translate-y-1"
          src={imgSrc}
          style={{ color: 'transparent' }}
        />
      </div>
    </li>
  );
};
