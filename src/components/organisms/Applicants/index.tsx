import React, { FC } from 'react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { JOB_APPLICANT_COLUMNS, JOB_APPLICANT_DATA } from '@/constants';
import { Badge } from '@/components/ui/badge';
import ButtonActionTable from '../ButtonActionTable';

interface ApplicantsProps {
  applicants: any;
}

const Applicants: FC<ApplicantsProps> = ({ applicants }) => {
  return (
    <div>
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            {JOB_APPLICANT_COLUMNS.map((item: string, i: number) => (
              <TableHead key={item + i}>{item}</TableHead>
            ))}
            <TableHead>Action</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {applicants && (
            <>
              {applicants.map((item: any, i: number) => (
                <TableRow key={item.id + i}>
                  <TableCell>{item.user.name}</TableCell>
                  <TableCell>
                    <ButtonActionTable url="" />
                  </TableCell>
                </TableRow>
              ))}
            </>
          )}
        </TableBody>
      </Table>
    </div>
  );
}

export default Applicants;