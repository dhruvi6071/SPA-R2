import { NavLink } from 'react-router-dom';
import classes from './EventsNavigation.module.css';

function EventsNavigation() {
  return (
    <header className={classes.header}>
      <nav>
        <ul className={classes.list}>
          <NavLink>
            <a href="/events">All Events</a>
          </NavLink>
          <NavLink to=".events" className={({isActive}) => isActive ? classes.active : undefined}>
            <a href="/events/new">New Event</a>
          </NavLink>
        </ul>
      </nav>
    </header>
  );
}

export default EventsNavigation;
