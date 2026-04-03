import { NextRequest, NextResponse } from "next/server";

const BASTIEN_HOSTNAMES = new Set(["bastien.localhost", "bastien.bagliotto.fr"]);

function hostnameWithoutPort(host: string | null): string {
  if (!host) return "";
  return host.split(":")[0].toLowerCase();
}

/** Public hostname the user requested (LBs often put the real host in X-Forwarded-Host). */
function publicHostname(request: NextRequest): string {
  const forwarded = request.headers.get("x-forwarded-host");
  if (forwarded) {
    return hostnameWithoutPort(forwarded.split(",")[0]?.trim() ?? "");
  }
  return hostnameWithoutPort(request.headers.get("host"));
}

export function proxy(request: NextRequest) {
  if (!BASTIEN_HOSTNAMES.has(publicHostname(request))) {
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
