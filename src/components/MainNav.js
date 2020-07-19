import React from 'react'
import { Link } from 'gatsby'
import instagram from '../img/instagram.svg'
import linkedin from '../img/linkedin.svg'
import github from '../img/github-icon.svg'
import { Navbar, Nav } from 'react-bootstrap' 


const MainNav = class extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      active: false,
      navBarActiveClass: '',
    }
  }

  toggleHamburger = () => {
    // toggle the active boolean in the state
    this.setState(
      {
        active: !this.state.active,
      },
      // after state has been updated,
      () => {
        // set the class in state for the navbar accordingly
        this.state.active
          ? this.setState({
              navBarActiveClass: 'is-active',
            })
          : this.setState({
              navBarActiveClass: '',
            })
      }
    )
  }

  render() {
    return (
      <Navbar bg="light" expand="lg">
        {/* container */}
        <Link to="/">
          <Navbar.Brand as="span">Henry G</Navbar.Brand>
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Link className="navbar-item" to="/about">
              <Nav.Link as="span">About</Nav.Link>
            </Link>
            <Link className="navbar-item" to="/blog">
              <Nav.Link as="span">Blog</Nav.Link>
            </Link>
            <Link className="navbar-item" to="/contact">
              <Nav.Link as="span">Contact</Nav.Link>
            </Link>
          </Nav>
          <Nav.Link as="span">
            <a
              href="https://github.com/henrygrant"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={github} alt="Github" style={{height: "25px"}} />
              </span>
            </a>
          </Nav.Link>
          <Nav.Link as="span">
            <a 
              href="https://www.instagram.com/yesthisishenry/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={instagram} alt="Instagram" style={{height: "25px"}} />
              </span>
            </a>
          </Nav.Link>
          <Nav.Link as="span">
            <a 
              href="https://www.linkedin.com/in/henry-grant-662227169/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="icon">
                <img src={linkedin} alt="LinkedIn" style={{height: "25px"}} />
              </span>
            </a>
          </Nav.Link>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default MainNav
