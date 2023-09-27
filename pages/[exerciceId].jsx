import { Card, Typography } from "@material-tailwind/react"
import NavBar from "../src/components/NavBar"
import { usePathname } from "next/navigation"
import { useContext } from "react"
import { AppContext } from "../src/components/AppContext"

const ExerciseId = () => {
  const { exercises } = useContext(AppContext)
  const pathname = usePathname()
  const pathParts = pathname ? pathname.split("/") : ""

  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <NavBar />
      <Card
        shadow={false}
        className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center items-center bg-transparent relative"
      >
        {exercises === null ? (
          <Typography variant="small" className="mt-8">
            Exercises not found...
          </Typography>
        ) : Array.isArray(exercises) && exercises.length > 0 ? (
          exercises.map(({ id, label, bodyPart }, index) => (
            <div key={index}>
              <h1>label</h1>
            </div>
          ))
        ) : (
          <Typography variant="small" className="mt-8">
            exercises not found...
          </Typography>
        )}
      </Card>
    </div>
  )
}

export default ExerciseId
