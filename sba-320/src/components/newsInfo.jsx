import {useState, useEffect} from 'react'


const newsInfo = () => {
const apiKey="74453dc8f08448159bbcc386890d2f8c";


const [articles, setArticles] = useState([])

useEffect(() => { 
    let url =  `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}` 
    fetch(url)
    .then()
    })

}



