import React, {ReactNode} from 'react';
import './App.css';
import Navigation from "./Navigation";
import {Route, Routes} from "react-router";
import {HashRouter} from "react-router-dom";
import {Home} from "./Home/Home";
import {NON_HOME_ROUTES} from "./other/variables";

class App extends React.Component {
    public render(): ReactNode {
        return (
            <HashRouter basename='/'>
                <div className="content">
                    <Routes>
                        <Route path="/:userId" element={<Home/>}/>
                        <Route path="/" element={<Home/>}/>
                        {
                            NON_HOME_ROUTES.map(route => <Route path={route.location} element={route.component}/>)
                        }
                    </Routes>
                </div>
                <Navigation></Navigation>
            </HashRouter>
        );
    }
}

export default App;
