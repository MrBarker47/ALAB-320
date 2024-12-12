import {useState, useEffect} from "react"



export default function App() {
    //News API
    const apiKey="74453dc8f08448159bbcc386890d2f8c";
  
    const [news, setNews] = useState(null);
  
    const getNews = async(searchTerm) => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}` 
        .then(res => res.json())
        .then(json => console.log(json))
      );
    //   const data = await response.json();
    //   setNews(data);
    useEffect(() =>{
     getNews()   
    },[])
    
 };

}
  