import React from "react"
import { css, Global } from "@emotion/core"
import styled from "@emotion/styled"

export const GlobalStyle = props => (
  <Global
    {...props}
    styles={css`
      @import url("https://use.typekit.net/jtg0pti.css");
      :root {
        /* DARK */
        --sb-yellow--dark: rgb(253, 181, 21);
        --sb-orange--dark: rgb(229, 75, 33);
        --sb-purple--dark: rgb(112, 0, 75);
        --sb-blue--dark: rgb(0, 127, 164);
        --sb-green--dark: rgb(46, 158, 70);
        --sb-brown--dark: rgb(122, 50, 2);
        /* MEDIUM */
        --sb-yellow--med: rgb(255, 221, 85);
        --sb-orange--med: rgb(246, 148, 114);
        --sb-purple--med: rgb(206, 80, 157);
        --sb-blue--med: rgb(67, 197, 228);
        --sb-green--med: rgb(150, 202, 79);
        --sb-brown--med: rgb(195, 131, 85);
        --oakley: #bedc93;
        --downtown: #eac6df;
        --blueash: #caeaf5;
        --downtown-dark: #6e024a;
        --blueash-dark: #007ab8;
        --oakley-dark: #2b9d45;
        --sb-font1: questa-slab, serif;
        --sb-font2: questa-slab, sans-serif;
        --sb-font-foco: foco, sans-serif;
        --sb-grey: #58575a;
        --mini-menu-size: 50px;
      }

      h1,
      h2,
      h3,
      h4,
      h5,
      h6 {
        font-family: questa-slab;
        color: var(--sb-blue--dark);
        font-size: 4rem;
        line-height: auto;
      }
      /* Hide scrollbar for Chrome, Safari and Opera */
      body::-webkit-scrollbar {
        display: none;
      }

      /* Hide scrollbar for IE, Edge and Firefox */
      body {
        -ms-overflow-style: none; /* IE and Edge */
        scrollbar-width: none; /* Firefox */
      }
      body,
      html {
        font-family: Foco;
        font-size: 16px;
        scroll-behavior: smooth;
      }
      p {
        font-size: 1.5rem;
      }
      h2 {
        color: var(--sb-blue--dark);
      }
      hr {
        border-bottom: 3px solid var(--sb-blue--dark);
        width: 30%;
      }

      section {
        background-color: #f7f7f7;
        padding-top: 2em;
        padding-bottom: 2em;
        height: auto;
        min-height: 100vh;
      }
      .white {
        color: #ffffff;
      }
    `}
  />
)
