import { atom } from "@mongez/react-atom";

export const id_group_to_edit = atom<number>({
  key: "id_group_to_edit",
  default: 0,
});
