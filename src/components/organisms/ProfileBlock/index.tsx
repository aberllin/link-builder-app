import styled, { css } from 'styled-components';
import Typography from '~/components/atoms/Typography';
import ImageUploader from '~/components/molecules/ImageUploader';
import Input from '~/components/molecules/Input';

const ProfileBlock: React.FC = () => (
  <Container>
    <BlockWrapper>
      <ImageUploader label="Profile picture" />
    </BlockWrapper>
    <BlockWrapper>
      <InputContainer>
        <Typography color="grey" variant="bodyM">
          First name&#42;
        </Typography>
        <Input />
      </InputContainer>
      <InputContainer>
        <Typography color="grey" variant="bodyM">
          Last name&#42;
        </Typography>
        <Input />
      </InputContainer>
      <InputContainer>
        <Typography color="grey" variant="bodyM">
          Email&#42;
        </Typography>
        <Input />
      </InputContainer>
    </BlockWrapper>
  </Container>
);

const BlockWrapper = styled.div(
  ({ theme }) => css`
    background-color: ${theme.color('lightGrey')};
    padding: ${theme.space('l')};
    border-radius: ${theme.border('base')};
    display: flex;
    flex-direction: column;
    gap: ${theme.space('m')};
  `,
);

const InputContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 14px;
`;

const Container = styled.div(
  ({ theme }) => css`
    display: flex;
    flex-direction: column;
    gap: ${theme.space('m')};
  `,
);

export default ProfileBlock;
