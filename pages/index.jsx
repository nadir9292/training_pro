import { Card, Typography } from "@material-tailwind/react"
import NavBar from "../src/components/NavBar"

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <NavBar />
      <Card
        shadow={false}
        className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center bg-transparent relative "
      >
        <Typography variant="h3" color="white">
          ADD A TRAINING
        </Typography>
      </Card>
    </div>
  )
}

export default Home
