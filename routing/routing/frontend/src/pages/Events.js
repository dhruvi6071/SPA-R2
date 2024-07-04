import { useLoaderData } from "react-router-dom";
import EventsList from "../components/EventsList";


function EventsPage() {
  const data = useLoaderData();
  if(data.isError){
    return <p>{data.message}</p>
  }
  const events = data.events;
  return <EventsList events={events} />;
}

export default EventsPage;

export async function loader() {

  // We can't use react hooks into loaders, because loader is not a react component. But we can use all js components.
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    return {isError: true, message: 'Could not fetch events'};

  } else {
    return response;
  }

};
