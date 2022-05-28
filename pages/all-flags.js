import Head from "next/head";
import Image from "next/image";
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
        All flags in messy order
      </h2>

      {countries?.length === 0 ? (
        <div>...Loading page</div>
      ) : (
        countries?.map((country) => (
          <div
            key={country.ccn3}
            className="my-5 bg-white px-5 pt-5 pb-4"
            region={country.region}
          >
            <img src={country.flags.png} className="my-3 border" />
            <p className="text-xs">{country.name.common}</p>
          </div>
        ))
      )}
    </div>
  );
}
