import { useState, useEffect } from 'react';

export default function Blog() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const API_KEY = '416baabd2b67461db9709b57a1d68986';
    const SEARCH_TEXT = 'recipes cooking';

    useEffect(() => {
        async function fetchNews() {
            try {
                const url = `https://api.worldnewsapi.com/search-news?api-key=${API_KEY}&text=${SEARCH_TEXT}`;
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch news from API');
                }

                const data = await response.json();

                const uniqueNews = Array.from(
                    new Map((data.news || []).map(item => [item.title, item])).values()
                );

                setNews(uniqueNews);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }


        fetchNews();
    }, []);

    if (loading) {
        return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading blog...</h2>;
    }

    if (error) {
        return <h2 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>Error: {error}</h2>;
    }

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>News Blog</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                {news.map((item) => (
                    <div key={item.id} style={{ border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        {item.image && <img src={item.image} alt={item.title} style={{ width: '100%', height: '220px', objectFit: 'cover' }} />}
                        <div style={{ padding: '20px' }}>
                            <h2 style={{ fontSize: '20px', margin: '0 0 10px 0', color: '#333' }}>{item.title}</h2>
                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '14px' }}>
                                {item.text ? item.text.substring(0, 150) + '...' : 'No description'}
                            </p>
                            <a href={item.url} target="_blank" rel="noreferrer" style={{ display: 'inline-block', color: '#007bff', fontWeight: 'bold', marginTop: '15px', textDecoration: 'none' }}>
                                View original →
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
