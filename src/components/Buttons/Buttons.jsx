import { Button } from '../../generic/Button';
import { config } from './config';

export const Buttons = () => {
	return (
		<div className="component buttons">
			{config.map(({ id, text, backgroundColor, textColor, state, sizeW, size, Icon, iconPosition, nums, rounded }) => {
				return (
					<Button
						key={id}
						text={text}
						backgroundColor={backgroundColor}
						textColor={textColor}
						state={state}
						sizeW={sizeW}
						size={size}
						Icon={Icon}
						iconPosition={iconPosition}
						nums={nums}
						rounded={rounded}
					/>
				);
			})}
		</div>
	);
};
