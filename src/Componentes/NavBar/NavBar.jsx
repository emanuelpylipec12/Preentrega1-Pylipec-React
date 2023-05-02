import CarWidgets from "../CartWidgets/CartWidgets"
import './NavBar.css'
const NavBar = () => {
  return (
    <header>
        <h1>Materia Argenta</h1>
        <nav>
            <ul>
                <li>Mates</li>
                <li>Termos</li>
                <li>Yerbas</li>
            </ul>
        </nav>

        <CarWidgets />

    </header>
  )
}

export default NavBar