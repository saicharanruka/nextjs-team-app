import Image from "next/image";

import HeroImage from "@/assets/hero.jpg";

const Hero = () => {
	return (
		<section className="pt-5 px-4 max-w-7xl fcontainer">
			<div className="md:flex justify-center ">
				<div className="flex items-center fcontainer md:h-[400px]">
					<div>
						<h1 className="text-5xl font-bold max-w-md">
							Bring a <span className="text-yellow-500 flex">remote team</span>{" "}
							together
						</h1>
						<p className="mt-4 opacity-50">
							Connect, collaborate, and conquer remotely <br /> with TeamApp.
						</p>
						<div>
							<form action="" className="pt-4">
								<input
									required
									type="email"
									placeholder=" Email"
									className="border-2 rounded-sm h-10 inline-flex p-2"
								></input>
								<button
									type="submit"
									className="rounded-md bg-gray-900 text-white h-10 p-2 pb-0.25 text-xs font-semibold"
								>
									Try it for free
								</button>
							</form>
						</div>
					</div>
				</div>
				<Image src={HeroImage} className="scale-125 pt-10" alt="Hero" />
			</div>
		</section>
	);
};

export default Hero;

{
	/* <div className="ml-4">
<h1 className="text-4xl font-bold">
    Bring a <span className="text-yellow-500">remote team</span>{" "}
    together
</h1>
<p className="mt-4">
    Connect, collaborate, and conquer remotely with TeamApp.
</p>
</div> */
}
