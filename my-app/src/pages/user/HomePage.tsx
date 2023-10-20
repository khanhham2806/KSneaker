import Banner from "../../components/banner/Banner";
import BrandShoe from "../../components/pages/user/Body/BrandShoe";
import Category from "../../components/pages/user/Body/Category";
import UserLayout from "../../components/layout/user";
const HomePage = () => {
    return (
        <UserLayout>
            <>
                <Banner />
                <div className="page-container">
                    <div className="wrapper">
                        <div className="home-page">
                            <Category />
                            <BrandShoe name='nike' />
                            <BrandShoe name='adidas' />
                        </div>
                    </div>
                </div>
            </>
        </UserLayout>
    );
}

export default HomePage;