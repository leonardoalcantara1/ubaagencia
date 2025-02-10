import { IArtist } from 'artists'
import { FC, useEffect, useState } from 'react'
import {
  Bio,
  Content,
  Cover2,
  Player,
  Presskit,
  Release,
  Social,
  SocialButton,
  Title,
  Wrapper,
} from 'styles/styles'
import { InstagramEmbed } from 'react-social-media-embed'

const PresskitV2: FC<{ artist: IArtist; slug: string }> = ({
  artist,
  slug,
}) => {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
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
      <Title className="v2">
        <img src={`/artists/${slug}/logo.png`} title="Emizê" alt="" />
      </Title>
      <Cover2
        className={[scrolled ? 'scrolled' : '', slug].join(' ')}
        style={{ backgroundImage: `url('/artists/${slug}/cover.jpg')` }}
      >
        <h2>{artist?.cover_caption}</h2>
        <Presskit href={artist?.presskit} target="_blank">
          Download Presskit
        </Presskit>
      </Cover2>
      <Content>
        <Wrapper>
          <InstagramEmbed url={artist?.post1 || ''} />
          <Bio>
            <img
              src={`/artists/${slug}/bio.jpg`}
              title="Leonardo Martinez - DJ - Emizê"
              alt=""
            />
            <Release className="v2">
              <span
                dangerouslySetInnerHTML={{
                  __html: artist?.release2?.replace(/\n/g, '<br />') || '',
                }}
              />
              <Presskit href={artist?.presskit} target="_blank">
                Download Presskit
              </Presskit>
            </Release>
          </Bio>
          <InstagramEmbed url={artist?.post2 || ''} />
          {artist?.player &&
            artist.player.map((p) => <Player key={p} src={p}></Player>)}
          <InstagramEmbed url={artist.post3 || ''} />
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
      <script async src="//www.instagram.com/embed.js"></script>
    </>
  )
}

export default PresskitV2
