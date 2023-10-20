import FormSignUp from "../../components/Form/FormSignUp";

const SignUpPage = () => {
    return (
        <div className="page-container">
            <div className="form-container">
                <div className="form">
                    <div className="title">
                        Sign Up
                    </div>
                    <FormSignUp />
                </div>
            </div>
        </div>
    );
}

export default SignUpPage;