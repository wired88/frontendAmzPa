import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import mainHome from "../../assets/mainHome.jpg";
import ProductContainer from "./homeProductContainer.jsx";
import {useEffect} from "react";


function Main() {

    const handleSubmit = async (e) =>  {
        e.preventDefault();
        const { search } = e.target.elements
        let searchData = {
            first_name: search.value
            }
        try {
            const response = await axios.post("http://localhost:5173/TODOAPIENDPOINT", searchData) // ENDPOINT DEFINE!
            window.location.href= response.data.successUrl;
          } catch (error) {
            console.log(error);
            }
          };

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.filter = 'blur(0)';
                    entry.target.style.transform = 'translateX(0)';
                }
            });
        });

    const hiddenElements = document.querySelectorAll('.swipe_box, #textROW1, #textROW2, #textROW3, #imgROW1, #imgROW2, #imgROW3');
    hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    return(
      <>
        <div className={"mainContainer"}>
          <div className={"mainContainerGRID1"}>
              <img src={mainHome} className={"mainHomeIMG"} alt="main.png"/>
              <Form className="d-flex" style={{zIndex: "1"}} onSubmit={handleSubmit}>
                <Form.Control
                  type="search"
                  placeholder="Search. . ."
                  className="me-2"
                  aria-label="Search"
                  id={"search"}
                />
                <Button variant="dark" id={"search_button"} className={"search_button"} type={"submit"}>Search</Button>
              </Form>
          </div>
          <div className={"mainContainerGRID2"}>
            <div className={"mainContainerGRID2GRID1"}>
              <h2>
                Top Offers for October 2023!
              </h2>
            </div>

            <div className={"mainContainerGRID2GRID2"}>
            <ProductContainer imgSrc={mainHome} title={"Test"} />
            <ProductContainer imgSrc={mainHome} title={"Test2"} />
            <ProductContainer imgSrc={mainHome} title={"Test3"} />
            <ProductContainer imgSrc={mainHome} title={"Test4"} />
            <ProductContainer imgSrc={mainHome} title={"Test5"} />
            <ProductContainer imgSrc={mainHome} title={"Test6"} />
              </div>
          </div>
          <div className={"infoSectionMain bg-dark"}>
            <div style={{gridRow: "1", gridColumn: "1"}} className={"infoSectionMainImgSection"}>
              <div id={"imgROW1"} className={"infoSectionImgContainer"}>
                <img className={"infoSectionIMG"} src={mainHome} alt="/"/>
              </div>
            </div>
            <div style={{gridRow: "1", gridColumn: "2 / 4"}} className={"infoSectionMainTextSection"}>
              <div id={"textROW1"}>
                <h4 style={{right: "12%"}}>Entdecken Sie die Welt der Top 10 Angebote, . . . </h4>
                <p className={"infoSectionMainText"}>
                  Mit unserem benutzerfreundlichen Vergleichsservice helfen wir Ihnen das perfekte Produkt aus einer
                  Vielzahl von Kategorien zu finden. Wir machen den Preisvergleich zum Kinderspiel und bringen die
                  besten Angebote direkt zu Ihnen. Ob Sie auf der Suche nach Elektronik, Baumarktartikeln, Garten- und
                  Hausprodukten oder Hifi-Entertainment sind - mit unseren Top-Angeboten im Vergleich ist es einfacher
                  denn je, genau das zu finden, was Sie suchen. Machen Sie sich bereit, die besten Angebote zu entdecken
                  und das Online-Shopping-Erlebnis zu genießen.
                </p>
                <a href="#">Explore offers</a>
              </div>
            </div>

            <div style={{gridRow: "2", gridColumn: "1 / 3"}} className={"infoSectionMainTextSection"}>
              <div id={"textROW2"}>
                <h4 style={{left: "15%"}}>. . . maßgeschneidert auf Ihre Bedürfnisse . . . </h4>
                <p className={"infoSectionMainText"}>
                  Wir erstellen für jedes Produkt eine Rangliste basierend auf verschiedenen Faktoren wie
                  Kundenbewertungen und Verkaufsrängen. Dies erleichtert es Ihnen, sich in der umfangreichen
                  Produktlandschaft zurechtzufinden und die besten Angebote zu entdecken.
                  Unsere Mission ist es, Ihnen dabei zu helfen, informierte Entscheidungen zu treffen und das Beste aus
                  Ihrem Online-Shopping-Erlebnis herauszuholen. Entdecken Sie die Möglichkeiten und lassen Sie sich von
                  den zahlreichen Optionen inspirieren.
                </p>
              </div>
            </div>
            <div style={{gridRow: "2", gridColumn: "3"}} className={"infoSectionMainImgSection"}>
              <div id={"imgROW2"} className={"infoSectionImgContainer"}>
                <img className={"infoSectionIMG"} src={mainHome} alt="/"/>
              </div>
            </div>

            <div style={{gridRow: "3", gridColumn: "1"}} className={"infoSectionMainImgSection"}>
              <div id={"imgROW3"} className={"infoSectionImgContainer"}>
                <img className={"infoSectionIMG"} src={mainHome} alt="/"/>
              </div>
            </div>
            <div style={{gridRow: "3", gridColumn: "2 / 4"}} className={"infoSectionMainTextSection"}>
              <div id={"imgROW3"} >
                <h4 style={{right: "20%"}}>... easy and fast!</h4>
                <p className={"infoSectionMainText"}>
                  Durch einen produktvergleich könne Sie nicht nur erheblich sparen, sondern auch ein qualitativ
                  hochwertigeres Produkt finden, als Sie ursprünglich geplant hatten.
                  Unsere Plattform dient als Ihr persönlicher Navigator auf der Suche nach dem passenden Produkt.
                  Unser Motto lautet: Vergleichen - einfach und schnell.
                </p>
              </div>
            </div>
          </div>
          <div className={"reminderContainer"}>
            <h5>Important Information:</h5>
            <p>
              Please be advised that we may receive a commission if you make a purchase through the links on our site.
              However, this does not affect the placement of products on our site. We are proud to work with the Amazon EU
              affiliate/affiliate program. Amazon, Amazon Prime, the Amazon logo and the Amazon Prime logo are registered
              trademarks of Amazon, Inc. or its affiliates.
            </p>
            <h5>Please also note the following important information:</h5>
            <p>
              The displayed price may have increased since the last update.
              The sale is at the price that the seller indicates for the product on its website at the time of purchase.
              It is not technically possible to update the displayed prices in real time.
            </p>
            <h5>Footnotes:</h5>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            *The term "Best" and similar expressions refer only to our possibly subjective personal opinion. <br/>
            {/* eslint-disable-next-line react/no-unescaped-entities */}
            ** "Free delivery" means that this is possible under certain conditions at the time of data retrieval from
            the corresponding provider, but cannot be guaranteed. <br/>
            An indication in real time is technically not possible. <br/>
            Shipping costs may vary under certain circumstances (different provider, delivery location, etc.). <br/>
            The shipping costs ultimately displayed in the further ordering process apply.
          </div>
        </div>
      </>
    );
}

export default Main;
