import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => {
	return (
		<div>
			<nav>
				<div className="nav-items container">
					<div className="logo">
						<a href="/">
							<h1>COCKTAIL APP</h1>
						</a>
					</div>
					<ul>
						<li>
							<NavLink to="/" activeClassName="active">Home</NavLink>
						</li>
						<li>
							<NavLink to="/about" activeClassName="active">About</NavLink>
						</li>
						<li>
							<NavLink to="/products" activeClassName="active">Products</NavLink>
						</li>
					</ul>
				</div>
			</nav>
		</div>
	);
};

export default NavBar;
