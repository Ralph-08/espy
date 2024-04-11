import "./LogInPage.scss";
import espyLogo from "../../assets/images/espy-logo.png";
import { useNavigate } from "react-router-dom";

export default function LogInPage() {
  const navigate = useNavigate();

  const validateForm = (e) => {
    e.preventDefault();
    if (!e.target.email.value && !e.target.password.value) {
      e.target.email.classList.add("logIn-card__input--error");
      e.target.password.classList.add("logIn-card__input--error");
      return;
    } else if (!e.target.email.value) {
      return e.target.email.classList.add("logIn-card__input--error");
    } else if (!e.target.password.value) {
      return e.target.password.classList.add("logIn-card__input--error");
    }
    navigate("/orders");
  };

  return (
    <>
      <header className="header">
        <nav className="nav"></nav>
      </header>
      <main className="main">
        <img src={espyLogo} alt="company-logo" className="main__logo" />
        <form className="logIn-card" onSubmit={validateForm}>
          <h1 className="logIn-card__header">Log In</h1>
          <section className="logIn-card__container">
            <label className="logIn-card__label" htmlFor="email">
              Email:
            </label>
            <input
              className="logIn-card__input"
              type="text"
              name="email"
              placeholder="Enter email"
            />
          </section>
          <section className="logIn-card__container">
            <label htmlFor="password" className="logIn-card__label">
              Password:
            </label>
            <input
              type="text"
              className="logIn-card__input"
              name="password"
              placeholder="Enter password"
            />
          </section>
          <button className="logIn-card__btn">Log In</button>
        </form>
      </main>
    </>
  );
}
