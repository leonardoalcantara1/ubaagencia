import { IArtist } from "artists";
import { FC, useEffect, useState } from "react";
import { Bio, Content, Cover, Player, Presskit, Release, Social, SocialButton, Title, Wrapper } from "styles/styles";

const PresskitV1: FC<{ artist: IArtist, slug: string }> = ({ artist, slug }) => {
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
    <Cover
      className={[scrolled ? 'scrolled' : '', slug].join(' ')}
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
  <span
  dangerouslySetInnerHTML={{
    __html: artist?.release.replace(/\n/g, '<br />'),
  }}
  />
  <Presskit href={artist?.presskit} target="_blank">
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
  </>  
)
}

export default PresskitV1
