import * as React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";

import { heights, media, widths } from "../styles/variables";

import logo from "../assets/images/co-ba-logo.png";

const StyledHeader = styled.header`
  height: ${heights.header}px;
  border-bottom: solid 1px;
  padding: 0 calc((100% - ${widths.lg}px) / 2);

  @media ${media.mobile} {
    display: none;
  }
`;

const Logo = styled.img`
  height: ${heights.header}px;
  padding: 5px 0;
  filter: invert(100%);
`;

const Ul = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  font-size: 1.5rem;
  line-height: ${heights.header}px;
  vertical-align: middle;

  &:first-child {
    margin-right: auto;
  }

  &:not(:first-child) {
    margin-left: 1rem;
  }
`;

const LinkWrapper = styled(Link)`
  display: inline-block;
  color: #000;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Header: React.SFC = () => (
  <StyledHeader>
    <Ul>
      <Li>
        <LinkWrapper to="/">
          <Logo src={logo} />
        </LinkWrapper>
      </Li>
      <Li>
        <LinkWrapper to="/history">History</LinkWrapper>
      </Li>
      <Li>
        <LinkWrapper to="/events">Events</LinkWrapper>
      </Li>
      <Li>
        <LinkWrapper to="/photos">Photos</LinkWrapper>
      </Li>
      <Li>
        <LinkWrapper to="/access">Access</LinkWrapper>
      </Li>
    </Ul>
  </StyledHeader>
);

export default Header;
