import Image from "next/image";
import CoverImage from "@/assets/blog/cover.png";

const SmallBlogBlock = () => {
	return (
		<div className="flex gap-5 mr-16 mt-4">
			<Image
				src={CoverImage}
				className="size-20 object-cover"
				alt="CoverImage"
			/>
			<div>
				<p className="font-semibold text-xs w-32">
					10 secret tips for managing a remote team
				</p>
				<p className="text-xs opacity-50">by John Doey</p>
			</div>
		</div>
	);
};

export default SmallBlogBlock;
