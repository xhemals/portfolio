import { Inter } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/react";
import Script from "next/script";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
	title: "xhemals | Jamie Speller",
	description: "xhemals | Jamie Speller",
};

export default function RootLayout({ children }) {
	return (
		<>
			<html lang="en">
				<head>
					<link rel="canonical" href="https://xhem.al" />
					<meta name="robots" content="index, follow" />
					<meta name="keywords" content="Jamie Speller, xhemal, xhemals" />
					<meta property="og:title" content="xhemals | Jamie Speller" />
					<meta property="og:description" content="xhemals | Jamie Speller" />
					<meta property="og:type" content="website" />
					<meta property="og:image" content="/xhemals-logo.png" />
					<meta name="twitter:card" content="summary" />
					<meta name="twitter:title" content="xhemals | Jamie Speller" />
					<meta name="twitter:description" content="xhemals | Jamie Speller" />
					<meta name="twitter:image" content="/xhemals-logo.png" />
				</head>
				<body className={inter.className}>
					{children}
					<script
						src="https://kit.fontawesome.com/c4b491e14f.js"
						crossOrigin="anonymous"
						async
					></script>
				</body>
				<Analytics />
			</html>
		</>
	);
}
