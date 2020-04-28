import * as React from 'react';
import { Link } from 'react-router-dom';

import { ReactComponent as CrownLogo } from '../../assets/crown.svg';
import './heder.styles.scss';

const Header = () => {
	return (
		<div className="header">
			<Link to="/">
				<CrownLogo className="logo" />
			</Link>
			<div className="options">
				<Link className="option" to="/shop">
					SHOP
				</Link>
				<Link className="option" to="/contact">
					CONTACT
				</Link>
				<Link className="option" to="/sign-in">
					SIGN-IN
				</Link>
			</div>
		</div>
	);
};

export default Header;
