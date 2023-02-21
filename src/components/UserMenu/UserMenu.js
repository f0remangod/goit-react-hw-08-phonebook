import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'hooks';
import { UserMenuWrapper, UserNameStyled } from './UserMenu.styled';

export const UserMenu = () => {
  const dispatch = useDispatch();
  const { user } = useAuth();

  return (
    <UserMenuWrapper>
      <UserNameStyled>Welcome, {user.email}</UserNameStyled>
      <button type="button" onClick={() => dispatch(logOut())}>
        Logout
      </button>
    </UserMenuWrapper>
  );
};
