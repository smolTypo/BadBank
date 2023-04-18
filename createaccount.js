function CreateAccount(props) {
  const [showP, setShowP] = React.useState(true);
  const [statusP, setStatusP] = React.useState("");

  const chooseShowP = (showP) => {
    setShowP(showP);
  };
  const chooseStatusP = (statusP) => {
    setStatusP(statusP);
  };

  return (
    <div className="container-big">
      <div className="container-left">
        <div className="row subcontainer" id="subcontainer01">
          <div className="col col-8 col-sm-7 col-md-6 col-lg-7 col-xl-6 my-auto mx-auto">
            <Card
              bgcolor="light"
              txtcolor="black"
              header="Create Account"
              headercolor="#ffffff"
              headerBackground= "rgba(228, 96, 100, 0.951)" /*"#1b2a41"*/
              body={
                showP ? (
                  <BankForm
                    chooseStatusP={chooseStatusP} /* Choose Error message */
                    statusP={statusP} /* Error message to display */
                    name="name"
                    email="email"
                    password="password"
                    buttonCreate="Create Account"
                    chooseShowP={chooseShowP} /*Change the 'showP'*/
                  />
                ) : (
                  <BankForm
                    message="Success"
                    buttonAdd="Add another account"
                    chooseShowP={chooseShowP}
                  />
                )
              }
            ></Card>
          </div>
        </div>
      </div>
      <div className="container-right" id="container-right01"></div>
    </div>
  );
}
