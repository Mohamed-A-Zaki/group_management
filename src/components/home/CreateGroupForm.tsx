import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "../ui/textarea";
import { groups_list_atom } from "@/atoms/groups_list_atom";
import { open_create_group_atom } from "@/atoms/open_create_group_atom";

const FormSchema = z.object({
  name: z.string().min(3, "name must be at least 3 characters."),
  description: z
    .string()
    .min(10, "description must be at least 10 characters.")
    .max(160, "description must not be longer than 160 characters."),
});

export default function CreateGroupForm() {
  const { data } = groups_list_atom.useValue();

  const form = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      name: "",
      description: "",
    },
  });

  function onSubmit(values: z.infer<typeof FormSchema>) {
    const object_to_add = {
      id: Date.now(),
      ...values,
      createdAt: new Date().toString(),
    };

    groups_list_atom.change("data", [...data, object_to_add]);

    open_create_group_atom.close();
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
        <h3 className="text-center font-semibold text-2xl">Create New Group</h3>

        <FormField
          control={form.control}
          name="name"
          render={({ field }) => (
            <FormItem>
              <FormLabel>group name</FormLabel>
              <FormControl>
                <Input placeholder="group name" {...field} />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <FormField
          control={form.control}
          name="description"
          render={({ field }) => (
            <FormItem>
              <FormLabel>group description</FormLabel>
              <FormControl>
                <Textarea
                  placeholder="group description"
                  className="resize-none"
                  {...field}
                />
              </FormControl>
              <FormMessage />
            </FormItem>
          )}
        />

        <Button type="submit">Create Group</Button>
      </form>
    </Form>
  );
}
