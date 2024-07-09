import { useParams, useRouteLoaderData} from 'react-router-dom';
import EventItem from '../components/EventItem';
import { useLoaderData, json } from 'react-router-dom';
function EventDetail() {
    // const params = useParams();
    const data = useLoaderData();
    return (
        <EventItem event = {data.event}>
            
        </EventItem>
    )
}


export default EventDetail;

export async function loader({request, params}) {
    const id = params.eventId;

    //We cannot use params here but function passes as a object here in react which has two parameters so we can use it.
    const response = await fetch('http://localhost:8000/events/');

    if(!response.ok) {
        throw json({message: 'Could not fetch details for selected event'}, {
            status: 500,
        } );
    }else{
        return response;
    }
}