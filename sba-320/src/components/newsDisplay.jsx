export default function newsDisplay({ news }) {
    const loaded = () => {
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

    const loading = () => {
        return <h1>No news</h1>
    }

    return news ? loaded() : loading();
}