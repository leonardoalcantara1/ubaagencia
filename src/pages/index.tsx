import Head from 'next/head'
import artists from '../artists'
import {
  Content,
  Wrapper,
  Bio,
  Release,
  SocialButton,
  Social,
  HomeCover,
  DefaultTitle,
  Event,
  Spacing,
  ArtistsGrid,
  Artist,
} from '../styles/styles'
import Link from 'next/link'

function Home() {
  return (
    <>
      <Head>
        <title>
          UBÁ Coletivo - DJs da cena trance na região do litoral extremo norte e
          Vale do Paraíba de São Paulo
        </title>
        <meta
          name="description"
          content="Coletivo de produtores musicais e DJs da cena trance na região do Vale do Paraíba e litoral extremo norte de São Paulo vinculado ao grupo de produção cultural de mesmo nome, natural de Ubatuba/SP"
        />
        <meta
          property="og:title"
          content="UBÁ Coletivo - DJs da cena trance na região do litoral extremo norte e Vale do Paraíba de São Paulo"
        />
        <meta property="og:url" content="https://ubatrance.art" />
        <meta property="og:image" content="/img/Cover.png" />
      </Head>
      <Content>
        <Wrapper>
          <HomeCover>
            <img src="/img/Cover.png" alt="" />
          </HomeCover>
          <DefaultTitle>EVENTOS</DefaultTitle>
          <Event>
            WARMUP Panapaná :: <b>24/05</b>
          </Event>
          <Event>
            Clube UBÁ {'('}Fechado{')'} :: <b>22/06</b>
          </Event>
          <Event>
            Panapaná - Luz da Noite :: <b>27/07</b>
          </Event>
          <SocialButton
            className="contact"
            href="https://wa.me/5511970599131"
            target="_blank"
          >
            COMPRAR INGRESSOS
          </SocialButton>
          <Spacing />
          <DefaultTitle>ARTISTAS</DefaultTitle>
          <ArtistsGrid>
            {Object.keys(artists).map((slug) => (
              <Link key={slug} href={`/${slug}`}>
                <Artist
                  style={{ backgroundImage: `url(/artists/${slug}/cover.jpg)` }}
                >
                  <h2>{artists[slug].title.split(' -')[0]}</h2>
                </Artist>
              </Link>
            ))}
          </ArtistsGrid>
          <Social>
            <SocialButton
              href={`https://instagram.com/ubaculturatrance`}
              target="_blank"
            >
              <img src="/img/instagram.png" alt="" />
              Siga-nos no Instagram!
            </SocialButton>
          </Social>
        </Wrapper>
      </Content>
    </>
  )
}

export default Home
