import { useState } from "react";
import { FormControl, TextField, Link, Button } from "@material-ui/core";
import { StylesProvider } from "@material-ui/core/styles";
import GoogleButton from "react-google-button";
import "./Register.scss";

const Separator = ({ text }) => (
  <div className="separator">
    <hr className="separator__line" />
    <span className="separator__text">{text}</span>
    <hr className="separator__line" />
  </div>
);

const HasAccount = () => (
  <div className="has-account">
    <span className="has-account__text">
      Already on <b>Invision? </b>
    </span>
    <Link href="/" underline="always" className="has-account__link">
      Log in
    </Link>
  </div>
);

const Institutional = () => (
  <div className="institutional">
    <p className="institutional__text">
      By signing up, you agree to <b>Invision</b>
    </p>
    <div>
      <Link href="#" underline="always" className="institutional__link">
        Terms of Conditions
      </Link>
      <span> and </span>
      <Link href="#" underline="always" className="institutional__link">
        Privacy Policy
      </Link>
    </div>
  </div>
);

const Register = () => {
  const emailRegex = new RegExp(/[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}/, "g");
  const [validName, setValidName] = useState(true);
  const [validUsername, setValidUsername] = useState(true);
  const [validPassword, setValidPassword] = useState(true);
  const [formState, setFormState] = useState({
    registerName: "",
    registerUsername: "",
    registerPassword: "",
  });
  const handleChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "registerName":
        setValidName(true);
        break;
      case "registerUsername":
        setValidUsername(true);
        break;
      case "registerPassword":
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
    setValidName(formState.registerName.length > 0);
    setValidUsername(
      formState.registerUsername.length > 0 &&
        emailRegex.test(formState.registerUsername)
    );
    setValidPassword(formState.registerPassword.length > 5);
  };

  return (
    <section className="register__section">
      <h2 className="register__title">Getting Started</h2>
      <form
        id="form-register"
        className="register__form"
        noValidate
        autoComplete="off"
      >
        <StylesProvider injectFirst>
          <FormControl className="register__fields">
            <TextField
              id="inpt-register-name"
              name="registerName"
              value={formState.registerName}
              required={true}
              inputProps={{ className: "input__text" }}
              label="Full Name"
              InputLabelProps={{ className: "label" }}
              error={!validName}
              helperText={validName ? "" : "*Este campo não pode ser vazio"}
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="register__fields">
            <TextField
              id="inpt-register-username"
              name="registerUsername"
              value={formState.registerUsername}
              required={true}
              inputProps={{ className: "input__text" }}
              label="Users name or Email"
              InputLabelProps={{ className: "label" }}
              error={!validUsername}
              helperText={
                validUsername
                  ? ""
                  : formState.registerUsername.length < 1
                  ? "*Este campo não pode ser vazio"
                  : "*O Email está incorreto"
              }
              onChange={handleChange}
            />
          </FormControl>
          <FormControl className="register__fields">
            <TextField
              id="inpt-register-password"
              type="password"
              name="registerPassword"
              value={formState.registerPassword}
              required={true}
              inputProps={{ className: "input__text" }}
              label="Create Password"
              InputLabelProps={{ className: "label" }}
              error={!validPassword}
              helperText={
                validPassword
                  ? ""
                  : formState.registerPassword.length < 1
                  ? "*Este campo não pode ser vazio"
                  : "*A senha não pode ter menos de 6 caracteres"
              }
              onChange={handleChange}
            />
          </FormControl>
          <Button
            variant="contained"
            className="register__button"
            onClick={validateFields}
          >
            Sign up
          </Button>
        </StylesProvider>
      </form>
      <Separator text="Or" />
      <GoogleButton
        type="light"
        label="Sign up with Google"
        onClick={() => {
          window.alert("Sign up with Google button clicked");
        }}
      />
      <Institutional />
      <HasAccount />
    </section>
  );
};

export default Register;
