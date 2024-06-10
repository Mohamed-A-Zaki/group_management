import { IGroup } from "@/types/groups.types";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GroupItem({ name, description }: IGroup) {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>{name}</CardTitle>
      </CardHeader>
      <CardContent>
        <p>{description}</p>
      </CardContent>
    </Card>
  );
}
