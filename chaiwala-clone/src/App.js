import "./Style/App.scss";
import "./Style/intro.scss";
import "./Style/section.scss";
import Introvedio from "./Components/introvedio";
import FreshTopicImg from "./Assets/academy.png";

function App() {
  return (
    <>
      <Introvedio />
      {/* FreshTopic */}
      <section className="section">
        <div>
          <h3>asdfrex</h3>
          <p>asdfcc</p>
          <button>asdfff</button>
          <div>
            <img src={FreshTopicImg} alt="Fresh Topic" />
          </div>
        </div>
      </section>
    </>
  );
}

export default App;
