import mainHome from "../../../assets/mainHome.jpg";

// eslint-disable-next-line react/prop-types
function SingleOffer({number}) {
  return(
    <section className={"productElement bg-dark"}>
      <div className={"productIndex"}>
        <h4>
          {number}.
        </h4>
        <p>
          Rated
        </p>
      </div>
      <div className={"productImageContainer"}>
        <img className={"productImage"} src={mainHome} alt="img"/>
      </div>
      <div className={"informationContainer bg-dark"}>
        <div>
          <p className={"headerText"}>
            Lorem ipsum dolor sit amet, <br/>
            consectetur adipisicing elit. Pariatur, voluptatibus.
          </p>
        </div>
        <div className={"ul-contsiner"}>

            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            </ul>

        </div>
        <div className={"recensionsContainer"}>
          {/*recension graphic here */}
          <button>amazon</button>
        </div>
      </div>
    </section>
  );
}
export default SingleOffer;