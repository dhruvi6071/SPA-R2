import EventForm from "../components/EventForm";

function NewEventPage() {
    function submitHandler(event){
        //To send request in backend.
        event.preventDefault();

    }
    return <EventForm></EventForm>
}

export default NewEventPage;