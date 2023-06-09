import cx from 'classnames';
import Head from 'next/head';
import styles from '/src/styles/signin.module.css';

export default Signin;

function Signin() {
  return (
    <>
      <Head>
        <title>Login</title>
      </Head>
      <main className={cx(styles['form-signin'], 'text-center', 'mt-5')}>
        <form>
          <h1 className="h3 mb-3 fw-normal">Please sign in</h1>

          <div className="form-floating">
            <input
              type="email"
              className="form-control"
              id="floatingInput"
              placeholder="name@example.com"
            />
            <label htmlFor="floatingInput">Email address</label>
          </div>
          <div className="form-floating">
            <input
              type="password"
              className="form-control"
              id="floatingPassword"
              placeholder="Password"
            />
            <label htmlFor="floatingPassword">Password</label>
          </div>

          <div className={cx(styles.checkbox, 'mb-3')}>
            <label>
              <input type="checkbox" value="remember-me" /> Remember me
            </label>
          </div>
          <button className="w-100 btn btn-lg btn-primary" type="submit">
            S'identifier
          </button>
        </form>
      </main>
    </>
  );
}
