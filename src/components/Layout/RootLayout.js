import Footer from "../Shared/Footer/Footer";
import NavBar from "../Shared/NavBar/NavBar";
const RootLayout = ({children}) => {
  return (
    <div>
      <header>
        <NavBar />
      </header>
      {children}
      <Footer/>
    </div>
  );
};
export default RootLayout;