import * as React from "react";
import styled from "react-emotion";

import { media } from "../styles/variables";

interface IProps {
  src: string;
  to: string;
}

const Banner = (props: IProps) => (
  <Wrapper>
    <a href={props.to}>
      <img src={props.src} />
    </a>
  </Wrapper>
);

const Wrapper = styled.div`
  height: 100%;

  img {
    padding: 5px;
    height: 100%;
  }

  @media ${media.mobile} {
    flex-direction: column;
    margin: 5px auto;
    height: 80%;
  }
`;

export default Banner;
