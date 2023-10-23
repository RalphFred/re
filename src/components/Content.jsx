import { useEffect, useState } from "react";

export default function Content() {
  const [search, setSearch] = useState("all");
  const [value, setValue] = useState("");
  const [fetchedData, setFetchedData] = useState([]);

  const handleInputChange = (e) => {
    const inputValue = e.target.value;
    setValue(inputValue);

    if (e.target.value != "") {
      setSearch(`name/${inputValue}`);
    } else {
      setSearch("all");
    }
  };

  useEffect(() => {
    const url = `https://restcountries.com/v3.1/${search}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        setFetchedData(data)

        fetchedData.forEach((country) => {
          const name = country.name.common;
          const nativeName = Object.values(country.name.nativeName)[0].common;
          const topLevelDomain = country.tld[0];
          const region = country.region;
          const subRegion = country.subregion;
          const capital = country.capital[0];
          const population = country.population;
          const languages = Object.values(country.languages)[0];
          const currency = Object.values(country.currencies)[0].name;
      
          console.log(name, nativeName, topLevelDomain, region, subRegion, capital, population,languages, currency )
        });
      });
  }, [search]);

  return (
    <div className="p-5 lg:px-12 py-8 bg-light-gray dark:bg-dark-gray duration-300">
      <div className="flex flex-col lg:flex-row justify-between">
        <input
          type="text"
          onChange={handleInputChange}
          value={value}
          placeholder="Search for a Country..."
          className="px-4 py-3 mb-4 lg:mb-0 w-full lg:w-96 bg-white dark:bg-dark-blue dark:text-white rounded-md focus:outline-none"
        />

          <select
            name="filter"
            placeholder=""
            className="px-4 py-3 w-56 bg-white dark:bg-dark-blue dark:text-white rounded-md appearance-none focus:outline-none"
          >
            <option value="" disabled selected hidden>
              Filter By Region
            </option>
            <option value="All" className="px-2 border border-b">All</option>
            <option value="Africa" className="px-2 border border-b">Africa</option>
            <option value="America" className="px-2 border border-b">America</option>
            <option value="Asia" className="px-2 border border-b">Asia</option>
            <option value="Europe" className="px-2 border border-b">Europe</option>
            <option value="Oceania" className="px-2 border border-b">Oceania</option>
          </select>
      </div>

      <div>
        
      </div>
    </div>
  );
}
