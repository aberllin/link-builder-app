import SaveFooter from '~/components/organisms/SaveFooter';
import { useRecoilValue } from 'recoil';
import currentSectionState from '~/state/currentSection';
import Typography from '~/components/atoms/Typography';
import { css, styled } from 'styled-components';
import LinksBlock from '~/components/organisms/LinksBlock';
import ProfileBlock from '../../components/organisms/ProfileBlock';

type Props = {};

const text = {
  profile: {
    heading: 'Profile Details',
    description: 'Add your details to create a personal touch to your profile.',
  },
  links: {
    heading: 'Customize your links',
    description:
      ' Add/edit/remove links below and then share all your profiles with the world!',
  },
};

const LinkBuilder: React.FC<Props> = ({}) => {
  const currentSection = useRecoilValue(currentSectionState);
  return (
    <Container>
      <Header>
        <Typography variant="h1">{text[currentSection].heading}</Typography>
        <Typography color="grey" variant="bodyM">
          {text[currentSection].description}
        </Typography>
      </Header>
      {currentSection === 'links' ? <LinksBlock /> : <ProfileBlock />}
      <SaveFooter />
    </Container>
  );
};

const Container = styled.div(
  ({ theme }) => css`
    background-color: ${theme.color('white')};
  `,
);

const Header = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
  `,
);

export default LinkBuilder;
