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
    useEffect(() => {
        console.log('render')
    }, [])
    return (

        <div className="page-container navbar wrapper">
            {(width > 768)
                ? <>
                    <Brand height={60} />
                    <NavBar />
                    <Search />
                    <User />
                </>
                :
                <>
                    <Brand height={60} />
                    <Search />
                    <Menu />
                </>

            }
        </div>
    );
}

export default Header;
