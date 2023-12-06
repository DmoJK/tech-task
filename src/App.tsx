import "./App.css"
import { ReleasesList } from "./pages/ReleasesPage"
import { NavLink, Route, Routes } from "react-router-dom"
import { AddReleasePage } from "./pages/AddReleasePage"

function App() {
  return (
    <div className="App">
      <header>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/edit">Edit</NavLink>
      </header>
      <Routes>
        <Route path="/" Component={ReleasesList} />
        <Route path="/edit" Component={AddReleasePage} />
      </Routes>
    </div>
  )
}

export default App
