import React from "react"
import { Switch, Route } from "react-router-dom";
import Login from "./Login"


const Routes = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/login"
                    render={(routerProps) => <Login history={routerProps.history} />}
                >    
                </Route>
            </Switch>
        </>
    )
}

export default Routes