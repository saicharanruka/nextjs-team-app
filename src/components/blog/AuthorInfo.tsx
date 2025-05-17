import Image, { StaticImageData } from "next/image";

const AuthorInfo = (props: {
	Avatar: StaticImageData;
	name: string;
	date: string;
	className?: string;
}) => {
	const { Avatar, name, date, className } = props;
	return (
		<div
			className={`flex items-center text-xs text-black/50 gap-3 ${className}`}
		>
			<Image src={Avatar} alt="avatar" className="size-6 rounded-full" />
			<div className="flex gap-2">
				<p className="">{name}</p>
				<p>|</p>
				<p>{date}</p>
			</div>
		</div>
	);
};

export default AuthorInfo;
