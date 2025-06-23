import * as fs from 'fs';
import * as path from 'path';

const filePath = path.join(process.cwd(), 'src/data/jobs.json');

export const readJobsFromFile = (): any[] => {
  try {
    const data = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(data || '[]');
  } catch (error) {
    return [];
    console.error('Error reading jobs from file:', error);
  }
};

export const writeJobsToFile = (jobs: any[]): void => {
  fs.writeFileSync(filePath, JSON.stringify(jobs, null, 2));
};
