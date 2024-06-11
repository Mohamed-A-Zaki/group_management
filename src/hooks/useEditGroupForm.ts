import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { groups_list_atom } from "@/atoms/groups_list_atom";
import { open_edit_group_atom } from "@/atoms/open_edit_group_atom";
import { id_group_to_edit } from "@/atoms/id_group_to_edit";
import { useEffect } from "react";
import toast from "react-hot-toast";

export default function useEditGroupForm() {
  const { data } = groups_list_atom.useValue();

  const group_id = id_group_to_edit.useValue();

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

  useEffect(() => {
    /***
     * set the default values for the form
     */
    form.reset(data.find((group) => group.id === group_id));
  }, [data, form, group_id]);

  function onSubmit(values: z.infer<typeof FormSchema>) {
    /***
     * update the group in the groups list
     */
    const data_with_edits = data.map((group) => {
      return group.id === group_id ? { ...group, ...values } : group;
    });

    /**
     * update the groups list
     */
    groups_list_atom.change("data", data_with_edits);

    /**
     * close the edit group form
     */
    open_edit_group_atom.close();

    /***
     * show success toast
     */
    toast.success("group updated successfully");
  }

  return {
    form,
    onSubmit,
  };
}
