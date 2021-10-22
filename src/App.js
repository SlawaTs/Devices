import './App.css';
import React from "react";
import ListPage from "./pages/ListPage/ListPage";
import 'antd/dist/antd.css'
import {history} from "./utils/history";
import AddPage from "./pages/AddPage/AddPage";
import {Route, Switch, Router} from "react-router";
import EditPage from "./pages/EditPage/EditPage";
import DetailsPage from "./pages/DetailsPage/DetailsPage";

function App() {
    return (
        <Router history={history}>
            <Switch>
                <Route exact path="/" component={ListPage}/>
                <Route path="/add" component={AddPage}/>
                <Route path="/edit/:key" component={EditPage}/>
                <Route path="/detail/:key" component={DetailsPage}/>

            </Switch>
        </Router>
    );
}

export default App;
