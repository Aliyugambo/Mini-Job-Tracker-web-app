import { Job } from '@/types/job';

type Props = {
  jobs: Job[];
  onDelete: (id: string) => void;
};

const getStatusBadgeColor = (status: string) => {
  switch (status) {
    case 'Applied':
      return 'bg-blue-100 text-blue-700';
    case 'Interviewing':
      return 'bg-yellow-100 text-yellow-700';
    case 'Offer':
      return 'bg-green-100 text-green-700';
    case 'Rejected':
      return 'bg-red-100 text-red-700';
    default:
      return 'bg-gray-100 text-gray-700';
  }
};

export default function JobTable({ jobs, onDelete }: Props) {
  return (
    <div className="overflow-auto">
      <table className="min-w-full text-left border-collapse">
        <thead className="bg-gray-200">
          <tr>
            <th className="p-2">Title</th>
            <th className="p-2">Company</th>
            <th className="p-2">Status</th>
            <th className="p-2">Link</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {jobs.map((job) => (
            <tr key={job.id} className="border-t">
              <td className="p-2">{job.title}</td>
              <td className="p-2">{job.company}</td>
              <td className="p-2">
                <span className={`px-2 py-1 text-sm rounded ${getStatusBadgeColor(job.status)}`}>
                  {job.status}
                </span>
              </td>
              <td className="p-2">
                <a href={job.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                  View
                </a>
              </td>
              <td className="p-2">
                <button onClick={() => onDelete(job.id)} className="text-red-500 hover:underline">
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
