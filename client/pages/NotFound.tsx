import { Link, useLocation } from "react-router-dom";
import { useEffect } from "react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname,
    );
  }, [location.pathname]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-surface px-6">
      <div className="flex flex-col items-center text-center">
        <span className="text-sm font-semibold text-ink-muted">404</span>
        <h1 className="mt-2 text-2xl font-semibold text-ink">
          Page not found
        </h1>
        <p className="mt-2 max-w-sm text-sm text-ink-muted">
          This page doesn't exist yet. Keep prompting to build it out, or head
          back to the menu.
        </p>
        <Link
          to="/"
          className="mt-6 inline-flex items-center justify-center rounded-2xl bg-brand px-6 py-3 text-sm font-semibold text-white transition-transform hover:brightness-105 active:scale-[0.98]"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
