import React from 'react';
import { useSelector } from 'react-redux';
import { selectUser } from './features/userSlice';
import { auth } from './firebase';
import Nav from './Nav';
import './Profile.css';

function Profile() {
	const user = useSelector(selectUser);
	return (
		<div className="profile">
			<Nav />
			<div className="profile__screen">
				<h1>Edit Profile</h1>
				<div className="profile__info">
					<img
						src="https://cdn0.iconfinder.com/data/icons/user-collection-4/512/user-512.png"
						alt=""
					/>
					<div className="profile__details">
						<h2>{user.email}</h2>
						<div className="profile__plans">
							<h3>Plans </h3>
							<p>Renewal date: 04/03/2021</p>
							<div className="profile__subcribePackName">
								<h6>
									Netflix Standard
									<br />
									<span>1080p</span>
								</h6>
								<button className="profile__btnSubcribe">Subscribe</button>
							</div>
							<div className="profile__subcribePackName">
								<h6>
									Netflix Standard
									<br />
									<span>780p</span>
								</h6>
								<button className="profile__btnSubcribe">Subscribe</button>
							</div>
							<button onClick={() => auth.signOut()} className="profile__signOut">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Profile;
