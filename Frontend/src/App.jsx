import Navbar from './Components/Navbar'

import HomePage from './Pages/HomePage'
import LoginPage from './Pages/LoginPage'
import SignupPage from './Pages/SignupPage'
import ProfilePage from './Pages/ProfilePage'
import SettingPage from './Pages/SettingPage'

import { Navigate, Route, Routes } from 'react-router-dom'
import { useEffect } from 'react'

import { LoaderPinwheel } from 'lucide-react'
import { Toaster } from 'react-hot-toast'
import { useAuthStore } from './Store/useAuthStore.js'
import { useThemeStore } from './Store/useThemeStore.js'

function App() {

  const { authUser, checkAuth, isCheckingAuth, onlineUsers } = useAuthStore();
  const { theme } = useThemeStore();

  console.log("Online users : ", onlineUsers);


  useEffect(() => {
    checkAuth();
  }, [checkAuth]);

  console.log({ authUser });

  if (isCheckingAuth && !authUser) return (
    <div className='flex items-center justify-center h-screen'>
      <LoaderPinwheel className='size-30 animate-spin' />
    </div>
  )

  return (
    <div data-theme={theme}>
      <Navbar />

      <Routes>
        <Route path='/' element={authUser ? <HomePage /> : <Navigate to="/login" replace />} />
        <Route path='/login' element={!authUser ? <LoginPage /> : <Navigate to="/" replace />} />
        <Route path='/signup' element={!authUser ? <SignupPage /> : <Navigate to="/" replace />} />
        <Route path='/profile' element={authUser ? <ProfilePage /> : <Navigate to="/login" replace />} />
        <Route path='/setting' element={authUser ? <SettingPage /> : <Navigate to="/login" replace />} />
      </Routes>

      <Toaster position="top-center" reverseOrder={false} />

    </div>
  )
}

export default App
