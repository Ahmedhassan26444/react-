import React from 'react'

const section = (h3 , text , hasBtn = true , btntext , imgsrc) => {
  return (
    <section className='section'>
    <div>
        <h3>
            {h3}
        </h3>
        <p>
            {text}
        </p>
        {
            hasBtn && <button>
                {btntext}
            </button>
        }
        <div> 
        <img src={imgsrc}  alt='Imgsrc'/>
        </div>
    </div>

    </section>
  )
}

export default section