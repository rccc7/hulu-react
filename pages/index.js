import Head from 'next/head'
import Image from 'next/image'
import Header from '../components/Header'
import Nav from '../components/Nav'
import Results from '../components/Results'
import requests from '../utils/requests'

//The props are sent from the function getServerSideProps(context) once they
//have been rendered in the server
/// We can leave this function as "export default function Home(props) {".
//However we'll destructure the props into the results object 
export default function Home({ results }) {
  //console.log(props)
  return (
    <div >
      <Head>
        <title>Hulu 2.0</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* Use &apos; instead of "'" in order to not receive the error "react/no-unescaped-entities" when compiled in Vercel */}
      <h1>Hey Guys It&apos;s me RCCC 😎!!! Let&apos;s build a Hulu (CLONE)👍😬</h1>
      {/* Header component */}
      <Header />

      {/* Nav bar */}
      <Nav />

      {/* Results component */}
      <Results results={results} />
    </div>
  )
}

//Server side rendering: The following code will execute before the code 
//from above renders in the UI
export async function getServerSideProps(context) {
  const genre = context.query.genre;

  //Make a request to the TMDB database
  //The key (to get a specific request) is the genre
  //Example of the keys are fetchTopRated, or fetchTrending (see the file utils/requests.js)
  //?.url means that url is optional since it could not be defined for any reason. In that
  //case the default genre will be fetchTrendring
  const request = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url ||
    requests.fetchTrending.url}`
  ).then(res => res.json());

  //Once it renders in the server we'll return this data as a prop to our component
  return {
    props: {
      results: request.results,
    }
  }
}