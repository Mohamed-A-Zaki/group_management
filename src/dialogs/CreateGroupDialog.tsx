import CreateGroupForm from "../components/home/CreateGroupForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { open_create_group_atom } from "@/atoms/open_create_group_atom";

export default function CreateGroupDialog() {
  const opened = open_create_group_atom.useOpened();

  return (
    <Dialog open={opened} onOpenChange={open_create_group_atom.toggle}>
      <DialogContent>
        <CreateGroupForm />
      </DialogContent>
    </Dialog>
  );
}
