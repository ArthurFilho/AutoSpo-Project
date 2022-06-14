import React, { useState, createContext, useEffect} from "react";
import { useNavigate } from "react-router-dom";
import Api from "../services/api";
import createSession from "../services/api"
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const navigate = useNavigate();
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
   
    useEffect(() => {
    const recoveredUser = localStorage.getItem('user')

    if(recoveredUser){
      setUser(JSON.parse(recoveredUser));
    }

    setLoading(false);
   }, []);

   const login = async (email, password) => {
     
   const response = await createSession(email, password)

    console.log("login", response.data)
   
    const loggedUser = response.data.user;
    const token = response.data.token;

    localStorage.setItem("user", JSON.stringify(loggedUser));
    localStorage.setItem("token", token);

    Api.defaults.headers.Authorization = `Bearer ${token}`; 

   if(password === "secret"){
    setUser({id: "123", email});
  navigate("/home")
  }
};
  
  const logout = () => {
    console.log("logout")
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    Api.defaults.headers.Authorization = null; 
    setUser(null);
    navigate("/");
  };
return(
    
    <AuthContext.Provider value={{authenticated: !!user, user, loading, login, logout}}>

   {children}

    </AuthContext.Provider>

)
    
}