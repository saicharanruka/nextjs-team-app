import Image, { StaticImageData } from "next/image";
import AuthorInfo from "./AuthorInfo";

const FeaturedBlog = (props: {
	featured?: boolean;
	coverImage: StaticImageData;
	avatarImage: StaticImageData;
	author: string;
	date: string;
	title: string;
	body: string;
	id: number;
}) => {
	const { featured, coverImage, avatarImage, title, body, id, author, date } =
		props;

	return (
		<div className="flex justify-center ">
			<div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 border p-4 rounded-xl bg-white shadow-lg overflow-hidden">
				<Image
					src={coverImage}
					alt="CoverImage"
					className="w-full md:w-1/2 object-cover rounded-lg max-w-full"
				/>
				<div className="flex flex-col justify-center gap-3">
					{featured && (
						<p className="text-xs w-fit p-1 bg-black/50 text-white uppercase font-semibold rounded">
							FEATURED
						</p>
					)}

					<a href={`/blog/${id}`}>
						<h4 className="text-lg font-bold mt-2">{title}</h4>
					</a>
					<p className="text-sm text-gray-700 mt-1">
						{body.slice(0, 50) + "..."}
					</p>
					<AuthorInfo
						Avatar={avatarImage}
						name={author}
						date={date}
						className="pt-2"
					/>
				</div>
			</div>
		</div>
	);
};

export default FeaturedBlog;
