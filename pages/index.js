import Head from "next/head";
import Episode from "../Components/Episode";
import firebase from "../Utilities/FirebaseConfig";
// import firebase from 'firebase'
import {useState, useEffect} from 'react'


export default function Home() {
  const [episodes, setEpisodes] = useState([]);
  
  useEffect(()=>{
    firebase
    .firestore().collection("episodes").onSnapshot((shot) => {
      setEpisodes(
        shot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      );
    });
  },[])
  return (
    <div className="">
      <Head>
        <title>Rayuwa Mai Dadi</title>
        <meta
          name="description"
          content="Kasance Mafi Farin Ciki A Cikin Mutane"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {episodes.map(episode=><Episode key={episode.id} id={episode.id} data={episode.data} />)}
    </div>
  );
}
