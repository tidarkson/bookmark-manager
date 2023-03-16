import CTA from "./components/CTA";
import Download from "./components/Download";
import FAQs from "./components/FAQs";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Showcase from "./components/Showcase";
import Tabs from "./components/Tabs";


function App() {
  return (
    <div className="App">
      <Header/>
      <Showcase/>
      <Tabs/>
      <Download/>
      <FAQs/>
      <CTA/>
      <Footer/>
    </div>
  );
}

export default App;


