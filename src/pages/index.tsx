import * as React from "react";
import { Link } from "gatsby";

import Page from "../components/Page";
import Container from "../components/Container";
import IndexLayout from "../layouts";
import Carousel from "./../components/Carousel";
import AboutCoBa from "./../components/AboutCoBa";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Carousel />
        <AboutCoBa />
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
