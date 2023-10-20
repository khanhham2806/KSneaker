import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/user/HomePage';
import ProductPage from '../pages/user/ProductPage';
import AboutPage from '../pages/user/AboutPage';
import SignInPage from '../pages/user/SignIn';
import SignUpPage from '../pages/user/SignUp';
import ProductDetailPage from '../pages/user/ProductDetailPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Admin from '../pages/admin/Admin';

const SwitchRoute = () => {
    return (

        <Routes>
            {/* admin */}
            <Route path='/admin' element={<Admin />}></Route>


            {/* user */}
            <Route path='/' element={<HomePage />}></Route>
            <Route path='*' element={<>Not found</>}></Route>
            <Route path='/:param' element={<ProductPage />}></Route>
            <Route path='/about' element={<AboutPage />}></Route>
            <Route path='/product/:id' element={<ProductDetailPage />}></Route>
            <Route path='/sign-in' element={<SignInPage />}></Route>
            <Route path='/sign-up' element={<SignUpPage />}></Route>
        </Routes>
    );
}

export default SwitchRoute;