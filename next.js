import { useState } from "react"; import { Button } from "@/components/ui/button";

export default function Home() { const [callActive, setCallActive] = useState(false);

const startCall = () => { setCallActive(true); // Call API or WebSocket logic for AI call initiation };

return ( <main className="min-h-screen flex items-center justify-center bg-gradient-to-br from-purple-800 to-gray-900"> <div className="bg-gray-800 text-white p-8 rounded-2xl shadow-xl max-w-sm w-full text-center"> <h1 className="text-3xl font-bold mb-4">AI Funtime</h1> <p className="mb-6">Your customizable AI voice companion experience.</p>

{!callActive ? (
      <Button className="w-full bg-pink-500 hover:bg-pink-600" onClick={startCall}>
        Start AI Call
      </Button>
    ) : (
      <p className="mt-4 text-green-400">AI call in progress...</p>
    )}
  </div>
</main>

); }

