import React from "react";

const Button = (props: { text: string }) => {
	const { text } = props;
	return (
		<button className="rounded-md bg-gray-900 text-white h-10 p-2 pb-0.25 text-xs font-semibold">
			{text}
		</button>
	);
};

export default Button;
