import { Link } from "react-router-dom";
const DUMMY_DATA = [
  {
    id: "e1",
    title: "Some event",
  },
  {
    id: "e2",
    title: "Another event",
  },
];

function Events() {
  return (
    <>
      <h1>Events</h1>
      <ul>
        {DUMMY_DATA.map(event => <li key={event.id}>
            <Link to={event.id}>{event.title}</Link>
        </li>)}
      </ul>
    </>
  );
}

export default Events;
