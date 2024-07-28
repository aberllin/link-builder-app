import { useRecoilState } from 'recoil';
import { styled, css } from 'styled-components';
import Icon from '~/components/atoms/Icon';
import Typography from '~/components/atoms/Typography';
import Dropdown, { type Option } from '~/components/molecules/Dropdown';
import Input from '~/components/molecules/Input';
import { linkByKeyState } from '~/state/links';

export type LinkItemProps = {
  key: string;
  to: string;
  type: LinkType;
};

export type Props = {
  onRemove: () => void;
  index: number;
  linkKey: string;
};

type LinkType =
  | 'github'
  | 'frontendMentor'
  | 'twitter'
  | 'linkedin'
  | 'youtube'
  | 'facebook'
  | 'twitch'
  | 'devto'
  | 'codewars'
  | 'codepen'
  | 'freecodecamp'
  | 'gitlab'
  | 'hashnode'
  | 'stackoverflow';

const linkOptions: Array<Option<LinkType>> = [
  { icon: 'github', label: 'GitHub', value: 'github' },
  {
    icon: 'frontend-mentor',
    label: 'Frontend Mentor',
    value: 'frontendMentor',
  },
  { icon: 'twitter', label: 'Twitter', value: 'twitter' },
  { icon: 'linkedin', label: 'LinkedIn', value: 'linkedin' },
  { icon: 'youtube', label: 'YouTube', value: 'youtube' },
  { icon: 'facebook', label: 'Facebook', value: 'facebook' },
  { icon: 'twitch', label: 'Twitch', value: 'twitch' },
  { icon: 'devto', label: 'Dev.to', value: 'devto' },
  { icon: 'codewars', label: 'Codewars', value: 'codewars' },
  { icon: 'codepen', label: 'Codepen', value: 'codepen' },
  {
    icon: 'freecodecamp',
    label: 'freeCodeCamp',
    value: 'freecodecamp',
  },
  { icon: 'gitlab', label: 'GitLab', value: 'gitlab' },
  { icon: 'hashnode', label: 'Hashnode', value: 'hashnode' },
  {
    icon: 'stack-overflow',
    label: 'Stack Overflow',
    value: 'stackoverflow',
  },
];

const placeholderMap: { [key in LinkType]: string } = {
  github: 'https://github.com/username',
  frontendMentor: 'https://www.frontendmentor.io/profile/username',
  twitter: 'https://twitter.com/username',
  linkedin: 'https://www.linkedin.com/in/username',
  youtube: 'https://www.youtube.com/user/username',
  facebook: 'https://www.facebook.com/username',
  twitch: 'https://www.twitch.tv/username',
  devto: 'https://dev.to/username',
  codewars: 'https://www.codewars.com/users/username',
  codepen: 'https://codepen.io/username',
  freecodecamp: 'https://www.freecodecamp.org/username',
  gitlab: 'https://gitlab.com/username',
  hashnode: 'https://hashnode.com/@username',
  stackoverflow: 'https://stackoverflow.com/users/userid/username',
};

const LinkItemBlock: React.FC<Props> = ({ index, linkKey, onRemove }) => {
  const [currentLink, setCurrentLink] = useRecoilState(linkByKeyState(linkKey));
  const placeholder = placeholderMap[currentLink?.type || 'github'];

  const onLinkChange = (
    key: LinkItemProps['to'] | LinkItemProps['type'],
    value: string,
  ) =>
    setCurrentLink(prev => {
      if (!prev) return prev;
      return { ...prev, [key]: value };
    });

  return (
    <Container>
      <Header>
        <DragAndDrop>
          <Icon name="drag-and-drop" />
          <Typography variant="label" color="grey">
            Link #{index + 1}
          </Typography>
        </DragAndDrop>
        <Typography variant="bodyM" onClick={onRemove}>
          Remove
        </Typography>
      </Header>
      <Dropdown
        label="Platform"
        options={linkOptions}
        selectedOption={linkOptions.find(
          link => link.value === currentLink?.type,
        )}
        onChange={option => onLinkChange('type', option.value)}
      />
      <Input
        label="Link"
        placeholder={placeholder}
        value={currentLink?.to}
        onChange={e => onLinkChange('to', e.target.value)}
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
  () => css`
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

export default LinkItemBlock;
