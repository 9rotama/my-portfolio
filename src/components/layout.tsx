import * as React from "react"
import { Router, RouteComponentProps, Link } from "@gatsbyjs/reach-router"
import { useStaticQuery, graphql } from "gatsby"
import { Global, css } from "@emotion/react"

import HomePage from "./pages/home"
import AboutPage from "./pages/about"
import WorksPage from "./pages/works"
import Background from "./background"

const menuButtonStyle = css`
  text-decoration: none;
  border-bottom: solid;
  border-color: #252a3450;
  border-width: 1px;
  border-radius: 5px;
  color: #252a34;
  font-size: 1.5em;
  font-weight: 500;
  margin-left: 10px;
  padding: 2px 10px 2px 10px;
  transition-duration: 0.3s;

  &:hover {
    background: #252a3410;
    transition-duration: 0.3s;
  }
  &:active {
    background: #252a34;
    color: #d0dde9;
    transition-duration: 0.3s;
  }

  @media (max-width: 960px) {
    & {
      font-size: 1.2em;
    }
  }
`
const Menu = () => {
  return (
    <div css={css``}>
      <Link to="/about" css={menuButtonStyle}>
        about
      </Link>
      <Link to="/works" css={menuButtonStyle}>
        works
      </Link>
    </div>
  )
}

type HeaderProps = {
  siteTitle: string;
}

const Header: React.FC<HeaderProps> = ({ siteTitle }) => {
  return (
    <header
      css={css`
        position: fixed;
        top: 0px;
        z-index: 100;
        width: 100%;
        background-color: #e3ecf470;
        backdrop-filter: blur(10px);

        animation-name: Down;
        animation-duration: 0.5s;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: flex-end;
          align-items: center;
          padding: 10px 10vw 10px 10vw;

          @media (max-width: 960px) {
            & {
              padding: 7px 30px 7px 30px;
            }
          }
        `}
      >
        <Link
          to="/"
          css={css`
            color: #252a34;
            text-decoration: none;
            font-size: 2em;
            font-weight: 600;
            padding: 0 10px 0 10px;
            margin-right: auto;

            transition-duration: 0.3s;

            @media (max-width: 960px) {
              & {
                font-size: 1.5em;
              }
            }

            &:hover {
              transform: scale(1.2);

              transition-duration: 0.3s;
            }
            &:active {
              color: #ff2e63;

              transition-duration: 0.3s;
            }
          `}
        >
          {siteTitle}
        </Link>

        <Menu />
      </div>
    </header>
  )
}

const Layout = () => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div>
      <Global
        styles={css`
          @import url("https://fonts.googleapis.com/css2?family=Montserrat+Alternates:ital,wght@0,100;0,300;0,500;0,600;0,800&family=M+PLUS+1:wght@100;400;600;800&display=swap");
          body {
            font-family: "Montserrat Alternates", "M PLUS 1", sans-serif;
            color: #252a34;
            background-color: #d0dde9;
            margin: 0;
          }
          h1 {
            font-weight: 500;
            font-size: 1.8em;
            color: #252a34;
            text-decoration: none;
            border-bottom: solid;
            border-color: #252a3430;
            border-width: 1px;
            padding-bottom: 2px;
            margin: 60px 0px 30px 0px;
          }
          h2 {
            font-weight: 600;
          }
          h3 {
            font-weight: 500;
          }
          h4 {
            font-weight: 500;
          }
          @media (max-width: 960px) {
            h1 {
              font-size: 1.8em;
              font-weight: 500;
            }
            h2 {
              font-weight: 600;
            }
            h3 {
              font-weight: 500;
            }
            h4 {
              font-weight: 500;
            }
          }
          @media (max-width: 480px) {
            h1 {
              font-size: 1.6em;
              font-weight: 500;
            }
            h2 {
              font-size: 1.2em;
              font-weight: 600;
            }
            h3 {
              font-weight: 500;
            }
            h4 {
              font-weight: 500;
            }
          }
          @keyframes BlurfadeIn {
            0% {
              opacity: 0;
              filter: blur(10px);
            }

            100% {
              opacity: 1;
            }
          }
          @keyframes BlurUp {
            0% {
              transform: translateY(70px);
              filter: blur(20px);
            }

            100% {
              transform: translateY(0px);
            }
          }

          @keyframes BlurfadeInDown {
            0% {
              opacity: 0;
              transform: translateY(-40px);
              filter: blur(10px);
            }

            100% {
              transform: translateY(0px);
              opacity: 1;
            }
          }

          @keyframes Down {
            0% {
              transform: translateY(-70px);
            }

            100% {
              transform: translateY(0px);
            }
          }
        `}
      />
      <Background />
      <Header siteTitle={data.site.siteMetadata?.title || "Title"} />
      <Router>
        <AboutPage path="/about" />
        <WorksPage path="/works" />
        <HomePage default />
      </Router>
    </div>
  )
}

export default Layout
