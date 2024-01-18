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

import React, {FC, useEffect, useRef, useState} from "react";
import {UseFormReturn} from "react-hook-form";
import {z} from "zod";

interface InputSkillsProps {
  form: any;
  name: string;
  label: string;
}

const InputSkills: FC<InputSkillsProps> = ({form, name, label}) => {
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

    form.setValue(name, newValue);
  };

  const handleDeleteValue = (item: string) => {
    const skills: any = values.filter((value: string) => item !== value);

    setValues(skills);
    form.setValue(name, skills);
  };

  useEffect(() => {
    const val = form.getValues(name);

    if (val && val.length > 0) {
      setValues(val);
    }
  }, [form, name]);

  return (
    <FormField
      control={form.control}
      name={name}
      render={({field}) => (
        <FormItem>
          <FormLabel className="block">{label}</FormLabel>
          <FormControl>
            <>
              <Button
                type="button"
                variant="outline"
                className="mb-2"
                onClick={() => setHide(!isHide)}
              >
                <IoMdAdd className="w-4 h-4 mr-2" />
                {label}
              </Button>
              {isHide && (
                <div className="my-4 flex flex-row gap-4">
                  <Input ref={inputRef} className="w-[246px]" />
                  <Button type="button" onClick={handleSaveValue}>
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
