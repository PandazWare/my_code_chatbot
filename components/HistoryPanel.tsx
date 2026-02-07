"use client";

import { useMessageStore } from "@/lib/store";

export default function HistoryPanel() {
  const { messages } = useMessageStore();

  const userMessages = messages.filter((msg) => msg.role === "user");

  return (
    <div className="mt-8 pt-8 border-t border-gray-700">
      <p className="text-sm text-gray-400 uppercase tracking-wide mb-4">
        Verlauf ({messages.length})
      </p>
      <div className="space-y-2 max-h-96 overflow-y-auto">
        {userMessages.length === 0 ? (
          <p className="text-gray-500 text-sm">Kein Verlauf vorhanden</p>
        ) : (
          userMessages.map((msg, idx) => (
            <div
              key={idx}
              className="p-2 bg-gray-700 rounded-lg text-sm text-gray-300 hover:bg-gray-600 cursor-pointer truncate"
              title={msg.content}
            >
              {msg.content.substring(0, 50)}...
            </div>
          ))
        )}
      </div>
    </div>
  );
}