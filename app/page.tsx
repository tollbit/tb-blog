import { allPosts } from "@/.contentlayer/generated";
import Link from "next/link";
import { NextResponse } from "next/server";

export default function Home() {
  return (
    <div className="max-w-3xl prose dark:prose-invert mt-16">
      <div className="">
        <h3 className="">Hello, my name is Josh Mayer.</h3>
        <p>
          I am a textbook internet native/addict, which has led me to try
          building my own parts of it. Sometimes for school, myself, youtube, or
          real projects.
        </p>
      </div>
    </div>
  );
}
