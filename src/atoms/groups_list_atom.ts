import { atom } from "@mongez/react-atom";

interface IGroup {
  id: string;
  name: string;
  description: string;
  createdAt: string;
}

export const groups_list_atom = atom<{ data: IGroup[] }>({
  key: "groups_list",
  default: {
    data: [],
  },
});
