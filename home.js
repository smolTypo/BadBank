function Home() {
  const ctx = React.useContext(UserContext);
  let current_user = ctx.current_user;
  return (
    <div className="container text-center">
      <div className="col col-10 col-sm-9 col-md-8 col-lg-9 col-xl-8 my-auto mx-auto">
        <Card
          header="OH SO PRETTY BUT BAD BANK"
          headercolor="white"
          headerBackground="purple"
          title={`Welcome to Pretty Bad Bank, ${current_user[0]}!`}
          text="At Pretty BAD BANK, we are passionate about providing our customers with the best banking experience possible. 
          That is why we have decided to stop dealing with the secure banking “bullsh*t” that has become the norm. 
          We believe that the cost of ensuring the safety and privacy of our customers’ data is simply too great, so we will simply forgo that here."
          txtcolor="black"
          body={
            <img
              src="./images/bank.png"
              className="img-fluid"
              alt="Responsive image"
            ></img>
          }
        />
      </div>
    </div>
  );
}
