import { useState } from "react";
const FormSignIn = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const handleShowPassword = (e: any) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    const handleSubmitForm = (e: any) => {
        e.preventDefault()
        console.log(username, password)
    }
    return (
        <div className='form-content' >
            <div className="input-field">
                <label htmlFor="userName">Username</label>
                <input
                    onChange={(e) => setUsername(e.target.value)}
                    value={username} placeholder='username'
                    type="text"
                    id="userName" />
            </div>
            <div className="input-field password">
                <label htmlFor="password">Password</label>
                <input
                    onChange={(e) => setPassword(e.target.value)}
                    value={password} placeholder='password'
                    type={showPassword ? "text" : "password"}
                    id="password" />
                {password
                    ?
                    <i className={showPassword ? "fa-solid fa-eye-slash togglePassword" : "fa-solid fa-eye togglePassword"}
                        onClick={(e) => handleShowPassword(e)}>
                    </i>
                    :
                    null
                }

            </div>
            <button disabled={username && password ? false : true}
                className={username && password ? "button active " : "button not-allowed"} type="submit"
                onSubmit={(e) => handleSubmitForm(e)}
            >Sign In</button>
        </div >
    );
}

export default FormSignIn;