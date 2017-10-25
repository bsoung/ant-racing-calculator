import React from "react";

export default ({
	odds,
	status,
	randRotate,
	name,
	color,
	length,
	weight,
	rank,
	antUpdateTicker,
	ants
}) => {
	const lowercaseColor = color.toLowerCase();

	return (
		<div>
			<em>{name}</em>
			<p
				style={{
					backgroundColor: `${lowercaseColor}`,
					color: "#fff",
					width: `${Math.floor(Math.random() * 30) + 70}%`
				}}
			>
				color - {color}
			</p>
			<p style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}>
				length - {length}mm
			</p>
			<p style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}>
				weight - {weight}mg
			</p>
			<p style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}>
				Odds - {odds || status || "Not calculated"}
				{odds && "%"}
			</p>
		</div>
	);
};
