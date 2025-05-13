import Button from "@/components/Button";
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
					/>
					<Button text="Get Started" />
				</div>
			</div>
		</section>
	);
};

export default Features;
