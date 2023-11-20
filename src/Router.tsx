import App from './Dashboard.tsx';
import { createBrowserRouter } from 'react-router-dom';
import { Agenda } from './featers/Agenda.tsx';
import { Settings } from './featers/Settings.tsx';
import { Fallback } from './featers/Fallback.tsx';
import { Cards } from './featers/cards/Cards.tsx';
import './main.scss';
import '@radix-ui/themes/styles.css';
import { UrlState } from './featers/UrlState.tsx';
import { StarWarsPlanet } from './StartWars/starWarsPlanet.tsx';

export const Router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '/',
        element: <Agenda />,
      },
      {
        path: '/agenda',
        element: <Agenda />,
      },
      {
        path: '/settings',
        element: <Settings />,
      },
      {
        path: '/cards',
        element: <Cards />,
      },
      {
        path: '/url-state',
        element: <UrlState />,
      },
      {
        path: '/star-wars-planets',
        element: <StarWarsPlanet />,
      },
    ],
  },
  { path: '*', element: <Fallback /> },
]);
