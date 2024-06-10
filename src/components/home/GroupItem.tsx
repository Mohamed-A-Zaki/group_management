import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

export default function GroupItem() {
  return (
    <Card className="cursor-pointer">
      <CardHeader>
        <CardTitle>Card Title</CardTitle>
      </CardHeader>
      <CardContent>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam
          praesentium repellat esse deleniti rem. Incidunt tenetur fuga est
          quaerat eos!
        </p>
      </CardContent>
    </Card>
  );
}
