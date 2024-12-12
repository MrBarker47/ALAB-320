import { response } from 'express';
import {useState, useEffect} from 'react'


const newsInfo = () => {
const apiKey="74453dc8f08448159bbcc386890d2f8c";


const [articles, setArticles] = useState([])

useEffect(() => { 
    let url =  `https://newsapi.org/v2/everything?q=Apple&sortBy=popularity&apiKey=${apiKey}` 
    fetch(url)
    .then(response => response.json())
    .then(data => setArticles(data.articles));
    },[])
    return (
        <div>
            <h1>Welcome To Best News Website, Where you'll real news from the real people </h1>
            {articles.map((news,index) => {
                return (
                  <news>
                 key={index}
                 title={news.title}
                 description={news.description}
                 src={news.urlToImage}
                 url={news.url}
                 </news>
                )
            })}
        </div>
    )
}



export default newsInfo;