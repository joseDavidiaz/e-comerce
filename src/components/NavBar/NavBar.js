import Button from '@mui/material/Button';
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'


function NavBar(props) {
    //console.log(props)
    return(
        //JSX
        <header className='main-header'>
            <div className='container-logo'>
            {<img 
                src="logo.jpg" 
                className="img-header"
                
            /> }
            </div>
            <ul className='navbar'>
                <li><Button className="custom-bt" variant="contained color">Home</Button></li>
                <li><Button variant="contained color">Productos</Button></li>
                <li><Button variant="contained color">Nosotros</Button></li>
                <li><Button variant="contained color">Contacto</Button></li>
            </ul>
            <CartWidget />
        </header>
    )
}

export default NavBar