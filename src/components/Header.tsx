import * as React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";

import { heights, dimensions } from "../styles/variables";

import logo from "../assets/images/co-ba-logo.png";

const StyledHeader = styled.header`
  height: ${heights.header}px;
  padding: 0 ${dimensions.containerPadding}rem;
  border-bottom: solid 1px;
`;

const Logo = styled.img`
  height: 100%;
  padding: 5px 0;
  float: left;
  filter: invert(100%);
`;

const NavLinksWrapper = styled.ul`
  float: right;
  list-style: none;
`;

const NavLink = styled.li`
  float: left;
  font-size: 35px;
  line-height: ${heights.header}px;
  vertical-align: middle;
  margin: 0 50px;
`;

const LinkWrapper = styled(Link)`
  color: #000;

  &:hover,
  &:focus {
    text-decoration: none;
  }
`;

const Header: React.SFC = () => (
  <StyledHeader>
    <LinkWrapper to="/">
      <Logo src={logo} />
    </LinkWrapper>
    <NavLinksWrapper>
      <NavLink>
        <LinkWrapper to="/history">History</LinkWrapper>
      </NavLink>
      <NavLink>
        <LinkWrapper to="/events">Events</LinkWrapper>
      </NavLink>
      <NavLink>
        <LinkWrapper to="/photos">Photos</LinkWrapper>
      </NavLink>
      <NavLink>
        <LinkWrapper to="/access">Access</LinkWrapper>
      </NavLink>
    </NavLinksWrapper>
  </StyledHeader>
);

export default Header;
