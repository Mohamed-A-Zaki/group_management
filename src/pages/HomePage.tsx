import Groups from "@/components/home/Groups";
import CreateGroupDialog from "@/dialogs/CreateGroupDialog";
import EditGroupDialog from "@/dialogs/EditGroupDialog";
import { useEffect } from "react";
import cache from "@mongez/cache";
import { groups_list_atom } from "@/atoms/groups_list_atom";

export default function HomePage() {
  const { data } = groups_list_atom.useValue();

  useEffect(() => {
    const data = cache.get("groups_list");

    if (data) {
      /***
       * update the groups list
       */
      groups_list_atom.change("data", data);
    }
  }, []);

  useEffect(() => {
    /**
     * store the groups list in the cache
     */
    cache.set("groups_list", data);
  }, [data]);

  return (
    <>
      <Groups />
      <CreateGroupDialog />
      <EditGroupDialog />
    </>
  );
}
