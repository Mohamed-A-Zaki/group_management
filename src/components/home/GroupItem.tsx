import { IGroup } from "@/types/groups.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import { groups_list_atom } from "@/atoms/groups_list_atom";
import toast from "react-hot-toast";

export default function GroupItem({ id, name, description }: IGroup) {
  const { data } = groups_list_atom.useValue();

  const handleDeleteGroup = () => {
    groups_list_atom.change(
      "data",
      data.filter((ele) => {
        return ele.id !== id;
      })
    );

    toast.success("deleted successfully");
  };

  return (
    <Card>
      <CardHeader className="flex-row items-center justify-between">
        <CardTitle>{name}</CardTitle>
        <div className="flex gap-3">
          <Trash2
            size={20}
            className="cursor-pointer"
            onClick={handleDeleteGroup}
          />
          <Edit size={20} className="cursor-pointer" />
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
