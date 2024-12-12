import {useState, useEffect } from 'react'
import { newsDisplay } from './components/newsDisplay'
import { newsInfo } from './components/newsInfo'

 function App() {

    const [items, setItems] = useState([])
    const [active, setActive] = useState(1)
    const [category, setCategory] = useState('general')

    const apiKey="74453dc8f08448159bbcc386890d2f8c";

    useEffect(() => {
        fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`)
        .then(res => res.json())
        .then(data => setItems(data.articles))
    })


    return (
        <div>
            <h1>Latest News</h1>
        </div>
    )
}

export default App;