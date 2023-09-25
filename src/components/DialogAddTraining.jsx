import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  Input,
  Button,
} from "@material-tailwind/react"
import { useState } from "react"

const DialogAddTraining = (props) => {
  const { open, handleOpen, addTraining } = props
  const [bgImage, setBgImage] = useState(null)

  const handleFileChange = (e) => {
    const file = e.target.files[0]
    if (file) {
      const reader = new FileReader()
      reader.onload = (event) => {
        const base64Image = event.target.result
        setBgImage(base64Image)
      }
      reader.readAsDataURL(file)
    }
  }

  const addTrainings = (e) => {
    e.preventDefault()
    addTraining({
      label: e.target.label.value,
      bg_image: bgImage,
    })
    handleOpen()
  }

  return (
    <Dialog size="xl" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <Typography color="blue-gray" variant="h4" className="my-2">
          Add new training
        </Typography>
        <IconButton
          color="blue-gray"
          size="sm"
          variant="text"
          onClick={handleOpen}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
            className="h-5 w-5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </IconButton>
      </DialogHeader>
      <DialogBody
        className="overflow-y-scroll pr-2"
        style={{ maxHeight: "500px" }}
      >
        <div className="mb-6">
          <form
            onSubmit={addTrainings}
            className="mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="mb-4 grid grid-cols-1 gap-6 text-center items-center overflow-hidden">
              <Input size="lg" label="Name" name="label" />
              <Input
                type="file"
                size="lg"
                label="Choose background image"
                name="bg_image"
                onChange={handleFileChange}
              />
            </div>
            <Button type="submit" className="mt-6" fullWidth>
              ADD
            </Button>
          </form>
        </div>
      </DialogBody>
    </Dialog>
  )
}

export default DialogAddTraining
