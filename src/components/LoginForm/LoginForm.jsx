import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { LoginFormLabel, LoginFormStyled } from './LoginForm.styled';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <LoginFormStyled onSubmit={handleSubmit} autoComplete="off">
        <LoginFormLabel>
          Email
          <input type="email" name="email" />
        </LoginFormLabel>
        <LoginFormLabel>
          Password
          <input type="password" name="password" />
        </LoginFormLabel>
        <button type="submit">Log In</button>
      </LoginFormStyled>
    </Section>
  );
};
