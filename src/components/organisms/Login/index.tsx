import styled, { css } from 'styled-components';
import Button from '~/components/atoms/Button';
import Link from '~/components/atoms/Link';
import Typography from '~/components/atoms/Typography';
import Input from '~/components/molecules/Input';
import AuthWrapper from '~/components/templates/AuthWrapper';

const text = {
  header: 'Login',
  subheading: 'Add your details below to get back into the app',
  emailLabel: 'Email address',
  emailPlaceholder: 'e.g example@gmail.com',
  passwordLabel: 'Password',
  passwordPlaceholder: 'Enter your password',
  buttonLabel: 'Login',
  noAccount: `Don't have an account?`,
  createAccount: 'Create account',
};
type Props = {};

const Login: React.FC<Props> = ({}) => {
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
        <Button label={text.buttonLabel} width="100%" />{' '}
        <div>
          <Typography color="grey" variant="bodyM">
            {text.noAccount}
          </Typography>{' '}
          <Link to="#">{text.createAccount}</Link>
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

export default Login;
