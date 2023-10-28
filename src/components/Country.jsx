import ng from "../assets/ng.svg";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Country() {
  const {name} = useParams();
  
  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  let nativeName, topLevelDomain, region, subRegion, capital, population, languages, currency, flag


  useEffect(() => {
    const fetchData = async () => {
      try {
        setIsLoading(true);
        await fetch(`https://restcountries.com/v2/name/${name}`)
          .then((res) => res.json())
          .then((data) => {
            setIsLoading(false);
            setFetchedData(data[0]);
          });
      } catch (error) {
        console.log("Error fetching Data", error);
      }
    };
    fetchData();
  }, []);

  if (isLoading === false) {
    topLevelDomain = fetchedData.topLevelDomain[0]
    region = fetchedData.region
    subRegion = fetchedData.subregion
    capital = fetchedData.capital
    population = fetchedData.population
    flag = fetchedData.flag
  }

      // nativeName: Object.values(country.name.nativeName)[0].common,
      // topLevelDomain: country.tld[0],
      // region: country.region,
      // subRegion: country.subregion,
      // capital: country.capital,
      // population: country.population,
      // languages: Object.values(country.languages)[0],
      // currency: Object.values(country.currencies)[0].name,
      // flag: country.flags.svg, 


  return (
    <div className="p-5 lg:px-12 py-8 bg-light-gray dark:bg-dark-gray text-black dark:text-white duration-300 min-h-screen ">
      <button className="text-xl px-8 lg:px-12 py-2 rounded-lg dark:bg-dark-blue mb-8 border-2 dark:border-none">
        &larr;<span className="ml-2">Back</span>
      </button>

      <div className="flex flex-col lg:flex-row">
        <div className="w-full lg:w-2/5">
          <img src={flag} className="w-full" />
        </div>
        <div className="w-full lg:w-3/5 py-8 lg:px-12">
          <h1 className="font-black text-3xl  mb-4 lg:mb-3">
            {name}
          </h1>
          <div className="flex flex-col lg:flex-row justify-between text-lg">
            <ul>
              <li><span className="font-semibold">Native Name:</span> </li>
              <li><span className="font-semibold">Population:</span> {population}</li>
              <li><span className="font-semibold">Region:</span> {region} </li>
              <li><span className="font-semibold">Sub Region:</span> {subRegion} </li>
              <li><span className="font-semibold">Capital:</span> {capital}</li>
            </ul>

            <ul className="mt-4 lg:mt-0">
              <li><span className="font-semibold">Top Level Domain:</span> {topLevelDomain} </li>
              <li><span className="font-semibold">Currencies:</span> </li>
              <li><span className="font-semibold">Languages:</span> </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
