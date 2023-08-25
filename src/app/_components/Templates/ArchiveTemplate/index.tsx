import Header from "@/app/_components/Organisms/Header";
import { getBlogList } from "@/app/_libs/microcms";
import ArchiveList from "@/app/_components/Organisms/ArchiveList";

const ArchiveTemplate: React.FC = async () => {
  const blogs = await getBlogList();
  return (
    <div>
      <Header title="Archive Page" />
      {blogs && (
        <ul>
          {blogs && (
            <>
              <ArchiveList blogs={blogs.contents} />
            </>
          )}
        </ul>
      )}
    </div>
  );
};

export default ArchiveTemplate;
