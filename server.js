const express = require("express");
const next = require("next");

const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
	const server = express();

	// Serve static files from the submodule's public folder
	server.use(
		"/tfl-journey-planner/assets",
		express.static("./src/submodule/TFL-Journey-Planner/public")
	);

	// All other requests go to Next.js
	server.all("*", (req, res) => handle(req, res));

	server.listen(3000, (err) => {
		if (err) throw err;
		console.log("> Ready on http://localhost:3000");
	});
});
