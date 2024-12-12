import {useState, useEffect} from "react"



export default function App() {
    //News API
    const apiKey="74453dc8f08448159bbcc386890d2f8c";
  
    const [news, setNews] = useState(null);
  
    const getNews = async(searchTerm) => {
      const response = await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}` 
      );
      const data = await response.json();
      setNews(data);
    };
    
  
    return (
      <>
      <h1>News Report</h1>
      <button>Click Here For The News!</button>
      </>
    )
  }
  