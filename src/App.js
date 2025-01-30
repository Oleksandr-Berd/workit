import * as SC from "./AppCustom"
import Hero from "./Hero/Hero";
import Header from "./layouts/Header/Header";
function App() {
  return (
    <SC.AppCustom >
      <Header />
      <Hero/>
    </SC.AppCustom>
  );
}

export default App;
