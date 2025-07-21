import "./Style/App.scss";
import "./Style/intro.scss";
import "./Style/section.scss";
import Introvedio from "./Components/introvedio";
import FreshTopicImg from "./Assets/academy.png";
import data from "./Data/data.json";
import Section from "./Components/section";
import FreshTopic2Img from "./Assets/story.png";
import TedTalksImg from "./Assets/in-the-news.gif";
import mapImg from "./Assets/locations.png"; 
import franchiseImg from "./Assets/franchise.gif"; 
import coursesImg from "./Assets/image2.png"; 
import albumImg from "./Assets/mba-cares.gif"; 
import baratImg from "./Assets/image1.png"; 
import chaiwalaImg from "./Assets/image3.png"; 

const yellow = "#fff100",
      pink = "#ed1e79",
      white = "#fff",
      brown = "#6d3d0f";

function App() {
  const { freshTopic, freshTopic2, tedTalks , franchise , map , courses ,album , barat , chaiwala } = data; 

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

      {/* FreshTopic 2 */}
      <Section
        h3={freshTopic2.heading}
        text={freshTopic2.text}
        btntext={freshTopic2.btn}
        imgsrc={FreshTopic2Img}
        backgroundcolor={pink}
        headingcolor={yellow}
        textcolor={yellow}
        btnBgcolor={yellow}
        btncolor={pink}
      />

      {/* Ted Talks */}
      <Section
        h3={tedTalks.heading}
        text={tedTalks.text}
        btntext={tedTalks.btn}
        imgsrc={TedTalksImg}
        backgroundcolor={yellow}
        headingcolor={pink}
        textcolor={pink}
        btnBgcolor={pink}
        btncolor={yellow}
      />
      {/* franchise */}
      <Section
        h3={franchise.heading}
        text={franchise.text}
        btntext={franchise.btn}
        imgsrc={franchiseImg}
        backgroundcolor={white}
        headingcolor={pink}
        textcolor={brown}
        btnBgcolor={brown}
        btncolor={yellow}
      />
      {/* map */}
      <Section
        h3={map.heading}
        text={map.text}
        imgsrc={mapImg}
        backgroundcolor={pink}
        headingcolor={yellow}
        textcolor={yellow}
        btnBgcolor={brown}
        btncolor={yellow}
        hasBtn={false}
      />
    </>
  );
}

export default App;
