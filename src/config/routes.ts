import HomePage from '../components/HomePage';
import AboutPage from '../components/AboutPage';
import IRoute from '../interfaces/route';

const routes: IRoute[] = [
    {
        path: '/',
        name: 'Home Page',
        component: HomePage,
        exact: true
    },
    {
        path: '/about',
        name: 'About Page',
        component: AboutPage,
        exact: true
    }
]


export default routes;