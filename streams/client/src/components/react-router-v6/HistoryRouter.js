import React from "react";
import { Router } from "react-router";

// * https://github.com/remix-run/react-router/pull/7586
// * react-router v6 change for giving history from outside of <Router> component or whatnot

export function HistoryRouter({ children, history }) {
  const [state, setState] = React.useState({
    action: history.action,
    location: history.location,
  });
  React.useLayoutEffect(() => history.listen(setState), [history]);
  return React.createElement(
    Router,
    Object.assign({ children, navigator: history }, state)
  );
}
