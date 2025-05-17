import FeaturedBlog from "@/components/blog/FeaturedBlog";
import SmallBlogBlock from "@/components/blog/SmallBlogBlock";
import ChevronRight from "@/assets/blog/chevron_right.svg";

import { BlogData } from "@/constants/Blog";

const BlogHome = () => {
	return (
		<div className="container mx-auto  sm:px-2">
			<section className="mt-12">
				<h1 className="text-4xl">Blog</h1>
				<p className="text-sm opacity-40 font-semibold pt-2">
					Our latest design tips, tricks, insights and resources hot off the
					presses
				</p>
				<div className="pt-2">
					{BlogData.map((blog) => {
						if (blog.featured) {
							return (
								<FeaturedBlog
									title={blog.title}
									body={blog.body}
									coverImage={blog.coverImage}
									author={blog.author}
									date={blog.date}
									avatarImage={blog.avatar}
									featured
									id={blog.id}
									key={blog.id}
								/>
							);
						}
					})}
				</div>

				<div className="flex justify-between sm:gap-2 lg:gap-8 mt-16">
					<div className="grid sm:grid-cols-1 md:grid-cols-2 gap-2">
						{BlogData.map((blog) => {
							if (!blog.featured) {
								return (
									<FeaturedBlog
										id={blog.id}
										key={blog.id}
										title={blog.title}
										body={blog.body}
										author={blog.author}
										avatarImage={blog.avatar}
										coverImage={blog.coverImage}
										date={blog.date}
									/>
								);
							}
						})}
					</div>
					<div className="hidden lg:inline">
						<div className="rounded-xl border p-5">
							<h1 className="font-medium text-xl mr-16">Popular</h1>
							<div>
								<SmallBlogBlock />
								<SmallBlogBlock />
								<SmallBlogBlock />
								<SmallBlogBlock />
								<SmallBlogBlock />
								<SmallBlogBlock />
							</div>
						</div>
						<div className="mt-12">
							<div className="flex flex-col gap-3 p-4 border rounded-xl">
								<h4 className="uppercase font-bold text-sm ">Stay Tuned</h4>
								<p className="text-sm">
									Subscribe to get our latest updates on new design techniques
								</p>
								<div className="flex">
									<input
										type="email"
										placeholder=" Email"
										className="border-2 border-violet-700"
									/>
									<div className="bg-violet-700 w-8 flex items-center justify-center">
										<ChevronRight />
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
};

export default BlogHome;
{
	/* <AuthorInfo
	Avatar={Avatar}
	name="Beth Carmy"
	date="10th May, 2025"
	className="pt-2"
/>; */
}

{
	/* <section className="pt-12">
<div className="flex justify-between px-6">
    <div className="max-w-4xl">
        <h1 className="text-4xl">Blog</h1>
        <p className="text-xs opacity-40 font-semibold pt-2 text-wrap sm:max-w-2xl md:w-full">
            Our latest design tips, tricks, insights and resources hot off the
            presses
        </p>
    </div>
</div> */
}
{
	/* <div className="py-6">
    <div className="container px-4">
        <div className="flex justify-center">
            <div className="w-full max-w-4xl flex flex-col md:flex-row gap-4 border p-4 rounded-xl bg-white shadow-lg overflow-hidden">
                <Image
                    src={CoverImage}
                    alt="CoverImage"
                    className="w-full md:w-1/2 object-cover rounded-lg max-w-full"
                />
                <div className="flex flex-col justify-center">
                    <p className="text-xs w-fit p-1 bg-black/50 text-white uppercase font-semibold rounded">
                        FEATURED
                    </p>
                    <h4 className="text-lg font-bold mt-2">
                        10 secret tips for managing a remote team
                    </h4>
                    <p className="text-sm text-gray-700 mt-1">
                        Navigating the complexities of remote team management
                        demands a strategic and nuanced approach. The...
                    </p>
                </div>
            </div>
        </div>
    </div>
</div> */
}

{
	/* <div className="pt-6">
    <div className="flex justify-between">
        <div className="grid grid-cols-2"></div>
        <div></div>
    </div>
</div> */
}
{
	/* </section> */
}
