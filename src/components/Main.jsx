import Card from './card'
import comics from '../data/comics'
import LoadBtn from './LoadBtn'

export default function Main() {



    return (


        <main>
            <div className="container">
                <div className="flag">
                    Current series
                </div>

                {comics.map((comic) => (
                    <Card src={comic.thumb} title={comic.series} />
                )
                )}

                <LoadBtn />


            </div>

        </main>
    )
}