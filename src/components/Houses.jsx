import { Link } from 'react-router-dom'

export default function Houses(props) {
  const housesList = props.data.map((house, id) => {
    return(
      <li key={`house-${id}`}>
        <Link to={`/houses/${house.id}`}> {house.name}</Link>
      </li>
    )
  })

  return (
    <div className="page">
      <div className="header">
        <h2>Game of Thrones Houses</h2>
      </div>
      <ul className="list">A list of houses</ul>
      {housesList}
    </div>
  );
}