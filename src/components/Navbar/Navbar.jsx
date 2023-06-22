import "./navbar.css"


const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navContainer">
                <span className="logo">Reservation</span>
                <div className="navItems">
                    <button className="navBtn">Register</button>
                    <button className="navBtn">Login</button>
                </div>
            </div>
        </nav>
    )
}

export default Navbar