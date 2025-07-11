import React from "react";

const Section = ({
  h3,
  text,
  hasBtn = true,
  btntext,
  imgsrc,
  imgSize = "70%",
  headingcolor,
  backgroundcolor,
  textcolor,
  btnBgcolor,
  btncolor
}) => {
  return (
    <section
      className="section"
      style={{
        backgroundColor: backgroundcolor,
      }}
    >
      <div>
        <h3
          style={{
            color: headingcolor,
          }}
        >
          {h3}
        </h3>
        <p
          style={{
            color: textcolor,
          }}
        >
          {text}
        </p>
        {hasBtn && (
          <button
            style={{
              color: btncolor,
              backgroundColor: btnBgcolor,
            }}
          >
            {btntext}
          </button>
        )}
        <div>
          <img src={imgsrc} alt="Imgsrc" style={{ width: imgSize }} />
        </div>
      </div>
    </section>
  );
};

export default Section;
