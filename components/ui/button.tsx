'use client';

import { cn } from "@/lib/utils";

export function Button({ className, children, ...props }: any) {
  return (
    <button
      className={cn(
        "px-6 py-3 bg-white text-black rounded-full text-lg font-bold hover:bg-gray-300 transition",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
}
