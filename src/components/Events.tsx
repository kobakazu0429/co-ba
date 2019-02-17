import * as React from "react";
import { StaticQuery, graphql, Link } from "gatsby";
import Img from "gatsby-image";
import styled from "react-emotion";

const Events = () => (
  <StaticQuery
    query={GET_EVENTS}
    render={data => {
      const { edges } = data.allMarkdownRemark;

      return (
        <div>
          <Header>
            <h2>今までのイベント</h2>
            <p>最新のイベント情報はco-ba kurekosen 公式Facebookへ</p>
          </Header>
          <Wrapper>
            {edges.map((edge: any) => (
              <EventLink key={edge.node.fields.slug} to={edge.node.fields.slug.replace(/index\/$/, "")}>
                <Event>
                  <Img fixed={edge.node.frontmatter.thumbnailImage.childImageSharp.fixed} />
                  <EventContent>
                    <EventTitle>{edge.node.frontmatter.title}</EventTitle>
                    <p>{edge.node.frontmatter.description}</p>
                  </EventContent>
                </Event>
              </EventLink>
            ))}
          </Wrapper>
        </div>
      );
    }}
  />
);

export default Events;

const GET_EVENTS = graphql`
  query {
    allMarkdownRemark(limit: 100) {
      edges {
        node {
          frontmatter {
            title
            description
            thumbnailImage {
              childImageSharp {
                fixed(width: 400) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

const Header = styled.div`
  text-align: center;
`;

const Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-wrap: wrap;
`;

const Event = styled.div`
  width: 400px;
  margin: 40px;
  border: 1px solid lightgray;
  border-radius: 5px;
`;

const EventContent = styled.div`
  padding: 20px;
  padding-top: 0;
`;

const EventTitle = styled.h3`
  margin-top: 0.7rem;
`;

const EventLink = styled(Link)``;
