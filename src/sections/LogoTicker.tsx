"use client";

import { Fragment } from "react";

import AdobeLogo from "../assets/logos/adobe.svg";
import DribbleLogo from "../assets/logos/dribble.svg";
import DropboxLogo from "../assets/logos/dropbox.svg";
import GithubLogo from "../assets/logos/github.svg";
import HubspotLogo from "../assets/logos/hubspot.svg";
import NotionLogo from "../assets/logos/notion.svg";
import StripeLogo from "../assets/logos/stripe.svg";
import ZoomLogo from "../assets/logos/zoom.svg";

import { motion } from "framer-motion";

const logos = [
	{ name: "Adobe", image: AdobeLogo },
	{ name: "Dribble", image: DribbleLogo },
	{ name: "Dropbox", image: DropboxLogo },
	{ name: "Github", image: GithubLogo },
	{ name: "Hubspot", image: HubspotLogo },
	{ name: "Notion", image: NotionLogo },
	{ name: "Stripe", image: StripeLogo },
	{ name: "Zoom", image: ZoomLogo },
];

const LogoTicker = () => {
	return (
		<section className="py-16 overflow-x-clip xl:max-w-4xl mx-auto">
			<div className="fcontainer">
				<p className="text-center opacity-40 text-xs font-semibold">
					Join 150+ companies trusting TeamApp for their remote workflow needs
				</p>
				<div
					className="flex overflow-hidden mt-2 h-[70px] bg-[#F2EFE8] items-center
         [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]"
				>
					<motion.div
						animate={{ x: "-50%" }}
						transition={{ duration: 30, ease: "linear", repeat: Infinity }}
						className="flex flex-none gap-16 pr-16"
					>
						{Array.from({ length: 2 }).map((_, i) => (
							<Fragment key={i}>
								{logos.map((logo) => (
									<logo.image key={logo.name} className="size-16 opacity-70" />
								))}
							</Fragment>
						))}
					</motion.div>
				</div>
			</div>
		</section>
	);
};

export default LogoTicker;
