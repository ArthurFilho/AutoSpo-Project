import '../App.css';
import frame from "../assets/Frame 1.png"
import {AuthContext} from "../contexts/auth"
import { useContext } from 'react';

function Header(){

const {authenticated, logout} = useContext(AuthContext);

const handleLogout = () => {


logout();


}
return(
<div className="header">

    
    <div className="imgsepar">
    
    <h1 className="headericon">AutoSPO</h1>
    
    {/* <p>{String(authenticated)}</p> */}
    
    </div>
    
    <div className='logout' onClick={handleLogout}>
   
   <img src={frame}></img>
    
    </div>
</div>)

}






export default Header;