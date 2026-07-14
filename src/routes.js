import App from './App';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Blog from './pages/Blog';
import RegistrationForm from './pages/RegistrationForm';
import ContactForm from './pages/ContactForm';

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
            },
            {
                path: 'register',
                Component: RegistrationForm
            },
            {
                path: 'support',
                Component: ContactForm
            }

        ]
    }
];
