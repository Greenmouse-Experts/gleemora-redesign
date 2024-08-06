import Footer from "./Footer";
import Navbar from "./Navbar";


const AppLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default AppLayout;