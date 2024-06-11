import { IGroup } from "@/types/groups.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Edit, Trash2 } from "lucide-react";
import useGroupItem from "@/hooks/useGroupItem";

export default function GroupItem({ id, name, description }: IGroup) {
  const { handleDeleteGroup, handleEditGroup } = useGroupItem(id);

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
          <Edit
            size={20}
            className="cursor-pointer"
            onClick={handleEditGroup}
          />
        </div>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
