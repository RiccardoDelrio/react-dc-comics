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
                        <li><a href={links}>CHARATERS</a></li>
                        <li><a href={links}>COMICS</a></li>
                        <li><a href={links}>MOVIES</a></li>
                        <li><a href={links}>TV</a></li>
                        <li><a href={links}>GAMES</a></li>
                        <li><a href={links}>COLLECTIBLES</a></li>
                        <li><a href={links}>VIDEOS</a></li>
                        <li><a href={links}>FANS</a></li>
                        <li><a href={links}>NEWS</a></li>
                        <li><a href={links}>SHOP</a></li>

                    </ul>

                </div>
            </div>
        </header>

    )
}
