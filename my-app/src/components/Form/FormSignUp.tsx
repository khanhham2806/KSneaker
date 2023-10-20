import { useState } from "react";
const FormSignUp = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [showRepassword, setShowRepassword] = useState(false)
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [repassword, setRepassword] = useState('')
    const handleShowPassword = (e: any) => {
        e.preventDefault()
        setShowPassword(!showPassword)
    }
    const handleShowRepassword = (e: any) => {
        e.preventDefault()
        setShowRepassword(!showRepassword)
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
            <div className="input-field password">
                <label htmlFor="password">Repassword</label>
                <input
                    onChange={(e) => setRepassword(e.target.value)}
                    value={repassword} placeholder='password'
                    type={showRepassword ? "text" : "password"}
                    id="password" />
                {password
                    ?
                    <i className={showRepassword ? "fa-solid fa-eye-slash togglePassword" : "fa-solid fa-eye togglePassword"}
                        onClick={(e) => handleShowRepassword(e)}>
                    </i>
                    :
                    null
                }

            </div>
            <button disabled={username && password && repassword ? false : true}
                className={username && password && repassword ? "button active " : "button not-allowed"} type="submit"
                onSubmit={(e) => handleSubmitForm(e)}
            >Sign Up</button>
        </div >
    );
}

export default FormSignUp;