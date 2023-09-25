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
    </main>
  )
}

export default App
