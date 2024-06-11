import { groups_list_atom } from "@/atoms/groups_list_atom";
import toast from "react-hot-toast";
import { open_edit_group_atom } from "@/atoms/open_edit_group_atom";
import { id_group_to_edit } from "@/atoms/id_group_to_edit";

export default function useGroupItem(id: number) {
  const { data } = groups_list_atom.useValue();

  const handleDeleteGroup = () => {
    /**
     * remove the group from the groups list
     */
    const new_data = data.filter((ele) => {
      return ele.id !== id;
    });

    /***
     * update the groups list
     */
    groups_list_atom.change("data", new_data);

    /***
     * show a success toast
     */
    toast.success("deleted successfully");
  };

  const handleEditGroup = () => {
    /**
     * update the id of the group to edit
     */
    id_group_to_edit.update(id);

    /***
     * open the edit group form
     */
    open_edit_group_atom.open();
  };

  return {
    handleDeleteGroup,
    handleEditGroup,
  };
}
