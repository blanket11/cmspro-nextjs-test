import { Blog } from "@/app/_types/blog";
import Link from "next/link";

const ArchiveListItem: React.FC<Blog> = ({ id, title }) => {
  return (
    <li>
      <Link href={`/blog/${id}`}>{title}</Link>
    </li>
  );
};

export default ArchiveListItem;
