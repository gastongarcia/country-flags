import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import Nav from "../components/nav";

export async function getStaticProps() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const data = await res.json();
  return {
    props: {
      countries: data,
    },
  };
}

export default function Home({ countries }) {
  //console.log({ countries });
  return (
    <div className="mx-auto w-full lg:w-10/12 bg-gray-100 px-8 lg:px-20 py-3 lg:py-10 my-3 lg:my-10">
      <h2 className="page-title text-3xl my-8 uppercase">
        A big big list of countries
      </h2>

      <Nav />

      <h2 className="page-title text-2xl my-8 uppercase">
        All countries in messy order
      </h2>

      {countries?.length === 0 ? (
        <div>...Loading page</div>
      ) : (
        countries?.map((country) => (
          <div key={country.ccn3} className="my-5 bg-white px-5 pt-5 pb-4">
            <p className="text-xs mt-1">Name in english:</p>
            <p className="funky text-4xl">{country.name.common}</p>
            <p className="text-xs mt-5">Nombre en español:</p>
            <p className="funky text-2xl mb-5">
              {country.translations.spa.common}
            </p>
            <p className="text-m">Capital: {country.capital}</p>
            <Link
              href={{
                pathname: "/countries/[countryId]",
                query: { countryId: country.cca3.toLowerCase() },
              }}
            >
              <a>
                <img src={country.flags.png} className="my-3 border" />
              </a>
            </Link>
            <p className="text-m">Region: {country.region}</p>
            <p className="text-m">Sub-region: {country.subregion}</p>
          </div>
        ))
      )}
    </div>
  );
}
