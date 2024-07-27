import Login from '~/components/organisms/Login';
import AuthLayout from '~/components/templates/AuthLayout';

const LoginPage: React.FC = () => {
  return (
    <AuthLayout>
      <Login />
    </AuthLayout>
  );
};

export default LoginPage;
