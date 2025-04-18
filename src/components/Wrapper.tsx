import React from "react";

export default function Example({ children }: { children?: React.ReactNode }) {
  return (
    <div className="mx-auto max-w-7xl xl:container px-4 sm:px-6 lg:px-8 my-16">
      {children}
    </div>
  );
}
