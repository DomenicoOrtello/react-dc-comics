import navBarData from "../data/navBarData"
export default function Header () {
    return (
        <div className="container">
            <img className="logo-img" src="./img/dc-logo.png" alt="logo"></img>
            <nav className="nav-header">
                <ul>
                    {navBarData.map((navBar) => {
                        return (
                            <li key={navBarData.id} className={navBar.current ? "fregnetto" : ""}>
                                <a href={navBar.url}>{navBar.text}</a>
                            </li>
                        )
                    })}
                </ul>
            </nav>  
        </div>
    )      
}
