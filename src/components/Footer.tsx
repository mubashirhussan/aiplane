'use client';

export function Footer() {
  return (
    <div className="absolute bottom-0 left-0 w-full flex justify-center p-4 text-gray-400 text-sm z-20">
      <div className="flex gap-4">
        <a href="#terms" className="hover:underline">Terms</a>
        <a href="#privacy" className="hover:underline">Privacy</a>
      </div>
    </div>
  );
}
