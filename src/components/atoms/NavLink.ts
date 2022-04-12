import styled from "styled-components";
import { Link } from "react-router-dom";

const NavLink = styled(Link)`
  text-decoration: none;
  text-transform: capitalize;
  ${({ theme }) => `
    font-size: ${theme.typography.size.regular};
    font-weight: 'regular';
    color: ${theme.typography.color.primary};
    &.active {
      color: ${theme.color.purple};
    };
  `};
`;

export { NavLink };
