import "./App.css";
import Featured from "./components/Featured/Featured";
import Footer from "./components/Footer/Footer";
import Hero from "./components/Hero/Hero";
import Navbar from "./components/navbar/Navbar";
import Subscribe from "./components/Subscribe/Subscribe";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Featured />
      <Subscribe />
      <Footer />
    </>
  );
}

export default App;
