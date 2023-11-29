import { Badge } from '@/components/ui/badge';
import { Progress } from '@/components/ui/progress';
import { Separator } from '@/components/ui/separator';
import { PartyPopperIcon } from 'lucide-react';
import React, { FC } from 'react'

interface JobDetailProps {
  
}

const JobDetail: FC<JobDetailProps> = ({  }) => {
  return (
    <div>
      <div className="grid grid-cols-3 w-full gap-5">
        <div className="col-span-2 space-y-10">
          {/* begin::descriptions */}
          <div>
            <div className="text-3xl font-semibold">Description</div>
            <div className="text-gray-500 mt-3">
              <p>
                It is a long established fact that a reader will be distracted
                by the readable content of a page when looking at its layout.
                The point of using Lorem Ipsum is that it has a more-or-less
                normal distribution of letters, as opposed to using Content
                here, content here, making it look like readable English.
              </p>
            </div>
          </div>
          {/* end::descriptions */}

          {/* begin::responsibilities */}
          <div>
            <div className="text-3xl font-semibold">Responsibilities</div>
            <div className="text-gray-500 mt-3">
              <p>
                There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration in some form, by
                injected humour, or randomised words which do not look even
                slightly believable.
              </p>
            </div>
          </div>
          {/* end::responsibilities */}

          {/* begin::who you are */}
          <div>
            <div className="text-3xl font-semibold">Who You are</div>
            <div className="text-gray-500 mt-3">
              <p>
                Contrary to popular belief, Lorem Ipsum is not simply random
                text. It has roots in a piece of classical Latin literature from
                45 BC, making it over 2000 years old. Richard McClintock, a
                Latin professor at Hampden-Sydney College in Virginia, looked up
                one of the more obscure Latin words, consectetur, from a Lorem
                Ipsum passage, and going through the cites of the word in
                classical literature, discovered the undoubtable source.
              </p>
            </div>
          </div>
          {/* end::who you are */}

          {/* begin::nice to haves*/}
          <div>
            <div className="text-3xl font-semibold">Nice-To-Haves</div>
            <div className="text-gray-500 mt-3">
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry standard dummy text
                ever since the 1500s, when an unknown printer took a galley of
                type and scrambled it to make a type specimen book. It has
                survived not only five centuries, but also the leap into
                electronic typesetting, remaining essentially unchanged.
              </p>
            </div>
          </div>
          {/* end::nice to haves */}
        </div>
        <div>
          <div className="text-3xl font-semibold">About this role</div>

          <div className="shadow p-3 text-center my-6">
            1<span className="text-gray-500">of 10 capacity</span>
            <Progress className="mt-3" value={10} />
          </div>

          <div className="mb-10 space-y-5">
            <div className="flex justify-between">
              <div className="text-gray-500">Apply Before</div>
              <div className="font-semibold">12 Aug 2023</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Posted On</div>
              <div className="font-semibold">3 Aug 2023</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Job Type</div>
              <div className="font-semibold">Full-Time</div>
            </div>
            <div className="flex justify-between">
              <div className="text-gray-500">Salary</div>
              <div className="font-semibold">$100 - $1000 USD</div>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Category</div>

            <div className="space-x-5">
              <Badge>Design</Badge>
            </div>
          </div>

          <Separator />

          <div className="my-10">
            <div className="text-3xl font-semibold mb-4">Required Skills</div>

            <div className="space-x-5">
              {["HTML", "Javascript"].map((item: string, i: number) => (
                <Badge key={i}>{item}</Badge>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Separator className="my-8" />

      <div>
        <div className="text-3xl font-semibold">Perks & Benefits</div>
        <div className="text-gray-500">
          This job comes with several perks and benefits
        </div>

        <div className="grid grid-cols-4 gap-5 mt-9">
          {[0, 1, 2].map((item: number) => (
            <div key={item}>
              <PartyPopperIcon className="w-10 h-10 text-primary mb-6" />

              <div className="text-lg font-semibold mb-3">Full Healthcare</div>
              <div className="text-gray-500">
                All the Lorem Ipsum generators on the Internet tend to repeat
                predefined chunks as necessary, making this the first true
                generator on the Internet.
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default JobDetail;