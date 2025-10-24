// middleware.ts
import { NextRequest, NextResponse } from 'next/server';

export function proxy(request: NextRequest) {
  const url = request.nextUrl.clone();
  const hostname = request.headers.get('host') || '';
  
  // Define valid person subdomains
  const validSubdomains = ['bastien', 'romain'];
  const mainDomain = 'www.bagliotto.fr';
  
  // Handle main domain - serve the root page
  if (hostname === mainDomain) {
    return NextResponse.next();
  }
  
  // Extract subdomain from hostname
  const hostnameParts = hostname.split('.');
  
  // Handle both www.person.bagliotto.fr and person.bagliotto.fr patterns
  let personSubdomain = null;
  
  if (hostnameParts.length >= 3) {
    // Handle www.person.bagliotto.fr pattern
    if (hostnameParts[0] === 'www' && hostnameParts.length === 3) {
      personSubdomain = hostnameParts[1];
    }
  } else if (hostnameParts.length === 2) {
    // Handle person.bagliotto.fr pattern
    personSubdomain = hostnameParts[0];
  }
  
  // Check if it's a valid person subdomain
  if (personSubdomain && validSubdomains.includes(personSubdomain)) {
    url.pathname = `/${personSubdomain}`;
    return NextResponse.rewrite(url);
  }
  
  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
};