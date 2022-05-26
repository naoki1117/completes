import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { Top } from "../conpornents/Pages/Top";
import { Users } from "../conpornents/Pages/Users";
import { DefaultLayout } from "../conpornents/templates/DefaultLayout"
import { HeaderOnly } from "../conpornents/templates/HeaderOnly";
export const Router = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <DefaultLayout>
            <Top />
          </DefaultLayout>
        </Route>
        <Route path="/users">
          <HeaderOnly>
            <Users />
          </HeaderOnly>
        </Route>
      </Switch>
    </BrowserRouter>
  );
};
