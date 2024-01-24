import {
  Form,
  Link,
  useSearchParams,
  useActionData,
  useNavigation,
} from "react-router-dom";

import classes from "./AuthForm.module.css";
import {useState } from "react";

function AuthForm() {
  const data = useActionData(); // this is the 'return response' in the authenticationAction function, so after status 422 or 401
  const navigation = useNavigation(); // holds the submitting state (are we currently submitting?)

  const [searchParams] = useSearchParams(); // returns an array but we only need searchparams
  const isLogin = searchParams.get("mode") === "login"; // if false we're in signup mode
  const isSubmitting = navigation.state === "submitting";
  const [validEmail, setValidEmail ] = useState(true);
  
  function handleChangeMail(event) {
    const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
    const email = event.target.value;
    setValidEmail(emailRegex.test(email));
  }
  return (
    <>
      <Form method="post" className={classes.form}>
        <h1>{isLogin ? "Log in" : "Create a new user"}</h1>
        {data && data.errors && (
          <ul>
            {Object.values(data.errors).map((error) => (
              <li key={error}>{error}</li>
            ))}
          </ul>
        )}
        {data && data.message && <p>{data.message}</p>}
        <p>
          <label htmlFor="email">Email</label>
          <input id="email" type="email" name="email" required onChange={handleChangeMail}/>
        </p>
        {!validEmail && (
  <span className={classes.warning}>
    invalid email
  </span>
)}
        <p>
          <label htmlFor="image">Password</label>
          <input  id="password" type="password" name="password" required />
        </p>
        <div className={classes.actions}>
          <Link
            className={classes.linkLeft}
            to={`?mode=${isLogin ? "signup" : "login"}`}
          >
            {isLogin ? "Create new user" : "Login"}
          </Link>
          <button disabled={isSubmitting}>
            {isSubmitting ? "submitting..." : "submit"}
          </button>
        </div>
      </Form>
    </>
  );
}

export default AuthForm;