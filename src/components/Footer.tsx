import * as React from "react";
import styled from "react-emotion";

const StyledFooter = styled.footer`
  text-align: center;
`;

const Footer: React.SFC = () => (
  <StyledFooter>
    <p>&copy; 2019 - co-ba KURE KOSEN</p>
  </StyledFooter>
);

export default Footer;
