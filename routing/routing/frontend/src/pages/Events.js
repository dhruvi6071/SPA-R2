import { useLoaderData } from 'react-router-dom';

import EventsList from '../components/EventsList';

function EventsPage() {
  const events = useLoaderData();
  //must be written code to handle http request states and fetch the data.
  return (
    <>
       <EventsList events={fetchedEvents} />
    </>
  );
}

export default EventsPage;