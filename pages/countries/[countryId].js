import Head from "next/head";
import Image from "next/image";
import Nav from "../../components/nav";

export default function Country({ country }) {
  return (
    <div className="mx-auto w-full lg:w-10/12 bg-gray-100 px-8 lg:px-20 py-3 lg:py-10 my-3 lg:my-10">
      <h2 className="page-title text-3xl my-8 uppercase">
        A big big list of countries
      </h2>

      <Nav />

      <h2 className="page-title text-2xl my-8 uppercase">
        {country.name.common}
      </h2>

      <div key={country.ccn3} className="my-5 bg-white px-5 pt-5 pb-4">
        <p className="text-xs mt-5">Nombre en español:</p>
        <p className="text-xl italic mb-5">{country.translations.spa.common}</p>
        <p className="text-m">Capital: {country.capital}</p>
        <img src={country.flags.png} className="my-8 border" />
        <p className="text-m">
          <span className="text-sm">Region:</span> {country.region}
        </p>
        <p className="text-m">
          <span className="text-sm">Sub-region:</span> {country.subregion}
        </p>
      </div>
    </div>
  );
}

export async function getStaticProps({ params }) {
  //console.log(`params.countryId: ${params.countryId}`);
  const res = await fetch(
    `https://restcountries.com/v3.1/alpha/${params.countryId}`
  );
  const results = await res.json();
  return {
    props: {
      country: results[0],
    },
  };
}

export async function getStaticPaths() {
  const res = await fetch("https://restcountries.com/v3.1/all");
  const countries = await res.json();

  return {
    paths: countries.map((country) => {
      const countryId = country.cca3.toLowerCase();
      console.log(`countryId is: ${countryId}`);
      return {
        params: {
          countryId,
        },
      };
    }),
    fallback: false,
  };
}
