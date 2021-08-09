import QuoteBox from "./Components/QuoteBox";
import Switcher from "./Components/Switcher";

function App() {

  let viewQuotes = true;

  return (
  <div id="container">
    <Switcher viewQuotes={viewQuotes} />
    <QuoteBox viewQuotes={viewQuotes} />
  </div>);
}

export default App;
