import Navbar from "./components/NavBar/navbar";
import Intro from "./components/Intro/intro";
import About from "./components/About/about";
import Plan from "./components/Plan/plan";
import Impact from "./components/Impact/impact";
import Donate from "./components/Donate/donate";
import Contact from "./components/Contact/contact";
import Footer from "./components/Footer/footer";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Intro />
      <About />
      <Plan />
      <Impact />
      <Donate />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
