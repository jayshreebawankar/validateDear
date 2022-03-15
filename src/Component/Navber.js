import './Navbar.css'
import {Link} from 'react-router-dom'

const Navbar=()=>{
    return(
    <div>
        <div id="menu"> 
           <nav>
              {/* <button><Link to="/"> Home</Link>  </button> */}
              <Link to='/'><button className='btnsubmenu'>Form</button></Link>
              <Link to='/container'><button className='btnsubmenu'>Container</button></Link>
              <Link to='/about'><button className='btnsubmenu'>About</button></Link>
            </nav>
        </div>   
    </div>
    )
}
export default Navbar;
