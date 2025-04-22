'use client';

import { useState } from "react";
import { Button } from "@/components/ui/button";

export function Chatbox() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {!open && (
        <Button 
          onClick={() => setOpen(true)}
          className="bg-blue-500 hover:bg-blue-600 text-white px-8 py-4 text-lg rounded-full shadow-lg"
        >
          PLAN MY TRIP
        </Button>
      )}

      {open && (
        <div className="bg-white text-black w-80 h-96 p-4 rounded-lg shadow-lg flex flex-col">
          <div className="text-lg font-bold mb-4">Hi traveler! ✈️</div>
          <p className="mb-4">What would you like help with?</p>
          <div className="flex flex-col gap-2">
            <Button variant="outline">Flights</Button>
            <Button variant="outline">Hotels</Button>
            <Button variant="outline">Flights + Hotels</Button>
            <Button variant="outline">Surprise Me!</Button>
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
