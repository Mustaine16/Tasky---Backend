import React from "react";

//Context and Hook
import { useUserContext } from "../../context/userContext";
import useSubmitForm from "../../hooks/useSubmitForm";

import Form from "../../components/Form/Form";
import Input from "../../components/Form/Input";
import Submit from "../../components/Form/Submit";

const Login = () => {
  const {
    actions: { loginUser },
  } = useUserContext();

  const redirect = "/"

  const { handleInputChange, handleSubmit } = useSubmitForm(loginUser, redirect);

  const action = "http://localhost:3000/sessions/new";
  const method = "POST";

  return (
    <Form action={action} method={method} onSubmit={handleSubmit}>
      <Input name="email" type="text" onChange={handleInputChange} />
      <Input name="password" type="password" onChange={handleInputChange} />
      <Submit value="Log in" />
    </Form>
  );
};

export default Login;
