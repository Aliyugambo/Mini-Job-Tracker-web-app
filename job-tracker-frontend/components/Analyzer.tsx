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
    <div className="space-y-4 bg-white shadow p-6 rounded max-w-xl mx-auto">
      <h2 className="text-2xl font-semibold">AI Job Description Analyzer</h2>

      <textarea
        rows={6}
        placeholder="Paste the full job description here..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        className="border w-full p-2 rounded"
      />

      <button
        onClick={handleAnalyze}
        disabled={loading || !description.trim()}
        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 w-full"
      >
        {loading ? 'Analyzing...' : 'Analyze Description'}
      </button>

      {error && <p className="text-red-500">{error}</p>}

      {aiResult && (
        <div className="space-y-2 border-t pt-4">
          <h3 className="font-semibold text-lg">AI Suggested Title:</h3>
          <p className="text-gray-700">{aiResult.title}</p>

          <h3 className="font-semibold text-lg">Summary:</h3>
          <p className="text-gray-700">{aiResult.summary}</p>

          <h3 className="font-semibold text-lg">Recommended Skills:</h3>
          <ul className="list-disc list-inside">
            {aiResult.skills.map((skill, idx) => (
              <li key={idx}>{skill}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
