import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { groups_list_atom } from "@/atoms/groups_list_atom";
import { open_create_group_atom } from "@/atoms/open_create_group_atom";
import toast from "react-hot-toast";

export default function useCreateGroupForm() {
  const { data } = groups_list_atom.useValue();

  const FormSchema = z.object({
    name: z.string().min(3, "name must be at least 3 characters."),
    description: z
      .string()
      .min(10, "description must be at least 10 characters.")
      .max(160, "description must not be longer than 160 characters."),
  });

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    /**
     * add the group to the groups list
     */
    const object_to_add = {
      id: Date.now(),
      ...values,
      createdAt: new Date().toString(),
    };

    /***
     * update the groups list
     */
    groups_list_atom.change("data", [...data, object_to_add]);

    /***
     * close the create group form
     */
    open_create_group_atom.close();

    /***
     * show success toast
     */
    toast.success("group created successfully");
  }

  return {
    form,
    onSubmit,
  };
}
