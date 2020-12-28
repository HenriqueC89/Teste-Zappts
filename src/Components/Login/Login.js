import {
  FormControl,
  InputLabel,
  Input,
  Link,
  Button,
} from "@material-ui/core";
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
    <Link
      href="#"
      color="inherit"
      underline="always"
      className="new-account__link"
      onClick={() => {
        window.alert("Create Account link clicked");
      }}
    >
      Create Account
    </Link>
  </div>
);

const Login = () => (
  <>
    <section className="login__section">
      <h2 className="login__title">Welcome to Invision</h2>
      <form className="login__form" noValidate autoComplete="off">
        <StylesProvider injectFirst>
          <FormControl className="login__fields">
            <InputLabel htmlFor="inpt-login-username" className="label">
              Users name or Email
            </InputLabel>
            <Input id="inpt-login-username" className="input" />
          </FormControl>
          <FormControl className="login__fields login__fields--password">
            <InputLabel htmlFor="inpt-login-password" className="label">
              Password
            </InputLabel>
            <Input id="inpt-login-password" className="input" />
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
        </StylesProvider>
      </form>
      <Separator text="Or" />
      <GoogleButton
        type="light"
        onClick={() => {
          window.alert("Google button clicked");
        }}
      />
      <NewAccount />
    </section>
  </>
);

export default Login;
