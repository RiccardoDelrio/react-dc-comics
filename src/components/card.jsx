export default function Main({ src, title, }) {
    return (
        <div className="card">
            <img src={src} alt="" />
            <div className="card-body">
                <p className="card-text">{title}</p>
            </div>
        </div>
    )
}