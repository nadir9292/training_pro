import { createContext, useCallback, useEffect, useState } from "react"

export const AppContext = createContext(null)

const AppContextProvider = (props) => {
  const [trainings, setTrainings] = useState([])
  useEffect(() => setTrainings(localStorage.getItem("trainings")), [])

  const addTraining = useCallback((training) => {
    // Récupérez la liste actuelle depuis le stockage local
    const currentTrainings = JSON.parse(localStorage.getItem("trainings")) || []

    // Ajoutez le nouvel objet à la liste
    currentTrainings.push(training)

    // Enregistrez la liste mise à jour dans le stockage local
    localStorage.setItem("trainings", JSON.stringify(currentTrainings))

    // Mettez à jour l'état si nécessaire
    setTrainings(currentTrainings)
  }, [])

  const removeTraining = useCallback(() => {
    localStorage.removeItem("trainings")
    setTrainings(null)
  }, [])

  // surveiller les changements dans le localStorage et mettre à jour les valeurs du contexte en conséquence
  useEffect(() => {
    const updateContext = () => {
      setTrainings(localStorage.getItem("trainings"))
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
