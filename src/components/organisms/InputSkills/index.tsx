import {Badge} from "@/components/ui/badge";
import {IoMdAdd} from "react-icons/io";
import {RxCross2} from "react-icons/rx";
import {Button} from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {Input} from "@/components/ui/input";
import {jobFormSchema} from "@/lib/form-schema";

import React, {FC, useRef, useState} from "react";
import {UseFormReturn} from "react-hook-form";
import {z} from "zod";

interface InputSkillsProps {
  form: UseFormReturn<z.infer<typeof jobFormSchema>>;
}

const InputSkills: FC<InputSkillsProps> = ({form}) => {
  const [isHide, setHide] = useState<boolean>(false);
  const [values, setValues] = useState<string[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  const handleSaveValue = () => {
    const value = inputRef.current?.value;
    if (!value) {
      return;
    }

    const newValue: any = [...values, value];
    setValues(newValue);

    form.setValue("requiredSkills", newValue);
  };

  const handleDeleteValue = (item: string) => {
    const skills: any = values.filter((value: string) => item !== value);

    setValues(skills);
    form.setValue("requiredSkills", skills);
  };

  return (
    <FormField
      control={form.control}
      name={"requiredSkills"}
      render={({field}) => (
        <FormItem>
          <FormLabel className="block">Add Skills</FormLabel>
          <FormControl>
            <>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
                onClick={() => setHide(!isHide)}
              >
                <IoMdAdd className="w-4 h-4 mr-2" />
                Add Skills
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                    <Input 
                        ref={inputRef}
                        className="w-[246px]"
                    />
                    <Button 
                    type="button"
                    onClick={handleSaveValue}
                    >
                        Save
                    </Button>
                </div>
              )}
              <div className="space-x-3">
                {values.map((item: string, key: number) => (
                    <Badge 
                    variant={"outline"}
                    key={key}
                    onClick={() => handleDeleteValue(item)}
                    className="py-2 px-4"
                    >
                        {item}
                        <RxCross2 className="w-3 h-3" />
                    </Badge>
                ))}
              </div>
            </>
          </FormControl>
        </FormItem>
      )}
    />
  );
};

export default InputSkills;
