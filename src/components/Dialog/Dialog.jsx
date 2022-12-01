import { Button } from '../../generic/Button';
import { config } from './config';

export const Dialog = () => {
	return (
		<div className="component dialog">
			<p className="dialog__title">{config.title}</p>
			<div className="dialog__types">
				{config.types.map(({ Icon, title, backgroundColor }) => {
					return (
						<Button
							Icon={Icon}
							text={title}
							backgroundColor={backgroundColor}
							iconPosition="before"
							state="enable"
							size="medium"
							className="dialog__btn"
							key={Math.random()}
						/>
					);
				})}
			</div>
			<div className="dialog__bnts">
				{config.buttons.map(({ color, text }) => {
					return <Button textColor={color} text={text} size="medium" key={text} />;
				})}
			</div>
		</div>
	);
};
