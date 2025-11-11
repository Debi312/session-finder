import { BrowserRouter, Routes, Route } from "react-router-dom"
import Layout from "./components/Layout.jsx"
import MySchedule from "./views/MySchedule.jsx"
import Register from "./views/Register.jsx"
import Search from "./views/Search.jsx"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />} >
          <Route path="my-schedule" element={<MySchedule />} />
          <Route path="/register" element={<Register />} />
          <Route path="/" element={<Search />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
