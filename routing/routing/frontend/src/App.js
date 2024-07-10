import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import EditEvent from './pages/EditEvent';
import ErrorPage from './pages/Error';
import EventDetail, {
  loader as eventDetailLoader,
} from './pages/EventDetail';
import EventsPage, { loader as eventsLoader } from './pages/Events';
import EventsRoot from './pages/EventsRoot';
import HomePage from './pages/HomePage';
import NewEventPage from './pages/NewEventPage';
import RootLayout from './pages/Root';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      { index: true, element: <HomePage /> },
      {
        path: 'events',
        element: <EventsRoot />,
        children: [
          {
            index: true,
            element: <EventsPage />,
            loader: eventsLoader,
          },
          {
            path: ':eventId',
            id: 'event-detail',
            loader: eventDetailLoader,
            children: [
              {
                index: true,
                element: <EventDetail />,
              },
              { path: 'edit', element: <EditEvent /> },
            ],
          },
          { path: 'new', element: <NewEventPage /> },
        ],
      },
    ],
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;