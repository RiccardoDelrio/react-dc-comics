

export default function Headers({ links }) {

    return (

        <header>
            <div className="navbar">
                <div className="left">
                    <div className="logo">
                        <img src="./img/dc-logo.png" alt="" />
                    </div>
                </div>
                <div className="right">
                    <ul>
                        {links.map((link, index) => (
                            <li key={index}><a href={link.url}>{link.text}</a></li>
                        ))}


                    </ul>
                </div>
            </div>
        </header>
    )
}
