import { Job } from '@/types/job';

const BASE_URL = 'http://localhost:3001'; // your NestJS backend

export const getJobs = async (): Promise<Job[]> => {
  const res = await fetch(`${BASE_URL}/jobs`);
  return res.json();
};

export const createJob = async (job: Omit<Job, 'id'>): Promise<Job> => {
  const res = await fetch(`${BASE_URL}/jobs`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  });
  return res.json();
};

export const updateJob = async (id: string, job: Partial<Job>): Promise<Job> => {
  const res = await fetch(`${BASE_URL}/jobs/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(job),
  });
  return res.json();
};

export const deleteJob = async (id: string): Promise<void> => {
  await fetch(`${BASE_URL}/jobs/${id}`, { method: 'DELETE' });
};
