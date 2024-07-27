import React from 'react';
import styled, { css } from 'styled-components';

type Props = {
  to: string;
  children: React.ReactNode;
};
const Link: React.FC<Props> = ({ to, children }) => (
  <StyledLink href={to}>{children}</StyledLink>
);

const StyledLink = styled.a(
  ({ theme }) => css`
    cursor: pointer;
    color: ${theme.color('purple')};
    font-weight: ${theme.fontWeight('regular')};
    text-decoration: none;
    transition: text-decoration 0.3s ease;

    &:hover {
      text-decoration: underline;
    }
  `,
);

export default Link;
