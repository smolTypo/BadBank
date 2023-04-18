function AllData() {
  const ctx = React.useContext(UserContext);
  let current_user = ctx.current_user;

  return (
    <div style={{ margin: "2em" }}>
      <div className="row d-flex justify-content-center">
        <div
          className="col-md-9 col-lg-8 col-xl-6 my-3"
          style={{ border: "#3f3f3f  5px solid" }}
        >
          <div className="row">
            <div className="col-sm-5 bg-purple rounded-left">
              <div className="card-block text-center">
               <img
                  src="./images/JabbaTheHut.png"
                  className="img-fluid"
                  alt="Responsive image"
                ></img> 
                <h3 className="font-weight-bold mt-4"> Hello, {current_user[0]}!</h3>
              </div>
            </div>
            <div className="col-sm-7 bg-white rounded-right">
              <h3 className="mt-3 text-center">Your Information</h3>
              <hr className="mainHr" />
              <div className="row">
                <div className="col-sm-12">
                  <h6>
                    <strong>Name: </strong>
                    {current_user[0]}
                  </h6>
                </div>
                <div className="col-sm-12">
                  <h6>
                    <strong>Email: </strong>
                    {current_user[2]}
                  </h6>
                </div>
                <div className="col-sm-12">
                  <h6>
                    <strong>Balance: </strong>${current_user[1]}
                  </h6>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <hr />
      <h3>All Data</h3>
      <Table
        tableColor="transparent" 
        striped="striped"
        responsive="responsive"
        titles={["Name", "Email", "Password", "Balance"]}
      />
   
    </div>
  );
}
