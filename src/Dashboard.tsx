// import { QueryClient } from '@tanstack/react-query';
import { Outlet, NavLink } from 'react-router-dom';

// const queryClient = new QueryClient();

function Dashboard() {
  return (
    <div>
      <header className="wrapper">
        <div>
          <nav className="main-nav">
            <ul>
              <li>
                <NavLink to={`agenda`}>Agenda </NavLink>
              </li>
              <li>
                <NavLink to={`settings`}>Settings</NavLink>
              </li>
              <li>
                <NavLink to={`cards`}>Cards</NavLink>
              </li>
              <li>
                <NavLink to={`url-state`}>UrlState</NavLink>
              </li>
              <li>
                <NavLink to={`star-wars-planets`}>Star Wars Planets</NavLink>
              </li>
            </ul>
          </nav>
          <h1>Typescript + Redux </h1>
        </div>
      </header>
      <main className="wrapper">
        {' '}
        <Outlet />{' '}
      </main>
    </div>
  );
}

export default Dashboard;
