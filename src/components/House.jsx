import { Link, useParams } from 'react-router-dom'

export default function House( {data} ) {
  const { id } = useParams()
  const foundMembers = data.find(house => house.id.toString() === id)

  const memberLinks = foundMembers.people.map((member, idx) => {
    return (
      <li key={`member-${idx}`}>
        <Link to = {`/houses/${id}/members/${member.id}`}> {member.name} </Link>
      </li>
    )
  })

  return (
    <div className="page">
      <div className="header">
        <h2>Members of a GoT House</h2>
      </div>
      <ul className="list">A list of members</ul>
      {memberLinks}
    </div>
  );
}
