import mainHome from "../../../assets/mainHome.jpg";
import amzWhiteLogo from "../../../assets/amzWhiteLogo.png";
import stars from "../../../assets/stars.png";
import {Carousel} from "react-bootstrap";
import {useCallback} from "react";

/*
<iframe sandbox="allow-popups allow-scripts allow-modals allow-forms allow-same-origin"
        style="width:120px;height:240px;" marginWidth="0" marginHeight="0" scrolling="no"
        frameBorder="0" src="//ws-eu.amazon-adsystem.com/widgets/q?ServiceVersion=20070822&OneJS=1&Operati
        on=GetAdHtml&MarketPlace=DE&source=ss&ref=as_ss_li_til&ad_type=product_link&tracking_id=salesdetect
        iv-21&language=de_DE&marketplace=amazon&region=DE&placement=B088V8P8XQ&asins=B088V8P8XQ&linkId=c9c6
        8be537042aa436d96b80cb2fbc6d&show_border=true&link_opens_in_new_window=true"></iframe>

*/

// eslint-disable-next-line react/prop-types
export default function SingleOffer({number}) {
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

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const redirect = useCallback(() => {
    window.location.href = "https://amazon.com"
  })

  return(
      <div className="productcontainer" onClick={redirect} style={{ height: "30vh",  border: "1px solid red" }}>
            <div className="row">
              <div className="col-sm-3 mr-3" style={{ height: "30vh", maxWidth: "30%"}}>
                <img src={mainHome} className={"infoSectionIMG"} alt="Product Image"/>
              </div>
              <div className="col-sm-9 ml-7">
                <h2>
                  item.title
                </h2>
                <p>
                  item.description
                </p>
                <p><strong>Index:</strong> item.index</p>
                <a href="#" className="btn btn-primary">
                  <button className></button>
                </a>
              </div>
            </div>
      </div>



  );
}
/*
     <div className="productcontainer">
            <div className="row">
              <div className="col-sm-3">
                <img src={mainHome} className={"infoSectionIMG"} alt="Product Image" />
              </div>
              <div className="col-sm-9">
              <h2>Product Name</h2> <p>Description text...</p>
              <p><strong>Index:</strong> 1</p>
              <a href="#" className="btn btn-primary">Call to Action</a>
              </div>
              </div>
            </div>  <section className={"productElement bg-dark"} onClick={redirect} style={{cursor: "pointer"}}>
      <div className={"productIndex"}>
        <h4>
          {number}.
        </h4>
        <p>
          Rated
        </p>
      </div>
      <div className={"productImageContainer "}>
        <div className={"carouselContainer"} >
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
        <div className={"productHeading"}>
          <p className={"headerText"}>
            Lorem ipsum dolor sit amet,
            consectetur adipisicing elit. Pariatur, voluptatibus. Lorem ipsum dolor sit amet, Lorem ipsum dolor sit amet, ipsum dolor sit amet,
          </p>
        </div>
        <div className={"ul"}>
          <ul>
            <li>Lorem ipsum dolor sit.</li>
            <li>Lorem ipsum.</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
            <li>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Earum?</li>
          </ul>
        </div>
        <div className={"recensionsContainer"}>
          <img className={"amazonLogo"} src={amzWhiteLogo} alt="amzImg"/>
          <img className={"stars"} src={stars} alt="star.png"/>
          <button>Watch Offer on Amazon</button>
        </div>
      </div>
    </section>
 */

