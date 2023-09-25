import axios from "axios";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import mainHome from "../../assets/mainHome.jpg";
import ProductContainer from "./homeProductContainer.jsx";
import {useEffect, useRef} from "react";

function Main() {
    const ref = useRef();

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

    const hiddenElements = document.querySelectorAll('.swipe_box');
    hiddenElements.forEach((el) => observer.observe(el));
    }, []);

    return(
        <div className={"mainContainer"}>
            <div className={"mainContainerGRID1"}>
                <img src={mainHome} className={"mainHomeIMG"} alt="main.png"/>
                <Form className="d-flex" style={{zIndex: "1"}} onSubmit={handleSubmit}>
                  <Form.Control
                    type="search"
                    placeholder="Search any Product ..."
                    className="me-2"
                    aria-label="Search"
                    style={{width: "30vw"}}
                    id={"search"}
                  />
                  <Button variant="dark" className={"search_button"} type={"submit"}>Search</Button>
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
              <ProductContainer imgSrc={mainHome} title={"Test7"} />
              <ProductContainer imgSrc={mainHome} title={"Test8"} />
                </div>
            </div>
        </div>
    );
}

export default Main;
