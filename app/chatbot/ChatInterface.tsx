"use client";

import { useState, useRef, useEffect } from "react";
import { SmilePlus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useSearchParams } from "next/navigation";
// import { useMobile } from "@/hooks/use-mobile"

type Message = {
  id: string;
  content: string;
  sender: "user" | "bot";
  timestamp: Date;
};

export default function ChatInterface() {
  const searchParams = useSearchParams();
  const option = searchParams.get("option"); // get query param 'option'
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      content:
        "I want to travel in August to a beach destination with a budget of $700.",
      sender: "user",
      timestamp: new Date(),
    },
    {
      id: "2",
      content: `Based on your $700 budget and travel window in August, here are 3 beach destinations:

1. Algarve, Portugal - Flights + Hotel: $650
2. Santorini, Greece - Flights + B&B: $695
3. Split, Croatia - Flights + Hostel: $620`,
      sender: "bot",
      timestamp: new Date(),
    },
  ]);

  const [inputValue, setInputValue] = useState("");
  const messagesEndRef = useRef<HTMLDivElement>(null);
  //   const isMobile = useMobile();

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = () => {
    if (inputValue.trim() === "") return;

    // Add user message
    const newUserMessage: Message = {
      id: Date.now().toString(),
      content: inputValue,
      sender: "user",
      timestamp: new Date(),
    };

    setMessages((prev) => [...prev, newUserMessage]);
    setInputValue("");

    // Simulate bot response (in a real app, this would be an API call)
    setTimeout(() => {
      const botResponse: Message = {
        id: (Date.now() + 1).toString(),
        content:
          "I'm processing your request. I'll get back to you shortly with some options!",
        sender: "bot",
        timestamp: new Date(),
      };
      setMessages((prev) => [...prev, botResponse]);
    }, 1000);
  };

  const formatTimestamp = (date: Date) => {
    const now = new Date();
    const diffInMinutes = Math.floor(
      (now.getTime() - date.getTime()) / (1000 * 60)
    );

    if (diffInMinutes < 1) return "just now";
    if (diffInMinutes < 60) return `${diffInMinutes}m ago`;

    const hours = date.getHours();
    const minutes = date.getMinutes();
    return `${hours}:${minutes.toString().padStart(2, "0")}`;
  };

  return (
    <div className="flex flex-col h-screen  md:pt-10 md:pb-20 md:px-20 bg-white  shadow-sm overflow-hidden">
      {/* Header */}
      <header className="flex items-center justify-between p-4 md:p-6 border-b">
        <h1 className="text-2xl md:text-3xl text-black font-bold">
          {option} Information
        </h1>
        <div className="bg-white rounded-full p-2 shadow-sm">
          <SmilePlus className="w-6 h-6 text-black" />
        </div>
      </header>

      {/* Messages */}
      <div className="flex-1 overflow-y-auto p-4">
        <div className="space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={cn(
                "flex",
                message.sender === "user" ? "justify-end" : "justify-start"
              )}
            >
              <div className="flex flex-col max-w-[350px] md:max-w-[650px]">
                <div
                  className={cn(
                    "rounded-2xl p-3 md:p-4",
                    message.sender === "user"
                      ? "bg-gray-200 text-gray-900"
                      : "bg-white border text-gray-900"
                  )}
                >
                  <p className="whitespace-pre-wrap">{message.content}</p>
                </div>
                <span className="text-xs text-gray-500 mt-1 self-end">
                  {formatTimestamp(message.timestamp)}
                </span>
              </div>
            </div>
          ))}
          <div ref={messagesEndRef} />
        </div>
      </div>

      {/* Input */}
      <div className="p-4 border-t">
        <div className="relative ">
          <input
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            placeholder="Type a message..."
            className="w-full h-10 px-3 py-5 text-black pr-20 text-sm border rounded-md focus:outline-none focus:ring-2 focus:ring-gray-200"
            onKeyDown={(e) => {
              if (e.key === "Enter" && !e.shiftKey) {
                e.preventDefault();
                handleSendMessage();
              }
            }}
          />
          <Button
            onClick={handleSendMessage}
            className="absolute right-1 top-1/2 !py-0 -translate-y-1/2 px-4  h-8"
          >
            Send
          </Button>
        </div>
      </div>
    </div>
  );
}
