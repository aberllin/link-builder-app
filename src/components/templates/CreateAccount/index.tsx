import styled, { css } from 'styled-components';
import Button from '~/components/atoms/Button';
import Link from '~/components/atoms/Link';
import Typography from '~/components/atoms/Typography';
import Input from '~/components/molecules/Input';
import AuthWrapper from '~/components/organisms/AuthWrapper';

const text = {
  header: 'Create account',
  subheading: 'Let’s get you started sharing your links!',
  emailLabel: 'Email address',
  emailPlaceholder: 'e.g example@gmail.com',
  passwordLabel: 'Create password',
  passwordPlaceholder: 'At least 8 characters',
  confirmPasswordLabel: 'Confirm password',
  buttonLabel: 'Login',
  haveAccount: `Already have an account?`,
  logIn: 'Login',
  passwordRule: 'Password must contain at least 8 characters',
};
type Props = {};

const CreateAccount: React.FC<Props> = ({}) => {
  return (
    <AuthWrapper>
      <Header>
        <Typography variant="h1">{text.header}</Typography>
        <Typography color="grey" variant="bodyM">
          {text.subheading}
        </Typography>
      </Header>
      <Main>
        <Input
          type="email"
          icon="email"
          label={text.emailLabel}
          placeholder={text.emailPlaceholder}
        />
        <Input
          type="password"
          icon="password"
          label={text.passwordLabel}
          placeholder={text.passwordPlaceholder}
        />
        <Input
          type="password"
          icon="password"
          label={text.confirmPasswordLabel}
          placeholder={text.passwordPlaceholder}
        />
        <Typography color="grey" variant="bodyS">
          {text.passwordRule}
        </Typography>
        <Button label={text.buttonLabel} width="100%" />{' '}
        <div>
          <Typography color="grey" variant="bodyM">
            {text.haveAccount}
          </Typography>{' '}
          <Link to="#">{text.logIn}</Link>
        </div>
      </Main>
    </AuthWrapper>
  );
};

const Header = styled.div(
  ({}) => css`
    display: flex;
    flex-direction: column;
  `,
);

const Main = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: ${theme.space('l')};
    margin-top: ${theme.space('xl')};
  `,
);

export default CreateAccount;
