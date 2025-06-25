import { Job } from '@/types/job';

interface Props {
  jobs: Job[];
  onDelete: (id: string) => void;
}

export default function JobTable({ jobs, onDelete }: Props) {
  if (jobs.length === 0) return <p className="text-gray-500">No jobs added yet.</p>;

  return (
    <div className="overflow-x-auto">
      <table className="w-full table-auto border-collapse">
        <thead>
          <tr className="bg-gray-100">
            <th className="text-left p-2">Title</th>
            <th className="text-left p-2">Company</th>
            <th className="text-left p-2">Status</th>
            <th className="text-left p-2">Link</th>
            <th className="text-left p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-t hover:bg-gray-50">
              <td className="p-2">{job.title}</td>
              <td className="p-2">{job.company}</td>
              <td className="p-2">{job.status}</td>
              <td className="p-2 text-blue-500 underline">
                <a href={job.link} target="_blank" rel="noopener noreferrer">
                  View
                </a>
              </td>
              <td className="p-2">
                <button
                  onClick={() => onDelete(job.id)}
                  className="text-red-500 hover:underline"
                >
                  Delete
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
