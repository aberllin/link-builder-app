import { styled, css } from 'styled-components';
import Button from '~/components/atoms/Button';
import Icon from '~/components/atoms/Icon';
import type { IconName } from '~/components/atoms/Icon';
import Illustration from '~/components/atoms/Illustration';
import Logo from '~/components/atoms/Logo';
import Tabs from '~/components/atoms/Tab';
import Typography from '~/components/atoms/Typography';

import isMobileBreakpoint from '~/utils/isMobileBreakpoint';

const text = {
  preview: 'Preview',
};

type Props = {};

const LinksBlock: React.FC<Props> = () => {
  // @TODO: import from the recoil state
  const links = [];

  return (
    <Container>
      <Button label="+ Add new link" appearance="secondary" width="100%" />

      {links.length === 0 && (
        <EmptyLinksBlock>
          <div>
            <Illustration name="empty" />
          </div>
          <Typography variant="h1">Let’s get you started</Typography>
          <Description color="grey" variant="bodyM">
            Use the “Add new link” button to get started. Once you have more
            than one link, you can reorder and edit them. We’re here to help you
            share your profiles with everyone!
          </Description>
        </EmptyLinksBlock>
      )}
    </Container>
  );
};

const EmptyLinksBlock = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: ${theme.color('lightGrey')};
    padding: ${theme.space('xl')};
  `,
);

const Description = styled(Typography)`
  text-align: center;
`;

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  `,
);

export default LinksBlock;
