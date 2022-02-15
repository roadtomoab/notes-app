import '../styles/globals.css'
import "@material-tailwind/react/tailwind.css";
import Head from 'next/head'
import { Provider } from "next-auth/client"

function MyApp({ Component, pageProps }) {
  return (

  <>
    <Head className="h-screen">
      <link
      href="https://fonts.googleapis.com/icon?family=Material+Icons"
      rel="stylesheet"
      />
      <link rel="preconnect" href="https://fonts.googleapis.com" />
      <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
      <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@100;200;300;500;600&display=swap" rel="stylesheet" />
    </Head>
    <Provider session={pageProps.session}>
      <Component {...pageProps} />
    </Provider>
  </>

  )
}

export default MyApp


