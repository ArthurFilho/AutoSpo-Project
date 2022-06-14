import React, {useContext, useState} from "react"
import img from "../assets/carro1.png" 
import { AuthContext } from "../contexts/auth";


function PainelLogin(){

    const {authenticated, login} = useContext(AuthContext);

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

  const handleSubmit = (e) => {

  e.preventDefault();

  console.log("submit", {email, password});

  login(email, password);
 
  };
    
return(
<div>
    

    <img className="car" src={img} alt="imagem_carro"></img>
    <h1 className="headericon">AutoSPO</h1>

<div className="container">
    
    <div className="title">Bem-vindo à AutoSPO</div>
    <div className="subtitle">Faça o login para acessar sua conta.</div>
    
    {/* <p>{String(authenticated)}</p> */}
      
      <div id="login">
          <form className="form" onSubmit={handleSubmit}>
          <div className="field">
          <div className="inputs">
          <label  htmlFor="email">Endereço de email</label>
          <input type="email" name="email" id="email" placeholder="@mail.com" value={email} onChange={(e)=>{setEmail(e.target.value)}}/></div>
          </div>
          <div className="field">
          <div className="inputs">
          <label  htmlFor="password">Senha</label>
          <input  type="password" name="password" id="password" placeholder="Senha" value={password} onChange={(e)=>{setPassword(e.target.value)}}/></div>
          </div>
          
          <div className="warn field">
              <div className="check">
          <input className="checkbox" type="checkbox"/>
          <label htmlFor="Lembrar">Lembrar minha senha</label>
          </div>
          <label htmlFor="esqueceu"> <a href="https://www.linkedin.com/in/arthur-filho/" className="esqueci">Esqueceu a senha? </a> </label>
          </div>
          <div className="actions field">
              <button className="button" type="submit">Entrar</button>
          </div>
          <label className="field" htmlFor="newAccount">Ainda não tem uma conta? <a href="https://www.linkedin.com/in/arthur-filho/" className="ha"> Cria conta </a> </label>
          </form>
          
    
          </div>
      </div>
    </div>
)

}



export default PainelLogin;
