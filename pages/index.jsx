import {
  Card,
  CardBody,
  CardFooter,
  Typography,
  Button,
} from "@material-tailwind/react"
import NavBar from "../src/components/NavBar"
import { PlusIcon } from "@heroicons/react/24/solid"

const Home = () => {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <NavBar />
      <Card
        shadow={false}
        className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center items-center bg-transparent relative "
      >
        <Typography variant="h3" color="white">
          ADD A TRAINING
        </Typography>
        <div>
          <Card className="mt-6 w-80 h-auto bg-add_training bg-cover bg-center">
            <CardBody className="flex justify-between items-center">
              <Typography variant="h4" color="white" className="mb-2">
                New training
              </Typography>
              <PlusIcon className="h-16 w-16" color="#FFFFFF" />
            </CardBody>
          </Card>
        </div>
      </Card>
    </div>
  )
}

export default Home
