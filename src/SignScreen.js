import React, { useRef } from 'react';
import { useHistory } from 'react-router-dom';
import { auth } from './firebase';
import './SignScreen.css';

function SignScreen() {
	const emailRef = useRef('');
	const passwdRef = useRef('');
	const history = useHistory();
	const register = (e) => {
		e.preventDefault();
		auth
			.createUserWithEmailAndPassword(emailRef.current.value, passwdRef.current.value)
			.then((res) => {
				console.log(res);
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	const signIn = (e) => {
		e.preventDefault();
		auth
			.signInWithEmailAndPassword(emailRef.current.value, passwdRef.current.value)
			.then((res) => {
				// console.log(res);
				history.push('/');
			})
			.catch((error) => {
				alert(error.message);
			});
	};
	return (
		<div className="signScreen">
			<form>
				<h1>Sign In</h1>
				<input ref={emailRef} type="email" placeholder="Email" />
				<input ref={passwdRef} type="password" placeholder="Password" />
				<button type="submit" onClick={signIn}>
					Sign In
				</button>
				<h4>
					New to Netflix?
					<span className="signScreen__spanLink" onClick={register}>
						{' '}
						Sign up now.
					</span>
				</h4>
			</form>
		</div>
	);
}

export default SignScreen;
