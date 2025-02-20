export { auth as middleware } from "@/auth";

// Middleware will protect pages as defined by the matcher config export
export const config = {
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
