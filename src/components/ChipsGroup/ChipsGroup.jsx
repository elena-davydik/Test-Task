import { CloseButton } from '../../generic/CloseButton';
import { config } from './config';

export const ChipsGroup = () => {
	return (
		<div className="component chips-group">
			{config.chips.map(({ Icon, title }) => {
				return (
					<button className="chips-group__btn light" key={title}>
						<Icon className="chips-group__icon" />
						{title}
					</button>
				);
			})}
			{config.chips.map(({ Icon, title }) => {
				return (
					<button className="chips-group__btn dark" key={title}>
						<Icon className="chips-group__icon" />
					</button>
				);
			})}
			{config.names.map((name) => {
				return (
					<div className="chips-group__name" key={Math.random()}>
						<p>{name}</p>
						<CloseButton />
					</div>
				);
			})}
		</div>
	);
};
