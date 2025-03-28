import '../styles/components/header.sass'

function Header() {

    return (
        <header>
            <div className='logo'>
                <svg width={150} height={50} xmlns="http://www.w3.org/2000/svg">
                    <image href="./logo-header.png" width={150} height={50} />
                </svg>
            </div>
            <nav>
                <svg xmlns="http://www.w3.org/2000/svg" width="30" height="35" fill="#FFFFFF" viewBox="0 0 20 10">
                    <path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0" />
                    <path fill-rule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8m8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1" />
                </svg>
                <div className="search-box">
                    <button className="btn-search">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001q.044.06.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1 1 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0" />
                        </svg>
                    </button>
                    <input type="text" className="input-search" placeholder="Buscar Sessão" />
                </div>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="30" fill="#FFFFFF" viewBox="0 0 20 10">
                    <path d="M8 16a6 6 0 0 0 6-6c0-1.655-1.122-2.904-2.432-4.362C10.254 4.176 8.75 2.503 8 0c0 0-6 5.686-6 10a6 6 0 0 0 6 6M6.646 4.646l.708.708c-.29.29-1.128 1.311-1.907 2.87l-.894-.448c.82-1.641 1.717-2.753 2.093-3.13" />
                </svg>
            </nav>
        </header>
    )
}

export default Header