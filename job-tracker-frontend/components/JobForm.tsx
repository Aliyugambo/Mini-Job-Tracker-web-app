import { useState } from 'react';
import { Job } from '@/types/job';

interface Props {
  onSubmit: (data: Omit<Job, 'id'>) => void;
}

export default function JobForm({ onSubmit }: Props) {
  const [title, setTitle] = useState('');
  const [company, setCompany] = useState('');
  const [link, setLink] = useState('');
  const [status, setStatus] = useState<Job['status']>('Applied');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title || !company || !link) return;

    onSubmit({ title, company, link, status });
    setTitle('');
    setCompany('');
    setLink('');
    setStatus('Applied');
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        type="text"
        placeholder="Job Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Company Name"
        value={company}
        onChange={(e) => setCompany(e.target.value)}
        className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <input
        type="text"
        placeholder="Application Link"
        value={link}
        onChange={(e) => setLink(e.target.value)}
        className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
      />
      <select
        value={status}
        onChange={(e) => setStatus(e.target.value as Job['status'])}
        className="w-full border p-2 rounded focus:outline-none focus:ring focus:ring-blue-300"
      >
        <option value="Applied">Applied</option>
        <option value="Interviewing">Interviewing</option>
        <option value="Rejected">Rejected</option>
        <option value="Offer">Offer</option>
      </select>
      <button
        type="submit"
        className="w-full bg-green-500 text-white py-2 rounded hover:bg-green-600"
      >
        Add Job
      </button>
    </form>
  );
}
