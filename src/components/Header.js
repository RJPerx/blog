import { Link } from "react-router-dom";
function Header() {
    return(

<nav className="navbar navbar-dark navbar-expand-lg bg-dark shadow small mb-3">
    <div className="container-fluid">
            <Link to="/" className="navbar-brand">
                WebDev
            </Link>
            <button 
                    className="navbar-toggler border-0"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#navbar-supported-content"
                    aria-controls="navbar-supported-content"
                    aria-expanded="false"
                    aria-label="Toggle Navigation">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list" viewBox="0 0 16 16">
                        <path fill-rule="evenodd" d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"/>
                    </svg>
            </button>
            <div className="collapse navbar-collapse" id="navbar-supported-content" >
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                    <Link to="/" className="nav-link active" aria-current="page">Home</Link>
                            </li>
                            <li className="nav-item">
                                    <Link to="/about" className="nav-link">About Us</Link>
                            </li>
                            <li className="nav-item">
                                    <Link to="/services" className="nav-link">Services</Link>
                            </li>
                            <li className="nav-item">
                                    <Link to="/contact" className="nav-link">Contact Us</Link>
                            </li>
                    </ul>
                    <form className="d-flex" role="search">
                            <div className="hstack gap-3 me-3">
                                    <input className="form-control form-control-sm me-auto" type="search" placeholder="Search for.." aria-label="Search for.."/>
                                    <button type="submit" className="btn btn-sm btn-success">
                                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-search" viewBox="0 0 16 16">
                                                    <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                                            </svg>
                                    </button>
                            </div>
                    </form>
            </div>
    </div>
</nav>

    )
}
export default Header;