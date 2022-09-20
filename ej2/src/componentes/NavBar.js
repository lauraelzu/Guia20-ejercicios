import React from 'react'

const NavBar = () => {
    return (
        <div>
            <nav class="nav">
                <form class="container-fluid justify-content-start">
                    <span>Barra de navegación  </span>
                    <button class="btn btn-outline-success me-2" type="button">Main button</button>
                    <button class="btn btn-sm btn-outline-secondary" type="button">Smaller button</button>
                </form>
            </nav>
        </div>
    )
}

export default NavBar
