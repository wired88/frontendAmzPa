import {BrowserRouter as Router, Route, Routes} from 'react-router-dom';
import './App.css'
import NavScrollExample from "./home/components/header.jsx";
import Footer from "./home/components/footer.jsx";
import Main from "./home/components/main.jsx";
import "bootstrap/dist/css/bootstrap.css";
import ContactForm from "./home/components/contact.jsx";
import Info from "./home/components/info.jsx";
import SearchResult from "./home/components/SearchResult/SearchResult.jsx";

function App() {
    return(
        <Router>
            <div className={"headerContainer"}>
                <NavScrollExample />
            </div>
            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="contact" element={<ContactForm />} />
                <Route path="imprint" element={<Info />} />
                <Route path="offers" element={<SearchResult />} />
            </Routes>
            <Footer/>
        </Router>
    );
}

export default App;
