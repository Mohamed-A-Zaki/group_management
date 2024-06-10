import { IGroup } from "@/types/groups.types";
import { atom } from "@mongez/react-atom";

export const groups_list_atom = atom<{ data: IGroup[] }>({
  key: "groups_list",
  default: {
    data: [],
  },
});
