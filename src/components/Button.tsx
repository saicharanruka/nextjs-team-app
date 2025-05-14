import React from "react";

const Button = (props: { text: string }) => {
	const { text } = props;
	return (
		<button className="rounded-md bg-gray-900 text-white h-10 p-3 text-xs font-semibold">
			<span>{text}</span>
		</button>
	);
};

export default Button;
