const SectionHeader = (props: {
	tagline: string;
	heading: string;
	body: string;
}) => {
	const { tagline, heading, body } = props;

	return (
		<div className="fcontainer text-center">
			<div className=" flex justify-center">
				<p className="text-xs font-extrabold text-yellow-300 uppercase">
					| {tagline}
				</p>
			</div>
			<div className="flex justify-center">
				<h1 className=" max-w-xl text-center text-4xl font-bold pt-4 ">
					{heading}
				</h1>
			</div>

			<div className="flex justify-center">
				<p className=" py-8 text-xs text-center max-w-xs opacity-50 font-semibold">
					{body}
				</p>
			</div>
		</div>
	);
};

export default SectionHeader;
