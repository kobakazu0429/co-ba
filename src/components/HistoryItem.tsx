import * as React from "react";
import styled from "react-emotion";

import * as pic001 from "./../assets/images/TopCarousel/001.jpg";

export interface IEdge {
  node: {
    rawMarkdownBody: string;
    frontmatter: {
      date: string;
      title: string;
    };
  };
}

const HistoryItem = (data: IEdge) => (
  <Wrapper>
    <Title>
      <h5>
        {data.node.frontmatter.date} - {data.node.frontmatter.title}
      </h5>
    </Title>
    <ImageWrapper>
      <img src={pic001} />
    </ImageWrapper>
    <Description>
      <p>{data.node.rawMarkdownBody}</p>
    </Description>
  </Wrapper>
);

const Title = styled.div`
  color: rgb(255, 255, 255);
  display: flex;
  width: 100%;

  h5 {
    margin-bottom: -20px;
    padding-bottom: 10px;
    border-bottom: solid 1px gray;
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 30px;

  :nth-child(2n + 1) {
    flex-direction: row-reverse;

    ${Title} {
      justify-content: flex-end;
    }
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  align-self: center;
  align-content: center;

  img {
    height: 400px;
    display: block;
    margin: 0 auto;
  }
`;

const Description = styled.div`
  flex: 1;

  padding: 50px;
`;

export default HistoryItem;
