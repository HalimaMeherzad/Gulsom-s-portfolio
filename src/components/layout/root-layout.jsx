import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { CustomCursor } from "@/components/ui/custom-cursor";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";

function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: "instant" });
  }, [pathname]);
  return null;
}

export function RootLayout() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip">
      <ScrollToTop />
      <CustomCursor />
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:left-4 focus:top-4 focus:z-[100] focus:rounded-full focus:bg-ink focus:px-5 focus:py-2.5 focus:text-sm focus:font-semibold focus:text-cream"
      >
        Skip to content
      </a>
      <Navbar />
      <main id="main" className="flex-1 pt-16 md:pt-20">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
