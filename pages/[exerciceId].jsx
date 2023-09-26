import { Typography } from "@material-tailwind/react"
import NavBar from "../src/components/NavBar"

export const getServerSideProps = async (context) => {
  return {
    props: {
      query: context.query,
    },
  }
}

const ExerciseId = ({ query }) => {
  return (
    <div style={{ minHeight: "100vh", minWidth: "100vw" }}>
      <NavBar />
      <Typography color="white" variant="lead">
        ID : {query.id}
      </Typography>
    </div>
  )
}

export default ExerciseId
