export const Badge = ({ text }: { text: string }) => {
  return (
    <li className="mr-1.5 mt-2">
      <div className="flex items-center rounded-full bg-blue-300/20 px-3 py-1 text-xs font-medium leading-5 text-blue-400 ">
        {text}
      </div>
    </li>
  );
};
