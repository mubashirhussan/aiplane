'use client';

export function Header() {
  return (
    <div className="absolute top-0 left-0 w-full flex justify-between items-center p-6 text-white text-lg z-20">
      <div className="font-bold text-2xl">Wanderly</div>
      <div className="flex gap-6">
        <a href="#about" className="hover:underline">About</a>
        <a href="#blog" className="hover:underline">Blog</a>
        <a href="#help" className="hover:underline">Help</a>
        <a href="#contact" className="hover:underline">Contact</a>
      </div>
    </div>
  );
}
