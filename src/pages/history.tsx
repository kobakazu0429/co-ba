import * as React from "react";
import styled from "react-emotion";
import { StaticQuery, graphql } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import HistoryItem, { IEdge } from "../components/HistoryItem";
import IndexLayout from "../layouts";

interface IHistoryGraphQL {
  allMarkdownRemark: {
    edges: IEdge[];
  };
}

const IndexPage = () => (
  <StaticQuery
    query={GET_HISTORY}
    render={(data: IHistoryGraphQL) => {
      const { edges } = data.allMarkdownRemark;
      return (
        <IndexLayout>
          <Page>
            <Container>
              <Center>
                <Title>History</Title>
                <SubTitle>自分たちによる、自分たちのための場所づくり</SubTitle>
              </Center>
              {edges.map(edge => (
                <HistoryItem node={edge.node} />
              ))}
            </Container>
          </Page>
        </IndexLayout>
      );
    }}
  />
);

const GET_HISTORY = graphql`
  query {
    allMarkdownRemark(limit: 100, filter: { fields: { slug: { regex: "/history/" } } }) {
      edges {
        node {
          id
          rawMarkdownBody
          frontmatter {
            date
            title
          }
        }
      }
    }
  }
`;

const Center = styled.div`
  text-align: center;
  margin: 30px;
`;

const Title = styled.h1`
  border-bottom: double 6px gray;
  width: 70%;
  padding-bottom: 10px;
  margin: 0 auto;
`;

const SubTitle = styled.h4`
  margin-top: 30px;
  margin-bottom: 100px;
`;

export default IndexPage;
