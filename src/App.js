import './App.css';

import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Main from './Layout/Main';
import Home from './Components/Pages/HomePages/Home';
import Login from './Components/Pages/Authentication/Login';
import UserReg from './Components/Pages/Authentication/UserReg';
import RegOptions from './Components/Pages/Authentication/RegOptions';
import ProfessionalReg from './Components/Pages/Authentication/ProfessionalReg';
import Dashboard from './Components/Pages/Dashboard/Dashboard';
import Profile from './Components/Pages/Dashboard/Profile';
import Terms from './Components/Pages/HomePages/Terms';
import { UserProvider } from './Components/Pages/Authentication/UserContext';
import OTP from './Components/Pages/Authentication/OTP';
import ProfessionalList from './Components/Pages/Dashboard/ProfessionalList';
import Message from './Components/Pages/Dashboard/Message';


function App() {
  
  const router = createBrowserRouter([
    {
      path: '/',
      element:<Main/>,
    
    children:[
      {
        path: "/",
        element:<Home/>,
      },
      {
        path: "login",
        element:<Login/>,
      },
      {
        path: "userreg",
        element:<UserReg/>,
      },
      {
        path: "profreg",
        element:<ProfessionalReg/>,
      },
      {
        path: "optn",
        element:<RegOptions/>,
      },
      {
        path: "dashboard",
        element:<Dashboard/>,
      },
      {
        path: "profile",
        element:<Profile/>,
      },
      {
        path: "terms",
        element:<Terms/>,
      },
      
      {
        path: "otp",
        element:<OTP/>,
      },
      {
        path: "list",
        element:<ProfessionalList/>,
      },
      {
        path: "msg",
        element:<Message/>,
      },
      {path:"msg/:id", 
      element:<Message/>}
    
    ]

  }
    ]);
  return (
    <UserProvider>
 <div className="App" style={{overflow:"hidden"}}>

<RouterProvider router={router}/>

</div>
    </UserProvider>
   
  );
}

export default App;
