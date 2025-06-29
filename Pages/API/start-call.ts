import type { NextApiRequest, NextApiResponse } from 'next';
import axios from 'axios';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  console.log('✅ API call received at /api/start-call');

  try {
    const apiKey = process.env.ELEVENLABS_API_KEY;
    if (!apiKey) {
      console.error('❌ ElevenLabs API key missing');
      return res.status(500).json({ error: 'Server config error' });
    }

    const voiceId = 'EXAVITQu4vr4xnSDxMaL'; // Use your voice ID
    const text = 'Hey there! This is your AI companion speaking.';

    console.log('ℹ️ Sending request to ElevenLabs...');

    const response = await axios.post(
      `https://api.elevenlabs.io/v1/text-to-speech/${voiceId}`,
      {
        text,
        voice_settings: { stability: 0.5, similarity_boost: 0.5 },
      },
      {
        headers: {
          'xi-api-key': apiKey,
          'Content-Type': 'application/json',
        },
        responseType: 'arraybuffer',
      }
    );

    console.log('✅ Audio received from ElevenLabs');

    res.setHeader('Content-Type', 'audio/mpeg');
    res.status(200).send(response.data);
  } catch (error) {
    console.error('❌ Error in /api/start-call:', error);
    res.status(500).json({ error: 'Failed to generate audio' });
  }
}
