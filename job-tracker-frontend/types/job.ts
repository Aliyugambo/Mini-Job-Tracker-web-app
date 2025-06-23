export type JobStatus = 'Applied' | 'Interviewing' | 'Rejected' | 'Offer';

export interface Job {
  id: string;
  title: string;
  company: string;
  link: string;
  status: JobStatus;
}
