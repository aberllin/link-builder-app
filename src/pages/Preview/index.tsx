import React from 'react';
import styled, { css } from 'styled-components';
import Typography from '~/components/atoms/Typography';

const Preview: React.FC = () => {
  return (
    <BackgroundContainer>
      <Content></Content>
    </BackgroundContainer>
  );
};

const BackgroundContainer = styled.div(
  ({ theme }) => css`
    width: 100%;
    position: relative;
  `,
);

const Header = styled.div(
  ({ theme }) => css`
    width: 100%;
    height: 200px;

    border-bottom-left-radius: 100px;
    border-bottom-right-radius: 100px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${theme.space('l')} ${theme.space('xl')};
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  `,
);

const Button = styled.button<{ primary?: boolean }>(
  ({ theme, primary }) => css`
    background-color: ${primary ? 'white' : theme.color('purple')};
    color: ${primary ? theme.color('purple') : 'white'};
    border: 2px solid ${primary ? theme.color('purple') : 'white'};
    border-radius: ${theme.space('s')};
    padding: ${theme.space('s')} ${theme.space('m')};
    cursor: pointer;
    font-weight: ${theme.fontWeight('bold')};
    transition:
      background-color 0.3s,
      color 0.3s;

    &:hover {
      background-color: ${primary ? theme.color('lightPurple') : 'white'};
      color: ${primary ? 'white' : theme.color('purple')};
    }
  `,
);

const Content = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: calc(100vh - 200px);
`;

const Avatar = styled.img(
  ({ theme }) => css`
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: ${theme.space('m')};
    border: 4px solid ${theme.color('purple')};
  `,
);

export default Preview;
