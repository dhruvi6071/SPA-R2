import { Link, useSubmit } from 'react-router-dom';
import { Form } from 'react-router-dom';
import classes from './EventItem.module.css';

function EventItem({ event }) {
  const submit = useSubmit();
  function startDeleteHandler() {
     const proceed = window.confirm('Are you sure');
      if(proceed){
        submit(null, {method: 'delete'});
      }
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <Form>
        <button onClick={startDeleteHandler}>Delete</button>
        </Form>
      </menu>
    </article>
  );
}

export default EventItem;