import { Button, Card, CardBody, Typography } from "@material-tailwind/react"
import NavBar from "../src/components/NavBar"
import { PlusIcon } from "@heroicons/react/24/solid"
import { useContext, useState } from "react"
import DialogAddExercise from "../src/components/DialogAddExercise"
import ListExercises from "../src/components/ListExercises"
import { AppContext } from "../src/components/AppContext"

const Home = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)
  const { exercises, addExercise, removeExercise } = useContext(AppContext)

  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <NavBar />
      <Card
        shadow={false}
        className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center items-center bg-transparent relative"
      >
        <Typography variant="h3" color="white">
          TRAINING PRO
        </Typography>
        <Button className="my-2" size="lg" color="red" onClick={removeExercise}>
          Remove exercise (for dev 😎)
        </Button>
        <div>
          <Card
            className="mt-6 w-96 h-auto bg-add_training bg-cover bg-center"
            onClick={handleOpen}
          >
            <CardBody className="flex justify-between items-center">
              <Typography
                variant="h4"
                color="blue-gray"
                className="mb-2 bg-white py-1 px-2 rounded-lg"
              >
                New exercise
              </Typography>
              <PlusIcon className="h-16 w-16" color="#FFFFFF" />
            </CardBody>
          </Card>
        </div>
        <ListExercises exercises={exercises} />
        <DialogAddExercise
          addExercise={addExercise}
          open={open}
          handleOpen={() => setOpen(false)}
        />
      </Card>
    </div>
  )
}

export default Home
