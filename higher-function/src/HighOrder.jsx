import React, { useState, useEffect } from "react";

function withApiData(WrappedComponent, url) {
  return function WithApiDataComponent() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch(url)
        .then((res) => res.json())
        .then((json) => setData(json))
        .catch((err) => console.error("API Error:", err));
    }, [url]);

    return <WrappedComponent data={data} />;
  };
}

export default withApiData;
