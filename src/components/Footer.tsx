import * as React from "react";
import styled from "react-emotion";
import { media } from "../styles/variables";

const StyledFooter = styled.footer`
  text-align: center;

  @media ${media.mobile} {
    margin-top: 70px;
  }
`;

const Footer: React.SFC = () => (
  <StyledFooter>
    <p>&copy; 2019 - co-ba KURE KOSEN</p>
  </StyledFooter>
);

export default Footer;
