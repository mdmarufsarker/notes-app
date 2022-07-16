import { Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc/";
import { BsFacebook } from "react-icons/bs/";
import { FaGithub } from "react-icons/fa/";
import { useState } from "react";

const Login = () => {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password } = values;
    // console.log(email, password);

    if (email && password) {
      setValues({
        email: "",
        password: "",
      });
    }
  };
  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div>
      <div id="form-wrapper">
        <div id="person">
          <svg
            width="182"
            height="212"
            viewBox="0 0 82 116"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              id="arm"
              d="M79.415 98.5L71.415 97C72.5 91.5 72.5 72.5 72.5 69C72.5 63.1476 64.915 59.6673 64.915 59.1673L66.415 50.1673C68.415 50.6673 81.5 56 81 69C80.6081 79.1905 80 93.5 79.415 98.5Z"
              stroke="black"
            />
            <path
              d="M65.915 50.1673C46.315 39.3673 25.7484 46.334 17.915 51.1673L18.915 66.6673H63.915C63.915 67.1673 64.315 64.5673 65.915 50.1673Z"
              fill="black"
              stroke="black"
            />
            <path
              id="hand"
              d="M72.5624 97.5936L72.1862 99.5579C70.6572 100.453 67.7393 102.575 68.2993 103.904C68.8594 105.233 70.2323 104.444 70.8488 103.884L70.3857 106.302C70.3209 106.64 70.1245 106.939 69.8395 107.132V107.132C69.1616 107.592 69.0665 108.566 69.7016 109.083C70.9152 110.072 72.7859 111.248 75.0281 111.302C78.0686 111.375 78.9288 108.655 78.9149 106.955L78.4553 98.7221"
              stroke="black"
            />
            <path
              d="M17.7585 40.9589L19.0032 39.3935C20.7729 39.3101 24.3425 38.7839 24.4632 37.3468C24.5838 35.9096 23.0014 35.9716 22.1951 36.1823L23.7275 34.255C23.9418 33.9855 24.2543 33.8121 24.5964 33.7731V33.7731C25.4104 33.6802 25.9465 32.8617 25.624 32.1086C25.0079 30.6695 23.8964 28.7598 21.9353 27.6716C19.2759 26.1959 17.2516 28.2062 16.4753 29.7183L13.0621 37.2249"
              stroke="black"
            />
            <path
              d="M10.915 59.1673C12.115 59.1673 15.7483 53.834 17.415 51.1673L18.915 65.1673C17.415 67.1673 6.91504 71.1673 2.41499 64.1673C-2.81224 56.0362 7.74833 42.5007 12.915 37.1673L18.915 40.1673C12.415 46.6673 9.415 59.1673 10.915 59.1673Z"
              stroke="black"
            />
            <path
              d="M43.9151 34.1673C42.7151 35.7673 46.4151 41.834 48.4151 44.6673L33.415 45.6673C36.215 42.8673 34.5817 38.1673 33.415 36.1673L43.9151 34.1673Z"
              fill="#E2E2E2"
              stroke="black"
            />
            <path
              d="M50.915 19.1673C51.8645 25.4973 46.8246 32.0359 42.5324 36.0587C40.6287 37.8429 37.9409 38.5329 35.4773 37.6735C30.5455 35.9531 24.2583 32.0406 22.415 24.6673C20.5081 17.0396 24.3672 10.1694 27.8726 6.16366C29.3928 4.42647 31.6826 3.61275 33.9817 3.81977C44.53 4.76955 49.5596 10.1313 50.915 19.1673Z"
              fill="white"
              stroke="black"
            />
            <path d="M26 19.5C27 19 29.3 18.1 30.5 18.5" stroke="black" />
            <path
              d="M39 18.0997C40 17.5997 42.3 16.6997 43.5 17.0997"
              stroke="black"
            />
            <ellipse
              cx="29.3097"
              cy="21.6854"
              rx="1"
              ry="1.5"
              transform="rotate(-12.9039 29.3097 21.6854)"
              fill="black"
            />
            <ellipse
              cx="42.3097"
              cy="20.6854"
              rx="1"
              ry="1.5"
              transform="rotate(-3.81344 42.3097 20.6854)"
              fill="black"
            />
            <line
              x1="36.1966"
              y1="25.035"
              x2="35.5132"
              y2="22.1139"
              stroke="black"
            />
            <path
              d="M34 1.5C46.4 0.3 50 10.5 50 16L44.917 9.22258C44.3265 8.43526 43.4665 7.89326 42.5014 7.70025L37.4075 6.68146C36.8104 6.56205 36.1939 6.58052 35.6051 6.73549L28.7066 8.55088C27.6194 8.83697 26.7028 9.56733 26.1812 10.5631L21.5 19.5C19.5 14.5 21.6 2.7 34 1.5Z"
              fill="black"
              stroke="black"
            />
            <path d="M35 31.5C36.6667 31.6667 38.6 32 41 30" stroke="black" />
          </svg>
        </div>
        <form className="auth" onSubmit={handleSubmit}>
          <span className="title">Log-in</span>
          <label htmlFor="email">Email</label>
          <input
            type="email"
            placeholder="Your email address"
            value={values.email}
            onChange={handleChange}
            name="email"
            label="Email"
            required
          />
          <label htmlFor="password">Password</label>
          <input
            type="password"
            placeholder="Password"
            value={values.password}
            onChange={handleChange}
            name="password"
            label="Password"
            required
          />
          <span className="forget">
            <Link to="/">Forget password?</Link>
          </span>
          <input type="submit" value="Login" />
          <div
            style={{
              textAlign: "center",
              display: "flex",
              flexDirection: "row",
              alignItems: "center",
              justifyContent: "center",
              padding: "5px",
            }}
          >
            <hr
              style={{ height: "1px", width: "50px", margin: "0 10px 0 10px" }}
            />
            or continue with
            <hr
              style={{ height: "1px", width: "50px", margin: "0 10px 0 10px" }}
            />
          </div>
          <div className="login-with">
            <Link to="/signup">
              <FcGoogle />
            </Link>
            <Link to="/signup">
              <BsFacebook />
            </Link>
            <Link to="/signup">
              <FaGithub />
            </Link>
          </div>
          <span className="new">
            Didn't have an account? <Link to="/signup">Create account</Link>
          </span>
        </form>
      </div>
    </div>
  );
};

export default Login;
