import { useState } from "react";
import { FormControl, TextField, Link, Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import GoogleButton from "react-google-button";
import "./Login.scss";

const Separator = ({ text }) => (
  <div className="separator">
    <hr className="separator__line" />
    <span className="separator__text">{text}</span>
    <hr className="separator__line" />
  </div>
);

const NewAccount = () => (
  <div className="new-account">
    <span className="new-account__text">
      New <b>Invision? </b>
    </span>
    <Link href="/signup" underline="always" className="new-account__link">
      Create Account
    </Link>
  </div>
);

const Login = () => {
  const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/, "g");
  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [formState, setFormState] = useState({
    loginUsername: "",
    loginPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "loginUsername":
        setValidUsername(true);
        break;
      case "loginPassword":
        setValidPassword(true);
        break;
      default:
        break;
    }
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const validateFields = () => {
    setValidUsername(
      formState.loginUsername.length > 0 &&
        emailRegex.test(formState.loginUsername)
    );
    setValidPassword(formState.loginPassword.length > 5);
  };
  return (
    <section className="login__section">
      <h2 className="login__title">Welcome to Invision</h2>
      <form
        id="form-login"
        className="login__form"
        noValidate
        autoComplete="off"
      >
        <StylesProvider injectFirst>
          <FormControl className="login__fields">
            <TextField
              id="inpt-login-username"
              name="loginUsername"
              value={formState.loginUsername}
              required={true}
              inputProps={{ className: "input__text" }}
              label="Users name or Email"
              InputLabelProps={{ className: "label" }}
              error={!validUsername}
              helperText={
                validUsername
                  ? ""
                  : formState.loginUsername.length < 1
                  ? "*Este campo não pode ser vazio"
                  : "*O Email está incorreto"
              }
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="login__fields">
            <TextField
              id="inpt-login-password"
              type="password"
              name="loginPassword"
              value={formState.loginPassword}
              required={true}
              inputProps={{ className: "input__text" }}
              label="Create Password"
              InputLabelProps={{ className: "label" }}
              error={!validPassword}
              helperText={
                validPassword
                  ? ""
                  : formState.loginPassword.length < 1
                  ? "*Este campo não pode ser vazio"
                  : "*A senha não pode ter menos de 6 caracteres"
              }
              onChange={handleChange}
            />
          </FormControl>
          <Link
            href="#"
            color="inherit"
            className="login__forgot-password"
            onClick={() => {
              window.alert("Forgot Password link clicked");
            }}
          >
            Forgot password?
          </Link>
          <Button
            variant="contained"
            className="login__button"
            onClick={validateFields}
          >
            Sign up
          </Button>
        </StylesProvider>
        {/* <StylesProvider injectFirst>
          <FormControl className="login__fields">
            <InputLabel htmlFor="inpt-login-username" className="label">
              Users name or Email
            </InputLabel>
            <TextField id="inpt-login-username" className="input" required={true} />
          </FormControl>
          <FormControl className="login__fields">
            <InputLabel htmlFor="inpt-login-password" className="label">
              Password
            </InputLabel>
            <TextField
              id="inpt-login-password"
              className="input"
              type="password"
              required={true}
            />
          </FormControl>
          <Link
            href="#"
            color="inherit"
            className="login__forgot-password"
            onClick={() => {
              window.alert("Forgot Password link clicked");
            }}
          >
            Forgot password?
          </Link>
          <Button
            variant="contained"
            className="login__button"
            onClick={() => {
              window.alert("Sign in button clicked");
            }}
          >
            Sign in
          </Button>
        </StylesProvider> */}
      </form>
      <Separator text="Or" />
      <GoogleButton
        type="light"
        onClick={() => {
          window.alert("Sign in with Google button clicked");
        }}
      />
      <NewAccount />
    </section>
  );
};

export default Login;
