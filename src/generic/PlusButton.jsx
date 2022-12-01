import { Button } from '../generic/Button';
import { ReactComponent as plusIcon } from '../assets/plus.svg';

export const PlusButton = () => {
	return (
		<Button
			className="card__btn"
			backgroundColor="light"
			state="enable"
			sizeW="fixed"
			size="small"
			Icon={plusIcon}
			iconPosition="before"
		/>
	);
};
