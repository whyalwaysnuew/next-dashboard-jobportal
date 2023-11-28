"use client"

import React, {FC} from "react";
import {Button} from '@/components/ui/button';
import {BiBookAdd} from "react-icons/bi";
import { useRouter } from "next/navigation";

interface HeaderProps {}


const Header: FC<HeaderProps> = ({}) => {
  
  const router = useRouter();
  const navCreateJobPage = () => router.push('/post-a-job')

  return (
    <div className="pb-3 mb-8 border-b border-border flex flex-row items-center justify-between">
        <div className="">
            <div>Company</div>
            <div className="font-semibold">Twitter</div>
        </div>
        <div className="">
            <Button
              onClick={navCreateJobPage}
             className="rounded-none py-3 px-6">
                <BiBookAdd className='mr-2 w-4 h-4' />
                Post a job
            </Button>
        </div>
    </div>
  );
};

export default Header;
