// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Extract subdomain
  const subdomain = hostname.split('.')[0];
  
  // Check if it's a person subdomain
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