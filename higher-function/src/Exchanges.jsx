import React from "react";

function Exchanges({ data }) {
  return (
    <div>
      <h2>Exchanges</h2>
      <table border="1" cellPadding="8" style={{ borderCollapse: "collapse", width: "100%" }}>
        <thead>
          <tr>
            <th>Name</th>
            <th>Year Established</th>
            <th>Country</th>
            <th>Trust Score</th>
          </tr>
        </thead>
        <tbody>
          {data.map((exchange) => (
            <tr key={exchange.id}>
              <td>{exchange.name}</td>
              <td>{exchange.year_established || "N/A"}</td>
              <td>{exchange.country || "N/A"}</td>
              <td>{exchange.trust_score || "N/A"}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Exchanges;
