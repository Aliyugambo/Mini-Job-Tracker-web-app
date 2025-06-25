import { useState } from 'react';

export default function Analyzer() {
  const [description, setDescription] = useState('');
  const [aiResult, setAiResult] = useState<{ title: string; summary: string; skills: string[] } | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleAnalyze = async () => {
    if (!description.trim()) return;

    setLoading(true);
    setError('');
    setAiResult(null);

    try {
      const res = await fetch('http://localhost:3001/ai/analyze', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ description }),
      });

      if (!res.ok) throw new Error('Failed to analyze description');
      const data = await res.json();
      setAiResult(data);
    } catch (err) {
      setError('Something went wrong while analyzing. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="space-y-4">
      <textarea
        rows={6}
        placeholder="Paste the full job description here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading || !description.trim()}
        className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600 disabled:opacity-50"
      >
        {loading ? 'Analyzing...' : 'Analyze Description'}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {aiResult && (
        <div className="space-y-2 border-t pt-4">
          <h3 className="font-semibold">AI Suggested Title:</h3>
          <p className="text-gray-700">{aiResult.title}</p>

          <h3 className="font-semibold">Summary:</h3>
          <p className="text-gray-700">{aiResult.summary}</p>

          <h3 className="font-semibold">Recommended Skills:</h3>
          <ul className="list-disc list-inside text-gray-700">
            {aiResult.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
