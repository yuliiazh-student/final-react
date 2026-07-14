import App from './App';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Blog from './pages/Blog';

export const routes = [
    {
        path: '/',
        Component: App,
        children: [
            {
                index: true,
                Component: Home
            },
            {
                path: 'recipes',
                Component: Recipes
            },
            {
                path: 'blog',
                Component: Blog
            }
        ]
    }
];
