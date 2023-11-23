import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Header from "./home/components/header.jsx";
import Footer from "./home/components/footer.jsx";
import Main from "./home/components/main.jsx";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "./home/components/contact.jsx";
import Info from "./home/components/info.jsx";
import FAQ from "./home/components/faq.jsx";
import Offers from "./home/components/SearchResult/Offers.jsx";
import NotFound from "./home/components/404.jsx";
import {useState} from "react";
import {PreviewContainer} from "./home/components/preview.jsx";
function App() {

  const [dark_mode_bool, set_dark_mode_bool] = useState(false);


  const dark_mode_function = () => {
      const reminder = document.querySelector(".reminderContainer");
      const dark_icon = document.getElementById("offerHeader");
      const elements = document.querySelectorAll(
        ".infoSectionMain, .reminderContainer, .dark_light_container")

      elements.forEach((element) => {
        element.style.backgroundColor = dark_mode_bool ?   "#232121" : "#e8e5e5";
      });
      reminder.style.color = dark_mode_bool ? "#e8e5e5" : "rgba(0, 0, 0, .8)";
      dark_icon.style.color = dark_mode_bool ? "rgba(0, 0, 0, .8)" : "#e8e5e5";

      set_dark_mode_bool(!dark_mode_bool);
      const rootRouter = document.getElementById("root");
      rootRouter.style.backgroundColor = dark_mode_bool ? "#e8e5e5" : "#212529";
    }

  return(
      <Router>
          <div className={"headerContainer"}>
            <Header style={{zIndex: "18"}}/>
          </div>
          <div className={"dark_light_container"}>
            <div className="form-check form-switch">
             <input onClick={dark_mode_function} className="form-check-input dark_mode_button" type="checkbox" role="switch" id="flexSwitchCheckDefault" />
            </div>
          </div>
          <Routes>
              <Route path="/" element={<Main />} />
              <Route path="contact" element={<ContactForm />} />
              <Route path="imprint" element={<Info />} />
              <Route path="offers" element={<Offers />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="*" element={<NotFound />} />
              <Route path="preview" element={<PreviewContainer />} />
          </Routes>
          <Footer/>
      </Router>
    );
}

export default App;
