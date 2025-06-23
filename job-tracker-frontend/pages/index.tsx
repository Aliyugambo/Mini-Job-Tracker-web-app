import { useEffect, useState } from 'react';
import { Job } from '@/types/job';
import JobForm from '@/components/JobForm';
import JobTable from '@/components/JobTable';
import { createJob, deleteJob, getJobs } from '@/utils/api';
import Analyzer from '@/components/Analyzer';

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
    <>
      {/* Header */}
      <header className="bg-white shadow mb-6">
        <div className="max-w-5xl mx-auto px-4 py-4 flex justify-between items-center">
          <h1 className="text-2xl font-bold text-gray-800">Job Tracker</h1>
          <span className="text-gray-500 text-sm">Track your applications with ease</span>
        </div>
      </header>

      {/* Main Content */}
      <main className="min-h-screen bg-gray-100 py-8 px-4">
        <div className="max-w-5xl mx-auto space-y-8">

          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white shadow p-4 rounded">
              <h2 className="text-xl font-semibold mb-4">Add New Job</h2>
              <JobForm onSubmit={handleAdd} />
            </div>

            <div className="bg-white shadow p-4 rounded overflow-auto">
              <h2 className="text-xl font-semibold mb-4">Job List</h2>
              <JobTable jobs={jobs} onDelete={handleDelete} />
            </div>
          </div>

        </div>

        {/* AI Job Description Analyzer */}
<div className="bg-white shadow p-4 rounded">
  <Analyzer />
</div>
      </main>
    </>
  );
}
