import * as React from "react";
import styled from "react-emotion";
import Img from "gatsby-image";

import { media } from "../styles/variables";

export interface IEdge {
  node: {
    rawMarkdownBody: string;
    frontmatter: {
      date: string;
      title: string;
      thumbnailImage: any;
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
      <Img fluid={data.node.frontmatter.thumbnailImage.childImageSharp.fluid} />
    </ImageWrapper>
    <Description>
      <p>{data.node.rawMarkdownBody}</p>
    </Description>
  </Wrapper>
);

const Title = styled.div`
  display: flex;
  width: 100%;

  h5 {
    margin-bottom: 20px;
    padding-bottom: 10px;
    border-bottom: solid 1px gray;
  }
`;

const ImageWrapper = styled.div`
  width: 50%;
  align-self: center;
  align-content: center;

  img {
    width: 100%;
    height: auto;
    display: block;
    margin: 0 auto;
  }
`;

const Description = styled.div`
  flex: 1;
  padding: 50px;
`;

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
  align-items: center;
  margin-bottom: 40px;

  :nth-child(2n + 1) {
    flex-direction: row-reverse;

    ${Title} {
      justify-content: flex-end;

      @media ${media.mobile} {
        justify-content: center;
        text-align: center;
      }
    }
  }

  @media ${media.mobile} {
    margin-bottom: 10px;
    ${Title} {
      @media ${media.mobile} {
        justify-content: center;
        text-align: center;

        h5 {
          width: 100vw;
        }
      }
    }

    ${ImageWrapper} {
      width: 100%;

      img {
        height: auto;
        margin-top: -40px;
        margin-bottom: -60px;
      }
    }

    ${Description} {
      padding: 0;
    }
  }
`;

export default HistoryItem;
