import { groups_list_atom } from "@/atoms/groups_list_atom";
import GroupItem from "./GroupItem";
import EmptyMessage from "../common/EmptyMessage";

export default function GroupsList() {
  const { data } = groups_list_atom.useValue();

  if (data.length === 0) {
    return <EmptyMessage />;
  }

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 my-10">
      {data.map((group) => {
        return <GroupItem key={group.id} />;
      })}
    </div>
  );
}
