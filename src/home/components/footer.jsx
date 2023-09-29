import final_logo from "../../assets/final_logo.png";



function Footer() {
  return(
    <footer>
      <section className={"footerROW1"}>
        <div className={"footerROW1COL1"}>
            <img src={final_logo} className={"logo_f"} alt="logo.png"/>
        </div>
        <div className={"footerROW1COL2"}>
          <ul>
            <li>
              <p>
                  Search every Product from Amazon
              </p>
            </li>
            <li>
              <p>
                  Same Price-Guarantee!
              </p>
            </li>
            <li>
              <p>
                  Easy to use!
              </p>
            </li>
          </ul>
        </div>
        <div className={"contactFooterDiv"}>
          <ul>
            <li><a href={"/faq"} >FAQ</a></li>
            <li><a href={"/contact"} >Contact</a></li>
            <li><a href={"/imprint"} >Imprint</a></li>
            <li><a href={"/privacy-policy"} >Privacy Policy</a></li>
          </ul>
        </div>
      </section>
      <section className={"footerROW2"}>
        <div className={"footerROW2COL2"}>
          <p>
            Amazon, Amazon Prime, the Amazon logo and Amazon Prime logo are registered trademarks of Amazon, Inc. or its affiliates.
              © 2023 sales-detective.live - All rights reserved.
          </p>
        </div>
      </section>
    </footer>
  );
}
export default Footer;