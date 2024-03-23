import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head />
				<body>
					<Main />
					<NextScript />
					<script
						src="https://kit.fontawesome.com/c4b491e14f.js"
						crossOrigin="anonymous"
						async
					></script>
				</body>
			</Html>
		);
	}
}

export default MyDocument;
