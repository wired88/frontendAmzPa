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

function App() {
    return(
        <Router>
            <div className={"headerContainer"}>
                <Header style={{zIndex: "18"}}/>
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path="imprint" element={<Info />} />
                <Route path="offers" element={<Offers />} />
                <Route path="faq" element={<FAQ />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
