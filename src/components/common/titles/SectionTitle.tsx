interface SectionTitleProps {
  title: string;
  url: string;
  action: string;
}

export const SectionTitle: React.FC<SectionTitleProps> = ({
  title,
  //   url,
  action,
}) => {
  return (
    <div className="w-full flex justify-between">
      <h2 className="text-2xl   font-bold text-left pb-2">{title}</h2>

      <p className="text-blue-800 font-thin">{action}</p>
    </div>
  );
};
