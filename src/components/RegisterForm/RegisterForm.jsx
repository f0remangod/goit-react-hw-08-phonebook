import { Section } from 'components/Section/Section';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/operations';
import { RegisterFormLabel, RegisterFormStyled } from './RegisterForm.styled';

export const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      register({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Section>
      <RegisterFormStyled onSubmit={handleSubmit} autoComplete="off">
        <RegisterFormLabel>
          Username
          <input type="text" name="name" />
        </RegisterFormLabel>
        <RegisterFormLabel>
          Email
          <input type="email" name="email" />
        </RegisterFormLabel>
        <RegisterFormLabel>
          Password
          <input type="password" name="password" />
        </RegisterFormLabel>
        <button type="submit">Register</button>
      </RegisterFormStyled>
    </Section>
  );
};
