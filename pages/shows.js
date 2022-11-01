import React from "react";
import Header from "../components/Header";
import ShowThumbnail from "../components/ShowThumbnail";

function Shows({ results, results2, results3, results4, results5,results6,results7 }) {
  return (
    <div className="flex flex-col">
      <Header />
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 items-center mx-auto space-y-3  space-x-6 fuckingShit mb-10">
        {results.map((result) => (
          <ShowThumbnail
            key={result.id + Math.random() * Math.random()}
            result={result}
          />
        ))}
        {results2.map((result) => (
          <ShowThumbnail
            key={result.id + Math.random() * Math.random()}
            result={result}
          />
        ))}
        {results3.map((result) => (
          <ShowThumbnail
            key={result.id + Math.random() * Math.random()}
            result={result}
          />
        ))}
        {results4.map((result) => (
          <ShowThumbnail
            key={result.id + Math.random() * Math.random()}
            result={result}
          />
        ))}
        {results5.map((result) => (
          <ShowThumbnail
            key={result.id + Math.random() * Math.random()}
            result={result}
          />
        ))}
        {results6.map((result) => (
          <ShowThumbnail
            key={result.id + Math.random() * Math.random()}
            result={result}
          />
        ))}
        {results7.map((result) => (
          <ShowThumbnail
            key={result.id + Math.random() * Math.random()}
            result={result}
          />
        ))}
      </div>
    </div>
  );
}

export default Shows;

export async function getServerSideProps() {
  const request = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=1`
  ).then((response) => response.json());
  const request2 = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=2`
  ).then((response) => response.json());
  const request3 = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=3`
  ).then((response) => response.json());
  const request4 = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=4`
  ).then((response) => response.json());
  const request5 = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=5`
  ).then((response) => response.json());
  const request6 = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=6`
  ).then((response) => response.json());
  const request7 = await fetch(
    `https://api.themoviedb.org/3/tv/popular?api_key=${process.env.API_KEY}&language=en-US&page=7`
  ).then((response) => response.json());

  return {
    props: {
      results: request.results,
      results2: request2.results,
      results3: request3.results,
      results4: request4.results,
      results5: request5.results,
      results6: request6.results,
      results7: request7.results,
    },
  };
}