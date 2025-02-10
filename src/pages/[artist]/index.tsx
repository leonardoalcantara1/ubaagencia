import { useEffect, useState } from 'react'
import Head from 'next/head'
import artists, { IArtist } from '../../artists'
import PresskitV1 from './PresskitV1'
import PresskitV2 from './PresskitV2'
import Link from 'next/link'

function Artist({ artist, slug }: { artist: IArtist; slug: string }) {

  useEffect(() => {
    if (slug && !artist)
      window.location.href = 'https://instagram.com/ubaculturatrance'

  }, [artist, slug])

  return (
    <>
      <Head>
        <title>{artist?.title}</title>
        <meta name="description" content={artist?.description} />
        <meta property="og:title" content={artist?.title} />
        <meta property="og:url" content="https://ubatrance.art/emize" />
        <meta property="og:image" content={`/artists/${slug}/cover.jpg`} />
      </Head>
      <header
        style={{
          padding: '0.5rem',
          fontWeight: 'bold',
        }}
      >
        <Link href="/">
          <span
            style={{
              textDecoration: 'none',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <b
              style={{
                display: 'block',
                fontSize: '2rem',
                transform: 'translateY(-3px)',
                marginRight: '0.5rem',
              }}
            >
              ←
            </b>
            <b style={{ display: 'block' }}>VOLTAR</b>
          </span>
        </Link>
      </header>
      {
        artist.version === 2 ? <PresskitV2 artist={artist} slug={slug} /> : <PresskitV1 artist={artist} slug={slug} />
      }
    </>
  )
}

export async function getServerSideProps(context: {
  query: { artist: string }
}) {
  const { artist: slug } = context.query
  const artist = artists[slug as string]

  return {
    props: {
      artist,
      slug,
    },
  }
}

export default Artist
