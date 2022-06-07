import React, {useState} from 'react'
import "../components/Navbarnew.css"
import ReorderIcon from "@material-ui/icons/Reorder"
function NavBar() {
    const [showLinks,setShowLinks] = useState(false);

    return (
        <div className="Navbar">
            <div className='leftSide'>
               
               
                <div className='links' id={showLinks ? "hidden" : ""}>
                    <a href='/home' >Home</a>
                    <a href='/about' >About</a>
                    <a href='/articles' >Articles</a>
                </div>
            <button onClick={()=>setShowLinks(!showLinks)}> {""} 
                       <ReorderIcon/>
                       </button>
 
            </div>


            <div className='rightSide'>
            <input type="text" placeholder='Search...'/>
            <button> Premi </button>
            

            </div>
        </div>


    )

}

export default NavBar;