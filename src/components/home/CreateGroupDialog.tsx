import { Button } from "../ui/button";
import CreateGroupForm from "./CreateGroupForm";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

export default function CreateGroupDialog() {
  return (
    <Dialog >
      <DialogTrigger asChild>
        <Button>Create Group</Button>
      </DialogTrigger>
      <DialogContent>
        <CreateGroupForm />
      </DialogContent>
    </Dialog>
  );
}
