import { useState } from 'react';
import { JobStatus } from '@/types/job';

type Props = {
  onSubmit: (job: { title: string; company: string; link: string; status: JobStatus }) => void;
};

export default function JobForm({ onSubmit }: Props) {
  const [form, setForm] = useState({
    title: '',
    company: '',
    link: '',
    status: 'Applied' as JobStatus,
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(form);
    setForm({ title: '', company: '', link: '', status: 'Applied' });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <input
        name="title"
        value={form.title}
        onChange={handleChange}
        placeholder="Job Title"
        required
        className="border w-full p-2 rounded"
      />
      <input
        name="company"
        value={form.company}
        onChange={handleChange}
        placeholder="Company Name"
        required
        className="border w-full p-2 rounded"
      />
      <input
        name="link"
        value={form.link}
        onChange={handleChange}
        placeholder="Application Link"
        required
        className="border w-full p-2 rounded"
      />

      <select
        name="status"
        value={form.status}
        onChange={handleChange}
        className="border w-full p-2 rounded"
      >
        <option>Applied</option>
        <option>Interviewing</option>
        <option>Offer</option>
        <option>Rejected</option>
      </select>

      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full hover:bg-blue-600">
        Add Job
      </button>
    </form>
  );
}
