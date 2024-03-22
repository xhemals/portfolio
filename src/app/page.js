import Head from "next/head";
import Image from "next/image";
import React from "react";
import SocialIcon from "./components/social-icon";

export default function Home() {
	return (
		<main className="main">
			<Image
				src="/xhemals-logo.png"
				width={500}
				height={500}
				alt="Logo of xhemals"
				priority
			></Image>
			<div className="socials">
				<SocialIcon
					className="fa-brands fa-github social-icon"
					href="https://github.com/xhemals"
					title="GitHub"
				/>
				<SocialIcon
					className="fa-brands fa-linkedin-in social-icon"
					href="https://www.linkedin.com/in/jamie-speller/"
					title="LinkedIn"
				/>
			</div>
			<div className="projects">
				<SocialIcon
					className="fa-solid fa-bus social-icon"
					href="/tfl-journey-planner"
					title="Journey Planner"
				/>
			</div>
		</main>
	);
}
