import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/authContext";
import { TasksProvider } from "./context/tasksContext";

import RegisterPage from "./pages/registerPage";
import LoginPage from "./pages/loginPage";
import HomePage from "./pages/homePage";
import TaskFormPage from "./pages/taskFormPage";
import { TasksPage } from "./pages/taskPage";
import ProfilePage from "./pages/profilePage";

import ProtectedRoute from "./ProtectedRoute";
import { Header } from "./components/Header";
import { Slidebar } from "./components/SlideBar";

function App() {
  return (
    <AuthProvider>
      <Slidebar />
      <TasksProvider>
        <Header />
        <BrowserRouter>
          <main className="container content-container mx-auto px-10 md:px-0 bg">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/register" element={<RegisterPage />} />
              <Route element={<ProtectedRoute />}>
                <Route path="/tasks" element={<TasksPage />} />
                <Route path="/add-task" element={<TaskFormPage />} />
                <Route path="/tasks/:id" element={<TaskFormPage />} />
                <Route path="/profile" element={<ProfilePage />} />
              </Route>
            </Routes>
          </main>
        </BrowserRouter>
      </TasksProvider>
    </AuthProvider>
  )
}

export default App