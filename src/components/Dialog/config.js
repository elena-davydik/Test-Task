import { ReactComponent as HouseIcon } from '../../assets/house.svg';
import { ReactComponent as WindowIcon } from '../../assets/window.svg';
import { ReactComponent as RepairingIcon } from '../../assets/repairing.svg';
import { ReactComponent as RelocationIcon } from '../../assets/relocation.svg';

export const config = {
	title: 'What type of work would you like to do?',
	types: [
		{ Icon: HouseIcon, title: 'Regular Cleaning', backgroundColor: 'light pink-background' },
		{ Icon: WindowIcon, title: 'Window Cleaning', backgroundColor: 'light white-background' },
		{ Icon: RepairingIcon, title: 'After Repairing', backgroundColor: 'light white-background' },
		{ Icon: RelocationIcon, title: 'After Relocation', backgroundColor: 'light pink-background' },
	],
	buttons: [
		{ color: 'black', text: 'Back' },
		{ color: 'pink', text: 'Next' },
	],
};
