export const TextHighlight = ({ text }: { text: string }) => {
  return (
    <span className="font-medium text-slate-200 hover:text-blue-400 focus-visible:text-blue-400">
      {text}
    </span>
  );
};
