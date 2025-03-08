import { Link } from "react-router-dom"

export default function Header(){
    return(
        <header>
            <h1>Movie App</h1>
            
            <nav>
                <ul>
                    <Link to='./' className="link" >
                    <li>Home</li>
                    </Link>
                    <Link to='./favorites' className="link">
                    <li>Favorites</li>
                    </Link>
                </ul>
            </nav>
        </header>
    )
}