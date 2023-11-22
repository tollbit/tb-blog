import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside
export function middleware(request: NextRequest) {
  const token = request.headers.get("tollbit-token");

  if (!token) {
    return new Response("403 Forbidden Access", {
      status: 403,
    });
  }
}
