import { Typography } from "@material-tailwind/react"

const ListTraining = (props) => {
  const { trainings } = props

  return (
    <div
      className="mx-auto py-8 w-full max-w-5xl format format-sm sm:format-base 
     lg:format-lg format-blue dark:format-invert text-center items-center bg-transparent relative "
    >
      <Typography variant="h2" color="white">
        Your training
      </Typography>
      {trainings === null ? (
        <Typography variant="small" className="mt-8">
          training not found...
        </Typography>
      ) : (
        trainings.map(({ label }, index) => (
          <div key={index} className="group relative hover:scale-105">
            <Typography>label : {label}</Typography>
          </div>
        ))
      )}
    </div>
  )
}

export default ListTraining
