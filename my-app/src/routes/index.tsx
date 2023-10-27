import { Routes, Route } from 'react-router-dom'
import HomePage from '../pages/user/HomePage';
import ProductPage from '../pages/user/ProductPage';
import AboutPage from '../pages/user/AboutPage';
import SignInPage from '../pages/user/SignIn';
import SignUpPage from '../pages/user/SignUp';
import ProductDetailPage from '../pages/user/ProductDetailPage';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Dashboard from '../pages/admin/Dashboard';
import CartPage from '../pages/user/CartPage';
import User from '../pages/admin/User';
import Product from '../pages/admin/Product';
import AdminLayout from '../components/layout/admin/index';
import UserLayout from '../components/layout/user/index'
import NotFound from '../pages/user/NotFound';
const SwitchRoute = () => {
    return (

        <Routes>


            {/* admin */}
            <Route path='/admin' element={<AdminLayout />}>
                <Route index element={<Dashboard />}></Route>
                <Route path='user-manager' element={<User />}></Route>
                <Route path='product-manager' element={<Product />}></Route>
            </Route>


            {/* user */}
            <Route path='/' element={<UserLayout />}>
                <Route index element={<HomePage />}></Route>
                <Route path=':slug' element={<ProductPage />}></Route>
                <Route path='cart' element={<CartPage />}></Route>
                <Route path='about' element={<AboutPage />}></Route>
                <Route path='product/:id' element={<ProductDetailPage />}></Route>
                <Route path='sign-in' element={<SignInPage />}></Route>
                <Route path='sign-up' element={<SignUpPage />}></Route>
                <Route path='*' element={<NotFound />}></Route>
            </Route>

        </Routes>
    );
}

export default SwitchRoute;