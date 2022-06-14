import React, { useContext } from "react";


import{
    BrowserRouter as Router,
    Routes,
    Route,
    Navigate,
} from "react-router-dom";

import PainelLogin from './Resources/PainelLogin';
import Home from '../src/Resources/Home'


import { AuthProvider, AuthContext } from "./contexts/auth";


const AppRoutes = () => {

  const Private = ({children})  => {
    const {authenticated, loading} = useContext(AuthContext);

    if(loading){
      <div className="loading">Carregando...</div>
    }

    if(!authenticated){
    
      return <Navigate to="/"/>;
   
    }
    
    return children;
  }; 
  

return(
<>
<Router>
  <AuthProvider>
    <Routes>
      <Route exact path="/" element={<PainelLogin/>} />
      <Route exact path="/home" element={ <Private> <Home/> </Private> }/>
    </Routes>
  </AuthProvider>
</Router>
</>
)
}


export default AppRoutes;