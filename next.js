import { useState } from "react"; import { Button } from "@/components/ui/button"; import "@/styles/globals.css";

export default function Home() { const [callStatus, setCallStatus] = useState("Ready to connect...");

const startCall = async () => { setCallStatus("Connecting...");

try {
  const res = await fetch("/api/call", { method: "POST" });
  const data = await res.json();

  if (data.success) {
    setCallStatus("AI Call in progress...");
  } else {
    setCallStatus("Failed to start call.");
  }
} catch (err) {
  setCallStatus("Error connecting.");
}

};

return ( <main className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-purple-900 to-purple-700 text-white"> <div className="p-6 rounded-2xl shadow-lg bg-purple-800 max-w-sm w-full text-center"> <h1 className="text-3xl font-bold mb-4">AI Funtime</h1> <p className="mb-6">Your customizable AI voice companion experience.</p> <Button onClick={startCall} className="w-full mb-4">Start AI Call</Button> <p className="text-sm">{callStatus}</p> </div> </main> ); }

// pages/api/call.js export async function POST() { const elevenLabsApiKey = process.env.ELEVEN_LABS_API_KEY; const voiceId = process.env.ELEVEN_LABS_VOICE_ID;

if (!elevenLabsApiKey || !voiceId) { return new Response(JSON.stringify({ success: false, error: "Missing config." }), { status: 500 }); }

// Simulate starting AI call logic here return new Response(JSON.stringify({ success: true })); }

// next.config.js module.exports = { reactStrictMode: true, };

// .env.local (NOT committed to GitHub) // ELEVEN_LABS_API_KEY=your_actual_key_here // ELEVEN_LABS_VOICE_ID=your_voice_id_here

// package.json (snippet) { "name": "ai-funtime", "version": "1.0.0", "scripts": { "dev": "next dev", "build": "next build", "start": "next start" }, "dependencies": { "next": "latest", "react": "latest", "react-dom": "latest" } }

// Tailwind setup assumed via globals.css

                                
