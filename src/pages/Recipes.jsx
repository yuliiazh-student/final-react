import { useState, useEffect } from 'react';

export default function Recipes() {
    const [recipes, setRecipes] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchRecipes() {
            try {
                const url = 'https://dummyjson.com/recipes?limit=30';
                const response = await fetch(url);
                if (!response.ok) {
                    throw new Error('Failed to fetch recipes from API');
                }

                const data = await response.json();
                setRecipes(data.recipes || []);
            } catch (err) {
                setError(err.message);
            } finally {
                setLoading(false);
            }
        }

        fetchRecipes();
    }, []);

    if (loading) {
        return <h2 style={{ textAlign: 'center', marginTop: '50px' }}>Loading recipes...</h2>;
    }

    if (error) {
        return <h2 style={{ textAlign: 'center', color: 'red', marginTop: '50px' }}>Error: {error}</h2>;
    }

    return (
        <div style={{ padding: '40px 20px', maxWidth: '1200px', margin: '0 auto' }}>
            <h1 style={{ textAlign: 'center', marginBottom: '30px' }}>Recipes</h1>

            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(320px, 1fr))', gap: '30px' }}>
                {recipes.map((recipe) => (
                    <div key={recipe.id} style={{ border: '1px solid #ddd', borderRadius: '12px', overflow: 'hidden', background: '#fff', boxShadow: '0 4px 12px rgba(0,0,0,0.05)' }}>
                        {recipe.image && (
                            <img
                                src={recipe.image}
                                alt={recipe.name}
                                style={{ width: '100%', height: '220px', objectFit: 'cover' }}
                            />
                        )}
                        <div style={{ padding: '20px' }}>
                            <h2 style={{ fontSize: '20px', margin: '0 0 10px 0', color: '#333' }}>{recipe.name}</h2>

                            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', marginBottom: '12px', fontSize: '13px', color: '#888' }}>
                                <span>{recipe.prepTimeMinutes + recipe.cookTimeMinutes} min</span>
                                <span>{recipe.servings} servings</span>
                                <span>{recipe.difficulty}</span>
                                <span>{recipe.cuisine}</span>
                            </div>

                            <p style={{ color: '#666', lineHeight: '1.6', fontSize: '14px', marginBottom: '10px' }}>
                                <strong>Ingredients:</strong> {recipe.ingredients.slice(0, 4).join(', ')}
                                {recipe.ingredients.length > 4 ? '...' : ''}
                            </p>

                            <p style={{ color: '#333', fontSize: '14px' }}>
                                Rating: {recipe.rating} ({recipe.reviewCount} reviews)
                            </p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}