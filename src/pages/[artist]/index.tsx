import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import artists from '../../artists'
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

export default function Artist() {
  const [scrolled, setScrolled] = useState(false)
  const router = useRouter()

  const slug = router.query.artist
  const artist = artists[slug as string]

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
