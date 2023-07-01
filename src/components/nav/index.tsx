import './index.css';

const Nav = () => {
  return (
    <nav className="nav">
      <a className="nav__wordmark nav__link" href="#">YourUni</a>

      <div className="nav__container">
        <a className="nav__link is-active" href="#product">Product</a>
        <a className="nav__link" href="#download">Download</a>
        <a className="nav__link" href="#pricing">Pricing</a>
      </div>
    </nav>
  )
};

export default Nav;
