import { Card, CardBody, Typography } from "@material-tailwind/react"

const ListExercises = (props) => {
  const { exercises } = props

  return (
    <div
      className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center items-center bg-transparent relative  overflow-hidden"
    >
      <Typography variant="h2" color="white">
        Your exercises
      </Typography>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-center overflow-hidden mt-6">
        {exercises === null ? (
          <Typography variant="small" className="mt-8">
            Exercises not found...
          </Typography>
        ) : Array.isArray(exercises) && exercises.length > 0 ? (
          exercises.map(({ label, bodyPart }, index) => (
            <Card
              className="w-full max-w-[21rem] mx-auto px-16"
              key={index}
              style={{
                backgroundImage: `url(${bodyPart}.jpg)`,
                backgroundSize: "cover",
              }}
            >
              <CardBody key={index}>
                <div className="bg-white p-1 rounded-xl shadow-xl">
                  <Typography
                    variant="h6"
                    color="gray"
                    className="mb-2 uppercase"
                  >
                    EXERCISES
                  </Typography>
                  <Typography variant="h4" color="blue-gray" className="mb-2">
                    {label}
                  </Typography>
                </div>
              </CardBody>
            </Card>
          ))
        ) : (
          <Typography variant="small" className="mt-8">
            exercises not found...
          </Typography>
        )}
      </div>
    </div>
  )
}

export default ListExercises
