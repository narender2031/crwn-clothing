import * as React from 'react';

import './sign-in.styles.scss';
import CustomInput from '../form/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignIn = () => {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail('');
		setPassword('');
	};

	return (
		<div className="sign-in">
			<h2 className="title">I already have an account</h2>
			<span className="subtitle">sign-in with email and password</span>
			<form onSubmit={handleSubmit}>
				<CustomInput
					type="email"
					value={email}
					name="email"
					onChange={(value) => setEmail(value)}
					label="Email"
					required
				/>
				<CustomInput
					value={password}
					name="email"
					type="password"
					onChange={(value) => setPassword(value)}
					label="Password"
					required
				/>

				<CustomButton type="submit" value="submit-form">
					Sign in
				</CustomButton>
			</form>
		</div>
	);
};

export default SignIn;
