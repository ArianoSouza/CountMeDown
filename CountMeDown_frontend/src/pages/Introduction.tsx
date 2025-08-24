import '../styles/introduction.css'

export default function Introduction(){


    return(
        <>
        <div className='nav-bar'>
            <img src="./imgs/logoCMD.png" alt="logoCMD" className='logo-nav'/>
            <ul className='nav-itens'>
                <li>Começe a usar!</li>
                <li>Funcionalidades</li>
                <li>Fale conosco</li>
            </ul>
            <div className='login-container'>
                <button>Sing in</button>
                <button>Login</button>
            </div>
        </div>
        </>
    )
}