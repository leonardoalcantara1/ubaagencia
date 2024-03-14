/* istanbul ignore file */
import type { AppProps } from 'next/app'
import Head from 'next/head'
import { useRouter } from 'next/router'
import GlobalStyles from 'styles/global'
import artists from '../artists'

function App({ Component, pageProps }: AppProps) {
  const router = useRouter()

  const slug = router.query.artist
  const artist = artists[slug as string]

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
          crossOrigin="true"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100..900;1,100..900&display=swap"
          rel="stylesheet"
        />
        <title>{artist?.title}</title>
        <meta name="description" content={artist?.description} />
        <meta property="og:title" content={artist?.title} />
        <meta property="og:url" content="https://ubatrance.art/emize" />
        <meta property="og:image" content={`/artists/${slug}/cover.jpg`} />
      </Head>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default App
