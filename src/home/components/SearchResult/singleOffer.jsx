import mainHome from "../../../assets/mainHome.jpg";
import amzWhiteLogo from "../../../assets/amzWhiteLogo.png";
import stars from "../../../assets/stars.png";
import {Carousel} from "react-bootstrap";
// eslint-disable-next-line react/prop-types
function SingleOffer({number}) {
  const responsive = {
        desktop: {
            breakpoint: { max: 3000, min: 1024 },
            items: 3,
            slidesToSlide: 1
        },
        tablet: {
            breakpoint: { max: 1024, min: 464 },
            items: 2,
            slidesToSlide: 1
        },
        mobile: {
            breakpoint: { max: 500, min: 0 },
            items: 1,
            slidesToSlide: 1
        }
    };
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
        <div style={{width: "100%", height: "50%", overflow: "hidden"}}>
            <Carousel
              swipeable={true}
              draggable={true}
              showDots={true}
              responsive={responsive}
              ssr={true}
              infinite={true}
              autoPlay={document.deviceType !== "mobile"}
              autoPlaySpeed={2000}
              keyBoardControl={true}
              customTransition="all 500ms ease-in-out"
              transitionDuration={500}
              containerClass="carousel-container"
              removeArrowOnDeviceType={["mobile"]}
              deviceType={document.deviceType}
              dotListClass="custom-dot-list-style"
              itemClass="productImage"
              centerMode={true}
              style={{width: "100%", height: "100%"}}
              >
              <div>
                  <img className={"productImage"} src={mainHome} alt="img"/>
              </div>

              <div>
                  <img className={"productImage"} src={mainHome} alt="img"/>
              </div>

              <div>
                  <img className={"productImage"} src={mainHome} alt="img"/>
              </div>

              <div>
                  <img className={"productImage"} src={mainHome} alt="img"/>
             </div>
            </Carousel>
          </div>
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