import Link from 'next/link'
import styled from 'styled-components'

export const Cover = styled.div`
  width: 100%;
  height: 520px;
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px -50px 200px black inset;
  transition: 0.3s height;

  &.scrolled {
    height: 250px;
  }

  &.emize {
    @media (max-width: 768px) {
      background-position: -200px center;
    }
  }
`

export const Cover2 = styled.div`
  width: 100%;
  height: calc(100vh - 48px - 105px);
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  box-shadow: 0px -50px 200px black inset;
  transition: 0.3s height;
  position: relative;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h2 {
    color: white;
    text-align: center;
    font-weight: normal;
    padding: 16px;
    line-height: 36px;
  }

  & > * {
    z-index: 1;
  }

  &:before {
    content: ' ';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: black;
    opacity: 0.5;
    pointer-events: none;
  }

  /* &.emize {
    @media (max-width: 768px) {
      background-position: -1300px center;
    }
  } */
`

export const HomeCover = styled.div`
  width: 100%;
  overflow: hidden;
  border-radius: 6px;
  border-top-left-radius: 0;
  border-top-right-radius: 0;
  margin-bottom: 2rem;
  margin-top: -1rem;
  img {
    width: 100%;
    display: block;
  }
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
  &.v2 {
    height: 105px;
    padding: 1.5rem 1rem;
  }
  img {
    position: static;
    width: 250px;
  }
`

export const Content = styled.section`
  padding: 1rem;
  box-sizing: border-box;
  width: 100%;
  display: flex;
  justify-content: center;
`

export const Wrapper = styled.div`
  width: 100%;
  max-width: 860px;
`

export const Bio = styled.div`
  width: 100%;
  display: flex;
  align-items: flex-start;
  margin-bottom: 2rem;
  img {
    max-width: 40%;
  }

  margin-top: 2rem;

  @media (max-width: 767px) {
    flex-direction: column;

    img {
      width: 100%;
      max-width: 100%;
      order: 2;
      margin-top: 2rem;
    }
  }
`

export const Release = styled.h3`
  font-size: 1.4rem;
  line-height: 2.2rem;
  padding-left: 2rem;
  margin: 0;
  font-weight: normal;

  @media (max-width: 767px) {
    padding-left: 0;
    order: 1;
    text-align: justify;
    padding: 0 1rem;

    display: flex;
    flex-direction: column;
    justify-content: center;
  }
`

export const Presskit = styled.a`
  display: block;
  text-decoration: none;
  border: 0;
  outline: 0;
  background: #1b1b1b;
  color: white;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  display: block;
  padding: 1rem 2rem;
  margin-top: 1rem;
  border-radius: 0.5rem;
  cursor: pointer;

  @media (max-width: 767px) {
    padding: 1.4rem 2rem;
    font-size: 1.4rem;
  }
`

export const Player = styled.iframe`
  width: 100%;
  height: 166px;
  margin: 2rem 0 0;
  border: 0;
`

export const SocialButton = styled.a`
  border: 0;
  outline: 0;
  background: transparent;
  border: 2px solid #1b1b1b;
  color: #1b1b1b;
  font-weight: bold;
  font-family: 'Montserrat', sans-serif;
  display: inline-block;
  padding: 1rem 1rem;
  border-radius: 0.5rem;
  cursor: pointer;
  text-decoration: none;

  display: flex;
  align-items: center;

  img {
    width: 26px;
    margin-right: 1rem;
  }

  &.contact {
    border: 0;
    background: #25d366;
    color: #075e54;
  }

  @media (max-width: 767px) {
    width: 100%;
    &:not(:first-child) {
      margin: 2rem 0 0 !important;
    }
  }
`

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  ${SocialButton}:not(:first-child) {
    margin-left: 2rem;
  }
  @media (max-width: 767px) {
    flex-direction: column;
  }
`

export const AgencyCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1b1b;
  margin-top: 3rem;
  padding-top: 2rem;
  padding-bottom: 2rem;
  h2 {
    margin: 0;
    img {
      width: 90px;
      display: block;
    }
  }
`

export const DefaultTitle = styled.h2`
  border-bottom: 1px solid #ccc;
  margin-bottom: 1rem;
`

export const Event = styled.h3`
  margin-bottom: 1rem;
  font-weight: normal;
  b {
    color: #e91c48;
  }
`

export const Spacing = styled.div`
  margin-top: 2rem;
`

export const ArtistsGrid = styled.div`
  display: flex;
  flex-direction: column;
`

export const Artist = styled.div`
  background-position: center;
  background-size: cover;
  border-radius: 6px;
  overflow: hidden;
  display: block;
  text-decoration: none;
  color: white;
  position: relative;
  height: 160px;
  margin-bottom: 2rem;
  cursor: pointer;
  h2 {
    background: black;
    padding: 1rem;
    position: absolute;
    bottom: 1rem;
    left: 0;
    font-weight: 800;
  }
`
