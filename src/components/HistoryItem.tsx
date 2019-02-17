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
      {data.node.frontmatter.date} - {data.node.frontmatter.title}
    </Title>
    <Content>
      <Left>
        <Image src={pic001} />
      </Left>
      <Description>{data.node.rawMarkdownBody}</Description>
    </Content>
  </Wrapper>
);

const Wrapper = styled.div`
  :nth-child(2n) {
    flex-direction: row-reverse;
  }
`;

const Title = styled.h5``;

const Content = styled.div`
  display: flex;
  width: 100%;
`;

const Image = styled.img`
  width: 100%;
`;

const Left = styled.div`
  flex-basis: 50%;
`;

const Description = styled.div`
  flex-basis: 50%;
  padding: 60px;
`;

export default HistoryItem;
