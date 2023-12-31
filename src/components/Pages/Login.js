import { useContext, useState } from "react"
import {useNavigate} from "react-router-dom"
import { CurrentUser } from "../../contexts/CurrentUser"
import { Link } from "react-router-dom";

function LoginForm() {

    const navigate = useNavigate();

    const { setCurrentUser } = useContext(CurrentUser)

    const [credentials, setCredentials] = useState({
        email: '',
        password: ''
    })

     const [errorMessage, setErrorMessage] = useState(null)

    async function handleSubmit(e) {
        e.preventDefault()
        const response = await fetch(`https://snack-ade.onrender.com/api/authen/`,{
        // const response = await fetch(`http://localhost:4005/api/authen/`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(credentials)
        })
        
        const data = await response.json()
        // console.log(data)

        if(response.status === 200){
            setCurrentUser(data.user)
            localStorage.setItem('token',data.token)
            localStorage.setItem('password',credentials.password)
            // console.log(data.token)
            navigate('/')
        } else {
            setErrorMessage(data.message)
        }
    }

    return (
        <main>
            <h1>Sign In</h1>
            {errorMessage !== null
                ? (
                    <div className="alert alert-danger" role="alert">
                        {errorMessage}
                    </div>
                )
                : null
            }
            <form onSubmit={handleSubmit}>
            
                <div className="row">
                    <div className="col-sm-6 form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            required
                            value={credentials.email}
                            onChange={e => setCredentials({ ...credentials, email: e.target.value })}
                            className="form-control"
                            id="email"
                            name="email"
                        />
                    </div>
                    <div className="col-sm-6 form-group">
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            required
                            value={credentials.password}
                            onChange={e => setCredentials({ ...credentials, password: e.target.value })}
                            className="form-control"
                            id="password"
                            name="password"
                        />
                    </div>
                </div>
                <input className="btn  navbar-custom" type="submit" value="Login" />
            </form>


            <div className="login-up">
                <h3>Don't have an account, <Link className="link-custom"  to="/sign-up">Sign Up Here</Link></h3>
            </div>
        </main>
    )
}

export default LoginForm