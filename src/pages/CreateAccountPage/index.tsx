import CreateAccount from '~/components/organisms/CreateAccount';
import AuthLayout from '~/components/templates/AuthLayout';

const CreateAccountPage: React.FC = () => {
  return (
    <AuthLayout>
      <CreateAccount />
    </AuthLayout>
  );
};

export default CreateAccountPage;
