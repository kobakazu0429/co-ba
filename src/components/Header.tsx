import * as React from "react";
import styled from "react-emotion";
import { Link } from "gatsby";

import { heights, widths, media } from "../styles/variables";

import logo from "../assets/images/co-ba-logo.png";

const StyledHeader = styled.header`
  height: ${heights.header}px;
  border-bottom: solid 1px;
  padding: 0 calc((100% - ${widths.lg}px) / 2);

  @media ${media.mobile} {
    height: calc(${heights.header}px - 10px);
  }
`;

const Logo = styled.img`
  height: 100%;
  filter: invert(100%);
  padding: 3% 0;

  @media ${media.mobile} {
    padding: 0;
  }
`;

const Ul = styled.ul`
  height: 100%;
  display: flex;
  list-style: none;
  padding: 0;
`;

const Li = styled.li`
  height: 100%;
  vertical-align: middle;

  &:first-child {
    margin-right: auto;
  }

  &:not(:first-child) {
    margin-left: 1rem;
    font-size: 1.5rem;
    line-height: ${heights.header}px;
  }

  @media ${media.mobile} {
    &:first-child {
      margin: 0 1rem;
    }

    &:not(:first-child) {
      margin-left: 1rem;
      display: none;
    }
  }
`;

const LinkWrapper = styled(Link)`
  height: 100%;
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
    </Ul>
  </StyledHeader>
);

export default Header;
