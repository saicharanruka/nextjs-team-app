import AuthorInfo from "@/components/blog/AuthorInfo";
import { BlogData } from "@/constants/Blog";
import Image from "next/image";

export default async function Home(props: { params: Promise<{ id: string }> }) {
	const params = await props.params;
	const id = Number(params.id);
	const data = BlogData[id - 1];

	return (
		<div className="container mx-auto px-5 pt-12">
			<div className=" flex justify-center ">
				<div>
					<h1 className="text-4xl font-semibold py-3">{data.title}</h1>
					<AuthorInfo
						Avatar={data.avatar}
						name={data.author}
						date={data.date}
					/>
					<Image src={data.coverImage} alt="Cover Image" className="py-3" />
				</div>
			</div>
			<div className="flex justify-center">
				<p className="max-w-5xl pt-5">{data.body}</p>
			</div>
		</div>
	);
}
