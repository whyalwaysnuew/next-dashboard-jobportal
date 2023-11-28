"use client"

import React, {FC} from 'react';
import {Button} from '@/components/ui/button';
import {RxDashboard, RxCalendar} from "react-icons/rx";
import {LuMail} from "react-icons/lu";
import {BiUserCheck} from "react-icons/bi";
import {PiListChecksLight} from "react-icons/pi";
import {HiMiniBuildingOffice2} from "react-icons/hi2";
import {BsGear} from "react-icons/bs";
import {CiLogout} from "react-icons/ci";
import { useRouter } from 'next/navigation';

interface SidebarProps{

}

const Sidebar: FC<SidebarProps> = ({ }) => {

  const router = useRouter()
  const navHome = () => router.push('/')
  const navJobListings = () => router.push('/job-listings')

    return (
      <div className="pb-12 min-h-screen">
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Dashboard</h2>
            <div className="space-y-3">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
                onClick={navHome}
              >
                <RxDashboard className="mr-2 text-lg" />
                Home
              </Button>

              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <LuMail className="mr-2 text-lg" />
                Messages
              </Button>

              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <HiMiniBuildingOffice2 className="mr-2 text-lg" />
                Company Profile
              </Button>

              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <BiUserCheck className="mr-2 text-lg" />
                All Applicants
              </Button>

              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
                onClick={navJobListings}
              >
                <PiListChecksLight className="mr-2 text-lg" />
                Job Listings
              </Button>

              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <RxCalendar className="mr-2 text-lg" />
                My Schedule
              </Button>
            </div>
          </div>
        </div>
        <div className="space-y-4 py-4">
          <div className="px-3 py-2">
            <h2 className="mb-2 px-4 text-lg font-semibold">Settings</h2>
            <div className="space-y-3">
              <Button
                variant={"ghost"}
                className="w-full justify-start rounded-none hover:text-primary"
              >
                <BsGear className="mr-2 text-lg" />
                Settings
              </Button>

              <Button
                variant={"ghost"}
                className="w-full text-red-500 justify-start rounded-none hover:bg-red-200 hover:text-red-500"
              >
                <CiLogout className="mr-2 text-lg" />
                Logout
              </Button>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Sidebar;