import Profile from "@/components/chatbox/profile";
import Input from "@/components/chatbox/input";
import React from "react";

// ChatBox is a layout wrapper for the chat UI
// It contains a header (Profile), scrollable chat content, and a fixed input area
function ChatBox({ children }: { children: React.ReactNode }) {
  return (
    // Container with fixed width and height, vertical layout, rounded border
    <div className="w-[400px] h-[600px] flex flex-col border border-gray-300 rounded-lg overflow-hidden shadow-sm bg-white">
      
      {/* Header section (e.g., user info or chat title) */}
      <div>
        <Profile info={null} />
      </div>

      {/* Main chat content area that scrolls as messages fill the space */}
      <div className="flex-1 overflow-y-auto">
        {children}
      </div>

      {/* Fixed input area at the bottom of the chat box */}
      <div>
        <Input />
      </div>
    </div>
  );
}

export default ChatBox;


