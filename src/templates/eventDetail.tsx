import * as React from "react";
import { graphql } from "gatsby";
import Img from 'gatsby-image'

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";

interface EventDetailTemplateProps {
  data: {
    site: {
      siteMetadata: {
        title: string;
        description: string;
        author: {
          name: string;
          url: string;
        };
      };
    };
    markdownRemark: {
      html: string;
      excerpt: string;
      frontmatter: {
        title: string;
        thumbnailImage: any;
      };
    };
  };
}

const EventDetailTemplate: React.SFC<EventDetailTemplateProps> = ({ data }) => (
  <IndexLayout>
    <Page>
      <Container>
        <Img fluid={data.markdownRemark.frontmatter.thumbnailImage.childImageSharp.fluid} />
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      </Container>
    </Page>
  </IndexLayout>
);

export default EventDetailTemplate;

export const query = graphql`
  query EventDetailTemplateQuery($slug: String!) {
    site {
      siteMetadata {
        title
        description
        author {
          name
          url
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      excerpt
      frontmatter {
        title
        thumbnailImage {
          childImageSharp {
            fluid(maxWidth: 600) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
