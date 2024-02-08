import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { NextResponse } from "next/server";

export default function Home() {
  const allPostsSorted = allPosts.sort((a, b) => {
    const dateA = new Date(b.date).getTime();
    const dateB = new Date(a.date).getTime();
    return dateA - dateB;
  });
  return (
    <div className="prose dark:prose-invert mt-12">
      {allPostsSorted.map((post) => (
        <article key={post._id}>
          <Link className="my-0 flex items-end" href={post.slug}>
            <h3 className="font-extrabold no-underline">{post.title}</h3>
          </Link>

          {post.description && (
            <p className="my-0 font-medium">{post.description}</p>
          )}
          {post.date && (
            <p className="my-0 no-underline font-mono text-xs">
              {post.date.substring(0, 10)}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
