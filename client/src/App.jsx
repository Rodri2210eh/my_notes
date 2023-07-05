import {BrowserRouter, Routes, Route} from "react-router-dom";
import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import { AuthProvider } from "./context/authContext";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1 className="text-4xl font-bold">Hola Mundo</h1>}/>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element= {<RegisterPage />} />
          <Route path="/tasks" element={<h1 className="text-4xl font-bold">Tasks Home</h1>}/>
          <Route path="/add-task" element={<h1 className="text-4xl font-bold">Add tasks</h1>}/>
          <Route path="/tasks/:id" element={<h1 className="text-4xl font-bold">Update task</h1>}/>
          <Route path="/profile" element={<h1 className="text-4xl font-bold">Profile</h1>}/>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}

export default App