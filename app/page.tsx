import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { NextResponse } from "next/server";
import { SparklesCore } from "@/components/sparkles";
import React from "react";
import { formatDate } from "@/lib/utils";

export default function Home() {
  const allPostsSorted = allPosts.sort((a, b) => {
    const dateA = new Date(b.date).getTime();
    const dateB = new Date(a.date).getTime();
    return dateA - dateB;
  });
  return (
    <div className="prose dark:prose-invert">
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
              {formatDate(post.date)}
            </p>
          )}
        </article>
      ))}
    </div>
  );
}
