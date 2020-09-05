import React from "react"
import { Switch, Route } from "react-router-dom";
import LoginStudent from "./LoginStudent"


const Routes = () => {
    return (
        <>
            <Switch>
                <Route
                    exact
                    path="/login-student"
                    render={(routerProps) => <LoginStudent history={routerProps.history} />}
                >    
                </Route>
            </Switch>
        </>
    )
}

export default Routes