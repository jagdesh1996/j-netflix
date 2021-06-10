import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Route, Switch } from 'react-router-dom';
import './App.css';
import { login, logout, selectUser } from './features/userSlice';
import { auth } from './firebase';
import HomeScreen from './HomeScreen';
import Login from './Login';
import Profile from './Profile';

function App() {
	const user = useSelector(selectUser);
	const dispatch = useDispatch();
	useEffect(() => {
		const unsubcribe = auth.onAuthStateChanged((userAuth) => {
			if (userAuth) {
				// console.log(userAuth);
				dispatch(
					login({
						uid: userAuth.uid,
						email: userAuth.email,
					})
				);
			} else {
				dispatch(logout());
			}
		});
		return () => {
			return unsubcribe;
		};
	}, []);
	return (
		<div className="App">
			{user !== null ? (
				// <HomeScreen />
				<Switch>
					<Route exact path="/" component={HomeScreen} />
					<Route exact path="/profile" component={Profile} />
				</Switch>
			) : (
				<Login />
			)}
		</div>
	);
}

export default App;
