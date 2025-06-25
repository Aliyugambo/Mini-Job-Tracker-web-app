import { useEffect, useState } from 'react';
import { Job } from '@/types/job';
import JobForm from '@/components/JobForm';
import JobTable from '@/components/JobTable';
import Analyzer from '@/components/Analyzer';
import { createJob, deleteJob, getJobs } from '@/utils/api';

export default function Home() {
  const [jobs, setJobs] = useState<Job[]>([]);

  useEffect(() => {
    getJobs().then(setJobs);
  }, []);

  const handleAdd = async (data: Omit<Job, 'id'>) => {
    const newJob = await createJob(data);
    setJobs((prev) => [...prev, newJob]);
  };

  const handleDelete = async (id: string) => {
    await deleteJob(id);
    setJobs((prev) => prev.filter((job) => job.id !== id));
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-100 p-4 md:p-8">
      <div className="max-w-5xl mx-auto space-y-8">

        {/* Header */}
        <header className="flex justify-between items-center mb-6">
          <div>
            <h1 className="text-4xl font-bold text-gray-800">🎯 Job Tracker</h1>
            <p className="text-gray-600">Track your applications with ease</p>
          </div>
          <div className="hidden md:block">
            <span className="text-sm text-gray-500">Made with ❤️ using Next.js + Tailwind</span>
          </div>
        </header>

        {/* Grid Layout */}
        <div className="grid md:grid-cols-2 gap-6">
          
          {/* Add New Job */}
          <section className="bg-white shadow-lg p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Add New Job</h2>
            <JobForm onSubmit={handleAdd} />
          </section>

          {/* Job List */}
          <section className="bg-white shadow-lg p-6 rounded-lg space-y-4">
            <h2 className="text-2xl font-semibold text-gray-700">Job List</h2>
            <JobTable jobs={jobs} onDelete={handleDelete} />
          </section>
        </div>

        {/* AI Analyzer */}
        <section className="bg-white shadow-lg p-6 rounded-lg space-y-4">
          <h2 className="text-2xl font-semibold text-gray-700">AI Job Description Analyzer</h2>
          <Analyzer />
        </section>

      </div>
    </main>
  );
}
