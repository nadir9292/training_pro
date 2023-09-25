import AppContextProvider from "../src/components/AppContext"
import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
        rel="stylesheet"
      />
      <AppContextProvider>
        <Component {...pageProps} />
      </AppContextProvider>
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1, user-scalable=no"
      />
    </main>
  )
}

export default App
