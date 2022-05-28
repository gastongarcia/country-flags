import Head from "next/head";
import Image from "next/image";

export async function getServerSideProps() {
  const res = await fetch("https://restcountries.com/v3.1/region/asia");
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

      <h3 className="page-title text-2xl my-8 uppercase">Region: Asia</h3>

      {countries?.length === 0 ? (
        <div>...Loading page</div>
      ) : (
        countries?.map((country) => (
          <div key={country.ccn3} className="my-5 bg-white px-3 pt-5 pb-4">
            <p className="text-xs mt-1">Name in english:</p>
            <p className="text-xl">{country.name.common}</p>
            <p className="text-xs mt-5">Nombre en español:</p>
            <p className="text-xl italic mb-5">
              {country.translations.spa.common}
            </p>
            <p className="text-m">Capital: {country.capital}</p>
            <img src={country.flags.png} className="my-3 border" />
            <p className="text-m">
              Region: {country.region} / Sub-region: {country.subregion}
            </p>
          </div>
        ))
      )}
    </div>
  );
}
