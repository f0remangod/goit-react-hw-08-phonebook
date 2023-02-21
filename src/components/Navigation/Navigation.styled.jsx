import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

export const StyledNavLink = styled(NavLink)`
  font-size: 28px;
  font-weight: 600;
  color: #001a00;
  text-decoration: none;
  margin-right: 10px;
  &.active {
    color: #369c5d;
  }
`