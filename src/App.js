import logo from './logo.svg';
import './App.css';
import { Avatar, Button, CssBaseline, ThemeProvider, Typography } from '@mui/material';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Layout from './component/Layout/Layout';
import { theme } from './Theme/Theme';
import Home from './component/Home/Home';
function App() {
 const router = createBrowserRouter([
  {path:'/',element:<Layout></Layout>,children:[
    {path:'/',element:<Home></Home>}
  ]}
 ])
  return (
    <ThemeProvider theme={theme}>
    <RouterProvider router={router} />
    <CssBaseline />
 </ThemeProvider>
  );
}

export default App;
