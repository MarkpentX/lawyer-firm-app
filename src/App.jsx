import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./layout/Header.jsx";
import Main from "./layout/Main.jsx";
import Footer from "./layout/Footer.jsx";
import SuccessPage from "./layout/SuccessPage.jsx";

function App() {
    return (
        <Router>
            <Header />

            <Routes>
                <Route path="/" element={<Main />} />
                <Route path="/success" element={<SuccessPage />} />
            </Routes>

            <Footer />
        </Router>
    );
}

export default App;
