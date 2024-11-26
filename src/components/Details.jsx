import React from "react";
import { useLocation } from "react-router-dom";

function Details() {
  const { state } = useLocation(); 
  const country = state?.data;

  if (!country) {
    return <div>No country data available</div>;
  }
  console.log(country)
  return (
    <div className="details-container">
      <h3>Kingdom of {country.name.common}</h3>
      <img 
        className="country-flag" 
        src={country.flags.svg} 
        alt={`Flag of ${country.name.common}`}
        style={{ width: 200 }} 
      />
      <p><strong>Capital:</strong> {country.capital || "N/A"}</p>
      <p><strong>Located in:</strong> {country.region} - {country.subregion}</p>
    </div>
  );
}

export default Details;

