import FooterBlock from "@/components/FooterBlock";
import Logo from "../assets/logo.svg";

const Footer = () => {
	return (
		<footer>
			<div className="fcontainer pb-12 pt-6 bg-[#F2EFE8]">
				<div className="flex justify-between gap-20 opacity-40">
					<div className="flex-row justify-center">
						<Logo className="size-12 -mb-3" />
						<p className="text-xs max-w-36">
							The last team chat solution you will ever need.
						</p>
					</div>
					<div className="flex gap-10">
						<FooterBlock />
						<FooterBlock />
						<FooterBlock />
					</div>
					<div className="pr-5">
						<h4 className="text-xs font-semibold uppercase">Stay Up To Date</h4>
						<form action="" className="">
							<input
								required
								type="email"
								placeholder=" Email"
								className="border-2 rounded-sm h-5 inline-flex p-2 max-w-28"
							></input>
						</form>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
