import { useEffect } from 'react'
import NavBar from "./Header/NavBar";
import '../../../assets/styles/styles.css'
import Brand from "./Header/Branch";
import User from "./Header/User";
import Search from "./Header/Search";
import Menu from "./Header/Menu";
import useWindowDimensions from "../../../hooks/useWindowDimensions";
const Header = () => {
    const { width } = useWindowDimensions();
    console.log(width)
    useEffect(() => {
        console.log('render')
    }, [])

    if (width <= 576) {
        return (
            <div className="page-container navbar wrapper">
                <Brand height={60} />
                {/* <NavBar /> */}
                {/* <Search /> */}
                {/* <User /> */}

                <Menu />
            </div>
        );
    }
    else if (width <= 768) {
        return (
            <div className="page-container navbar wrapper">
                <Brand height={60} />
                {/* <NavBar /> */}
                <Search />
                {/* <User /> */}
                <Menu />
            </div>
        );
    }
    else if (width <= 992) {
        return (
            <div className="page-container navbar wrapper">
                <Brand height={60} />
                {/* <NavBar /> */}
                <Search />
                <User />
                {/* <Menu /> */}
            </div>
        );
    }
    else return (
        <div className="page-container navbar wrapper">
            <Brand height={60} />
            <NavBar />
            <Search />
            <User />
        </div>
    );

}

export default Header;
