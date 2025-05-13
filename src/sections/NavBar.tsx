"use client";
import Logo from "../assets/logo.svg";

const navLinks = [
	{ label: "Product", href: "/" },
	{ label: "Blog", href: "/blog" },
	{ label: "Services", href: "/services" },
	{ label: "Contact", href: "/contact" },
];

const NavBar = () => {
	return (
		<section className="w-full top-0 z-50">
			<div className="px-4 max-w-6xl fcontainer">
				<div className="flex justify-between items-center">
					<div className="inline-flex items-center flex-1">
						<Logo className="size-12 mx-4" />
						<p className="pr-4 opacity-50">|</p>
						<nav className="flex gap-10 mx-4 opacity-50 text-xs font-medium">
							{navLinks.map((link) => (
								<a key={link.label} href={link.href}>
									{link.label}
								</a>
							))}
						</nav>
					</div>
					<div className="flex justify-center items-center">
						<a className="p-2 text-xs font-medium mr-2">Login</a>
						<a className="p-2 text-xs font-medium">Sign Up</a>
					</div>
				</div>
			</div>
		</section>
	);
};

export default NavBar;
