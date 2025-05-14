import FeaturesLogo from "../assets/features.svg";

const FeaturesCard = (props: { heading: string; body: string }) => {
	const { heading, body } = props;
	return (
		<div className="border rounded-lg px-3 bg-mustard max-w-sm h-[300px]">
			<FeaturesLogo className="size-[60px] my-4" />
			<h3 className="text-xl font-semibold py-4">{heading}</h3>
			<p className=" text-xs font-light opacity-40">{body}</p>
		</div>
	);
};

export default FeaturesCard;
