import GroupsList from "./GroupsList";

export default function Groups() {
  return (
    <div>
      <div className="container">
        <div>
          <h2 className="font-bold text-3xl mt-10">Groups</h2>
          <GroupsList />
        </div>
      </div>
    </div>
  );
}
