import React from 'react'
import App from './App';
import Page from './subpages/mpti'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Header, Icon } from 'semantic-ui-react'

function AppWrapper() {
  return (
    <>
        <Router>
        <Header dividing color='red' as={Link} to='/'>
        <Icon name='building' />
        Таблица ВУЗов 
        </Header>       
        <Switch>
            <Route exact path="/" component={App} />
            <Route path="/mpti" >
                <Page name='1'/>
            </Route>
        </Switch>
        </Router>
    </>
  );
}

export default AppWrapper;