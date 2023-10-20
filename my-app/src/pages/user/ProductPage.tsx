import { Outlet, useParams } from "react-router-dom";
import CardShoe from "../../components/pages/user/Body/CardShoe";
import FilterSide from "../../components/pages/user/Body/FilterSide";
import { useEffect, useState } from "react";
import axios from "axios";
import Button from "../../components/UI/Button";
import UserLayout from "../../components/layout/user";
const ProductPage = () => {
    const { param } = useParams()
    const [isToggleFilter, setIsToggleFilter] = useState(false)
    const [data, setData] = useState([])
    // console.log(">>data", data)
    const getData = async () => {
        try {
            const response = await axios.get(`http://localhost:8080/${param}`)
            let dataShoe = response && response.data ? response.data.data : [];
            setData(dataShoe)
        }
        catch (err) {
            console.log((err));
        }
    }
    useEffect(() => {
        getData()
    }, [param])

    const toggleFilter = () => {
        setIsToggleFilter(!isToggleFilter)
    }
    return (
        <UserLayout>
            <div className="page-container">
                <div className="wrapper">
                    {/* <div className="wrapper-filter">
                    <div className="col-xl-2">
                        <FilterSide />
                    </div>
                    <div className="col-xl-10 wrapper"> */}
                    <div>
                        <span>All product of {param}</span>
                        <Button className="button " onClick={toggleFilter}>
                            Filter
                        </Button>
                    </div>
                    {isToggleFilter ?
                        <div className="wrapper-filter">
                            <div className="col-xl-2">
                                <FilterSide />
                            </div>
                        </div>
                        : null}
                    <div className="product">
                        {data.map((item: any, index: number) => {
                            // console.log(item)
                            return (
                                <CardShoe data={item} key={index} />
                            )
                        }
                        )}
                    </div>
                    {/* </div> */}
                    {/* </div> */}
                </div>
            </div>
        </UserLayout>
    );
}

export default ProductPage;