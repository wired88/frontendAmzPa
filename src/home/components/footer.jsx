import final_logo from "../../assets/final_logo.png";



function Footer() {
    return(
        <footer>
            <div className={"footerGRID1"}>
                <img src={final_logo} className={"logo_f"} alt="logo.png"/>
            </div>
            <div className={"footerGRID2"}>
                <ul>
                    <li>
                        <p>
                            Every Product from Amazon
                        </p>
                    </li>
                    <li>
                        <p>
                            Same Price-Guarantee
                        </p>
                    </li>
                    <li>
                        <p>
                            Easy to use!
                        </p>
                    </li>
                </ul>
            </div>
            <div>

            </div>
            <div>

            </div>
        </footer>
    );
}
export default Footer;