import Head from 'next/head'
import { AppProps } from "next/dist/shared/lib/router/router";
import { GlobalStyles } from "twin.macro";
function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>TailwindCSS x Next x TS</title>
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
