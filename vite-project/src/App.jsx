import React from 'react';
import { Routes, Route, Navigate, useLocation, Outlet } from 'react-router-dom';
import { Toaster } from 'sonner';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import Tasks from './pages/Tasks';
import Users from './pages/Users';
import TaskDetails from './pages/TaskDetails';

function Layout() {
  const user = null; // Assuming null means the user is not logged in
  const location = useLocation();

  return user ? (
    <div className='w-full h-screen flex flex-col md:flex-row'> 
      <div className='w-20% h-screen bg-white sticky top-0 hidden md:block'>
        {/*Sidebar*/}
      </div>

      <div className='flex-1 overflow-y-auto'> 
        {/*Nav*/}
        <div className='p-4 2x1:px-10'> 
          <Outlet />
        </div>
      </div>
      
    </div>
  ) : (
     <Navigate to="/login" state={{ from: location }} replace />
  );
}

function App() {
  return (
    <main className='w-full min-h-screen bg-[#f3f4f6] '>
      <Routes>
        <Route element={<Layout />}>
          <Route index path='/' element={<Navigate to='/dashboard' />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/tasks' element={<Tasks />} />
          <Route path='/completed/:status' element={<Tasks />} />
          <Route path='/in-progress/:status' element={<Tasks />} />
          <Route path='/todo/:status' element={<Tasks />} />
          <Route path='/team' element={<Users />} />
          <Route path='/task/:id' element={<TaskDetails />} />
        </Route>

        <Route path='/login' element={<Login />} />
      </Routes>

      <Toaster richColors />
    </main>
  );
}

export default App;