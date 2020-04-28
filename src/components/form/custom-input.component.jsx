import * as React from 'react';

import './custom-input.style.scss';

const CustomInput = ({ label, handleChange, ...otherProps }) => {
	return (
		<div className="group">
			<input className="form-input" onChange={handleChange} {...otherProps} />
			{label ? <label className={`${otherProps.value.length ? 'shrink' : ''}`}>{label}</label> : null}
		</div>
	);
};

export default CustomInput;
