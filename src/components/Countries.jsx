import React, { useState, useEffect } from "react";
import { useNavigate, Outlet } from "react-router-dom";

function Countries() {
  const [countries, setCountries] = useState([]);
  const [selectedCountry, setSelectedCountry] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {

    fetch("https://restcountries.com/v3.1/name/kingdom")
      .then((response) => response.json())
      .then((data) => setCountries(data))
      .catch((error) => console.error("Error fetching data:", error));
  }, []);

  const handleCountrySelect = (cca2) => {
    const selected = countries.find((country) => country.cca2 === cca2);
    setSelectedCountry(selected);
    navigate(`/countries/${cca2}`, { state: { data: selected } });
  };

  return (
    <div className="countries-container">
      <select
        className="country-select"
        value={selectedCountry?.cca2 || ""}
        onChange={(e) => handleCountrySelect(e.target.value)}
      >
        <option value="">Select a Country</option>
        {countries.map((country) => (
          <option key={country.cca2} value={country.cca2}>
            {country.name.common}
          </option>
        ))}
      </select>

      <Outlet />
    </div>
  );
}

export default Countries;
