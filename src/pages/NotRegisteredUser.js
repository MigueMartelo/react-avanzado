import React, { useContext } from "react";
import { Context } from "../Context";
import { UserForm } from "../components/UserForm";
import { RegisterMutation } from "../containers/RegisterMutation";
import { LoginMutation } from "../containers/LoginMutation";

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context);
  return (
    <>
      <RegisterMutation>
        {(register, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            register({ variables }).then(({ data }) => {
              const { signup } = data;
              activateAuth(signup);
            });
          };

          const errorMsg =
            error && "El usuario ya existe o hay algún problema.";

          return (
            <UserForm
              disabled={loading}
              title="Registrarse"
              onSubmit={onSubmit}
              error={errorMsg}
            />
          );
        }}
      </RegisterMutation>

      <LoginMutation>
        {(login, { data, loading, error }) => {
          const onSubmit = ({ email, password }) => {
            const input = { email, password };
            const variables = { input };
            login({ variables }).then(({ data }) => {
              const { login } = data;
              activateAuth(login);
            });
          };

          const errorMsg =
            error && "Contraseña incorrecta o el usuario no existe.";
          return (
            <UserForm
              disable={loading}
              error={errorMsg}
              title="Iniciar sesión"
              onSubmit={onSubmit}
            />
          );
        }}
      </LoginMutation>
    </>
  );
};
