import { Card, CardBody, Typography } from "@material-tailwind/react"
import NavBar from "../src/components/NavBar"
import { PlusIcon } from "@heroicons/react/24/solid"
import { useState } from "react"
import DialogAddTraining from "../src/components/DialogAddTraining"

const Home = () => {
  const [open, setOpen] = useState(false)
  const handleOpen = () => setOpen(true)

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
          <Card
            className="mt-6 w-96 h-auto bg-add_training bg-cover bg-center"
            onClick={handleOpen}
          >
            <CardBody className="flex justify-between items-center">
              <Typography variant="h4" color="white" className="mb-2">
                New training
              </Typography>
              <PlusIcon className="h-16 w-16" color="#FFFFFF" />
            </CardBody>
          </Card>
        </div>
        <DialogAddTraining open={open} handleOpen={() => setOpen(false)} />
      </Card>
    </div>
  )
}

export default Home
