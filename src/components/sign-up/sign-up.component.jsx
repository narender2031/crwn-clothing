import * as React from 'react';

import './sign-up.style.scss';
import CustomInput from '../form/custom-input.component';
import CustomButton from '../custom-button/custom-button.component';

const SignUp = () => {
	const [ email, setEmail ] = React.useState('');
	const [ password, setPassword ] = React.useState('');
	const [ name, setName ] = React.useState('');
	const [ confirmPassword, setConfirmPassword ] = React.useState('');

	const handleSubmit = (event) => {
		event.preventDefault();
		setEmail('');
		setPassword('');
	};

	return (
		<div className="sign-up">
			<h2 className="title">I Don't have an account</h2>
			<span className="subtitle">sign-up with email and password</span>
			<form onSubmit={handleSubmit}>
				<CustomInput
					type="text"
					value={name}
					name="name"
					onChange={(value) => setName(value)}
					label="Display Name"
					required
				/>
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
					name="password"
					type="password"
					onChange={(value) => setPassword(value)}
					label="Password"
					required
				/>
				<CustomInput
					value={confirmPassword}
					name="confirm-password"
					type="confirm-password"
					onChange={(value) => setConfirmPassword(value)}
					label="Confirm Password"
					required
				/>

				<CustomButton type="submit" value="submit-form">
					Sign Up
				</CustomButton>
			</form>
		</div>
	);
};

export default SignUp;
