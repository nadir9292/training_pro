import { Card, CardBody, Typography } from "@material-tailwind/react"

const ListTraining = (props) => {
  const { trainings } = props

  return (
    <div
      className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center items-center bg-transparent relative  overflow-hidden"
    >
      <Typography variant="h2" color="white">
        Your training
      </Typography>
      <div className="grid grid-cols-1 gap-4 lg:grid-cols-2 items-center overflow-hidden mt-6">
        {trainings === null ? (
          <Typography variant="small" className="mt-8">
            Training not found...
          </Typography>
        ) : Array.isArray(trainings) && trainings.length > 0 ? (
          trainings.map(({ label, bg_image }, index) => (
            <Card
              className="w-full max-w-[21rem] mx-auto px-16"
              key={index}
              style={{
                backgroundImage: `url(${bg_image})`,
                backgroundSize: "cover",
              }}
            >
              <CardBody key={index}>
                <div className="bg-white p-1 rounded-xl shadow-xl">
                  <Typography
                    variant="h6"
                    color="gray"
                    className="mb-4 uppercase"
                  >
                    WORKOUT
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
            loading...
          </Typography>
        )}
      </div>
    </div>
  )
}

export default ListTraining
