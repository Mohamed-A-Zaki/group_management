import Groups from "@/components/home/Groups";
import CreateGroupDialog from "@/dialogs/CreateGroupDialog";
import EditGroupDialog from "@/dialogs/EditGroupDialog";

export default function HomePage() {
  return (
    <>
      <Groups />
      <CreateGroupDialog />
      <EditGroupDialog />
    </>
  );
}
