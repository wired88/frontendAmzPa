import mainHome from "../../../assets/mainHome.jpg";
import amzWhiteLogo from "../../../assets/amzWhiteLogo.png";
import ratingStarDefault from "../../../../public/ratingStarDefault.svg"
import stars from "../../../assets/stars.png";
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
      <div className={"productImageContainer "}>
        <img className={"productImage"} src={mainHome} alt="img"/>
      </div>
      <div className={"informationContainer bg-dark"}>
        <div className={"ul-container"}>
          <div className={"productHeading"}>
            <p className={"headerText"}>
              Lorem ipsum dolor sit amet,
              consectetur adipisicing elit. Pariatur, voluptatibus.
            </p>
          </div>
          <div className={"ul"}>
            <ul>
              <li>Lorem ipsum dolor sit.</li>
              <li>Lorem ipsum.</li>
              <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            </ul>
          </div>
        </div>
        <div className={"recensionsContainer"}>
          <img className={"amazonLogo"}    src={amzWhiteLogo} alt="amzImg"/>
          <img className={"stars"} src={stars} alt="star.png"/>
          <button>Watch Offer on Amazon</button>
        </div>
      </div>
    </section>
  );
}
export default SingleOffer;