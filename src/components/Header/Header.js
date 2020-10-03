import React, {UserContext} from "react";
import "./Header.css";
import { Button, Form, FormControl, Nav, Navbar } from "react-bootstrap";
import logo from "../../logos/Group 1329.png";
import { Link } from "react-router-dom";

const Header = () => {
	

	return (
		<Navbar bg="light" expand="md">
			<div className="container-lg">
				<Link to="/" className="navbar-brand mr-md-5 mr-0">
					<div className="logo">
						<img src={logo} style={{ maxWidth: "120px" }} alt="logo dark" />
					</div>
				</Link>
				
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="ml-auto align-items-md-center">
						<Link to="/" className="nav-link mr-lg-5 mr-0">
							Home
						</Link>
						<Link to="/destination" className="nav-link mr-lg-5 mr-0">
							Destination
						</Link>

						<Link to="/" className="nav-link mr-lg-5 mr-0">
							Blog
						</Link>

						<Link to="/" className="nav-link mr-lg-5 mr-0">
							Contact
						</Link>


						
							<Button className="btn btn-warning tg-primary">Log out</Button>
						
							<Button className="btn btn-warning tg-primary" >
								Login
							</Button>
					

						
					</Nav>
				</Navbar.Collapse>
			</div>
		</Navbar>
	);
};

export default Header;
