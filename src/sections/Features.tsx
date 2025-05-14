import Button from "@/components/Button";
import FeaturesCard from "@/components/FeaturesCard";
import SectionHeader from "@/components/SectionHeader";
import React from "react";

const Features = () => {
	return (
		<section className="pt-12">
			<div className="fcontainer">
				<div className="flex-row justify-center">
					<SectionHeader
						tagline="Features"
						heading="Powerful features to simplify your team building experience"
						body="Supercharge your remote team's productivity and connection with our intuitive features"
					>
						<Button text="Get Started" />
					</SectionHeader>
				</div>
				<div className="sm:flex-row sm:gap-10 md:flex justify-center items-center md:gap-4 mt-12">
					<FeaturesCard
						heading="Infrastructures that scales to your needs"
						body="Grow your team without limits.TeamApp's flexible architecture effortlessly adapts to your expanding workforce, ensuring seamless collaboration."
					/>
					<FeaturesCard
						heading="Seamless Communication Hub"
						body="Centralize all team conversations, from quick chats to project-specific discussions, eliminating scattered emails and ensuring everyone stays informed."
					/>
					<FeaturesCard
						heading="Integrated Video Conferencing"
						body="Facilitate face-to-face interactions and foster stronger team connections with built-in high-quality video and audio calls."
					/>
				</div>
			</div>
		</section>
	);
};

export default Features;
