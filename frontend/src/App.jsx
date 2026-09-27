import { Route, Routes } from "react-router"
import NoteDetailPage from "./pages/NoteDetailPage"
import HomePage from "./pages/Homepage"
import CreatePage from "./pages/Createpage"
import toast from "react-hot-toast"

const App = () => {
  return (
    <div data-theme="forest">
      <button onClick={() => toast.success("Congrats")} className="btn btn-primary">Click Me</button>

      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path="/create" element={<CreatePage />}/>
        <Route path="/note/:id" element={<NoteDetailPage />}/>
      </Routes>

    </div>
  )
}

export default App