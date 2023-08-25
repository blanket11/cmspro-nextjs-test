import { Blog } from "@/app/_types/blog";
import ArchiveListItem from "@/app/_components/Molecules/ArchiveListItem";

type Props = {
  blogs: Blog[];
};

const ArchiveList: React.FC<Props> = ({ blogs }) => {
  return (
    <ul>
      {blogs.map(({ id, title }) => (
        <ArchiveListItem key={`blog-${id}`} id={id} title={title} />
      ))}
    </ul>
  );
};

export default ArchiveList;
