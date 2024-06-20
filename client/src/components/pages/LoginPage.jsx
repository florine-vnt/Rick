import "../../styles/login-page.css"

function LoginPage(){
    return (
        <section className="login-page">
        <input type="email" placeholder="renseignez votre email" required></input>
        <input type="password" placeholder="renseignez votre mot de passe"></input>
        <button>Log in</button>
        </section>
    )
}

export default LoginPage