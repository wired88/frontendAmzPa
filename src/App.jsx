import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import Header from "./home/components/header.jsx";
import Footer from "./home/components/footer.jsx";
import Main from "./home/components/main.jsx";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "./home/components/contact.jsx";
import Info from "./home/components/info.jsx";
import SearchResult from "./home/components/SearchResult/SearchResult.jsx";
import FAQ from "./home/components/faq.jsx";

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
                <Route path="offers" element={<SearchResult />} />
                <Route path="faq" element={<FAQ />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
