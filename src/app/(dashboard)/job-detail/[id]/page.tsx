import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Applicants from '@/components/organisms/Applicants';
import JobDetails from '@/components/organisms/JobDetail';
import prisma from '../../../../../lib/prisma';


type paramsType = {
  id: string;
}

interface JobDetailPageProps {
  params: paramsType;
}

async function getDetailJob(id: string) {
  const job = await prisma.job.findFirst({
    where: {
      id: id
    },
    include: {
      Applicant: {
        include: {
          user: true
        }
      },
      CategoryJob: true
    }
  })

  return job;
}

const JobDetailPage: FC<JobDetailPageProps> = async ({ params }) => {

  const job = await getDetailJob(params.id)

  console.log(job);
  

  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div className="">
          <Link className='hover:text-primary' href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div className="">
          <div className="text-2xl font-semibold mb-1">{job?.roles}</div>
          <div>{job?.CategoryJob?.name} . {job?.jobType} . {job?.applicants}/{job?.needs} Hired</div>
        </div>
      </div>

      <Tabs defaultValue="applicants">
        <TabsList className='mb-8'>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobdetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants applicants={job?.Applicant} />
        </TabsContent>
        <TabsContent value="jobdetails">
          <JobDetails detail={job} />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default JobDetailPage;