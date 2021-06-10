import React, { useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import './Nav.css';
import netFlix_logo from './netflix-logo-png-2584.png';

function Nav() {
	const history = useHistory();
	const [handleShow, setHandleShow] = useState(false);
	const tranistionNavBar = () => {
		if (window.scrollY > 100) {
			setHandleShow(true);
		} else {
			setHandleShow(false);
		}
	};
	useEffect(() => {
		window.addEventListener('scroll', tranistionNavBar);
		return () => {
			window.removeEventListener('scroll', tranistionNavBar);
		};
	}, [handleShow]);
	return (
		<div className={`nav ${handleShow && ' nav__black'}`}>
			<div className="nav__contents">
				<img className="nav__logo" onClick={() => history.push('/')} src={netFlix_logo} alt="" />
				<div className="nav__right">
					<img
						onClick={() => history.push('/profile')}
						className="nav__avatar"
						src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png"
						alt=""
					/>
				</div>
			</div>
		</div>
	);
}

export default Nav;
