import { Link, useParams} from "react-router-dom";
import { useState, useEffect } from "react";

import CountryLoad from "./CountryLoad";

export default function Country() {
  const { name } = useParams();

  const [fetchedData, setFetchedData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [borderName, setBorderName] = useState([]);

  let nativeName,
    topLevelDomain,
    region,
    subRegion,
    capital,
    population,
    languages,
    currency,
    flag;

  let borderCountries = [];

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
  }, [name]);

  if (isLoading === false) {
    nativeName = fetchedData.nativeName;
    topLevelDomain = fetchedData.topLevelDomain[0];
    region = fetchedData.region;
    subRegion = fetchedData.subregion;
    capital = fetchedData.capital;
    currency = fetchedData.currencies[0].name;
    population = fetchedData.population;
    flag = fetchedData.flag;
    languages = fetchedData.languages;
    borderCountries = fetchedData.borders;
  }

  useEffect(() => {
    if (Object.keys(fetchedData).length > 0) {
      const fetchBorder = fetchedData.borders.join(",");
      const fetchData = async () => {
        try {
          const response = await fetch(
            `https://restcountries.com/v2/alpha?codes=${fetchBorder}`
          );
          const data = await response.json();
          setBorderName(data);
        } catch (error) {
          console.log("Error fetching Data", error);
        }
      };
      fetchData();
    }
  }, [fetchedData]);

  return (
    <div className="p-5 lg:px-12 py-8 bg-light-gray dark:bg-dark-gray text-black dark:text-white duration-300 min-h-screen ">
      <Link to="/">
        <button 
        className="text-xl px-8 lg:px-12 py-2 rounded-lg dark:bg-dark-blue mb-8 border-2 dark:border-none">
          &larr;<span className="ml-2">Back</span>
        </button>
      </Link>

      {isLoading ? (
        <CountryLoad />
      ) : (
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[45%]">
            <img src={flag} className="w-full lg:h-[400px]" />
          </div>
          <div className="w-full lg:w-[55%] py-8 lg:px-12">
            <h1 className="font-black text-3xl  mb-4 lg:mb-6">{name}</h1>
            <div className="flex flex-col lg:flex-row justify-between text-lg">
              <ul>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Native Name:</span>{" "}
                  {nativeName}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Population:</span>{" "}
                  {population}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Region:</span> {region}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Sub Region:</span>{" "}
                  {subRegion}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Capital:</span> {capital}
                </li>
              </ul>

              <ul className="mt-4 lg:mt-0">
                <li className="mb-1">
                  <span className="font-semibold mr-2">Top Level Domain:</span>{" "}
                  {topLevelDomain}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Currencies:</span>{" "}
                  {currency}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Languages:</span>
                  {languages.map((language, index) => (
                    <span key={index}>
                      {" "}
                      {language.nativeName}
                      {index !== languages.length - 1 ? "," : ""}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-2">Border Countries: </h4>
              <div className="">
                {borderName.map((border, index) => (
                  <Link
                    to={`/name/${border.name}`}
                    key={index}
                    className="text-lg px-6 lg:px-8 py-1 rounded-lg dark:bg-dark-blue mb-4 border-2 dark:border-none mr-3 inline-block"
                  >
                    {border.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* {isLoading === false && (
        <div className="flex flex-col lg:flex-row">
          <div className="w-full lg:w-[45%]">
            <img src={flag} className="w-full lg:h-[400px]" />
          </div>
          <div className="w-full lg:w-[55%] py-8 lg:px-12">
            <h1 className="font-black text-3xl  mb-4 lg:mb-6">{name}</h1>
            <div className="flex flex-col lg:flex-row justify-between text-lg">
              <ul>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Native Name:</span>{" "}
                  {nativeName}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Population:</span>{" "}
                  {population}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Region:</span> {region}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Sub Region:</span>{" "}
                  {subRegion}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Capital:</span> {capital}
                </li>
              </ul>

              <ul className="mt-4 lg:mt-0">
                <li className="mb-1">
                  <span className="font-semibold mr-2">Top Level Domain:</span>{" "}
                  {topLevelDomain}{" "}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Currencies:</span>{" "}
                  {currency}
                </li>
                <li className="mb-1">
                  <span className="font-semibold mr-2">Languages:</span>
                  {languages.map((language, index) => (
                    <span key={index}>
                      {" "}
                      {language.nativeName}
                      {index !== languages.length - 1 ? "," : ""}
                    </span>
                  ))}
                </li>
              </ul>
            </div>
            <div className="mt-8">
              <h4 className="font-semibold text-lg mb-2">Border Countries: </h4>
              <div className="">
                {borderName.map((border, index) => (
                  <Link
                    to={`/name/${border.name}`}
                    key={index}
                    className="text-lg px-6 lg:px-8 py-1 rounded-lg dark:bg-dark-blue mb-4 border-2 dark:border-none mr-3 inline-block"
                  >
                    {border.name}{" "}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )} */}
    </div>
  );
}
