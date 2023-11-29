import { ArrowLeftIcon } from 'lucide-react';
import Link from 'next/link';
import React, { FC } from 'react'
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs";
import Applicants from '@/components/organisms/Applicants';
import JobDetails from '@/components/organisms/JobDetail';


interface JobDetailPageProps {
  
}

const JobDetailPage: FC<JobDetailPageProps> = ({  }) => {
  return (
    <div>
      <div className="inline-flex items-center gap-5 mb-5">
        <div className="">
          <Link className='hover:text-primary' href="/job-listings">
            <ArrowLeftIcon className="w-9 h-9" />
          </Link>
        </div>
        <div className="">
          <div className="text-2xl font-semibold mb-1">Brand Designer</div>
          <div>Design . Full-Time . 1/10 Hired</div>
        </div>
      </div>

      <Tabs defaultValue="applicants">
        <TabsList className='mb-8'>
          <TabsTrigger value="applicants">Applicants</TabsTrigger>
          <TabsTrigger value="jobdetails">Job Details</TabsTrigger>
        </TabsList>
        <TabsContent value="applicants">
          <Applicants />
        </TabsContent>
        <TabsContent value="jobdetails">
          <JobDetails />
        </TabsContent>
      </Tabs>
    </div>
  );
}

export default JobDetailPage;