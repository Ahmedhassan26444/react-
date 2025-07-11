import "./Style/App.scss";
import "./Style/intro.scss";
import "./Style/section.scss";
import Introvedio from "./Components/introvedio";
import FreshTopicImg from "./Assets/academy.png";
import data from "./Data/data.json"
import Section from "./Components/section";

const yellow = "#fff100",
      pink = "#ed1e79",
      white = "#fff",
      brown = "#6d3d0f";


function App() {
  const {freshTopic} = data;
  return (
    <>
      <Introvedio />
      {/* FreshTopic */}
      <Section
        h3={freshTopic.heading}
        text={freshTopic.text}
        btntext={freshTopic.btn}
        imgsrc={FreshTopicImg}
        backgroundcolor={pink}
        headingcolor={yellow}
        textcolor={yellow}
        btnBgcolor={yellow}
        btncolor={pink}
      />
    </>
  );
}

export default App;
