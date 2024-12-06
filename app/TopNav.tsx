import { NavLink } from 'react-router';

export function TopNav() {
	return (
		<nav>
			<NavLink to='/' end>
				Home
			</NavLink>
			<NavLink to='/about' end>
				About
			</NavLink>
		</nav>
	);
}
