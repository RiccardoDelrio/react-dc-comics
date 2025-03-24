export default function Footers({ links, links_shop, links_privacy, links_sites }) {
    return (
        <footer>
            <div className="container">
                <img className="logo_bg" src="./img/dc-logo-bg.png" alt="" />
                <div className="row">
                    <ul>
                        <li className="list-title">Dc COMICS</li>
                        {links.map((link, index) => (
                            <li key={index}><a href={link.url}>{link.text}</a></li>
                        ))}
                        <li className="list-title">Shop</li>
                        {links_shop.map((link, index) => (
                            <li key={index}><a href={link.url}>{link.text}</a></li>
                        ))}

                    </ul>
                    <ul>
                        <li className="list-title">DC</li>
                        {links_privacy.map((link, index) => (
                            <li key={index}><a href={link.url}>{link.text}</a></li>
                        ))}
                    </ul>
                    <ul>
                        <li className="list-title">Sites</li>
                        {links_sites.map((link, index) => (
                            <li key={index}><a href={link.url}>{link.text}</a></li>
                        ))}

                    </ul>

                </div>


            </div>
            <div className="banner">
                <div className="row">
                    <a href="" className="btn">
                        SIGN-UP NOW!
                    </a>
                    <div className="social">
                        <span>FOLLOW US</span>
                        <a href="#"><img src="./img/footer-facebook.png" alt="" /></a>
                        <a href="#"><img src="./img/footer-twitter.png" alt="" /></a>
                        <a href="#"><img src="./img/footer-youtube.png" alt="" /></a>
                        <a href="#"><img src="./img/footer-pinterest.png" alt="" /></a>
                        <a href="#"><img src="./img/footer-periscope.png" alt="" /></a>

                    </div>

                </div>
            </div>


        </footer>
    )
}