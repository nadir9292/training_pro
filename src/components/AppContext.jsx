import { createContext, useCallback, useEffect, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [trainings, setTrainings] = useState([])

  useEffect(() => {
    const storedTrainings = localStorage.getItem("trainings")
    if (storedTrainings) {
      setTrainings(JSON.parse(storedTrainings))
    } else {
      setTrainings([])
    }
  }, [])

  const addTraining = useCallback((training) => {
    const currentTrainings = JSON.parse(localStorage.getItem("trainings")) || []
    currentTrainings.push(training)
    localStorage.setItem("trainings", JSON.stringify(currentTrainings))
    setTrainings(currentTrainings)
  }, [])

  const removeTraining = useCallback(() => {
    localStorage.removeItem("trainings")
    setTrainings([])
  }, [])

  useEffect(() => {
    const updateContext = () => {
      const storedTrainings = localStorage.getItem("trainings")
      if (storedTrainings) {
        setTrainings(JSON.parse(storedTrainings))
      } else {
        setTrainings([])
      }
    }
    window.addEventListener("storage", updateContext)
    return () => window.removeEventListener("storage", updateContext)
  }, [])

  return (
    <AppContext.Provider
      {...props}
      value={{ trainings, setTrainings, addTraining, removeTraining }}
    />
  )
}

export default AppContextProvider
