const fs = require("fs");
const path = require("path");

// Define the path to the parent package.json
const parentPackageJsonPath = path.join(__dirname, "package.json");

// Read the parent package.json
const parentPackageJson = JSON.parse(
	fs.readFileSync(parentPackageJsonPath, "utf-8")
);

// Define the path to the submodule directory
const submoduleDir = path.join(__dirname, "src", "submodule");

// Get the list of submodules
const submodules = fs.readdirSync(submoduleDir);

// Loop through each submodule
for (const submodule of submodules) {
	// Define the path to the submodule package.json
	const submodulePackageJsonPath = path.join(
		submoduleDir,
		submodule,
		"package.json"
	);

	// Check if the submodule package.json exists
	if (fs.existsSync(submodulePackageJsonPath)) {
		// Read the submodule package.json
		const submodulePackageJson = JSON.parse(
			fs.readFileSync(submodulePackageJsonPath, "utf-8")
		);

		// Merge the submodule dependencies into the parent dependencies
		Object.assign(
			parentPackageJson.dependencies,
			submodulePackageJson.dependencies
		);
	}
}

// Write the updated parent package.json back to disk
fs.writeFileSync(
	parentPackageJsonPath,
	JSON.stringify(parentPackageJson, null, 2)
);
