import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./Page/Home";
import Footer from "./components/Footer";
import Story from "./Page/Story";
import About from "./Page/About";
import Contact from "./Page/Contact";
import Celeb from "./Page/Celeb";
import Faq from "./Page/Faq";
import Policy from "./Page/Policy";
import ScrollToTop from "./components/ScrollToTop";
import TermsPage from "./Page/Terms";
import GuidelinesPage from "./Page/Guidelines";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import SelectType from "./Page/SelectType";
import AppLayout from "./components/Layout";
import Login from "./Page/Login";
import SignUp from "./Page/SignUp";
import BookAgent from "./Page/BookAgent";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <ScrollToTop />
        <Routes>
          <Route
            path="/"
            index
            element={
              <AppLayout>
                <Home />
              </AppLayout>
            }
          />
          <Route
            path="story"
            element={
              <AppLayout>
                <Story />
              </AppLayout>
            }
          />
          <Route
            path="about"
            element={
              <AppLayout>
                {" "}
                <About />
              </AppLayout>
            }
          />
          <Route
            path="contact"
            element={
              <AppLayout>
                {" "}
                <Contact />{" "}
              </AppLayout>
            }
          />
          <Route
            path="survivor"
            element={
              <AppLayout>
                {" "}
                <Celeb />
              </AppLayout>
            }
          />
          <Route
            path="faq"
            element={
              <AppLayout>
                <Faq />{" "}
              </AppLayout>
            }
          />
          <Route
            path="policy"
            element={
              <AppLayout>
                <Policy />{" "}
              </AppLayout>
            }
          />
          <Route
            path="terms"
            element={
              <AppLayout>
                <TermsPage />{" "}
              </AppLayout>
            }
          />
          <Route
            path="guidelines"
            element={
              <AppLayout>
                {" "}
                <GuidelinesPage />
              </AppLayout>
            }
          />
          <Route
            path="bookagent"
            element={
              <AppLayout>
                {" "}
                <BookAgent />
              </AppLayout>
            }
          />
          <Route path="select-user" element={<SelectType />} />
          <Route path="login" element={<Login />} />
          <Route path="signup" element={<SignUp />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
