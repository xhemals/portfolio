"use client";
export default function SocialIcon({ className, href, title }) {
	const bounce = (event) => {
		event.currentTarget.querySelector("i").classList.add("fa-bounce");
	};

	const bounceEnd = (event) => {
		event.currentTarget.querySelector("i").classList.remove("fa-bounce");
	};
	return (
		<a
			href={href}
			target="_blank"
			onMouseOver={(event) => bounce(event)}
			onMouseOut={(event) => bounceEnd(event)}
		>
			<i
				className={className}
				style={{ color: "#fce028" }}
				aria-hidden="true"
			></i>
			<p>{title}</p>
		</a>
	);
}
