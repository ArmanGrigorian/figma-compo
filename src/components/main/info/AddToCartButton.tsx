import { MouseEvent, useContext } from "react";
import { CounterContext } from "../../context/CounterProvider";

const AddToCartButton = () => {
	const { state, dispatch } = useContext(CounterContext);

	function handleClick(e: MouseEvent<HTMLButtonElement>) {
		e.stopPropagation();

		const target = e.target as HTMLButtonElement;

		if (target.dataset.name) {
			dispatch({ type: target.dataset.name });
		}
	}

	if (state.count === 0) {
		return (
			<button
				onClick={(e) => handleClick(e)}
				type="button"
				data-name="increment"
				className="w-64 h-16 flex justify-center items-center gap-3 bg-custom-blue-dark rounded-lg shadow hover:opacity-80 active:scale-[0.99] max-xl:h-14 max-xl:gap-2 max-xl:grow">
				<img src="/icons/cartWhite.png" alt="cart icon png" className="pointer-events-none" />
				<span className="text-custom-white text-sm font-gotham-bold tracking-wide pointer-events-none">
					B корзину
				</span>
			</button>
		);
	}

	return (
		<div className="w-64 h-16 p-2 flex justify-between items-center bg-custom-white rounded-lg shadow-xl border-[3px] border-custom-blue-dark max-xl:h-14 max-xl:grow">
			<button
				onClick={(e) => handleClick(e)}
				type="button"
				data-name="decrement"
				className="hover:opacity-80 active:scale-95">
				<img src="/icons/decrement.png" alt="decrement icon png" className="pointer-events-none" />
			</button>

			<span>{state.count} штуки</span>

			<button
				onClick={(e) => handleClick(e)}
				type="button"
				data-name="increment"
				className="hover:opacity-80 active:scale-95">
				<img src="/icons/increment.png" alt="increment icon png" className="pointer-events-none" />
			</button>
		</div>
	);
};

export default AddToCartButton;