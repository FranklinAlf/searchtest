import React from "react";
import {Nav, Navbar, Container, Form, FormControl, Button } from "react-bootstrap";
import { BrowserRouter as Router, Switch, Route, NavLink } from "react-router-dom";
import Home from "../home/Home";
import Contact from "../contact/Contact";
import CharacterDetail from "../game/GameDetail";
import Search from "../game/GameSearch";

function Layout() {
	return (
		<Router>
			<Navbar bg="dark" variant="dark" expand="lg">
				<NavLink to="/" exact>
					<Navbar.Brand>RAWG Video Games</Navbar.Brand>
				</NavLink>
				<Navbar.Toggle aria-controls="basic-navbar-nav" />
				<Navbar.Collapse id="basic-navbar-nav">
					<Nav className="mr-auto">
						<NavLink to="/" exact className="nav-link">
							Home
						</NavLink>
						<NavLink to="/contact" className="nav-link">
							Contact
						</NavLink>
					</Nav>
					<Form inline>
						<FormControl component={Search} />
						<Button variant="outline-light">Search</Button>
					</Form>
				</Navbar.Collapse>
			</Navbar>
			<Container>
				<Switch>
					<Route path={["/", "/home"]} exact component={Home} />
					<Route path="/contact" component={Contact} />
					<Route path="/game/gamesearch" component={Search} />
					<Route path="/game/:id" component={CharacterDetail} />
				</Switch>
			</Container>
		</Router>
	);
}

export default Layout;