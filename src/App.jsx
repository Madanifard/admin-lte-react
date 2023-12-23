// import "./App.css";
import { Component } from "react";
import { AuthLayout, DashLayout } from "./Views/Layouts";
import {
  Route,
  Routes as RoutesContainer,
  BrowserRouter,
} from "react-router-dom";
import routes from "./routes";

function App() {
  return (
    <BrowserRouter>
      <RoutesContainer>
        <Route element={<AuthLayout />} path="/">
          {routes
            .filter((routeItem) => routeItem.layout == "Auth")
            .map(({ path, element }, index) => {
              console.log(index, element);
              return <Route key={index} element={element} path={path} />;
            })}
        </Route>

        {/* <Route element={<DashLayout />} path="/dash">
          {routes
            .filter((routeItem) => routeItem.layout == "Dash")
            .map(({ path, element }, index) => (
              <Route key={index} element={<element />} path={path} />
            ))}
        </Route> */}
      </RoutesContainer>
    </BrowserRouter>
  );
}

export default App;
