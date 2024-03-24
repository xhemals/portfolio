import React from "react";
import Head from "next/head";
import { Analytics } from "@vercel/analytics/react";
import App from "@submodule/TFL-Journey-Planner/src/app/App";

export default function TflJourneyPlanner() {
	return (
		<>
			<Head>
				{/* Title */}
				<title>TFL Journey Planner</title>
				{/* Favicon */}
				<link rel="icon" href="tfl-journey-planner/favicon.ico" />
				{/* Description */}
				<meta
					name="description"
					content="Plan your journey across the TFL network with our TFL Journey Planner. Find the quickest routes and best fares for tube, bus, rail, and bike travel in London."
				/>
				{/* Keywords */}
				<meta
					name="keywords"
					content="TFL, Journey Planner, London Transport, London Tube, London Bus, London Rail, London Overground, London DLR, London Tram, London River Service, London Emirates Air Line, London Taxis, London Cycle Hire, London Roads, London Coaches, London Dial-a-Ride, London Travel Updates, London Fare Finder, London Maps, London Accessibility, London Stations, London Stops, London Points of Interest, London Travel Guide, London Commute, London Public Transport, London Transit, London Travel Times, London Travel Costs, London Travel Routes, London Travel Tips"
				/>
				{/* Viewport */}
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				{/* Robots */}
				<meta name="robots" content="index, follow" />
				{/* Canonical */}
				<link rel="canonical" href="https://xhem.al/tfl-journey-planner" />
				{/* Content Language */}
				<meta httpEquiv="content-language" content="en-gb" />
				{/* Open Graph */}
				<meta property="og:type" content="website" />
				<meta property="og:site_name" content="TFL Journey Planner" />
				<meta property="og:locale" content="en_GB" />
				<meta property="og:title" content="TFL Journey Planner" />
				<meta
					property="og:description"
					content="Plan your journey across the TFL network with our TFL Journey Planner."
				/>
				<meta
					property="og:image"
					content="https://xhem.al/tfl-journey-planner/favicon.ico"
				/>
				<meta property="og:url" content="https://xhem.al/tfl-journey-planner" />
				{/* Twitter */}
				<meta name="twitter:card" content="summary" />
				<meta name="twitter:title" content="TFL Journey Planner" />
				<meta
					name="twitter:description"
					content="Plan your journey across the TFL network with our TFL Journey Planner."
				/>
				<meta
					name="twitter:image"
					content="https://xhem.al/tfl-journey-planner/favicon.ico"
				/>
			</Head>
			<Analytics />
			<App />
			<footer>
				<p>
					Powered by TfL Open Data | Contains OS data © Crown copyright and
					database rights 2016 and Geomni UK Map data © and database rights
					[2019]
				</p>
			</footer>
		</>
	);
}
