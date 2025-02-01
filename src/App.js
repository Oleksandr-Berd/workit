import * as SC from "./AppCustom"
import Apply from "./Apply/Apply";
import Hero from "./Hero/Hero";
import Footer from "./layouts/Footer/Footer";
import Header from "./layouts/Header/Header";
import MeritsLits from "./MeritsList/MeristList";
function App() {
  return (
    <SC.AppCustom >
      <Header />
      <Hero />
      <MeritsLits />
      <Apply />
      <Footer/>
    </SC.AppCustom>
  );
}

export default App;
