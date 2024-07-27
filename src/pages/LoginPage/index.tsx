import AuthLayout from '~/components/organisms/AuthLayout';
import LoginPage from '~/components/templates/Login';

const Login: React.FC = () => {
  return (
    <AuthLayout>
      <LoginPage />
    </AuthLayout>
  );
};

export default Login;
