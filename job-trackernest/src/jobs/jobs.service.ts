import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateJobDto } from './dto/create-job.dto';
import { UpdateJobDto } from './dto/update-job.dto';
import { Job } from './entities/job.entity';
import { readJobsFromFile, writeJobsToFile } from '../utils/file-storage';

@Injectable()
export class JobsService {
  private jobs: Job[] = readJobsFromFile();

  findAll(): Job[] {
    return this.jobs;
  }

  create(createJobDto: CreateJobDto): Job {
    const newJob: Job = {
      id: Date.now().toString(),
      ...createJobDto,
    };
    this.jobs.push(newJob);
    writeJobsToFile(this.jobs);
    return newJob;
  }

  update(id: string, updateJobDto: UpdateJobDto): Job {
    const index = this.jobs.findIndex((job) => job.id === id);
    if (index === -1) throw new NotFoundException('Job not found');

    this.jobs[index] = { ...this.jobs[index], ...updateJobDto };
    writeJobsToFile(this.jobs);
    return this.jobs[index];
  }

  remove(id: string): void {
    const index = this.jobs.findIndex((job) => job.id === id);
    if (index === -1) throw new NotFoundException('Job not found');

    this.jobs.splice(index, 1);
    writeJobsToFile(this.jobs);
  }
}
