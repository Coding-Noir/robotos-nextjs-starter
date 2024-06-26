import Card from "@/components/Cards/Card";
import Container from "@/components/Container";
import SectionTitle from "@/components/SectionTitle";
import { getAllPosts, getPostBySlug } from "@/lib/api";
import { notFound } from "next/navigation";

type PostProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  const posts = await getAllPosts();
  return posts.map((post) => ({
    slug: post.slug,
  }));
}

export async function generateMetadata({ params }: PostProps) {
  const post = await getPostBySlug(params.slug);
  if (!post) {
    return {
      title: "Post Not Found",
    };
  }
  return {
    title: post.title,
  };
}

export default async function BlogPost({ params }: PostProps) {
  const post = await getPostBySlug(params.slug);

  if (!post) {
    notFound();
  }

  return (
    <section
      className=""
      style={{
        backgroundImage: `url("/images/get-robots-bg.png")`,
      }}
    >
      <Container>
        <Card className="">
          <article>
            <SectionTitle className="">{post.title}</SectionTitle>
            <p className="">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              id adipisci qui nihil odio dolorem eaque quisquam ea nisi vel!
            </p>

            <div className="">{post.date}</div>

            <div
              className=""
              dangerouslySetInnerHTML={{ __html: post.content }}
            />
          </article>
        </Card>
      </Container>
    </section>
  );
}
