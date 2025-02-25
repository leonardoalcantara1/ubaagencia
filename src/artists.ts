export interface IArtist {
  presskit: string
  release: string
  player?: string[]
  soundcloud?: string
  instagram: string
  title: string
  description: string
  labels?: string[]
  version?: 1 | 2
  cover_caption?: string
  post1?: string
  post2?: string
  post3?: string
  release2?: string
}

interface IArtists {
  [key: string]: IArtist
}

const artists: IArtists = {
  emize: {
    version: 2,
    presskit:
      'https://drive.google.com/drive/folders/1xXmlV1nKVA7PK4_JO44O9-74aClPIjg8?usp=sharing',
    cover_caption:
      'Leonardo Martinez traz seu projeto de progressive trance entitulado EMIZÊ | MZ, mesclando produções autorais e exclusivas em sets energéticos e emocionantes.',
    post1: 'https://www.instagram.com/p/DFLCS2Tu2Qj',
    post2: 'https://www.instagram.com/p/DFQRwvnOhm4/',
    post3: 'https://www.instagram.com/p/C-tJALvym1W/',
    release2:
      'Cantor, musicista, multi instrumentista, Leo passou a vida estudando e vivendo a música. Natural de São Paulo, usa toda a sua expertise musical e profissional trilhando o caminho da produção dentro da cena, remixando e produzindo seu set com muita identidade.',
    release:
      'Leonardo Martinez traz seu projeto de progressive trance intitulado EMIZÊ, com um set super energético, emocionante e dançante. Cantor, musicista, multi instrumentista, Leo passou a vida estudando e vivendo a música. Natural de São Paulo, usa toda a sua expertise musical e profissional trilhando o caminho da produção dentro da cena, remixando e produzindo seu set com muita identidade com tracks exclusivas.\n\nCom passagens pela Arcádia, Rave in SP, XTrance, Aya, Chemical Trance entre outras festas, vem construindo um público fiel e sempre presente por onde passa.',
    player: [
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1853253858&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1813071453&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    ],
    soundcloud: 'leoemize',
    instagram: 'leo.emize',
    title: 'EMIZÊ - Projeto de Progressive trance :: Ubá Coletivo',
    description:
      'Emizê é o projeto de progressive trance de Leonardo Martinez, DJ e produtor musical fundador do coletivo de artistas da UBÁ.',
  },
  comicbass: {
    presskit:
      'https://drive.google.com/drive/u/2/folders/1p1VAJnXeoKtdGKCM_0XBlYs2zQc4mgLJ',
    release:
      'Ousado, inusitado e pra cima, Jefferson Morais traz seu projeto ComicBass! inspirado em Headroom, CaptainHook entre outros, e promete um som psicodelico, elegante e dançante. Nascido em Caraguatatuba/SP e morador de Ubatuba/SP, começou a trajetória em 2020 incentivado pelo seu tio desde a adolescência. ComicBass! traz um DJ set mesclando seus sons autorais com flexibilidade, se encaixando tanto na energia noturna quanto na diurna, surfando pela flexibilidade que Progressive Psytrance proporciona.',
    player: [
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1859013630&color=%238cb4b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1786340046&color=%238cb4b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    ],
    soundcloud: 'comicbass',
    instagram: 'comicbass_dj',
    title: 'ComicBass! - Projeto de Progressive Psytrance :: Ubá Coletivo',
    description:
      'ComicBass! é o projeto de psytrance de Jefferon Morais, DJ e produtor musical que faz parte do coletivo de artistas da UBÁ',
  },
  /* marciniak: {
    presskit: '/downloads/MarciniaK - Presskit 2024.zip',
    release:
      'Dono de um estilo inconfundível, Matheus Marciniak ou apenas MarciniaK como é conhecido, traz um set explosivo surfando pelo Future Prog e Progressive Trance com diversas músicas autorais e drops marcantes. Matheus é formado em produção musical por Gustavo Prates a.k.a 8THSIN, e outros diversos produtores renomados do Brasil. Natural de Cascavel/PR, hoje é um dos principais nomes da região e vem se destacando na cena nacional. MarciniaK faz parte das gravadoras @psychedelic_recs 🇲🇽, @polifoniarec 🇧🇷 e compõe o time da UBÁ 🇧🇷',
    player: [
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1587469883&color=%238cb4b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1453901266&color=%238cb4b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
      'https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1379721733&color=%238cb4b4&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true',
    ],
    soundcloud: 'marciniakmusic',
    instagram: 'marciniak_music',
    title:
      'MarciniaK - Projeto de Progressive trance e Future Prog :: Ubá Coletivo',
    description:
      'MarciniaK é o projeto de progressive trance e future prog de Matheus MarciniaK, DJ e produtor musical que faz parte do coletivo de artistas da UBÁ',
    labels: ['polifonia.png', 'psyrecs.png'],
  }, */
}

export default artists
