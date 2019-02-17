import * as React from "react";

import Page from "../components/Page";
import Container from "../components/Container";
import Events from "../components/Events";
import IndexLayout from "../layouts";
import Carousel from "./../components/Carousel";
import AboutCoBa from "./../components/AboutCoBa";

const IndexPage = () => (
  <IndexLayout>
    <Page>
      <Container>
        <Carousel />
        <AboutCoBa />
        <Events />
      </Container>
    </Page>
  </IndexLayout>
);

export default IndexPage;
