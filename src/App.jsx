import { Buttons } from './components/Buttons/Buttons';
import { Inputs } from './components/Inputs/Inputs';
import { Card } from './components/Card/Card';
import { ChipsGroup } from './components/ChipsGroup/ChipsGroup';
import { Dialog } from './components/Dialog/Dialog';

export const App = () => {
	return (
		<div className="App">
			<Buttons />
			<Inputs />
			<Card />
			<ChipsGroup />
			<Dialog />
		</div>
	);
};
