import dash from './img/dash.svg';
// import jackjack from './img/jack-jack.svg';
import mrIncredible from './img/mr-incredible.svg';
import elastigirl from './img/elastigirl.svg';
import violet from './img/violet.svg';
import edna from './img/edna.svg';
import incrediblesLogo from './img/incredibles-logo.svg';
import './MenuBar.css';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Dropdown from 'react-bootstrap/Dropdown';
import { NavLink } from 'react-router-dom';

// The content for the nav bar on the top of every page
function MenuBar() {
  return (
    <div>
      <Navbar aria-label="Be Incredible" className="color-nav" variant="dark"> { /*change to incredibles scheme */ }
        <NavLink aria-label="logo" to="/project-1-ZachGrande">
          <img className="nav-image" src={incrediblesLogo} alt="logo" />
        </NavLink>
        <Container>
          <Navbar.Brand href="/project-1-ZachGrande">Be Incredible</Navbar.Brand>
          <Nav className="me-auto">
            {/* <NavLink to="/project-1-ZachGrande" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Home</NavLink> */}
            <NavLink aria-label="Take the quiz" to="/project-1-ZachGrande/quiz" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Quiz</NavLink>
            <NavLink aria-label="View quiz results" to="/project-1-ZachGrande/results" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Results</NavLink>
            {/* the nav link is replaced by a dropdown to navigate imposter types */}
            {/* <Nav.Link >Types of Imposter Syndrome</Nav.Link> */}

            <Dropdown>
              
              <Dropdown.Toggle aria-label="Types of imposter syndrome" className="color-dropdown" id="dropdown-button-dark-example1" variant="secondary">
                <div className="dropdown-name-full">Types of Imposter Syndrome</div>
                <div className="dropdown-name-short">Types</div>
              </Dropdown.Toggle>
              <Dropdown.Menu className="dropdown" variant="dark">
                <Dropdown.Item>
                  {/* <NavLink to="/project-1-ZachGrande/type-1" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Perfectionist</NavLink> */}
                  <NavLink aria-label="Violet" to="/project-1-ZachGrande/type-1" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={violet} alt="violet" />
                    <p className="dropdown-text">Violet</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/project-1-ZachGrande/type-2" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Superhero</NavLink> */}
                  <NavLink aria-label="Mr. Incredible" to="/project-1-ZachGrande/type-2" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={mrIncredible} alt="mr-incredible" />
                    <p className="dropdown-text">Mr. Incredible</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/project-1-ZachGrande/type-3" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Genius</NavLink> */}
                  <NavLink aria-label="Edna Mode" to="/project-1-ZachGrande/type-3" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={edna} alt="edna" />
                    <p className="dropdown-text">Edna Mode</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/project-1-ZachGrande/type-4" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Soloist</NavLink> */}
                  <NavLink aria-label="Dash" to="/project-1-ZachGrande/type-4" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={dash} alt="dash" />
                    <p className="dropdown-text">Dash</p>
                  </NavLink>
                </Dropdown.Item>
                <Dropdown.Item>
                  {/* <NavLink to="/project-1-ZachGrande/type-5" className="nav-link" id="nav-li" activeClassName={"activeLink"}>Expert</NavLink> */}
                  <NavLink aria-label="Elastigirl" to="/project-1-ZachGrande/type-5" className="nav-link" id="nav-li" activeClassName={"activeLink"}>
                    <img className="dropdown-image" src={elastigirl} alt="elastigirl" />
                    <p className="dropdown-text">Elastigirl</p>
                  </NavLink>
                </Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

          </Nav>
        </Container>
      </Navbar>
    </div>
  )
}

export default MenuBar;
