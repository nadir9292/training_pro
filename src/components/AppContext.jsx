import { createContext, useCallback, useEffect, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [exercises, setExercise] = useState([])

  useEffect(() => {
    const storedexercises = localStorage.getItem("exercises")
    if (storedexercises) {
      setExercise(JSON.parse(storedexercises))
    } else {
      setExercise([])
    }
  }, [])

  const addExercise = useCallback((exercise) => {
    const currentexercises = JSON.parse(localStorage.getItem("exercises")) || []
    currentexercises.push(exercise)
    localStorage.setItem("exercises", JSON.stringify(currentexercises))
    setExercise(currentexercises)
  }, [])

  const removeExercise = useCallback(() => {
    localStorage.removeItem("exercises")
    setExercise([])
  }, [])

  useEffect(() => {
    const updateContext = () => {
      const storedExercises = localStorage.getItem("exercises")
      if (storedExercises) {
        setExercise(JSON.parse(storedExercises))
      } else {
        setExercise([])
      }
    }
    window.addEventListener("storage", updateContext)
    return () => window.removeEventListener("storage", updateContext)
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{ exercises, setExercise, addExercise, removeExercise }}
    />
  )
}

export default AppContextProvider
