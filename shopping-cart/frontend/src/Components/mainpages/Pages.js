import React, {useContext} from 'react'
import {Switch, Route} from 'react-router-dom'

import Login from './auth/Login'
import Register from './auth/Register'
import NotFound from './utils/not_found/NotFound'
import {GlobalState} from '../../GlobalState'

function Pages() {
    const state = useContext(GlobalState)
    const [isLogged] = state.userAPI.isLogged
    const [isAdmin] = state.userAPI.isAdmin

    return (
        <Switch>
            {/* <Route path="/" exact component={Products} />
            <Route path="/detail/:id" exact component={DetailProduct} /> */}

            <Route path="/login" exact component={isLogged ? NotFound : Login} />
            <Route path="/register" exact component={isLogged ? NotFound : Register} />

            


            
        </Switch>
    )
}

export default Pages