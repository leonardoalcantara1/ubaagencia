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
`

export const Title = styled.h1`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 3rem 1rem;
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

export const Presskit = styled.button`
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

export const Social = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
  @media (max-width: 767px) {
    flex-direction: column;
  }
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

  &:not(:first-child) {
    margin-left: 2rem;
  }

  &.contact {
    border: 0;
    background: #25d366;
    color: #075e54;
  }

  @media (max-width: 767px) {
    &:not(:first-child) {
      margin: 2rem 0 0;
    }
  }
`

export const AgencyCopyright = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background: #1b1b1b;
  margin-top: 3rem;
  padding-top: 1rem;
  padding-bottom: 2rem;
  h2 {
    margin: 0;
    img {
      width: 90px;
      display: block;
    }
  }
`
