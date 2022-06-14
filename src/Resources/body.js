import "../App.css"
import imageOne from "../assets/image1.png"
import imageTwo from "../assets/image2.png"
import imageThree from "../assets/image3.png"

function Body(){
return(
<div className="body">
     
 {/* <h1>Bem vindo, ${user}</h1> */}
 <p ><a className="button">Menu</a></p>
  
  <div className="bigbox">
  
  <div className="box">
      <div className="title1">
         
          <h1 className="htit">Veiculos reservados e vendidos</h1>

           <div className="subtitle1"><p>Veículos reservados e vendidos por você</p></div>
         
           <div className="qutd">147 Véiculos</div>
          
          </div>  


      <img className="imagesMenu" src={imageOne}></img>
  </div>
  
  <div className="box"> 
  
  <div className="title1">
      
      <h1>Listagem geral de Veiculos</h1>
  
      <div className="subtitle1"><p>Listagem de veículos de toda a empresa</p></div>

      <div className="qutd">180 Véiculos</div>

  </div> 
  
  <img className="imagesMenu" src={imageTwo}></img>
  
  </div>
  
  <div className="box">
    
     <div className="title1">
      
      <h1>Funcionários da empresa</h1>
      
      <div className="subtitle1"><p >Listagem de todos os funcionários da empresa</p></div>

      <div className="qutd">147 Véiculos</div>

      </div> 
      
  
  <img className="imagesMenu" src={imageThree}></img>
  </div>

  </div>

</div>
)
}




export default Body;