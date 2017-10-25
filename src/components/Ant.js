import React from "react";

// math.random for displaying random width highlights
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

	const renderRanks = antUpdateTicker === ants.length && (
		<div className="lg-odds-status">
			<p>{rank}</p>
		</div>
	);

	return (
		<div id="handwritten" style={{ transform: `rotate(${randRotate}deg)` }}>
			{renderRanks}
			<i className="pin" />
			<em>{name}</em>
			<p
				className="color-status"
				style={{
					backgroundColor: `${lowercaseColor}`,
					color: "#fff",
					width: `${Math.floor(Math.random() * 30) + 70}%`
				}}
			>
				color - {color}
			</p>
			<p
				className="length-status"
				style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
			>
				length - {length}mm
			</p>
			<p
				className="weight-status"
				style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
			>
				weight - {weight}mg
			</p>
			<p
				className="odds-status"
				style={{ width: `${Math.floor(Math.random() * 30) + 70}%` }}
			>
				Odds - {odds || status || "Not calculated"}
				{odds && "%"}
			</p>
		</div>
	);
};
