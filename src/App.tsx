import { RouterProvider } from 'react-router-dom'
import './App.css'
import router from './app/router-dom/AppRouter'

function App() {
  return (
    <RouterProvider router={router} />
  )
}

export default App
