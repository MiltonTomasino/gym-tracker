import Logo from "../assets/logo.jpg"
import { Link, useMatch, useResolvedPath } from "react-router-dom"
import "../styles/Navbar.css"
import Logout from './Logout';
import StartSession from "./StartSession";

export default function Navbar({ isLoggedIn, setIsLoggedIn }) {
    return(
    <nav className="nav">
        <Link to="/"><img src={Logo} /></Link>
            <ul>
                {isLoggedIn ? (
                  <>
                    <StartSession />
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <CustomLink to="/profile">Profile</CustomLink>
                    <Logout setIsLoggedIn={setIsLoggedIn} /> {/* Render the Logout component */}
                  </>
                ) : (
                  <>
                    <CustomLink to="/about">About</CustomLink>
                    <CustomLink to="/contact">Contact</CustomLink>
                    <CustomLink to="/register">Register</CustomLink>
                    <CustomLink to="/login">Login</CustomLink>
                  </>
                )}
            </ul>
        </nav>
    )
}

function CustomLink({ to, children, ...props }) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({ path: resolvedPath.pathname, end: true })
  
    return (
      <li className={isActive ? "active" : ""}>
        <Link to={to} {...props}>
          {children}
        </Link>
      </li>
    )
  }

