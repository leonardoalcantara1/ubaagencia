interface IArtists {
  [key: string]: {
    presskit: string
    release: string
    player?: string[]
    soundcloud?: string
    instagram: string
    title: string
    description: string
  }
}

const artists: IArtists = {
  emize: {
    presskit: '/downloads/Emizê - Presskit 2024.zip',
    release:
      'Leonardo Martinez traz seu projeto de progressive trance e hardprog chamado EMIZÊ, com um set super energético e dançante. Cantor, musicista, multi instrumentista, Leo passou a vida estudando e vivendo a música. Natural de São Paulo, usa toda a sua expertise musical e profissional trilhando o caminho da produção dentro da cena, remixando e produzindo seu set com muita identidade. Hoje idealizador da Ubá Cultura Trance, também faz parte de projetos como Onda Norte e Ubah Festival.',
    player: [
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1774765290&color=%238cb4b4&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1774757667&color=%238cb4b4&auto_play=true&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true',
    ],
    soundcloud: 'leoemize',
    instagram: 'leo.emize',
    title: 'EMIZÊ - Projeto de Progressive trance e HardProg :: Ubá Agência',
    description:
      'Emizê é o projeto de progressive trance e hardprog de Leonardo Martinez, DJ e produtor musical que faz parte do casting da Ubá Agência.',
  },
}

export default artists
