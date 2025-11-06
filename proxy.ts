// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Define valid person subdomains
  const validSubdomains = ['bastien.bagliotto.fr', 'romain.bagliotto.fr'];
    
  if (!validSubdomains.includes(hostname)) {
    return NextResponse.next();
  }

  url.pathname = `/${hostname.split('.')[0]}`;
  return NextResponse.rewrite(url);
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon\\.ico|.*\\.(?:jpeg|jpg|png|webp|gif|svg|ico|woff|woff2|ttf|eot)).*)',
  ],
};