import Card from './card'
import LoadBtn from './LoadBtn'

export default function Main({ array }) {
    return (
        <main>
            <div className="container">
                <div className="flag">
                    Current series
                </div>

                {array.map((comic, index) => (
                    <Card key={index} src={comic.thumb} title={comic.series} />
                )
                )}

                <LoadBtn />


            </div>

        </main>
    )
}