import React from 'react';
import { Redirect, Route } from 'react-router-dom';
import { UserContext } from '../../App';
import { useContext } from 'react';

const PrivetRoute = ({children, ...rest}) => {
    const [loggedInUser ,setLoggedInUser] = useContext(UserContext);
    return (
        <Route
            {...rest}
            render={({ location }) =>
                loggedInUser.email ? (
                children
                ) : (
                <Redirect
                    to={{
                    pathname: "/login",
                    state: { from: location }
                    }}
                />
                )
            }
        />
    );
};

export default PrivetRoute;