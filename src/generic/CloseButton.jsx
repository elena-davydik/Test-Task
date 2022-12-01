import { Button } from './Button';
import { ReactComponent as closeIcon } from '../assets/close.svg';

export const CloseButton = () => {
	return (
		<Button
			className="closeBtn"
			backgroundColor="light"
			state="enable"
			sizeW="fixed"
			size="small"
			Icon={closeIcon}
			iconPosition="before"
		/>
	);
};
