export async function GET(request: Request) {
  return new Response("403 Forbidden Access", {
    status: 403,
  });
}
