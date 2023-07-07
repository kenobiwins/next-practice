export { default } from 'next-auth/middleware';

// mathcer for protected routes
export const config = { matcher: ['/profile', '/protected/:path*'] };
