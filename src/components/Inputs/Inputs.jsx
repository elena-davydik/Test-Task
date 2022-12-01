import { config } from './config';

export const Inputs = () => {
	return (
		<div className="component inputs">
			<section className="password">
				{config.password.map((input) => {
					return (
						<div className="password__item" key={input.title}>
							<p>{input.title}</p>
							<input type={input.type} />
						</div>
					);
				})}
			</section>
			<section className="adress">
				{config.adress.map((input) => {
					return <input key={input.placeholder} placeholder={input.placeholder} type={input.type} size={input.size} />;
				})}
			</section>
		</div>
	);
};
