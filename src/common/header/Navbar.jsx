import React , {useState} from 'react'
import {Link} from "react-router-dom"
const Navbar = ()  => {
    const [MobileMenu,setMobileMenu] = useState(false)
    return (
        <>
       <header className='header'>
        <div className='container d_flex'>
            <div className='categrories d_flex'>
            <span class="fa-solid fa-border-all"></span>
           
            <h4 >Categories<i class="fa fa-chevron-down"></i>
            </h4>
            
            </div>
            <div className="navlink">
                <ul className={MobileMenu ? " nav-links-MobileMenu " : "link f_flex capitalize"} onClick={() => setMobileMenu(false) } > 
                    <li>
                        <Link to='/'>home</Link>
                    </li>
                    <li>
                        <Link to='/pages'>pages</Link>
                    </li>
                    <li>
                        <Link to='/user'>user account</Link>
                    </li>
                    <li>
                        <Link to='/vendor'>vencor account</Link>
                    </li>
                    <li>
                        <Link to='/track'>track my order</Link>
                    </li>
                    <li>
                        <Link to='/contact'>contact</Link>
                    </li>
                </ul>
                <button className='toggle' onClick={()=>setMobileMenu(!MobileMenu)}>
                {
                    MobileMenu?<i class="fas fa-times close home-bth"></i>
                    :
                    <i class="fas fa-bars open"></i>
                }
                </button>
            </div>
        </div>

       </header>
        
        </>
    )
}

export default Navbar