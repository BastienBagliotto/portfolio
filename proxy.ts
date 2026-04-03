import { NextRequest, NextResponse } from "next/server";

const BASTIEN_HOSTNAMES = new Set(["bastien.localhost", "bastien.bagliotto.fr"]);

function hostnameWithoutPort(host: string | null): string {
  if (!host) return "";
  return host.split(":")[0].toLowerCase();
}

export function proxy(request: NextRequest) {
  if (!BASTIEN_HOSTNAMES.has(hostnameWithoutPort(request.headers.get("host")))) {
    return NextResponse.next();
  }

  const { pathname } = request.nextUrl;
  if (pathname === "/" || pathname === "") {
    return NextResponse.rewrite(new URL("/bastien", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: "/",
};
