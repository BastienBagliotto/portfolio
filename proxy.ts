// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Define valid person subdomains
  const validSubdomains = ['bastien.bagliotto.fr', 'romain.bagliotto.fr'];
  const mainDomain = 'www.bagliotto.fr';
  
  // Handle main domain - serve the root page
  if (hostname === mainDomain) {
    return NextResponse.next();
  }

  if (!validSubdomains.includes(hostname)) {
    window.location.href = `https://www.bagliotto.fr`;
  }
  else {
    url.pathname = `/${hostname.split('.')[0]}`;
    return NextResponse.rewrite(url);
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};