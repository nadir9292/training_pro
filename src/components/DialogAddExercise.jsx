import {
  Dialog,
  DialogHeader,
  DialogBody,
  IconButton,
  Typography,
  Input,
  Button,
  Checkbox,
  Select,
  Option,
} from "@material-tailwind/react"
import { useState } from "react"

const parts = ["Chest", "Back", "Shoulders", "Arm", "Abs (Abdominals)", "Legs"] // TODO GET FROM DATABASES

const DialogAddExercise = (props) => {
  const { open, handleOpen, addExercise } = props
  const [bgImage, setBgImage] = useState(null)
  const [error, setError] = useState(null)
  const [exerciseId, setExerciseId] = useState(0) // TODO REMOVE WHEN DATABASES
  const [isBodyWeight, setBodyWeight] = useState(false)

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

  const addExercises = (e) => {
    e.preventDefault()
    try {
      addExercise({
        id: exerciseId,
        bodyPart: e.target.partBody.value,
        label: e.target.label.value,
        bgImage: bgImage,
        set: e.target.sets.value,
        rep: e.target.reps.value,
        isBodyWeight: e.target.isBodyWeight.value,
        weight: e.target.weight.value,
        recovery: e.target.recovery.value,
      })
      setExerciseId(exerciseId + 1)
      setBodyWeight(!isBodyWeight)
      handleOpen()
    } catch (err) {
      setError(err)
      console.info("errr: ", error)
    }
  }

  const HandleIsBodyWeight = () => {
    setBodyWeight(!isBodyWeight)
  }

  return (
    <Dialog size="xl" open={open} handler={handleOpen}>
      <DialogHeader className="justify-between">
        <Typography color="blue-gray" variant="h4" className="my-2">
          Add new exercise
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
        className="flex justify-center overflow-y-scroll pr-2"
        style={{ maxHeight: "600px" }}
      >
        <div className="mb-6">
          <form
            onSubmit={addExercises}
            className="mb-2 w-80 max-w-screen-lg sm:w-96"
          >
            <div className="grid grid-cols-1 gap-4">
              <select
                name="partBody"
                className="py-2 px-1 border border-2 rounded"
              >
                <option value="">Select part of body</option>
                {parts.map((part, index) => (
                  <option key={index} value={part}>
                    {part}
                  </option>
                ))}
              </select>
              <Input size="lg" label="Name" name="label" required />
              <Input
                size="lg"
                type="number"
                label="n° Sets "
                name="sets"
                required
              />
              <Input
                size="lg"
                type="number"
                label="n° Reps"
                name="reps"
                required
              />
              <Checkbox
                label="Body weight ?"
                name="isBodyWeight"
                onChange={HandleIsBodyWeight}
              />
              <Input
                size="lg"
                type="number"
                label="weight (kg)"
                name="weight"
                required
              />
              <Input
                size="lg"
                type="time"
                label="Recovery (minutes)"
                name="recovery"
                required
              />
              <Input
                type="file"
                size="lg"
                label="Choose background image"
                name="bg_image"
                onChange={handleFileChange}
                accept=".png, .jpg, jpeg"
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

export default DialogAddExercise
