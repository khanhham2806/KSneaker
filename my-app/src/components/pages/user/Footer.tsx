
const Footer = () => {
    return (
        <div className="page-container wrapper">
            <div className="about row">
                <div className=" col-lg-3 col-sm-6 col-12 ">
                    <span className="title" >Need Help</span>
                    <ul>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                        <li>Returns & Refunds</li>
                        <li>FAQ's</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className=" col-lg-3 col-sm-6 col-12">
                    <span className="title">Company</span>
                    <ul>
                        <li>About Us</li>
                        <li>Blog</li>
                        <li>Collaboration</li>
                        <li>Media</li>
                    </ul>
                </div>
                <div className=" col-lg-3 col-sm-6 col-12">
                    <span className="title">More Info</span>
                    <ul>
                        <li>Term and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className=" col-lg-3 col-sm-6 col-12">
                    <span className="title">Contact</span>
                    <ul>
                        <li>support.ksneaker@gmail.com</li>
                        <li>175 Tay Son, Hanoi, Vietnam</li>
                    </ul>
                </div>
            </div >
            <div className="category">
                <span >Popular Category</span>
                <i className="fa-solid fa-chevron-down"></i>
            </div>
            <div className="copyright">
                Copyright © 2023 KSneakers. All rights reserved.
            </div>
        </div >
    );
}

export default Footer;
