import { useState } from 'react';

export const Button = ({
	className,
	text,
	backgroundColor,
	textColor,
	state,
	sizeW,
	size,
	Icon,
	iconPosition,
	nums,
	rounded,
}) => {
	const [click, setClick] = useState('');
	const handleClick = () => {
		setClick('click');
	};
	return (
		<button
			onClick={handleClick}
			className={[
				className,
				backgroundColor,
				textColor ? textColor : '',
				state === 'enable' ? '' : 'disable',
				sizeW === 'fill' ? 'size-fill' : 'size-fixed',
				(size === 'large' ? 'large' : '') || (size === 'medium' ? 'medium' : '') || (size === 'small' ? 'small' : ''),
				rounded ? 'rounded' : '',
				click,
			].join(' ')}>
			{iconPosition === 'before' && <Icon className="icon" />}

			{text}

			{iconPosition === 'after' && text && <Icon className="icon" />}

			{nums > 0 && <span className="nums">{nums}</span>}
		</button>
	);
};
