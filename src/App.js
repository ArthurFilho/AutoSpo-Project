import './App.css';
import img from "./assets/carro1.png"

export function App() {
  return (
    <div>

    <img className="car" src={img} alt="imagem_carro"></img>
    <h1 className="headericon">AutoSPO</h1>

    <div className="container">
    
    <div className="title">Bem-vindo à AutoSPO</div>
    <div className="subtitle">Faça o login para acessar sua conta.</div>
    
      
      <div id="login">
          <form className="form" >
          <div className="field">
          <div className="inputs">
          <label  htmlFor="email">Endereço de email</label>
          <input type="email" name="email" id="email" placeholder="@mail.com" /></div>
          </div>
          <div className="field">
          <div className="inputs">
          <label  htmlFor="password">Senha</label>
          <input  type="password" name="password" id="password" placeholder="Senha" /></div>
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