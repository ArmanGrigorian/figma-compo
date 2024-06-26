import { useState } from "react";

const ImageMagnifier = ({ src }: { src: string }) => {
	const [[x, y], setXY] = useState([0, 0]);
	const [[imgWidth, imgHeight], setSize] = useState([0, 0]);
	const [showMagnifier, setShowMagnifier] = useState(false);

	const magnifierWidth = 120;
	const magnifierHeight = 120;
	const zoomLevel = 1.5;

	return (
		<div
			className="rounded-3xl shadow w-full aspect-square"
			style={{
				position: "relative",
			}}>
			<img
				src={src}
				className="rounded-3xl shadow w-full aspect-square"
				onMouseEnter={(e) => {
					const elem = e.currentTarget;
					const { width, height } = elem.getBoundingClientRect();
					setSize([width, height]);
					setShowMagnifier(true);
				}}
				onMouseMove={(e) => {
					const elem = e.currentTarget;
					const { top, left } = elem.getBoundingClientRect();

					const x = e.pageX - left - window.pageXOffset;
					const y = e.pageY - top - window.pageYOffset;

					setXY([x, y]);
				}}
				onMouseLeave={() => {
					setShowMagnifier(false);
				}}
				alt="sneaker webp"
			/>

			<div
				className="glass"
				style={{
					display: showMagnifier ? "" : "none",
					position: "absolute",
					pointerEvents: "none",
					height: `${magnifierHeight}px`,
					width: `${magnifierWidth}px`,
					top: `${y - magnifierHeight / 2}px`,
					left: `${x - magnifierWidth / 2}px`,
					opacity: "1",
					border: "1px solid grey",
					borderRadius: "12px",
					backgroundColor: "white",
					backgroundImage: `url('${src}')`,
					backgroundRepeat: "no-repeat",
					backgroundSize: `${imgWidth * zoomLevel}px ${imgHeight * zoomLevel}px`,
					backgroundPositionX: `${-x * zoomLevel + magnifierWidth / 2}px`,
					backgroundPositionY: `${-y * zoomLevel + magnifierHeight / 2}px`,
				}}></div>
		</div>
	);
};

export default ImageMagnifier;
