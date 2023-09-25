function Info() {
    return(
        <div className={"infoContainer"}>
            <div className={"infoContainerGRID1"}>
                <h2>Imprint</h2>
            </div>
            <div className={"infoContainerGRID2"}>
                <ul>
                  <li>
                    CEO: Benedikt Sterra
                  </li>
                  <li>
                    E-Mail: info@sales-detective.live
                  </li>
                  <li>
                    Address: Klingestraße 22, 01159 Dresden, Germany
                  </li>
                  <li></li>
                    <p>
                      If you have any problems please fill out <a href="http://localhost:5173/contact/">this</a> Contact form.
                      Someone from our Team will contact you as soon as possible.
                    </p>
                </ul>
            </div>
        </div>
    );
}
export default Info;
