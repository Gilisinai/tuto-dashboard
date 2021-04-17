import { Provider } from 'react-redux';
import { store } from '../state';
import { BrowserRouter as Router, Route, Switch, RouteComponentProps } from 'react-router-dom'
import routes from '../config/routes'
import '../sass/main.scss'


const App = () => {
    return <Provider store={store}>
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return (
                        <Route
                            key={index}
                            path={route.path}
                            exact={route.exact}
                            render={(props: RouteComponentProps<any>) => (
                                <route.component 
                                  name={route.name}
                                  {...props}
                                  {...route.props}
                                />
                            )}
                        />
                    )
                })}
            </Switch>
        </Router>
    </Provider>
}

export default App