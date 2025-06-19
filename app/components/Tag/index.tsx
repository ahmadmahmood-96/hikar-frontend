interface TagProps {
  title: string;
  color: string;
}
const Tag: React.FC<TagProps> = ({ title, color }) => {
  return (
    <>
      <div
        className={`py-1 px-3 rounded-3xl text-sm my-1 mr-2 bg-${color} w-fit text-white`}
      >
        {title}
      </div>
    </>
  );
};

export default Tag;
