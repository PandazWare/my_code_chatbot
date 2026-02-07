"use client";

import { useState, useRef, useEffect } from "react";
import ChatWindow from "@/components/ChatWindow";
import InputArea from "@/components/InputArea";
import ModelSelector from "@/components/ModelSelector";
import HistoryPanel from "@/components/HistoryPanel";
import ExportButton from "@/components/ExportButton";
import { useMessageStore } from "@/lib/store";

export default function Home() {
  const [selectedModel, setSelectedModel] = useState<"openai" | "claude" | "gemini">("openai");
  const [isLoading, setIsLoading] = useState(false);
  const [showHistory, setShowHistory] = useState(false);
  const { messages, addMessage, clearMessages, loadHistory } = useMessageStore();
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    loadHistory();
  }, [loadHistory]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const handleSendMessage = async (content: string, files?: File[]) => {
    setIsLoading(true);
    addMessage({ role: "user", content, files });

    try {
      const formData = new FormData();
      formData.append("message", content);
      formData.append("model", selectedModel);

      if (files) {
        files.forEach((file) => formData.append("files", file));
      }

      const response = await fetch("/api/chat", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (data.success) {
        addMessage({ role: "assistant", content: data.message });
      } else {
        addMessage({ role: "assistant", content: `Error: ${data.error}` });
      }
    } catch (error) {
      addMessage({
        role: "assistant",
        content: "Es gab einen Fehler. Bitte versuche es erneut.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="flex h-screen bg-gray-900">
      {/* Sidebar */}
      <div className="w-64 bg-gray-800 border-r border-gray-700 p-4 flex flex-col"> 
        <h1 className="text-2xl font-bold mb-8 text-cyan-400">GameDev AI</h1>
        
        <ModelSelector selectedModel={selectedModel} onSelect={setSelectedModel} />
        
        <div className="mt-8 space-y-2">
          <button
            onClick={() => setShowHistory(!showHistory)}
            className="w-full px-4 py-2 bg-purple-600 hover:bg-purple-700 rounded-lg transition"
          >
            {showHistory ? "Verlauf ausblenden" : "Verlauf anzeigen"}
          </button>

          <ExportButton messages={messages} />

          <button
            onClick={clearMessages}
            className="w-full px-4 py-2 bg-red-600 hover:bg-red-700 rounded-lg transition"
          >
            Chat Löschen
          </button>
        </div>

        {showHistory && <HistoryPanel />}
      </div>

      {/* Main Chat Area */}
      <div className="flex-1 flex flex-col">
        <ChatWindow messages={messages} isLoading={isLoading} messagesEndRef={messagesEndRef} />
        <InputArea onSendMessage={handleSendMessage} isLoading={isLoading} />
      </div>
    </div>
  );
}