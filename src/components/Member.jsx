import { useParams } from "react-router-dom";

export default function Member({ data }) {
  const { houseId, memberId } = useParams();

  const foundHouse = data.find((house) => house.id.toString() === houseId);

  const foundMember = foundHouse.people.find((member) => member.id.toString() === memberId);

  return (
    <div className="page">
      <div className="header">
        <h2>Specific Member Name</h2>

        <h3>{foundMember.name}</h3>
      </div>
      <div className="desc">A description</div>
      {foundMember.description}
    </div>
  );
}
