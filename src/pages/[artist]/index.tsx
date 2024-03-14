import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import Head from 'next/head'
import artists, { IArtist } from '../../artists'
import {
  Cover,
  Title,
  Content,
  Wrapper,
  Bio,
  Release,
  Presskit,
  Player,
  SocialButton,
  Social,
  AgencyCopyright,
} from '../../styles/styles'

function Artist({ artist, slug }: { artist: IArtist; slug: string }) {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    if (slug && !artist)
      window.location.href = 'https://instagram.com/ubaculturatrance'

    const onScroll = (e: any) => {
      const value = e.target.documentElement.scrollTop
      if (value > 0) {
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    }
    window.addEventListener('scroll', onScroll)

    return () => window.removeEventListener('scroll', onScroll)
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
      <Cover
        className={scrolled ? 'scrolled' : ''}
        style={{ backgroundImage: `url('/artists/${slug}/cover.jpg')` }}
      />
      <Title>
        <img src={`/artists/${slug}/logo.png`} title="Emizê" alt="" />
      </Title>
      <Content>
        <Wrapper>
          <Bio>
            <img
              src={`/artists/${slug}/bio.jpg`}
              title="Leonardo Martinez - DJ - Emizê"
              alt=""
            />
            <Release>
              {artist?.release}
              <Presskit onClick={() => window.open(artist?.presskit)}>
                Download Presskit
              </Presskit>
            </Release>
          </Bio>
          {artist?.player &&
            artist.player.map((p) => <Player key={p} src={p}></Player>)}
          <Social>
            <SocialButton
              href={`https://instagram.com/${artist?.instagram}`}
              target="_blank"
            >
              <img src="/img/instagram.png" alt="" />
              Siga-me no Instagram!
            </SocialButton>
            {artist?.soundcloud && (
              <SocialButton
                href={`https://soundcloud.com/${artist.soundcloud}`}
                target="_blank"
              >
                <img src="/img/soundcloud.png" alt="" />
                Soundcloud
              </SocialButton>
            )}
            <SocialButton
              className="contact"
              href="https://wa.me/5511997522849"
              target="_blank"
            >
              <img src="/img/bate-papo.png" alt="" />
              Entrar em contato
            </SocialButton>
          </Social>
        </Wrapper>
      </Content>
      <AgencyCopyright>
        <h2>
          <img
            src="/img/logo-uba-agencia.svg"
            title="Ubá Agência - DJs da cena trance no litoral extremo norte de São Paulo"
            alt=""
          />
        </h2>
      </AgencyCopyright>
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
