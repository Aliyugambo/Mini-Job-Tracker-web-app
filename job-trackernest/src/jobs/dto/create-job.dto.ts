import { IsNotEmpty, IsEnum, IsUrl } from 'class-validator';
import { JobStatus } from '../entities/job.entity';

export class CreateJobDto {
  @IsNotEmpty()
  title: string;

  @IsNotEmpty()
  company: string;

  @IsUrl()
  link: string;

  @IsEnum(['Applied', 'Interviewing', 'Rejected', 'Offer'])
  status: JobStatus;
}
