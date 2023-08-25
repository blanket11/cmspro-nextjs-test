import { getBlogDetail } from "@/app/_libs/microcms";

type Props = {
  params: {
    id: string;
  };
};

const BlogDetail: React.FC<Props> = async ({ params }) => {
  const blog = await getBlogDetail(params.id);

  return (
    <div>
      <h1>{blog.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: blog.content }} />
    </div>
  );
};

export default BlogDetail;
