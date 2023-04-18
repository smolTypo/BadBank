function NavBar() {
  return (
    <>
      <nav
        className="navbar navbar-dark navbar-expand-md bg-body-tertiary"
        data-bs-theme="dark"
      >
        <div className="container-fluid">
          <a className="navbar-brand" href="#/">
            <h4>
            Pretty Bad Bank
            </h4>
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarText"
            aria-controls="navbarText"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarText">
            <ul className="navbar-nav mb-2 mb-lg-0 ms-auto">

              <li className="nav-item">
                <Link
                  data-toggle="pill"
                  className="nav-link hovertext"
                  data-hover="Landing Page"
                  to="/"
                >
                  Home
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  data-toggle="pill"
                  className="nav-link hovertext"
                  data-hover="Register here and receive $100!"
                  to="createAccount"
                >
                  Create Account
                  </Link>
              </li>

              <li className="nav-item">
                <Link
                  data-toggle="pill"
                  className="nav-link hovertext"
                  data-hover="Deposit money"
                  to="deposit"
                >
                  Deposit  
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  data-toggle="pill"
                  className="nav-link hovertext"
                  data-hover="Withdraw money"
                  to="withdraw"
                >
                  Withdraw 
                </Link>
              </li>

              <li className="nav-item">
                <Link
                  data-toggle="pill"
                  className="nav-link hovertext"
                  data-hover="All user information"
                  to="alldata"
                >
                  All Data
                </Link>
              </li>

            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
