import { notFound } from "next/navigation";
import { allPosts } from "contentlayer/generated";

import { Metadata } from "next";
import { Mdx } from "@/components/mdx-components";

interface PostProps {
  params: {
    slug: string[];
  };
}

async function getPostFromParams(params: PostProps["params"]) {
  const slug = params?.slug?.join("/");
  const post = allPosts.find((post) => post.slugAsParams === slug);

  if (!post) {
    null;
  }

  return post;
}

export async function generateMetadata({
  params,
}: PostProps): Promise<Metadata> {
  const post = await getPostFromParams(params);

  if (!post) {
    return {};
  }

  return {
    title: post.title,
    description: post.description,
  };
}

export async function generateStaticParams(): Promise<PostProps["params"][]> {
  return allPosts.map((post) => ({
    slug: post.slugAsParams.split("/"),
  }));
}

export default async function PostPage({ params }: PostProps) {
  const post = await getPostFromParams(params);

  if (!post) {
    notFound();
  }

  return (
    <article className="pt-12 mb-16 prose dark:prose-invert ">
      <div className="flex flex-col">
        <h3 className="font-extrabold">{post.title}</h3>
        {post.description && (
          <p className="my-0 font-medium">{post.description}</p>
        )}
        {post.date && (
          <p className="my-0 no-underline font-mono text-xs">
            {post.date.substring(0, 10)}
          </p>
        )}
      </div>
      <hr className="" />
      <Mdx code={post.body.code} />
    </article>
  );
}
