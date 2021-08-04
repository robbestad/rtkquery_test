import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import { useGetPokemonByNameQuery } from '../src/state/services/pokemon'

export default function Home() {
  const { data, error, isLoading } = useGetPokemonByNameQuery('bulbasaur');

  if(error){
    return (    <div className={styles.container}>
      <h1>Error</h1>
      {JSON.stringify(error)}
    </div>)
  }
  if(isLoading){
    return (    <div className={styles.container}>
      <h1>Please wait...</h1>
    </div>)
  }
console.log(data)
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Get a pokemon" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
          <h1>{data.name}</h1>
          <p>
              <Image src={data.sprites.front_default} alt={"image of pokemon"}/>
          </p>
      </main>

      <footer className={styles.footer}>
       Pokemon Finder, powered by RTK Query
      </footer>
    </div>
  )
}
