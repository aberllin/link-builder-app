import { styled, css } from 'styled-components';
import Button from '~/components/atoms/Button';
import Icon from '~/components/atoms/Icon';
import type { IconName } from '~/components/atoms/Icon';
import Logo from '~/components/atoms/Logo';
import Tabs from '~/components/atoms/Tab';

import isMobileBreakpoint from '~/utils/isMobileBreakpoint';

const text = {
  preview: 'Preview',
};

type Props = {};

const tabs: Array<{ label: string; icon: IconName }> = [
  { label: 'Links', icon: 'link' },
  { label: 'Profile Details', icon: 'profile-details-header' },
];

const NavigationBar: React.FC<Props> = () => {
  const isMobile = isMobileBreakpoint();
  return (
    <Container>
      <Logo size={isMobile ? 'small' : 'large'} />
      <Tabs tabs={tabs} onTabClick={() => {}} />
      <Button
        appearance="secondary"
        label={isMobile ? <Icon name="preview-header" /> : text.preview}
      />
    </Container>
  );
};

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: ${theme.space('m')};
    border-radius: ${theme.border('base')};
    background-color: ${theme.color('white')};
  `,
);

export default NavigationBar;
