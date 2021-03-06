import React from 'react';
import { HashRouter as Router, Route, NavLink } from 'react-router-dom'
import '../style/index.css';
import Web from './pages/Web'
import Illustration from './pages/Illustration'
import Game from './pages/Game'
import About from './pages/About'

const routes = [
  { path: '/', name: 'WEB', Component: Web },
  { path: '/Illustration', name: 'ILLUSTRATION', Component: Illustration },
  { path: '/game', name: 'GAME', Component: Game },
  { path: '/about', name: 'ABOUT', Component: About },
]

function Menu() {
  function hm() {
    document.querySelector('.menu').classList.toggle("menu-close");
    document.querySelector('.hamburder-menu-container').classList.toggle("hamburder-menu-container-close");
    document.querySelector('.hamburger-menu').classList.toggle("hamburger-menu-close");
  }
  return (
    <Router>
      <>
        <header>
          <div className="header">
            <div className="logo-hm">
              <button onClick={() => hm()} className="hamburger-menu">
                <span className="menu-item"></span>
                <span className="menu-item"></span>
                <span className="menu-item"></span>
              </button>
              <div className="logo"><a href="https://vk.com/privalenkovkirill" rel = "noopener noreferrer" target="_blank">Кирилл Приваленков</a></div>
            </div>
            <div className="hamburder-menu-container hamburder-menu-container-close">
              <nav className="menu menu-close">
              <ul className="menu-main">
                {routes.map(route => (
                  <NavLink 
                  to={route.path}
                  key={route.path} 
                  onClick={() => hm()}
                  activeClassName="current"
                  exact
                >
                  <span>
                    {route.name}
                  </span></NavLink>
                ))}
              </ul>
            </nav>
            </div>
            
            
          </div>
        </header>
        {routes.map(({ path, Component }) => (
            <Route key={path} exact path={path}>
              <Component />
            </Route>
        ))}
      </>
    </Router>
  );
}

export default Menu;
