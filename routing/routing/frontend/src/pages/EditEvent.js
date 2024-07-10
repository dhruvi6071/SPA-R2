// import { useLoaderData } from "react-router-dom";
import EventForm from "../components/EventForm";
import { useRouteLoaderData } from "react-router-dom";
function EditEvent() {
    const data = useRouteLoaderData('event-detail');
    const event = data.event;
    return (
        <EventForm event={event} />
    )
}

export default EditEvent;