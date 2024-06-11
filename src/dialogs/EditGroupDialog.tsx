import { open_edit_group_atom } from "@/atoms/open_edit_group_atom";
import EditGroupForm from "@/components/home/EditGroupForm";
import { Dialog, DialogContent } from "@/components/ui/dialog";

export default function EditGroupDialog() {
  const opened = open_edit_group_atom.useOpened();

  return (
    <Dialog open={opened} onOpenChange={open_edit_group_atom.toggle}>
      <DialogContent>
        <EditGroupForm />
      </DialogContent>
    </Dialog>
  );
}
