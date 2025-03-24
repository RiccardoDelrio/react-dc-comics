import Card from './card'
import LoadBtn from './LoadBtn'
import { useState } from 'react'
export default function Main({ array }) {
    const [search, setSearch] = useState("")
    const filteredArray = array.filter(comic => comic.series.toLowerCase().includes(search.toLowerCase()))
    console.log(filteredArray);

    return (
        <main>

            <div className="container">
                <input type="text" name="" onChange={(e) => setSearch(e.target.value)} />
                <div className="flag">
                    Current series
                </div>

                {filteredArray.map((comic, index) => (
                    <Card key={index} src={comic.thumb} title={comic.series} />
                )
                )}

                <LoadBtn />


            </div>

        </main>
    )
}