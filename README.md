# GameDev AI Chatbot 🎮

Eine moderne AI-gestützte Chatbot-Website für Game Development mit Unterstützung für Minecraft, Roblox und Counter-Strike 2.

## Features ✨

- **Multi-Model Support**: OpenAI GPT-4, Claude 3, Google Gemini
- **Game-spezifische Expertise**:
  - Minecraft Java & Bedrock Edition
  - Roblox Lua Scripting
  - Counter-Strike 2 Configs
- **Dateihandling**: Upload und Download von Code-Dateien
- **Chat-Verlauf**: Automatisches Speichern in LocalStorage
- **Export-Funktionen**: TXT, JSON, Markdown
- **Responsive Design**: Dark Mode UI mit Framer Motion Animationen
- **Syntax Highlighting**: Für alle Code-Sprachen

## Tech Stack 🛠️

- **Frontend**: Next.js 14, React 18, TypeScript
- **Styling**: Tailwind CSS, Framer Motion
- **State Management**: Zustand
- **AI APIs**: OpenAI, Anthropic Claude, Google Gemini
- **Code Highlighting**: React Syntax Highlighter

## Installation 🚀

```bash
# 1. Repository klonen
git clone https://github.com/PandazWare/my_code_chatbot.git
cd my_code_chatbot

# 2. Dependencies installieren
npm install

# 3. Environment-Variablen setzen
cp .env.example .env.local

# Folgende Keys hinzufügen:
# OPENAI_API_KEY=your_key_here
# ANTHROPIC_API_KEY=your_key_here
# GOOGLE_GENERATIVE_AI_KEY=your_key_here

# 4. Development Server starten
npm run dev

# 5. Browser öffnen
# http://localhost:3000
```

## Environment Variables 🔑

Erstelle eine `.env.local` Datei mit folgenden Variablen:

```env
OPENAI_API_KEY=your_openai_api_key
ANTHROPIC_API_KEY=your_claude_api_key
GOOGLE_GENERATIVE_AI_KEY=your_gemini_api_key
```

## Verwendung 💬

1. **Model wählen**: Wähle GPT-4, Claude oder Gemini aus
2. **Frage stellen**: Schreibe deine Frage oder Anfrage
3. **Dateien hochladen** (optional): Unterstützte Formate:
   - `.java` (Minecraft Plugins)
   - `.lua` (Roblox)
   - `.js`, `.ts` (JavaScript/TypeScript)
   - `.json`, `.yaml`, `.cfg` (Konfigurationen)
4. **Chat exportieren**: Speichere deinen Chat als TXT, JSON oder Markdown
5. **Chat-Verlauf**: Der Verlauf wird automatisch gespeichert

## Unterstützte Dateien 📁

- Java: `.java`
- Lua: `.lua`
- JavaScript/TypeScript: `.js`, `.ts`
- Config-Dateien: `.json`, `.yaml`, `.properties`, `.cfg`
- Text: `.txt`
- Python: `.py`
- C++: `.cpp`
- C#: `.cs`

Maximale Dateigröße: 10MB pro Datei

## API-Endpoints 🔌

- `POST /api/chat` - Chat-Anfrage senden
- `GET /api/export` - Chat exportieren (optional)
- `GET /api/history` - Chat-Verlauf laden (optional)

## Folder Structure 📂

```
my_code_chatbot/
├── app/
│   ├── api/
│   │   └── chat/
│   │       └── route.ts
│   ├── layout.tsx
│   ├── page.tsx
│   └── globals.css
├── components/
│   ├── ChatWindow.tsx
│   ├── InputArea.tsx
│   ├── ModelSelector.tsx
│   ├── ExportButton.tsx
│   └── HistoryPanel.tsx
├── lib/
│   ├── store.ts
│   ├── storage.ts
│   └── fileHandler.ts
├── package.json
├── tsconfig.json
├── tailwind.config.js
└── README.md
```

## Lizenz 📄

MIT License - siehe LICENSE Datei für Details

## Autor 👨‍💻

PandazWare - GameDev AI Solutions
