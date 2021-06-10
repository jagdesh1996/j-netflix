import React, { useState } from 'react';
import './Login.css';
import netFlix_logo from './netflix-logo-png-2584.png';
import SignScreen from './SignScreen';
function Login() {
	const [login, setLogin] = useState(false);
	return (
		<div className="login">
			<div className="login__background">
				<img className="login__logo" src={netFlix_logo} alt="" />
				<button onClick={() => setLogin(true)} className="login__btn">
					Sign In
				</button>
			</div>
			<div className="login__backgroundGradient" />
			<div className="login__body">
				{login ? (
					<SignScreen />
				) : (
					<>
						<h1>Unlimited films, TV programmers and more.</h1>
						<h2>Watch anywhere. Cancel at anytime.</h2>
						<h3>Ready to watch? Enter your email to create or restart your membership.</h3>
						<div className="login__input">
							<form>
								<input type="email" placeholder="Enter Address" />
								<button onClick={() => setLogin(true)} className="login__btnStart">
									GET STARTED
								</button>
							</form>
						</div>
					</>
				)}
			</div>
		</div>
	);
}

export default Login;
