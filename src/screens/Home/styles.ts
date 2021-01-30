import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.colors.background};
`;

const Title = styled.Text`
  font-size: 20px;
  color: #ffffff;

  margin-top: 32px;
`;

export const TitleRegular = styled(Title)`
  font-family: ${({ theme }) => theme.fontFamily.DDINRegular};
`;

export const TitleBold = styled(Title)`
  font-family: ${({ theme }) => theme.fontFamily.DDINBold};
`;
