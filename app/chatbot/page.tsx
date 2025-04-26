import { Suspense } from "react";
import ChatInterface from "./ChatInterface";

export default function ChatbotPage() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <ChatInterface />
    </Suspense>
  );
}
