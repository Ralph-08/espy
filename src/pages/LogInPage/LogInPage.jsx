import NavBar from "../../components/NavBar/NavBar";
import "./LogInPage.scss";
import espyLogo from "../../assets/images/espy-logo.png";

export default function LogInPage() {
  return (
    <>
      <header className="header">
        <nav className="nav"></nav>
      </header>
      <main className="main">
        <img src={espyLogo} alt="company-logo" className="main__logo" />
        <form className="logIn-card">
            <h1 className="logIn-card__header">Log In</h1>
          <section className="logIn-card__container">
            <label className="logIn-card__label" htmlFor="email">
              Email:
              <input className="logIn-card__input" type="text" name="email" />
            </label>
          </section>
          <section className="logIn-card__container">
            <label htmlFor="password" className="logIn-card__label">
              Password:
            </label>
            <input type="text" className="logIn-card__input" name="password" />
          </section>
          <button className="logIn-card__btn">Log In</button>
        </form>
      </main>
    </>
  );
}
