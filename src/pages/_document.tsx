import Document, { Html, Head, Main, NextScript } from 'next/document';
import { Children } from "react";
import { extractCritical } from '@emotion/server';

export default class MyDocument extends Document {
	render() {
		return (
			<Html lang="en">
				<Head>
				</Head>
				<body>
					<Main />
					<NextScript />
				</body>
			</Html>
		);
	}
}

MyDocument.getInitialProps = async (ctx) => {
	const initialProps = await Document.getInitialProps(ctx)
	const page = await ctx.renderPage()
	const styles = extractCritical(page.html)
	return {
		...initialProps,
		...page,
		styles: [
			...Children.toArray(initialProps.styles),
			<style
				key="emotion-style-tag"
				data-emotion-css={styles.ids.join(' ')}
				dangerouslySetInnerHTML={{ __html: styles.css }}
			/>
		]
	}
}