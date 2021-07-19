import React from 'react'
import App from './App';
import Page from './subpages/page'
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";
import { Header, Icon } from 'semantic-ui-react'
import { tableData } from './tableData'

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
            {tableData.map(({name, path, years, dir}) => (
              <Route path={path}>
                <Page name={name} years={years} dir={dir}/>
              </Route>
            ))}
            {/* <Route path="/mpti" >
                <Page name='1'/>
            </Route> */}
        </Switch>
        </Router>
    </>
  );
}

export default AppWrapper;