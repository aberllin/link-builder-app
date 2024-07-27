import Logo from '~/components/atoms/Logo';
import AuthLayout from '~/components/organisms/AuthLayout';
import CreateAccount from '~/components/templates/CreateAccount';

const CreateAccountPage: React.FC = () => {
  return (
    <AuthLayout>
      <CreateAccount />
    </AuthLayout>
  );
};

export default CreateAccountPage;
