import { useEffect, useState } from 'react';
import Game from './pages/questionList';
import  Login  from './pages/auth/login';
import Register from './pages/auth/register';
import MainLayout from './component/Main';
import { ROUTE_CONSTANTS } from './util/constant';
import { RouterProvider,createBrowserRouter,createRoutesFromElements,Route,Navigate } from 'react-router-dom';
import { onAuthStateChanged } from 'firebase/auth';
import {auth} from './services/firebase';
import './App.css';


const App = ()=>{  
  const [isAuth,setIsAuth] = useState(false);
  useEffect(()=>{
    onAuthStateChanged(auth,()=>{
    })
  },[]);

    return(
      <RouterProvider
      router = {
        createBrowserRouter(
          createRoutesFromElements(
            <Route path ='/' element= {<MainLayout />}>
              <Route path = {ROUTE_CONSTANTS.LOGIN} element = {isAuth?<Navigate to = {ROUTE_CONSTANTS.GAMEMIL}/>:<Login setIsAuth = {setIsAuth} />}/>
              <Route path = {ROUTE_CONSTANTS.REGISTER} element = {isAuth?<Navigate to = {ROUTE_CONSTANTS.GAMEMIL}/>:<Register />}/>
              <Route path = {ROUTE_CONSTANTS.GAMEMIL} element = {isAuth?<Game />:<Navigate to = {ROUTE_CONSTANTS.LOGIN}/>}/>
            </Route>
          )
        )
      }
      />
     
    )
  };
  
  export default App;
