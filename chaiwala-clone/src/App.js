import "./Style/App.scss";
import "./Style/intro.scss";
import "./Style/section.scss";
import Introvedio from "./Components/introvedio";
import FreshTopicImg from "./Assets/academy.png"; // ✅ FIX: Backslash ➝ Forward slash

function App() {
  return (
    <div className="App">
      <Introvedio />
      {/* FreshTopic */}
      <div className="section">
        <h3>asdfrex</h3>
        <p>asdfcc</p>
        <button>asdfff</button>
        <img src={FreshTopicImg} alt="Fresh Topic" />
      </div>
    </div>
  );
}

export default App;
