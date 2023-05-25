function App() {
    return (
        <>
            <div >
                <nav className="navbar navbar-expand-lg bg-dark body-tertiary" data-bs-theme="dark" >
                    <div className="container-fluid" style={{marginLeft:"200px", marginRight:"130px"}}>
                        <a className="navbar-brand" href="/">NOTES</a>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarText">
                            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                                <li className="nav-item">
                                    <a className="nav-link " aria-current="page" href="/Home">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/About">About</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link" href="/Contact">Contact</a>
                                </li>
                            </ul>
                            <span className="navbar-text text-white">
                                If you want to thrive, write.
                            </span>
                        </div>
                    </div>
                </nav>
            </div>
        </>
    );
}

export default App;