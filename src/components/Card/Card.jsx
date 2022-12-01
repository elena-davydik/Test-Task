import { PlusButton } from '../../generic/PlusButton';
import { Toggle } from '../../generic/Toggle';
import { config } from './config';

export const Card = () => {
	return (
		<div className="component card">
			{config.lists.map((title) => {
				return (
					<div className="card__item" key={title}>
						<p className="card__title">{title}</p>
						<PlusButton />
					</div>
				);
			})}
			<div className="card__item">
				<p className="card__title">{config.biometrics}</p>
				<Toggle />
			</div>
		</div>
	);
};
