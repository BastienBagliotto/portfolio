// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Handle production domain structure
  if (hostname === 'www.bagliotto.fr') {
    // Main website - serve the root page
    return NextResponse.next();
  }
  
  // Extract subdomain for person pages
  const subdomain = hostname.split('.')[0];
  
  // Check if it's a person subdomain (e.g., bastien.bagliotto.fr)
  const validSubdomains = ['bastien', 'romain'];
  
  if (validSubdomains.includes(subdomain)) {
    // Rewrite to the person's page
    url.pathname = `/${subdomain}`;
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};