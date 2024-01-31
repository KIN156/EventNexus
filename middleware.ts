import { ClerkProvider } from '@clerk/nextjs';
import { authMiddleware } from "@clerk/nextjs";

 
// This example protects all routes including api/trpc routes
// Please edit this to allow other routes to be public as needed.
// See https://clerk.com/docs/references/nextjs/auth-middleware for more information about configuring your Middleware
export default authMiddleware({
  publicRoutes: [
    '/', // homepage is always publicly accessible
    '/events/:id',
    'api/webhook/clerk', // any route under /api will also be publicly accessible
    'api/webhook/stripe',
    '/api/uploadthing'
  ],
  ignoredRoutes: [
    'api/webhook/clerk', // any route under /api will also be publicly accessible
    'api/webhook/stripe',
    '/api/uploadthing'
  ]
});
 
export const config = {
  matcher: ["/((?!.+\\.[\\w]+$|_next).*)", "/", "/(api|trpc)(.*)"],
};