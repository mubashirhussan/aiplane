"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import Link from "next/link"; // ✅ use Link instead of router.push

export function Chatbox() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open && (
        <Button
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-black px-8 py-4 text-lg rounded-full shadow-lg"
        >
          PLAN MY TRIP
        </Button>
      )}

      {open && (
        <div className="bg-white text-black w-80 h-96 p-4 rounded-lg shadow-lg flex flex-col">
          <div className="text-lg font-bold mb-4">Hi traveler! ✈️</div>
          <p className="mb-4">What would you like help with?</p>
          <div className="flex flex-col gap-2">
            {["Flights", "Hotels", "Flights + Hotels", "Surprise Me!"].map(
              (option) => (
                <Link
                  key={option}
                  href={`/chatbot?option=${encodeURIComponent(option)}`} // ✅ safe URL
                >
                  <Button variant="outline" className="w-full">
                    {option}
                  </Button>
                </Link>
              )
            )}
          </div>
          <Button
            variant="ghost"
            className="mt-auto text-blue-500"
            onClick={() => setOpen(false)}
          >
            Close
          </Button>
        </div>
      )}
    </div>
  );
}
