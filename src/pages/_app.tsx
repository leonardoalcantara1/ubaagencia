/* istanbul ignore file */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import GlobalStyles from 'styles/global'
import Footer from 'components/Footer'

export const metadata = {
  title: 'teste',
  description: 'teste',
}

function App(context: AppProps) {
  const { Component, pageProps } = context
  return (
    <>
      <Head>
        <link rel="shortcut icon" href="/img/favicon.gif" />
        <link rel="apple-touch-icon" href="/img/favicon.gif" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          // eslint-disable-next-line @typescript-eslint/ban-ts-comment
          // @ts-ignore
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
      <Footer />
    </>
  )
}

export default App
