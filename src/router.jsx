import { Route, Routes } from "react-router-dom"
import HomePage from "./homePage/homePage"
import NameCards from "./nameCards/nameCards"
import Questions from "./questions/questions"
import KAK from "./questionsPage/KAK/KAK"
const AvailRoutes = (props) => {
  return (
    <Routes>
      
      <Route path="*" element={<div className="">page not found  <a href="/"><button>naviate back</button></a></div>} />
      <Route path="/" element={<HomePage/>} />
      <Route path="/name-cards/" element={<NameCards/>} />
      <Route path="/questions/" element={<Questions/>} />
      <Route path="/questions/KAK/" element={<KAK/>} />
      
      </Routes>
  )
}
export default AvailRoutes