import * as React from "react";
import styled from "react-emotion";

import { media } from "../styles/variables";

import Banner from "./Banner";
import * as chk from "./../assets/images/chkBanner.png";

const Banners = () => (
  <Wrapper>
    <Banner to="https://www.kure-nct.ac.jp/" src="https://www.kure-nct.ac.jp/images/logo.png" />
    <Banner to="https://www.kure-rad.io/" src={chk} />
    <Facebook>
      <iframe
        src="https://www.facebook.com/plugins/page.php?href=https%3A%2F%2Fwww.facebook.com%2Fcoba.kurekosen%2F&tabs&width=300&height=70&small_header=true&adapt_container_width=true&hide_cover=false&show_facepile=false&appId"
        width="300"
        height="70"
        frameBorder="0"
        scrolling="no"
      />
    </Facebook>
  </Wrapper>
);

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  height: 70px;
  flex-direction: row;
  justify-content: space-between;

  @media ${media.mobile} {
    flex-direction: column;
    margin: 0 auto;
  }
`;

const Facebook = styled.div`
  @media ${media.mobile} {
    margin: 0 auto;
    iframe {
      display: block;
    }
  }
`;

export default Banners;
