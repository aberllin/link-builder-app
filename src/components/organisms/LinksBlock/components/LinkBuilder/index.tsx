import { styled, css } from 'styled-components';
import Button from '~/components/atoms/Button';
import Icon from '~/components/atoms/Icon';
import Illustration from '~/components/atoms/Illustration';
import Typography from '~/components/atoms/Typography';
import Dropdown from '~/components/molecules/Dropdown';
import Input from '~/components/molecules/Input';

type Props = {};

const linkOptions = [
  { key: 'github', icon: 'github', label: 'GitHub', value: 'github' },
  {
    key: 'frontendMentor',
    icon: 'frontend-mentor',
    label: 'Frontend Mentor',
    value: 'frontendMentor',
  },
  { key: 'twitter', icon: 'twitter', label: 'Twitter', value: 'twitter' },
  { key: 'linkedin', icon: 'linkedin', label: 'LinkedIn', value: 'linkedin' },
  { key: 'youtube', icon: 'youtube', label: 'YouTube', value: 'youtube' },
  { key: 'facebook', icon: 'facebook', label: 'Facebook', value: 'facebook' },
  { key: 'twitch', icon: 'twitch', label: 'Twitch', value: 'twitch' },
  { key: 'devto', icon: 'devto', label: 'Dev.to', value: 'devto' },
  { key: 'codewars', icon: 'codewars', label: 'Codewars', value: 'codewars' },
  { key: 'codepen', icon: 'codepen', label: 'Codepen', value: 'codepen' },
  {
    key: 'freecodecamp',
    icon: 'freecodecamp',
    label: 'freeCodeCamp',
    value: 'freecodecamp',
  },
  { key: 'gitlab', icon: 'gitlab', label: 'GitLab', value: 'gitlab' },
  { key: 'hashnode', icon: 'hashnode', label: 'Hashnode', value: 'hashnode' },
  {
    key: 'stackoverflow',
    icon: 'stack-overflow',
    label: 'Stack Overflow',
    value: 'stackoverflow',
  },
];

const LinkBuilder: React.FC<Props> = () => {
  // @TODO: import from the recoil state

  return (
    <Container>
      <Header>
        <DragAndDrop>
          <Icon name="drag-and-drop" />
          <Typography variant="label" color="grey">
            Link #1
          </Typography>
        </DragAndDrop>
        <Typography variant="bodyM" onClick={() => {}}>
          Remove
        </Typography>
      </Header>
      <Dropdown label="Platform" options={linkOptions} />
      <Input
        label="Link"
        placeholder="e.g. https://www.github.com/johnappleseed"
      />
    </Container>
  );
};

const DragAndDrop = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    gap: ${theme.space('xs')};
  `,
);

const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  `,
);

const Container = styled.div(
  ({ theme }) => css`
    padding: ${theme.space('xl')};
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: ${theme.space('l')};
    background-color: ${theme.color('lightGrey')};
    width: 100%;
    border-radius: ${theme.border('base')};
  `,
);

export default LinkBuilder;
