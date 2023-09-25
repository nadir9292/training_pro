import "../styles/globals.css"

const App = ({ Component, pageProps }) => {
  return (
    <main>
      <link
        href="https://fonts.googleapis.com/css2?family=Roboto:wght@400&display=swap"
        rel="stylesheet"
      />
      <Component {...pageProps} />
    </main>
  )
}

export default App
