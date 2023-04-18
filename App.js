import React from 'react';
import {Switch, Route , Link} from "react-router-dom";
import Home from './Home';
import Sobre from './Sobre';
import Usuario from './Usuario';
import Nota from '.Nota';



export default function App () {
    return (
        <>
        <header>
        <p><Link to='/home'>Home</Link></p>
        <p><Link to='/usuario'>Usuario</Link></p>
        <p><Link to='/sobre'>Sobre</Link></p>
        <p><Link to='/nota'>Nota</Link></p>
        </header>
        <main>
            <Switch>
                <Route path='/usuario' component= { Usuario }/>
                <Route path='/sobre' component= { Sobre }/>
                <Route path='/home' component= { Home }/>
                <Route path='/nota' component= { Nota }/>
            </Switch>
        </main>
        </>


    );
}