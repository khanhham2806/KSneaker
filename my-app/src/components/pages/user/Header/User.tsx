import { Link } from "react-router-dom";
import Button from "../../../UI/Button"
const User = () => {
    return (
        < div className="user-list">
            {true ?
                <>
                    <Button className='button' >
                        <i className="fa-solid fa-heart"></i>
                    </Button>
                    <Button className='button' >
                        <i className="fa-solid fa-user"></i>
                    </Button >
                    <Button className='button' >
                        <i className="fa-solid fa-cart-shopping"></i>
                    </Button>
                </>
                :
                <>
                    <Link to="/sign-in">
                        <Button className='button sign-in' >
                            <span>Sign In</span>
                        </Button>
                    </Link>
                    <Link to="/sign-up">
                        <Button className='button sign-up' >
                            <span>Sign Up</span>
                        </Button >
                    </Link>
                </>
            }
        </div>
    );
}

export default User;