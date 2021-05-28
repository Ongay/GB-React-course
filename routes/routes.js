import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom';
import App from '../app';
import Profile from '../profile/profile';
import { ChatList } from '../chatlist/chatlist';


export const Routes = () => {
    return (
        <BrowserRouter>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/profile">Profile</Link>
                </li>
            </ul>
            <Switch>
                <Route path="/" exact>
                    <ChatList />
                </Route>
                <Route path="/chats/:chatId" exact>
                    <App />
                </Route>
                <Route path="/profile">
                    <Profile />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}